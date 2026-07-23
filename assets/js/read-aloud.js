/* Read-aloud ("listen to this article").
 *
 * Adds a play/pause + stop control to article pages that reads the headline and
 * body prose using the browser's built-in speech synthesis (Web Speech API) —
 * no backend, no external service. Only runs where there is an article body to
 * read, so it is a no-op on volume/landing/other pages. Loaded on every page
 * via the site override of _includes/default/head.liquid.
 */
(function () {
  "use strict";

  if (!("speechSynthesis" in window)) { return; }

  var article = document.querySelector(".pj-article");
  if (!article) { return; }

  var lang = (document.documentElement.lang || "es").slice(0, 2);
  var T = {
    es: { listen: "Escuchar", pause: "Pausar", resume: "Reanudar", stop: "Detener",
          aria: "Escuchar el artículo en voz alta" },
    en: { listen: "Listen", pause: "Pause", resume: "Resume", stop: "Stop",
          aria: "Listen to this article" }
  };
  if (!T[lang]) { lang = "es"; }
  var speechLang = lang === "es" ? "es-ES" : "en-GB";

  // Collect the readable prose: everything in .pj-article that is not page
  // chrome (hero, share bar, author bios, call-to-action, stickers).
  function isChrome(el) {
    if (el.nodeType !== 1) { return true; }
    if (el.classList.contains("read-aloud")) { return true; }
    if (el.id === "pj-article-share") { return true; }
    var tag = el.tagName.toLowerCase();
    if (tag === "script" || tag === "style" || tag === "noscript" || tag === "form") { return true; }
    var cls = el.className || "";
    if (typeof cls === "string" && /pj-hero|pj-author|pj-cta|pj-collaborators|sticker|cta__/i.test(cls)) {
      return true;
    }
    return false;
  }

  var prose = Array.prototype.filter.call(article.children, function (el) {
    return !isChrome(el);
  });
  if (!prose.length) { return; }

  var titleEl = article.querySelector(".pj-hero h1");
  var title = titleEl ? titleEl.textContent : "";
  var bodyText = prose.map(function (el) { return el.textContent; }).join(" \n ");
  var fullText = (title + ". \n " + bodyText).replace(/\s+/g, " ").trim();

  // Split into short chunks (sentence-sized, hard-capped) so long articles are
  // not cut off by the ~15s-per-utterance limit in some browsers, and so
  // pause/resume stays responsive.
  function chunkText(text) {
    var sentences = text.match(/[^.!?]+[.!?]*\s*/g) || [text];
    var out = [];
    var cur = "";
    sentences.forEach(function (s) {
      if ((cur + s).length > 200) {
        if (cur.trim()) { out.push(cur.trim()); }
        while (s.length > 200) { out.push(s.slice(0, 200)); s = s.slice(200); }
        cur = s;
      } else {
        cur += s;
      }
    });
    if (cur.trim()) { out.push(cur.trim()); }
    return out;
  }
  var chunks = chunkText(fullText);

  var synth = window.speechSynthesis;
  var idx = 0;
  var playing = false;
  var paused = false;
  var voice = null;

  function pickVoice() {
    var voices = synth.getVoices() || [];
    voice = voices.filter(function (v) {
      return v.lang && v.lang.toLowerCase().indexOf(lang) === 0;
    })[0] || null;
  }
  pickVoice();
  if (typeof synth.addEventListener === "function") {
    synth.addEventListener("voiceschanged", pickVoice);
  }

  // --- controls ---
  var wrap = document.createElement("div");
  wrap.className = "read-aloud";

  var play = document.createElement("button");
  play.type = "button";
  play.className = "read-aloud__btn read-aloud__play";
  play.setAttribute("data-state", "idle");
  play.setAttribute("aria-label", T[lang].aria);
  play.setAttribute("title", T[lang].aria);
  play.textContent = T[lang].listen;

  var stop = document.createElement("button");
  stop.type = "button";
  stop.className = "read-aloud__btn read-aloud__stop";
  stop.textContent = T[lang].stop;
  stop.hidden = true;

  wrap.appendChild(play);
  wrap.appendChild(stop);

  function render() {
    play.setAttribute("data-state", playing ? (paused ? "paused" : "playing") : "idle");
    play.textContent = playing ? (paused ? T[lang].resume : T[lang].pause) : T[lang].listen;
    stop.hidden = !playing;
  }

  function speakNext() {
    if (!playing || paused) { return; }
    if (idx >= chunks.length) { reset(); return; }
    var u = new SpeechSynthesisUtterance(chunks[idx]);
    u.lang = speechLang;
    if (voice) { u.voice = voice; }
    u.onend = function () { if (playing && !paused) { idx++; speakNext(); } };
    u.onerror = function () { if (playing && !paused) { idx++; speakNext(); } };
    synth.speak(u);
  }

  function reset() {
    playing = false;
    paused = false;
    idx = 0;
    synth.cancel();
    render();
  }

  play.addEventListener("click", function () {
    if (!playing) {
      playing = true;
      paused = false;
      idx = 0;
      synth.cancel();
      render();
      speakNext();
    } else if (!paused) {
      paused = true;
      synth.pause();
      render();
    } else {
      paused = false;
      synth.resume();
      render();
    }
  });

  stop.addEventListener("click", reset);

  // Don't let speech keep going after leaving the page.
  window.addEventListener("pagehide", function () { synth.cancel(); });
  window.addEventListener("beforeunload", function () { synth.cancel(); });

  render();
  article.insertBefore(wrap, prose[0]);
})();
