// Open links that leave this site (the header logo, registration form, social links,
// GitHub repo link, etc.) in a new tab, so visitors don't lose their place in the docs.
// In-page anchors and mailto/tel links are left alone.
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a[href]").forEach(function (link) {
    var href = link.getAttribute("href");
    if (!href || href.charAt(0) === "#" || /^(mailto|tel):/i.test(href)) {
      return;
    }
    try {
      var url = new URL(href, window.location.href);
      if (url.hostname && url.hostname !== window.location.hostname) {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener");
      }
    } catch (e) {
      // Malformed href - leave it as-is.
    }
  });
});
