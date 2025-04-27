# markdown-toc-generator

A simple Markdown TOC (Table of Contents) generator written in TypeScript.

## Installation

To install via npm:

```bash
<<<<<<< Updated upstream
npm install markdown-toc-generator
=======
npm i @rrtechpro/markdown-toc-generator
```

or with yarn:

```bash
yarn add @rrtechpro/markdown-toc-generator
```

---

## 🚀 Usage

```typescript
import { generateTOC } from '@rrtechpro/markdown-toc-generator';

const markdown = `
# Introduction
## Getting Started
### Requirements
# Installation
## Usage
# License
`;

const toc = generateTOC(markdown);

console.log(toc);
```

### Output:

```
## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Requirements](#requirements)
4. [Installation](#installation)
5. [Usage](#usage)
6. [License](#license)
```

---

## 📄 API

### `generateToc(markdownContent: string): string`

| Parameter | Type   | Description                   |
|:----------|:-------|:-------------------------------|
| `markdownContent` | `string` | The markdown text you want to extract headers from. |

Returns a markdown-formatted **Table of Contents** string.

---

## 🛠 Example Projects

- Documentation generators
- Static site generators
- Markdown processors
- VSCode extensions

---

## 🧹 Development

Clone the repo:

```bash
git clone [https://github.com/Linux-RE/markdown-toc-generator.git](https://github.com/Linux-RE/markdown-toc-generator.git)
cd markdown-toc-generator
npm install
npm run build
npm test
```

---

## 🧪 Running Tests

This project uses **Jest** for testing:

```bash
npm test
```

---

## 📜 License

[MIT License](LICENSE)

---

## ❤️ Contributing

Pull requests are welcome!  
For major changes, please open an issue first to discuss what you would like to change.

---

> Made with TypeScript 💙
>>>>>>> Stashed changes
