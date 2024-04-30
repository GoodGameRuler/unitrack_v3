# UniTrack V3

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
	- [Commit Messages](#commit-messages)
	- [Branch Names](#branch-names)
	- [Pull Requests](#pull-requests)
		- [Title](#title)
		- [Description](#description)
		- [Example Pull Request](#example-pr)
	- [Open Source](#open-source)
- [Developing Team](#developing-team)

## Overview

This project was initiated for Coding Fest 2023 by [Udit
Samant](https://github.com/goodgameruler), [Jennifer
Tan](https://github.com/jennifermtan), [Devanshi
Mirchandani](https://github.com/devanshimirchandani), and [Parth
Bhargava](https://github.com/gitparth12). The purpose of UniTrack is to present
a university services platform with a better user experience, mainly targeting
degree planning, unit selection, and time table selection.

After two iterations of technical stacks for this project we have settled on React, Next.Js, and Vercel

We welcome any collaboration and contributions from the public to this project, please refer to the [open source contribution](#open-source) section.

## Getting Started / Installation

*SSH authentication is recommended, visit [this link](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) for more information.*
1. Clone the repo using `git clone --recurse-submodules git@github.com:USYDUniTrack/unitrack_v3.git
2. Run development server based on your preferred package manager.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contributing

Read the guidelines below to write good commit messages, branch names, and make pull requests that follow the conventions we will be using throughout the project.

### Commit Messages

- Capitalise the subject line.
- Do not end with a period.
- Use imperative mood, i.e. instead of *"Added ..."* write *"Add ..."*.
- Keep messages logical and relevant, do not write things like *"Please work"* or *"I hate frontend"*. To help decide the extent of this, imagine trying to access a point in the project 2 weeks ago, it would be better to have something like *"Add CSS for Navbar template"* or , so that we know from a glance what the commit is for.
- For more detailed messages, use `git commit -m <title> -m <description>`, however short and concise is still preferred.

### Branch Names
Make a branch using `git checkout -b <branch_name>`.
- Names fall under one of **4** categories
	- Minor Feature: `minor-FeatureName`
	- Major Feature: `major-FeatureName`
	- Patch: `patch-PatchName`
	- Miscellaneous: `name`
		- For example `documentation` for changing the README, or adding another markdown

### Pull Requests
*Summarised from [this article](https://namingconvention.org/git/pull-request-naming.html).*

#### Title
- Short and descriptive summary
- Start with corresponding ticket/story id (e.g. from Jira, GitHub issue)
- Should be capitalized and written in imperative present tense
- Do not end with period
- Suggested format: *#<Ticket_ID> PR description*

#### Description
- Separated with a blank line from the subject
- Explain what, why, etc.
- Max 72 chars
- Each paragraph capitalized

#### Example Pull Request
```
This pull request is part of the work to make it easier for people to contribute to naming convention guides. One of the easiest way to make small changes would be using the Edit on Github button.

To achieve this, we needed to:
- Find the best Gitbook plugin which can do the work
- Integrate it in all the pages to redirect the user to the right page on GitHub for editing
- Make it visible on the page so users can notice it easily
```

### Open Source

Follow the steps below to suggest a patch or a feature for this project. For information on naming conventions for pull requests or commits, read the rest of the [contributing](#contributing) section above.

1. Fork the repo
2. Create your Feature Branch: `git checkout -b <branch_name>`
3. Commit your Changes
4. Push to the Branch: `git push origin <branch_name>`
5. Open a Pull Request

## Developing Team
- [Parth Bhargava](https://github.com/gitparth12)
- [Devanshi Mirchandani](https://github.com/devanshimirchandani)
- [Jennifer Tan](https://github.com/jennifermtan)
- [Udit Samant](https://github.com/goodgameruler)
- Antriksh Dhand
