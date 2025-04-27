import { getOrderedListType, generateSlug } from './tocHelpers';

export type TOCOptions = {
    format: 'html' | 'markdown';
    tocTitle: { level: number; title: string };
    addBackToTop: boolean;
    numberingStyle?: 'numeric' | 'roman' | 'alphabetical';
    tocFooter: string;
    anchorPrefix: string;
};

export function generateTOC(md: string, options: TOCOptions): string {
    const {
        format,
        tocTitle,
        addBackToTop,
        tocFooter,
        anchorPrefix,
    } = options;

    const numberingStyle = format === 'markdown' && options.numberingStyle === undefined
        ? 'numeric'
        : options.numberingStyle ?? 'numeric';

    const lines = md.split('\n');
    const numbering: number[] = [];
    const html: string[] = [];

    html.push(`<nav aria-label="Table of Contents">`);
    html.push(`  <h${tocTitle.level}>${tocTitle.title}</h${tocTitle.level}>`);

    const topType = getOrderedListType(numberingStyle);
    html.push(`  <ol type="${topType}">`);

    let prevLevel = 1;

    lines.forEach((raw) => {
        const line = raw.trim();
        if (!line.startsWith('#')) return;

        let lvl = 0;
        while (lvl < line.length && line[lvl] === '#') lvl++;
        if (lvl < 1 || lvl > 6) return;

        const title = line.slice(lvl).trim();
        if (!title) return;

        numbering[lvl - 1] = (numbering[lvl - 1] || 0) + 1;
        numbering.fill(0, lvl);

        const slug = generateSlug(title);

        if (lvl > prevLevel) {

            html.push(`    <ol type="${getOrderedListType(numberingStyle)}">`);
        }
        else if (lvl < prevLevel) {

            for (let i = prevLevel; i > lvl; i--) {
                html.push(`    </ol>`);
                html.push(`    </li>`);
            }
        }
        else {

            html.push(`    </li>`);
        }

        html.push(`    <li><a href="#${anchorPrefix}${slug}">${title}</a>`);

        prevLevel = lvl;
    });

    for (let i = prevLevel; i >= 1; i--) {
        html.push(`    </li>`);
        html.push(`    </ol>`);
    }

    if (addBackToTop) {
        html.push(`  <li><a href="#">Back to Top</a></li>`);
    }

    html.push(`  <p><em>${tocFooter}</em></p>`);
    html.push(`</nav>`);

    if (format === 'html') {
        return html.join('\n');
    }

    return tocTitle.title + '\n\n' +
        lines
            .filter(l => l.startsWith('#'))
            .map(l => {
                const level = l.match(/^#+/)![0].length;
                const t = l.slice(level).trim();
                const slug = generateSlug(t);
                const indent = '  '.repeat(level - 1);
                return `${indent}- [${t}](#${anchorPrefix}${slug})`;
            })
            .join('\n') +
        (addBackToTop ? '\n\n- [Back to Top](#)\n' : '') +
        (tocFooter ? `\n*${tocFooter}*` : '');
}