export function generateToc(markdownContent: string): string {
    const headerPattern = /^(#{1,6})[ \t]+([^\t]+?)[ \t]*$/;
    const toc: string[] = [];

    toc.push('## Table of Contents\n');

    const lines = markdownContent.split('\n');
    const numbering: number[] = [];

    for (const line of lines) {
        const match = line.match(headerPattern);
        if (match) {
            const level = match[1].length; // 1 to 6
            const title = match[2].trim();

            // Update numbering
            numbering[level - 1] = (numbering[level - 1] || 0) + 1;
            numbering.fill(0, level); // Reset deeper levels

            // Build section numbers
            const sectionNumber = numbering.slice(0, level).filter(n => n !== 0).join('.');

            // Create slug
            const slug = title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');

            // Indentation
            const indent = '   '.repeat(level - 1);

            toc.push(`${indent}${sectionNumber} [${title}](#${slug})`);
        }
    }

    return toc.join('\n');
}