import type { Heading, TocItem } from "./types"

// Slugify function
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
}

export function extractHeadingsFromMarkdown(markdown: string): Heading[] {
  const headingRegex = /^(#{1,6})\s*(.+)$/gm
  const headings: Heading[] = []
  let match

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length
    const text = match[2].trim()
    const id = slugify(text)
    headings.push({ text, level, anchorId: id })
  }

  return headings
}

export function buildToc(markdown: string, maxDepth = Number.POSITIVE_INFINITY): TocItem[] {
  const headings = extractHeadingsFromMarkdown(markdown)
  const root: TocItem[] = []
  const stack: TocItem[] = []

  for (const heading of headings) {
    if (heading.level > maxDepth) continue
    const item: TocItem = { ...heading, children: [] }

    while (stack.length > 0 && heading.level <= stack[stack.length - 1].level) {
      stack.pop()
    }

    if (stack.length === 0) {
      root.push(item)
    } else {
      stack[stack.length - 1].children.push(item)
    }

    stack.push(item)
  }

  return root
}

export function exportTocAsJson(toc: TocItem[]): string {
  return JSON.stringify(toc, null, 2)
}

export function exportTocAsMarkdown(toc: TocItem[]): string {
  function render(item: TocItem, level: number): string {
    const indent = "  ".repeat(level - 1)
    const link = `[${item.text}](#${item.anchorId})`
    const children = item.children.map((child) => render(child, level + 1)).join("\n")
    return `${indent}- ${link}\n${children}`
  }
  return toc.map((item) => render(item, 1)).join("\n")
}

export function exportTocAsHtml(toc: TocItem[]): string {
  function render(item: TocItem): string {
    const childrenHtml = item.children.length
      ? `<ul class="toc-children" style="display:none">${item.children.map(render).join("")}</ul>`
      : ""
    const toggleIcon = item.children.length ? `<span class="toc-toggle-icon">+</span>` : ""
    return `<li class="toc-item" data-level="${item.level}">
      <a href="#${item.anchorId}" class="toc-link">${toggleIcon} ${item.text}</a>${childrenHtml}</li>`
  }

  const css = `<style>
    html { scroll-behavior: smooth; }
    .toc { list-style: none; padding: 0; font-family: sans-serif; }
    .toc-link { display: block; padding: 5px; color: #333; text-decoration: none; }
    .toc-link.active { font-weight: bold; color: #007bff; }
    .toc-children { margin-left: 20px; display: none; }
    .toc-toggle-icon { cursor: pointer; margin-right: 5px; font-weight: bold; }
    .toc-search { margin-bottom: 10px; width: 100%; padding: 5px; }
  </style>`

  const script = `<script>
    document.addEventListener("DOMContentLoaded", () => {
      const tocLinks = document.querySelectorAll(".toc-link");
      const sections = [...tocLinks].map(link => document.querySelector(link.getAttribute("href")));

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const link = document.querySelector(\`a[href="#\${entry.target.id}"]\`);
          if (entry.isIntersecting) link?.classList.add("active");
          else link?.classList.remove("active");
        });
      }, { threshold: 0.5 });

      sections.forEach(section => section && observer.observe(section));

      document.querySelectorAll(".toc-toggle-icon").forEach(icon => {
        icon.addEventListener("click", () => {
          const ul = icon.parentElement?.nextElementSibling as HTMLElement;
          if (ul) {
            ul.style.display = ul.style.display === "block" ? "none" : "block";
            icon.textContent = ul.style.display === "block" ? "-" : "+";
          }
        });
      });

      const search = document.createElement("input");
      search.placeholder = "Search TOC...";
      search.className = "toc-search";
      document.body.insertBefore(search, document.body.firstChild);

      search.addEventListener("input", () => {
        const q = search.value.toLowerCase();
        document.querySelectorAll(".toc-item").forEach(item => {
          const text = item.textContent?.toLowerCase() || "";
          item.style.display = text.includes(q) ? "block" : "none";
        });
      });
    });
  </script>`

  return `${css}<ul class="toc">${toc.map(render).join("")}</ul>${script}`
}
