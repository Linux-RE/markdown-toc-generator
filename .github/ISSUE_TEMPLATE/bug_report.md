---
name: Bug report
about: Create a report to help us improve
title: ''
labels: bug
assignees: ''

---

# 🐛 Bug Report

## Describe the bug
A clear and concise description of what the bug is.

## To Reproduce
Steps to reproduce the behavior:
1. Provide a sample Markdown input.
2. Specify the options (`TOCOptions`) used.
3. Show the actual (wrong) output.

Example:
```markdown
# Heading 1
## Subheading
```
Options:
```ts
{
  format: 'html',
  tocTitle: { level: 2, title: 'Table of Contents' },
  addBackToTop: true,
  numberingStyle: 'alphabetical',
  tocFooter: 'Generated by My Tool',
  anchorPrefix: 'docs/'
}
```
Output:
```
<the broken output here>
```

## Expected behavior
A clear and concise description of what you expected to happen.

## Screenshots / Code
If applicable, add screenshots or code snippets to help explain your problem.

## Environment (please complete the following information):
- Package version: [e.g. 1.2.3]
- Node.js version: [e.g. 20.x]
- OS: [e.g. Windows, Mac, Linux]
- Browser (if related): [e.g. Chrome, Safari]

## Additional context
Add any other context about the problem here (e.g., edge cases, unusual options, very large Markdown documents).

---
> Please make sure to check for [existing issues](../issues) before submitting a new bug.
