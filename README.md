# TOC Generator 📑

**TOC Generator** is a tool to automatically generate a Table of Contents (TOC) for markdown files. It allows you to extract headings from markdown content and generate TOC entries in multiple formats such as **JSON**, **HTML**, and **Markdown**. It also offers customizable anchor IDs, smooth scrolling, and collapsible TOC items for better navigation. 🚀

## Features ✨

- Automatically generates a Table of Contents from Markdown headings. 📃
- Customizable anchor IDs for each heading. 🔗
- Export the TOC to **JSON**, **Markdown**, or **HTML** format. 📊
- Collapsible and searchable TOC items for a better user experience. 🔍
- Supports smooth scrolling and scrollspy for active headings. 🧑‍💻
- Easily configurable depth limit for the TOC. 🛠️

## Table of Contents 📋

1. [Installation](#installation)
2. [Usage](#usage)
3. [API](#api)
4. [Examples](#examples)
5. [Contributing](#contributing)

## Installation ⚙️

To install **TOC Generator**, run the following npm command:

```bash
npm install markdown-toc-generator
````

## Usage 💻

Once installed, you can use the **TOC Generator** in your project by importing it and calling the appropriate functions.

### Example Usage 📝:

```typescript
import { buildToc, exportTocAsHtml, exportTocAsJson, exportTocAsMarkdown } from 'markdown-toc-generator';

const markdownContent = `
# Introduction
Some intro text here.

## Subheading 1
Details about subheading 1.

### Sub-subheading 1
Details about sub-subheading 1.

## Subheading 2
Details about subheading 2.

# Conclusion
Summary of the content.
`;

const toc = buildToc(markdownContent);

// Export as JSON
const jsonToc = exportTocAsJson(toc);
console.log("JSON Export:\n", jsonToc);

// Export as Markdown
const markdownToc = exportTocAsMarkdown(toc);
console.log("\nMarkdown Export:\n", markdownToc);

// Export as HTML
const htmlToc = exportTocAsHtml(toc);
console.log("\nHTML Export:\n", htmlToc);
```

### Customization 🎨

* **Custom Anchor IDs**: The default anchor IDs are automatically generated based on the heading text, but you can customize them when creating the TOC by passing an optional `anchorId` parameter to each heading. 🏷️
* **Depth Limiting**: You can limit the depth of the TOC to display only a specific number of heading levels. 🔢

## API 🛠️

### `buildToc(content: string, options?: { maxDepth: number }): TocItem[]`

* **content**: The markdown content as a string. 📄
* **options.maxDepth**: Optional. The maximum depth of headings to include in the TOC (default is `6`). ⚖️

Returns an array of `TocItem` objects that represent the structure of the TOC. 📑

### `exportTocAsJson(toc: TocItem[]): string`

* **toc**: An array of `TocItem` objects to be exported as JSON. 🗃️

Returns the TOC as a JSON string. 🔠

### `exportTocAsMarkdown(toc: TocItem[]): string`

* **toc**: An array of `TocItem` objects to be exported as Markdown. 📝

Returns the TOC as a Markdown string. ✒️

### `exportTocAsHtml(toc: TocItem[]): string`

* **toc**: An array of `TocItem` objects to be exported as HTML. 🌐

Returns the TOC as an HTML string. 💻

## Examples 💡

You can find some working examples of the TOC Generator in the [Examples](examples.html) section of the documentation. 🔗

## Contributing 🤝

We welcome contributions! If you want to contribute to **TOC Generator**, follow these steps:

1. Fork the repository. 🍴
2. Create a new branch (`git checkout -b feature-name`). 🌱
3. Make your changes. ✏️
4. Commit your changes (`git commit -am 'Add new feature'`). 💻
5. Push to your branch (`git push origin feature-name`). 🚀
6. Open a pull request. 🔄

### Issues 🐞

If you encounter any bugs or have feature requests, please open an issue on our [GitHub repository](https://github.com/Linux-RE/markdown-toc-generator/). 🐙

---

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. ⚖️