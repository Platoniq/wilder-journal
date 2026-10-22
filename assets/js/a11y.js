/* Black & white accessibility toggle.
 *
 * Injects a fixed pill button that toggles a page-wide grayscale mode
 * (see a11y.css) and remembers the choice in localStorage. The saved state is
 * applied pre-paint by an inline snippet in the document <head>; this script
 * only builds the control and handles clicks, so a slightly late button is
 * harmless. Loaded on every page via the site override of head.liquid.
 */
(function () {
  "use strict";

  var KEY = "wj-contrast";
  var LABELS = {
    es: { label: "Blanco y negro", aria: "Activar o desactivar el modo blanco y negro" },
    en: { label: "Black & white", aria: "Toggle black and white mode" }
  };

  var lang = (document.documentElement.lang || "es").slice(0, 2);
  if (!LABELS[lang]) { lang = "es"; }

  function isBW() {
    return document.documentElement.getAttribute("data-contrast") === "bw";
  }

  function setBW(on) {
    if (on) {
      document.documentElement.setAttribute("data-contrast", "bw");
    } else {
      document.documentElement.removeAttribute("data-contrast");
    }
    try { localStorage.setItem(KEY, on ? "bw" : ""); } catch (e) {}
  }

  function build() {
    if (document.querySelector(".a11y-toggle")) { return; }

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "a11y-toggle";
    btn.textContent = LABELS[lang].label;
    btn.setAttribute("aria-label", LABELS[lang].aria);
    btn.setAttribute("title", LABELS[lang].aria);
    btn.setAttribute("aria-pressed", isBW() ? "true" : "false");

    btn.addEventListener("click", function () {
      var next = !isBW();
      setBW(next);
      btn.setAttribute("aria-pressed", next ? "true" : "false");
    });

    document.body.appendChild(btn);
  }

  if (document.body) {
    build();
  } else {
    document.addEventListener("DOMContentLoaded", build);
  }
})();
