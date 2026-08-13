# assets

Logo and image assets for the site.

- `appia-logo.png` — the full Appia Foundation lockup (triangular mark + "Appia Foundation"
  wordmark), used at the top of this README.
- `appia-mark.png` — the triangular mark alone, cropped from the lockup and padded to a square
  canvas, used as the site's header logo (`theme.logo` in `mkdocs.yml`).

Both are raster exports of the official full-color logo (teal / orange / navy / light blue mark,
navy wordmark, transparent background). The palette in `docs/css/appia.css` was sampled directly
from this logo. If a vector (SVG) source becomes available, replace these raster exports with it.

This folder is the source of truth for brand assets (e.g. for rendering in this README). MkDocs
only copies files under `docs_dir` into the built site, so copies also live at
`docs/assets/appia-mark.png` and `docs/assets/favicon.png` (a smaller export of the mark) for the
theme's `logo`/`favicon` config in `mkdocs.yml` — keep these in sync if the source logo changes.
