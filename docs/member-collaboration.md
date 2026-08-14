# Member Collaboration

How specification work actually moves from an early idea to a merged, versioned baseline —
where it lives at each stage, who can merge, and what happens when a change is proposed.

??? note "From brainstorm to baseline"

    - **Google Docs** is where working groups and sub-groups brainstorm — drafting ideas,
      fleshing out thoughts, and shaping early proposals.

        !!! warning "Hosting requirement"

            Any Google Doc created for Appia collaboration must be hosted in the appropriate
            **Appia Google Drive** — not on a member's local drive or personal account. Each
            working group has its own designated area within the Drive, with a naming schema
            members are asked to follow. This keeps collaboration open to all members and
            removes any barrier to entry that comes with content sitting outside shared space.

            This applies to **any document** discussed in meetings or circulated by email too —
            it must live in the Appia Google Drive so any member can access what's been raised,
            not just those who were in the room or on the thread.

            If you don't have access to the Appia Google Drive, contact the
            [Slack help desk channel](https://appia-project.slack.com/archives/C0ARD1X091D) or
            email [helpdesk@appiafoundation.org](mailto:helpdesk@appiafoundation.org) — you'll
            get a response either way.

    - Once a **baseline is agreed**, the content is decoupled from Google Docs and moved into
      **GitHub**, where it's maintained in Markdown
      ([Markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/)).

??? note "Working in GitHub"

    GitHub access is based on **appointed role**, not membership tier — a Steering, General, or
    Contributor Member is treated the same way unless they hold one of the appointed roles below.
    This keeps the baseline protected from unintended changes while keeping the process fully
    open for everyone to view, discuss, and propose.

    - **Maintainer access** — held by the **Chair**, **Vice Chair**, and **Editor** of a working
      group
        - Manages day-to-day repository flow, including reviewing and merging pull requests into
          the development branch
        - The **Chair** merges into the production/`main` branch once the working group has
          approved a baseline
    - **Read access** — held by all other members, regardless of membership level (Steering,
      General, or Contributor)
        - Allows members to view repositories, open and comment on issues, and open and comment
          on pull requests
        - Restricting merge rights to appointed roles safeguards the baseline from unwanted or
          premature changes, and ensures anything merged has gone through the working group's
          consensus process

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
