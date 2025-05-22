"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CopyButton } from "./copy-button"

export default function Usage() {
  return (
    <section id="usage" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Usage Examples</h2>
          <p className="text-xl text-muted-foreground">Learn how to use Markdown TOC Generator in your projects.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Tabs defaultValue="basic">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="basic">Basic Usage</TabsTrigger>
              <TabsTrigger value="html">HTML Export</TabsTrigger>
              <TabsTrigger value="json">JSON Export</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="relative mt-6">
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Basic Markdown TOC Generation</h3>
                <p className="mb-4 text-muted-foreground">
                  Generate a table of contents from markdown and export it as markdown.
                </p>
                <div className="bg-muted rounded-md p-4 relative">
                  <CopyButton
                    text={`import { buildToc, exportTocAsMarkdown } from '@rrtechpro/markdown-toc-generator';

const markdown = '# Introduction\\n## Getting Started\\n### Prerequisites';
const toc = buildToc(markdown);
const markdownToc = exportTocAsMarkdown(toc);

console.log(markdownToc);
// Output:
// - [Introduction](#introduction)
//   - [Getting Started](#getting-started)
//     - [Prerequisites](#prerequisites)`}
                  />
                  <pre className="text-sm overflow-x-auto">
                    <code>{`import { buildToc, exportTocAsMarkdown } from '@rrtechpro/markdown-toc-generator';

const markdown = '# Introduction\\n## Getting Started\\n### Prerequisites';
const toc = buildToc(markdown);
const markdownToc = exportTocAsMarkdown(toc);

console.log(markdownToc);
// Output:
// - [Introduction](#introduction)
//   - [Getting Started](#getting-started)
//     - [Prerequisites](#prerequisites)`}</code>
                  </pre>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="html" className="relative mt-6">
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">HTML TOC Export</h3>
                <p className="mb-4 text-muted-foreground">
                  Generate an interactive HTML table of contents with collapsible sections.
                </p>
                <div className="bg-muted rounded-md p-4 relative">
                  <CopyButton
                    text={`import { buildToc, exportTocAsHtml } from '@rrtechpro/markdown-toc-generator';

const markdown = '# Introduction\\n## Getting Started\\n### Prerequisites';
const toc = buildToc(markdown);
const htmlToc = exportTocAsHtml(toc);

// Insert the HTML TOC into your document
document.getElementById('toc-container').innerHTML = htmlToc;`}
                  />
                  <pre className="text-sm overflow-x-auto">
                    <code>{`import { buildToc, exportTocAsHtml } from '@rrtechpro/markdown-toc-generator';

const markdown = '# Introduction\\n## Getting Started\\n### Prerequisites';
const toc = buildToc(markdown);
const htmlToc = exportTocAsHtml(toc);

// Insert the HTML TOC into your document
document.getElementById('toc-container').innerHTML = htmlToc;`}</code>
                  </pre>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="json" className="relative mt-6">
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">JSON TOC Export</h3>
                <p className="mb-4 text-muted-foreground">
                  Export the TOC as JSON for custom processing or integration with other tools.
                </p>
                <div className="bg-muted rounded-md p-4 relative">
                  <CopyButton
                    text={`import { buildToc, exportTocAsJson } from '@rrtechpro/markdown-toc-generator';

const markdown = '# Introduction\\n## Getting Started\\n### Prerequisites';
const toc = buildToc(markdown);
const jsonToc = exportTocAsJson(toc);

console.log(jsonToc);
// Output:
// [
//   {
//     "text": "Introduction",
//     "level": 1,
//     "anchorId": "introduction",
//     "children": [
//       {
//         "text": "Getting Started",
//         "level": 2,
//         "anchorId": "getting-started",
//         "children": [
//           {
//             "text": "Prerequisites",
//             "level": 3,
//             "anchorId": "prerequisites",
//             "children": []
//           }
//         ]
//       }
//     ]
//   }
// ]`}
                  />
                  <pre className="text-sm overflow-x-auto">
                    <code>{`import { buildToc, exportTocAsJson } from '@rrtechpro/markdown-toc-generator';

const markdown = '# Introduction\\n## Getting Started\\n### Prerequisites';
const toc = buildToc(markdown);
const jsonToc = exportTocAsJson(toc);

console.log(jsonToc);
// Output:
// [
//   {
//     "text": "Introduction",
//     "level": 1,
//     "anchorId": "introduction",
//     "children": [
//       {
//         "text": "Getting Started",
//         "level": 2,
//         "anchorId": "getting-started",
//         "children": [
//           {
//             "text": "Prerequisites",
//             "level": 3,
//             "anchorId": "prerequisites",
//             "children": []
//           }
//         ]
//       }
//     ]
//   }
// ]`}</code>
                  </pre>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-10 bg-card border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Limiting TOC Depth</h3>
            <p className="mb-4 text-muted-foreground">
              You can limit the maximum depth of headings to include in your TOC.
            </p>
            <div className="bg-muted rounded-md p-4 relative">
              <CopyButton
                text={`import { buildToc, exportTocAsMarkdown } from '@rrtechpro/markdown-toc-generator';

const markdown = '# Introduction\\n## Getting Started\\n### Prerequisites\\n#### Step 1';
// Only include headings up to level 2
const toc = buildToc(markdown, 2);
const markdownToc = exportTocAsMarkdown(toc);

console.log(markdownToc);
// Output:
// - [Introduction](#introduction)
//   - [Getting Started](#getting-started)`}
              />
              <pre className="text-sm overflow-x-auto">
                <code>{`import { buildToc, exportTocAsMarkdown } from '@rrtechpro/markdown-toc-generator';

const markdown = '# Introduction\\n## Getting Started\\n### Prerequisites\\n#### Step 1';
// Only include headings up to level 2
const toc = buildToc(markdown, 2);
const markdownToc = exportTocAsMarkdown(toc);

console.log(markdownToc);
// Output:
// - [Introduction](#introduction)
//   - [Getting Started](#getting-started)`}</code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
