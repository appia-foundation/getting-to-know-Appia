# Contributing

This document explains the general requirements on contributions to this site and the
recommended preparation steps. It also sketches the typical integration process.

<!-- TODO: content pending — replace with Appia's actual contribution workflow once confirmed -->

## New Content

Contributions to this onboarding site are _typically_ very welcome! However, please keep the
following in mind when proposing additions or edits: it is ultimately the responsibility of the
maintainers to keep this site accurate and up to date (although any help is more than
appreciated!). Thus, when accepting new content, we have to weigh the added value against the
added cost of maintenance. It is **recommended to first open an issue on GitHub before starting
a substantial rewrite** and wait for feedback from the maintainers.

## Fixes

Corrections and fixes are _always_ welcome and take priority, see our
[Security Policy](SECURITY.md) for security-relevant issues.

## Contribution Checklist

- Add `signed-off` to all commits to certify the "Developer's Certificate of Origin", see below
- Structure your commits logically, in small steps
  - one separable change = one commit
  - after each commit, the site still has to build, i.e. do not add even temporary breakages
    inside a commit series (helps when tracking down issues). This applies to `mkdocs` builds
    as well as content changes
- Base commits on top of the latest default branch

### Sign your work

The sign-off is a simple line at the end of the explanation for the patch, e.g.

    Signed-off-by: Random J Developer <random@developer.example.org>

This line certifies that you wrote it or otherwise have the right to pass it on as an
open-source patch. Check with your employer when not working on your own!

**Tip**: The sign-off will be created for you automatically if you use `git commit -s` (or
`git revert -s`).

### Developer's Certificate of Origin 1.1

    By making a contribution to this project, I certify that:

        (a) The contribution was created in whole or in part by me and I
            have the right to submit it under the open source license
            indicated in the file; or

        (b) The contribution is based upon previous work that, to the best
            of my knowledge, is covered under an appropriate open source
            license and I have the right under that license to submit that
            work with modifications, whether created in whole or in part
            by me, under the same open source license (unless I am
            permitted to submit under a different license), as indicated
            in the file; or

        (c) The contribution was provided directly to me by some other
            person who certified (a), (b) or (c) and I have not modified
            it.

        (d) I understand and agree that this project and the contribution
            are public and that a record of the contribution (including all
            personal information I submit with it, including my sign-off) is
            maintained indefinitely and may be redistributed consistent with
            this project or the open source license(s) involved.

## Contribution Integration Process

1. Create a pull request on GitHub.
2. Applicable CI checks must pass.
3. Accepted pull requests are merged into the default branch.
