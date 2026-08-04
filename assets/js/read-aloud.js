/* Read-aloud ("listen to this article").
 *
 * Adds a play/pause + stop control (and a voice picker) to article pages that
 * reads the headline and body prose using the browser's built-in speech
 * synthesis (Web Speech API) — no backend, no external service. Only runs where
 * there is an article body to read, so it is a no-op on volume/landing/other
 * pages. Loaded on every page via the site override of _includes/default/head.liquid.
 *
 * Voice quality depends on what the browser/OS provides. This script prefers the
 * most natural available voice (Google / Neural / Natural / non-local voices)
 * and lets the reader pick another; the choice is remembered per language.
 * Note: Firefox on Linux only exposes robotic eSpeak voices — no client-side
 * change can improve that; a hosted TTS service would be needed for uniformly
 * natural voices everywhere.
 */
(function () {
  "use strict";

  if (!("speechSynthesis" in window)) { return; }

  var article = document.querySelector(".pj-article");
  if (!article) { return; }

  var lang = (document.documentElement.lang || "es").slice(0, 2);
  var T = {
    es: { listen: "Escuchar", pause: "Pausar", resume: "Reanudar", stop: "Detener",
          aria: "Escuchar el artículo en voz alta", voice: "Elegir voz" },
    en: { listen: "Listen", pause: "Pause", resume: "Resume", stop: "Stop",
          aria: "Listen to this article", voice: "Choose voice" }
  };
  if (!T[lang]) { lang = "es"; }
  var speechLang = lang === "es" ? "es-ES" : "en-GB";
  var VOICE_KEY = "wj-voice-" + lang;

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
  var voices = [];   // voices matching the page language, best first
  var voice = null;  // currently selected SpeechSynthesisVoice

  // Higher score = more likely to sound natural. Remote (non-local) voices and
  // vendor "neural/natural" voices are far less robotic than the OS defaults.
  function rankVoice(v) {
    var n = (v.name || "").toLowerCase();
    var score = 0;
    if (!v.localService) { score += 5; }
    if (/google/.test(n)) { score += 4; }
    if (/natural|neural|premium|enhanced|siri/.test(n)) { score += 4; }
    if (/m[oó]nica|paulina|jorge|helena|lucia|luciana|samantha|daniel|serena|allison|ava/.test(n)) { score += 2; }
    if (/espeak|compact|robot/.test(n)) { score -= 5; }
    if (v.default) { score += 1; }
    return score;
  }

  function loadVoices() {
    var all = synth.getVoices() || [];
    voices = all.filter(function (v) {
      return v.lang && v.lang.toLowerCase().indexOf(lang) === 0;
    });
    if (!voices.length) { voices = all.slice(); }
    voices.sort(function (a, b) { return rankVoice(b) - rankVoice(a); });

    var savedURI = null;
    try { savedURI = localStorage.getItem(VOICE_KEY); } catch (e) {}
    voice = null;
    if (savedURI) {
      voice = voices.filter(function (v) { return v.voiceURI === savedURI; })[0] || null;
    }
    if (!voice) { voice = voices[0] || null; }
    populateSelect();
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

  var select = document.createElement("select");
  select.className = "read-aloud__voice";
  select.setAttribute("aria-label", T[lang].voice);
  select.setAttribute("title", T[lang].voice);
  select.hidden = true;

  wrap.appendChild(play);
  wrap.appendChild(stop);
  wrap.appendChild(select);

  function voiceLabel(v) {
    var label = v.name || v.voiceURI || "voice";
    // Append region when the name doesn't already hint at it.
    if (v.lang && !/[a-z]{2}[-_][A-Z]{2}/.test(label) && !new RegExp(v.lang, "i").test(label)) {
      label += " (" + v.lang + ")";
    }
    return label;
  }

  function populateSelect() {
    select.innerHTML = "";
    voices.forEach(function (v) {
      var opt = document.createElement("option");
      opt.value = v.voiceURI;
      opt.textContent = voiceLabel(v);
      if (voice && v.voiceURI === voice.voiceURI) { opt.selected = true; }
      select.appendChild(opt);
    });
    // Only show the picker when there is an actual choice to make.
    select.hidden = voices.length < 2;
  }

  select.addEventListener("change", function () {
    voice = voices.filter(function (v) { return v.voiceURI === select.value; })[0] || voice;
    try { localStorage.setItem(VOICE_KEY, select.value); } catch (e) {}
    // Takes effect from the next chunk; if idle, previews the new voice briefly.
    if (!playing && voice) {
      synth.cancel();
      var demo = new SpeechSynthesisUtterance(T[lang].listen);
      demo.lang = speechLang;
      demo.voice = voice;
      synth.speak(demo);
    }
  });

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

  // Voices are often populated asynchronously; load now and on change.
  loadVoices();
  if (typeof synth.addEventListener === "function") {
    synth.addEventListener("voiceschanged", loadVoices);
  }

  render();
  article.insertBefore(wrap, prose[0]);
})();
