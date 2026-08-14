# Member Collaboration

How specification work actually moves from an early idea to a merged, versioned baseline —
where it lives at each stage, who can merge, and what happens when a change is proposed.

??? note "From brainstorm to baseline"

    - **Google Docs** is where working groups and sub-groups brainstorm — drafting ideas,
      fleshing out thoughts, and shaping early proposals.
    - Once a **baseline is agreed**, the content is decoupled from Google Docs and moved into
      **GitHub**, where it's maintained in Markdown
      ([Markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/)).

??? note "Roles & merge access"

    - The **Chair**, **Vice Chair**, and **Editor** hold admin access to each repository.
    - They are the only roles that can merge into the development branch, and later into `main`
      once the working group agrees to tag a new version.

??? note "The review & approval process"

    1. **Issue opened** — a member raises an issue outlining a proposed update to the
       specification; the issue becomes the place where the working group collects thoughts and
       feedback.
       [How to create an issue →](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue)

    2. **Pull request created** — once the working group has discussed the issue, the member is
       invited to open a pull request with the proposed change.
       [How to create a pull request →](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)

    3. **Review** — the PR is reviewed either live in a meeting, or asynchronously for a period
       set by the Chair (e.g. 7 days).
       [Assigning issues & PRs →](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/assigning-issues-and-pull-requests-to-other-github-users)

    4. **Outcome**
        - **No objections** → the Chair (or Vice Chair) merges the PR into the baseline.
          [How to merge a pull request →](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)
        - **Objections raised** → discussed in a meeting to try to resolve them.
        - **Objection sustained** → the Chair can call an eVote.
        - **Changes requested** → the PR is handed back to the editor/submitter to update, then
          re-enters discussion and follows the same route.

    ```mermaid
    flowchart LR
        PR([PR]) --> Merge((•))
        Merge --> Discussion[Discussion]
        Discussion --> RA["R&amp;A"]
        RA --> Agreed(["Agreed, merged by<br/>Chair or Maintainer"])
        RA -- Sustained Objection --> eVote[eVote]
        Discussion -- Update PR --> Merge
    ```

<!-- TODO: content pending — repository structure/layout conventions across Appia's GitHub orgs. -->
