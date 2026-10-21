// Moves the article's newsletter sign-up (article/newsletter_cta.liquid) to the
// middle of the article: after a body paragraph about halfway through, never
// between an interview question (a fully bold paragraph) and its answer.
// Without JavaScript, or in short articles, it stays after the article body.
(function () {
  var cta = document.querySelector("[data-newsletter-cta-mid]");
  var article = cta && cta.parentNode;
  if (!article) return;

  var isQuestion = function (p) {
    var bold = p.querySelector("strong, b");
    return bold && bold.textContent.trim() === p.textContent.trim();
  };
  var paragraphs = Array.prototype.filter.call(article.children, function (el) {
    return el.tagName === "P" && el.textContent.trim().length > 40;
  });
  if (paragraphs.length < 6) return;

  for (var i = Math.floor(paragraphs.length / 2) - 1; i < paragraphs.length - 2; i++) {
    var p = paragraphs[i];
    var next = p.nextElementSibling;
    if (!isQuestion(p) && next && next.tagName === "P") {
      article.insertBefore(cta, next);
      return;
    }
  }
})();
