<p align="center" width="100%"><img src="assets/appia-logo.svg" width="320" alt="Appia Foundation logo"/><br/><br/></p>

# Appia Foundation — Operations

This repository is the source for the Appia Foundation's member onboarding site: governance,
member onboarding steps, and day-to-day collaboration norms for people joining and working
within Appia.

Appia is building the connecting layer for trustworthy AI — a conformity chain and
specifications model that lets organizations demonstrate, in practice, that their AI systems
meet the obligations placed on them. Find out more at
[https://appiafoundation.org/](https://appiafoundation.org/).

This site is published at [onboarding.appiafoundation.org](https://onboarding.appiafoundation.org/).

## Site

The site is built with [MkDocs](https://www.mkdocs.org/) and the
[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme.

### Local development

A [dev container](.devcontainer/) is provided for a consistent local environment. Alternatively,
with Python installed:

```
pip install mkdocs mkdocs-material
mkdocs serve
```

Then open [http://localhost:8000](http://localhost:8000).

### Deployment

`.github/workflows/deploy.yml` builds the site with `mkdocs build` and publishes it to GitHub
Pages via `actions/deploy-pages` on every push to `main`. This requires a one-time repo setting:
in **Settings → Pages**, set **Source** to **GitHub Actions**.

The site uses the custom domain `onboarding.appiafoundation.org` (see `docs/CNAME`). To finish
wiring that up:

- Add a DNS **CNAME** record: `onboarding.appiafoundation.org` → `appia-foundation.github.io`
- In **Settings → Pages → Custom domain**, enter `onboarding.appiafoundation.org` and enable
  **Enforce HTTPS** once the certificate is issued

## Contributing

Contributions are encouraged and welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## Security

See [SECURITY.md](SECURITY.md) for how to report a security issue.

## License

See [LICENSE](LICENSE) for licensing information.

Copyright ©️ 2026 Appia Foundation.
