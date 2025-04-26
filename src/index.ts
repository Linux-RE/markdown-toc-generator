export function generateToc(markdownContent: string): string {
    const headerPattern = /^(#{1,6})[ \t]+(.+?)[ \t]*$/;
    const toc: string[] = [];

    // Add the Table of Contents header
    toc.push('## Table of Contents\n');

    const lines = markdownContent.split('\n');
    let counter = 1;

    for (const line of lines) {
        const match = line.match(headerPattern);
        if (match) {
            const title = match[2].trim();

            // Create slug for the link
            const slug = title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');

            // Push flat-numbered TOC line
            toc.push(`${counter}. [${title}](#${slug})`);
            counter++;
        }
    }

    return toc.join('\n');
}
