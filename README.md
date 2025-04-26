# Markdown TOC Generator

A simple TypeScript utility to generate a **flat numbered Table of Contents (TOC)** from markdown headers.

✅ Supports headings from `#` to `######`  
✅ Sequential numbering (1., 2., 3.) — **no nested numbers**  
✅ Generates anchor links automatically

---

## ✨ Features

- Parses markdown headers (`#`, `##`, `###`, etc.)
- Outputs a clean, flat numbered list
- Creates URL-safe slugs for anchor links
- Lightweight and dependency-free

---

## 📦 Installation

```bash
npm install your-package-name
```

or with yarn:

```bash
yarn add your-package-name
```

---

## 🚀 Usage

```typescript
import { generateToc } from 'your-package-name';

const markdown = `
# Introduction
## Getting Started
### Requirements
# Installation
## Usage
# License
`;

const toc = generateToc(markdown);

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
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
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
