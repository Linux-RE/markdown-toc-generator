type TocTitle = {
    level: number;
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