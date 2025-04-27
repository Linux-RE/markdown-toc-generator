<<<<<<< Updated upstream
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
=======
// types.ts
type TocTitle = {
    level: number; // h1, h2, etc.
    title: string;
};

interface TOCOptions {
    format?: 'markdown' | 'html';
    tocTitle?: TocTitle;
    addBackToTop?: boolean;
    numberingStyle?: 'numeric' | 'roman' | 'alphabetical';
    tocFooter?: string;
    maxDepth?: number;
    includeTitles?: string[];
    excludeTitles?: string[];
    indent?: string;
    anchorPrefix?: string;
}

// index.ts
export function generateTOC(markdownContent: string, options: TOCOptions = {}): string {
    const {
        format = 'markdown',
        tocTitle,
        addBackToTop = false,
        numberingStyle = 'numeric',
        tocFooter,
        maxDepth = 6,
        includeTitles,
        excludeTitles,
        indent = '  ',
        anchorPrefix = '',
    } = options;

    const lines = markdownContent.split('\n');
    const numbering: number[] = [];
    const tocLines: string[] = [];

    const formatSlug = (title: string) => {
        return anchorPrefix + title
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .trim()
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    };

    const getNumbering = (level: number) => {
        numbering[level - 1] = (numbering[level - 1] || 0) + 1;
        numbering.fill(0, level);
        return numbering.slice(0, level).filter(n => n > 0);
    };

    const formatNumber = (numbers: number[]) => {
        if (numberingStyle === 'roman') {
            const toRoman = (n: number) => {
                const romans: { [key: string]: number } = {
                    M: 1000,
                    CM: 900,
                    D: 500,
                    CD: 400,
                    C: 100,
                    XC: 90,
                    L: 50,
                    XL: 40,
                    X: 10,
                    IX: 9,
                    V: 5,
                    IV: 4,
                    I: 1,
                };
                let result = '';
                for (const key in romans) {
                    const value = romans[key];
                    while (n >= value) {
                        result += key;
                        n -= value;
                    }
                }
                return result.toLowerCase();
            };
            return numbers.map(toRoman).join('.');
        }
        if (numberingStyle === 'alphabetical') {
            const toAlpha = (n: number) => String.fromCharCode(96 + n);
            return numbers.map(toAlpha).join('.');
        }
        // Default numeric
        return numbers.join('.');
    };

    if (format === 'html') {
        tocLines.push('<nav aria-label="Table of Contents">');

        if (tocTitle) {
            const titleTag = `h${tocTitle.level || 2}`;
            tocLines.push(`  <${titleTag}>${tocTitle.title}</${titleTag}>`);
        }

        tocLines.push('  <ol>');
    } else {
        if (tocTitle) {
            const hashes = '#'.repeat(tocTitle.level || 2);
            tocLines.push(`${hashes} ${tocTitle.title}`);
            tocLines.push('');
        }
    }

    const stack: string[] = [];

    lines.forEach(line => {
        const trimmed = line.trimStart();
        if (!trimmed.startsWith('#')) return;

        let level = 0;
        while (trimmed[level] === '#') {
            level++;
        }

        if (level < 1 || level > 6 || level > maxDepth) return;

        const title = trimmed.slice(level).trim();
        if (!title) return;

        if (includeTitles && !includeTitles.includes(title)) return;
        if (excludeTitles && excludeTitles.includes(title)) return;

        const slug = formatSlug(title);
        const numberParts = getNumbering(level);
        const sectionNumber = formatNumber(numberParts);

        if (format === 'html') {
            while (stack.length >= level) {
                tocLines.push(`${'  '.repeat(stack.length + 1)}</ol>`);
                tocLines.push(`${'  '.repeat(stack.length)}</li>`);
                stack.pop();
            }

            tocLines.push(`${'  '.repeat(level)}<li>`);
            tocLines.push(`${'  '.repeat(level + 1)}<a href="#${slug}">${sectionNumber} ${title}</a>`);
            tocLines.push(`${'  '.repeat(level + 1)}<ol>`);
            stack.push('ol');
        } else {
            const line = `${indent.repeat(level - 1)}- [${sectionNumber} ${title}](#${slug})`;
            tocLines.push(line);
        }
    });

    if (format === 'html') {
        while (stack.length) {
            tocLines.push(`${'  '.repeat(stack.length + 1)}</ol>`);
            tocLines.push(`${'  '.repeat(stack.length)}</li>`);
            stack.pop();
        }

        if (addBackToTop) {
            tocLines.push('    <li><a href="#">Back to Top</a></li>');
        }

        tocLines.push('  </ol>');

        if (tocFooter) {
            tocLines.push(`  <p><em>${tocFooter}</em></p>`);
        }

        tocLines.push('</nav>');
    } else {
        if (addBackToTop) {
            tocLines.push('');
            tocLines.push('- [Back to Top](#)');
        }

        if (tocFooter) {
            tocLines.push('');
            tocLines.push(`*${tocFooter}*`);
        }
    }

    return tocLines.join('\n');
}

const markdownContent = `
# Introduction
## Getting Started
### Requirements
## Installation
### Using npm
# Usage
# FAQ
`;

const toc = generateTOC(markdownContent, {
    format: 'markdown',
    tocTitle: { level: 1, title: 'My Custom Table of Contents' },
    addBackToTop: true,
    numberingStyle: 'numeric',
    tocFooter: 'Generated by My Tool',
    anchorPrefix: 'docs/',
});

console.log(toc);
>>>>>>> Stashed changes
