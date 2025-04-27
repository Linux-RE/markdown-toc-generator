export const getOrderedListType = (style: string): string => {
    switch (style) {
        case 'roman': return 'I';
        case 'alphabetical': return 'A';
        case 'numeric':
        default: return '1';
    }
};

export const generateSlug = (title: string): string =>
    title.toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');

export const toRoman = (num: number): string => {
    const romans: [number, string][] = [
        [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
        [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
        [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
    ];
    let res = '';
    for (const [val, sym] of romans) {
        while (num >= val) { res += sym; num -= val; }
    }
    return res;
};
