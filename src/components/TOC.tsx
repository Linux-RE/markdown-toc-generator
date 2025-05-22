import React, { useEffect, useState, useCallback } from 'react';
import { buildToc } from '../utils/toc';
import { TocItem } from '../types';

interface TOCProps {
  markdown: string;
  maxDepth?: number;
}

const TOC: React.FC<TOCProps> = ({ markdown, maxDepth = 3 }) => {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    const generatedToc = buildToc({
      markdown,
      maxDepth,
      export: 'JSON',
    });

    const tocJson = JSON.parse(generatedToc) as TocItem[];
    setToc(tocJson);
  }, [markdown, maxDepth]);

  const toggleItem = useCallback((anchorId: string | undefined) => {
    if (anchorId) {
      setOpenItems(prevState => {
        const newState = new Set(prevState);
        if (newState.has(anchorId)) {
          newState.delete(anchorId);
        } else {
          newState.add(anchorId);
        }
        return newState;
      });
    }
  }, []);

  const renderToc = (tocItems: TocItem[], level: number = 1) => {
    return (
      <ul className={`pl-${level * 4} list-none`}>
        {tocItems.map(item => (
          <li key={item.anchorId} className="toc-item mb-2 relative">
            <div
              className="toc-link-wrapper"
              onClick={() => toggleItem(item.anchorId)}
            >
              <a
                href={`#${item.anchorId}`}
                className={`toc-link text-gray-800 text-sm py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-blue-100 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${item.level === 1 ? 'font-semibold' : ''}`}
              >
                {item.text}
              </a>
              {item.children && item.children.length > 0 && (
                <div
                  className={`toc-toggle-indicator transform transition-transform duration-300 ${
                    openItems.has(item.anchorId || '') ? 'rotate-90' : ''
                  }`}
                >
                  ▶
                </div>
              )}
            </div>
            {item.children && item.children.length > 0 && openItems.has(item.anchorId || '') && (
              <div className="toc-sub-items transition-all duration-500 ease-out opacity-0 hover:opacity-100">
                {renderToc(item.children, level + 1)}
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="toc-container max-w-3xl mx-auto mt-6 p-4 bg-white shadow-lg rounded-lg">
      <div className="toc-header text-xl font-semibold text-gray-900 mb-4">Table of Contents</div>
      <nav className="toc">
        {renderToc(toc)}
      </nav>
    </div>
  );
};

export default TOC;
