export function generateToc(markdownContent: string): string {
    if (markdownContent.length > 100_000) {
    throw new Error('Input too large');
    }
    
    const headerPattern = /^(#{1,6})[ \t]+([^\t]+?)[ \t]*$/; 
    const toc: string[] = [];

    toc.push('## Table of Contents\n');

    const lines = markdownContent.split('\n');
    let counter = 1;

    for (const line of lines) {
        const match = line.match(headerPattern);
        if (match) {
            const title = match[2].trim();

            const slug = title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');

            toc.push(`${counter}. [${title}](#${slug})`);
            counter++;
        }
    }

    return toc.join('\n');
}
