import { Heading } from "../types";
import { slugify } from "./helpers";

export function extractHeadings({ markdown, maxDepth }: { markdown?: string, maxDepth?: number }): Heading[] {
  if (markdown) {
    const headingRegex = /^(#{1,6})\s*(.+)$/gm;
    const headings: Heading[] = [];
    let match;

    while ((match = headingRegex.exec(markdown)) !== null) {
      const level = match[1].length;
      if (!maxDepth || level <= maxDepth) {
        const text = match[2].trim();
        const id = slugify(text);
        headings.push({ text, level, anchorId: id });
      }
    }

    return headings;
  } else {
    // Extract headings from the DOM if no markdown is provided
    const headings: Heading[] = [];
    let headingElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (maxDepth) {
      headingElements = document.querySelectorAll([...Array(maxDepth)].map((_, i) => `h${i + 1}`).join(', '));
    }

    headingElements.forEach(heading => {
      const level = parseInt(heading.tagName[1]);
      const text = heading.textContent?.trim() || '';
      const id = slugify(text);
      headings.push({ text, level, anchorId: id });
    });

    return headings;
  }
}
