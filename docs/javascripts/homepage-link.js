// The header logo links out to https://appiafoundation.org/ (see extra.homepage in
// mkdocs.yml). Material doesn't expose a way to set the link's target, so open it in a
// new tab here instead of navigating the visitor away from the docs site.
document.addEventListener("DOMContentLoaded", function () {
  var logo = document.querySelector("a.md-logo");
  if (logo) {
    logo.setAttribute("target", "_blank");
    logo.setAttribute("rel", "noopener");
  }
});
