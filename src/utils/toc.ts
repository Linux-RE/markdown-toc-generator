// utils/toc.ts
import { Heading, TocItem } from "../types";
import { extractHeadings } from "./get-headings";
import { slugify } from "./helpers";

// Extract headings from markdown and return an array of Heading objects.
export function extractHeadingsFromMarkdown(markdown: string): Heading[] {
  const headingRegex = /^(#{1,6})\s*(.+)$/gm;
  const headings: Heading[] = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = slugify(text);
    headings.push({ text, level, anchorId: id });
  }

  return headings;
}

// Generate the Table of Contents in different formats: JSON, Markdown, HTML.
interface GenerateTOCProps {
  markdown?: string;
  maxDepth?: number;
  export: "JSON" | "Markdown";
}

export function buildToc({ markdown, maxDepth, export: exportType }: GenerateTOCProps) {
  let headings;

  if (markdown) {
    headings = extractHeadings({ markdown, maxDepth });
  } else {
    headings = extractHeadings({ maxDepth });
  }

  const root: TocItem[] = [];
  const stack: TocItem[] = [];

  // Build a tree of TOC items with children
  for (const heading of headings) {
    const item: TocItem = { ...heading, children: [] };

    while (stack.length > 0 && heading.level <= stack[stack.length - 1].level) {
      stack.pop();
    }

    if (stack.length === 0) {
      root.push(item);
    } else {
      stack[stack.length - 1].children.push(item);
    }

    stack.push(item);
  }

  // Export the TOC in the requested format
  switch (exportType) {
    case "JSON":
      return tocJSON(root);
    case "Markdown":
      return tocMarkdown(root);
    default:
      throw new Error(`Unsupported export format: ${exportType}`);
  }
}

function tocJSON(toc: TocItem[]): string {
  return JSON.stringify(toc, null, 2);
}

function tocMarkdown(toc: TocItem[]): string {
  function render(item: TocItem, level: number): string {
    const indent = "  ".repeat(level - 1);
    const link = `[${item.text}](#${item.anchorId})`;
    const children = item.children.map(child => render(child, level + 1)).join("\n");
    return `${indent}- ${link}\n${children}`;
  }

  return toc.map(item => render(item, 1)).join("\n");
}
