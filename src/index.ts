export function generateToc(markdownContent: string): string {
    const headerPattern = /^(#{1,6})[ \t]+(.+?)[ \t]*$/;
    const toc: string[] = [];

    // Track numbering by header levels
    const numbering: number[] = [];

    // Add the Table of Contents header
    toc.push('## Table of Contents\n');

    const lines = markdownContent.split('\n');

    for (const line of lines) {
        const match = line.match(headerPattern);
        if (match) {
            const level = match[1].length; // Number of '#' defines level
            const title = match[2].trim();

            // Update numbering array
            numbering[level - 1] = (numbering[level - 1] || 0) + 1;
            // Reset deeper levels
            numbering.fill(0, level);

            // Build section number string (e.g., "2.1.3")
            let sectionNumbers = numbering.slice(0, level).join('.');
            if (level === 1) {
                sectionNumbers += '.';
            }

            // Create slug for the link
            const slug = title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');

            // Add proper indentation
            const indent = '   '.repeat(level - 1);

            // Push formatted TOC line
            toc.push(`${indent}${sectionNumbers} [${title}](#${slug})`);
        }
    }

    return toc.join('\n');
}
