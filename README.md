# React Table of Contents (TOC) Generator 📑

**React TOC Generator** is a powerful tool for generating a Table of Contents (TOC) for Markdown content. It enables you to extract headings from Markdown and generate TOC entries in multiple formats like **JSON**, **Markdown**, and **HTML**. Additionally, it provides an interactive React component to display the TOC, offering smooth scrolling, collapsible items, and customizable anchor IDs.

---

## Features ✨

* Automatically generates a Table of Contents from Markdown headings. 📃
* Customizable anchor IDs for each heading. 🔗
* Export the TOC to **JSON**, **Markdown**, or **HTML** formats. 📊
* React component to display an interactive TOC with collapsible and smooth-scroll features. 🔍
* Tailwind CSS styles for easy customization and a responsive design. 🎨
* Subtle animations for toggle motion and smooth scrolling. 🧑‍💻
* Easily configurable depth limit for the TOC. 🛠️

---

## Table of Contents 📋

1. [Installation](#installation)
2. [Usage](#usage)
3. [API](#api)
4. [Examples](#examples)
5. [Contributing](#contributing)
6. [License](#license)

---

## Installation ⚙️

To install **React TOC Generator**, run the following npm or yarn command:

```bash
npm install react-toc-markdown
```

or

```bash
yarn add react-toc-markdown
```

---

## Usage 💻

Once installed, you can use the **React TOC Generator** in your project by importing the React component and the necessary utility functions.

### 1. **Using the React Component**

The `TOC` component allows you to display a dynamic Table of Contents for your Markdown content.

#### Example Usage 📝:

```tsx
import React from 'react';
import TOC from 'react-toc-markdown';

const markdownContent = `
# Introduction
This is an introduction.

## Features
Features of the project.

### Sub-feature 1
Details about sub-feature 1.

## Conclusion
Final thoughts.
`;

const MyComponent: React.FC = () => {
  return (
    <div>
      <h1>My Markdown Document</h1>
      <TOC markdown={markdownContent} maxDepth={3} />
    </div>
  );
};

export default MyComponent;
```

### 2. **Exporting the TOC in Different Formats**

You can also generate the TOC as JSON, Markdown, or HTML using the `buildToc` function.

#### Example Usage 📝:

```tsx
import { buildToc } from 'react-toc-markdown';

const markdownContent = `
# Introduction
## Subheading 1
### Sub-subheading 1
## Subheading 2
`;

const jsonToc = buildToc({
  markdown: markdownContent,
  maxDepth: 3,
  export: 'JSON', // 'Markdown' or 'HTML' are also valid options
});

console.log(jsonToc);
```

---

## API 🛠️

### `buildToc(options: { markdown?: string, maxDepth?: number, export: 'JSON' | 'Markdown' | 'HTML' })`

* **markdown**: Optional. The markdown content as a string. 📄
* **maxDepth**: Optional. The maximum depth of headings to include in the TOC (default is `6`). ⚖️
* **export**: The format for the TOC export. One of `'JSON'`, `'Markdown'`, or `'HTML'`.

Returns the TOC in the specified format.

### `TOC` React Component

* **markdown**: The markdown content as a string.
* **maxDepth**: Optional. Limits the TOC depth (default is `6`).
* **enableToggle**: Optional. If set to `true`, allows collapsing/expanding of nested items.

#### Example:

```tsx
<TOC markdown={markdownContent} maxDepth={3} />
```

---

## Customization 🎨

* **Custom Anchor IDs**: By default, anchor IDs are automatically generated from the heading text. However, you can customize the anchor ID by passing an optional `anchorId` parameter when building the TOC or in the React component. 🏷️
* **Depth Limiting**: Control the depth of the TOC by setting the `maxDepth` option. 🛠️
* **Tailwind CSS**: Tailwind CSS is used for styling. You can override the styles or customize them in your Tailwind config.

Example:

```tsx
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
```

---

## Examples 💡

### TOC with Collapsible Items and Smooth Scroll

```tsx
import React from 'react';
import TOC from 'react-toc-markdown';

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

const App: React.FC = () => {
  return (
    <div>
      <h1>My Markdown Document</h1>
      <TOC markdown={markdownContent} maxDepth={3} />
    </div>
  );
};

export default App;
```

### Output:

* The TOC will display a collapsible list of sections and subsections.
* Clicking on a TOC link scrolls smoothly to the corresponding section.
* The "▶" toggle indicator will rotate when clicking to expand or collapse nested TOC items.

---

## Contributing 🤝

We welcome contributions! If you want to contribute to **React TOC Generator**, follow these steps:

1. Fork the repository. 🍴
2. Create a new branch (`git checkout -b feature-name`). 🌱
3. Make your changes. ✏️
4. Commit your changes (`git commit -am 'Add new feature'`). 💻
5. Push to your branch (`git push origin feature-name`). 🚀
6. Open a pull request. 🔄

### Issues 🐞

If you encounter any bugs or have feature requests, please open an issue on our [GitHub repository](https://github.com/your-repo/react-toc-markdown). 🐙

---

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. ⚖️