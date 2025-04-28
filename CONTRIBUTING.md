# Contributing to `markdown-toc-generator`

First off, thank you for considering contributing! 🎉 We welcome all kinds of improvements—bug fixes, new features, documentation, tests, and more.

---

## Table of Contents

1. [Code of Conduct](#code-of-conduct)  
2. [How to Report a Bug](#how-to-report-a-bug)  
3. [Feature Requests](#feature-requests)  
4. [Getting Started](#getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Installation](#installation)  
   - [Running the Tests](#running-the-tests)  
   - [Linting & Formatting](#linting--formatting)  
5. [Branching & Commit Guidelines](#branching--commit-guidelines)  
6. [Pull Request Process](#pull-request-process)  
7. [Release Process](#release-process)  
8. [Acknowledgements](#acknowledgements)  

---

## Code of Conduct

This project follows the [Contributor Covenant v2.1][coc]. Please read it to understand the expectations for behavior.

---

## How to Report a Bug

Before opening a new issue, please search [existing issues][issues] to see if it’s already been reported.

When filing a new bug, include:

- A **clear and descriptive** title.
- Steps to reproduce the behavior.
- A minimal code sample or markdown snippet that triggers the bug.
- The **actual** vs **expected** output.
- Environment details:
  - Package version (`package.json` → `version`)
  - Node.js version
  - Your OS

Use the [bug report template][bug-template] to help structure your report.

---

## Feature Requests

We love new ideas! If you have an idea for a feature, please open an issue using the [feature request template][feature-template]. Include:

- A descriptive title.
- A summary of the problem you’re trying to solve.
- How you envision the API or configuration.
- Any alternatives you’ve considered.

---

## Getting Started

### Prerequisites

- Node.js ≥ 16.x  
- npm or Yarn  
- Git  

### Installation

1. Fork this repository and clone your fork:
   ```bash
   git clone https://github.com/<your-username>/markdown-toc-generator.git
   cd markdown-toc-generator
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Tests

We use Jest for testing:

```bash
npm test
# or
yarn test
```

To watch on file changes:

```bash
npm run test:watch
# or
yarn test:watch
```

### Linting & Formatting

We enforce code quality with ESLint and Prettier:

```bash
npm run lint
npm run format
# or
yarn lint
yarn format
```

---

## Branching & Commit Guidelines

- **Branch names** should follow:
  - `fix/<short-description>` for bug fixes  
  - `feat/<short-description>` for new features  
  - `docs/<short-description>` for documentation changes  

- **Commit messages** should be structured as:
  ```
  <type>(<scope>?): <short summary>

  [optional longer description]

  [optional footer(s)]
  ```
  Where `<type>` is one of: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.

---

## Pull Request Process

1. Ensure your branch is up to date with `main`.
2. Push your branch to your fork.
3. Open a Pull Request against this repository’s `main` branch.
4. Fill in the template. Provide:
   - A descriptive title.
   - A summary of changes.
   - Any related issue numbers (`closes #123`).
5. Wait for CI to pass (tests, lint).
6. Address any review comments.
7. Once approved, your PR will be merged.

---

## Release Process

Releases are automated via GitHub Actions on merge to `main`. Version bumping and CHANGELOG updates are handled by `standard-version`. To cut a release manually:

```bash
npm run release
git push --follow-tags
```

---

## Acknowledgements

Thank you to everyone who’s contributed! 🙏  
This project follows the [Contributor Covenant][coc].

---

[coc]: https://www.contributor-covenant.org/version/2/1/code_of_conduct  
[issues]: https://github.com/your-org/markdown-toc-generator/issues  
[bug-template]: https://github.com/your-org/markdown-toc-generator/blob/main/.github/ISSUE_TEMPLATE/bug_report.md  
[feature-template]: https://github.com/your-org/markdown-toc-generator/blob/main/.github/ISSUE_TEMPLATE/feature_request.md  
