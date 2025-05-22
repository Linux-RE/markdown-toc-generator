"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CopyButton } from "./copy-button"

export default function ApiDocs() {
  return (
    <section id="api" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">API Documentation</h2>
          <p className="text-xl text-muted-foreground">Detailed documentation of the package API.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Tabs defaultValue="functions">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="functions">Functions</TabsTrigger>
              <TabsTrigger value="types">Types</TabsTrigger>
            </TabsList>

            <TabsContent value="functions" className="mt-6">
              <div className="space-y-8">
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">extractHeadingsFromMarkdown</h3>
                  <p className="text-muted-foreground mb-4">Extracts headings from markdown content.</p>

                  <h4 className="font-medium mb-2">Signature</h4>
                  <div className="bg-muted rounded-md p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
                      <code>function extractHeadingsFromMarkdown(markdown: string): Heading[]</code>
                    </pre>
                  </div>

                  <h4 className="font-medium mb-2">Parameters</h4>
                  <ul className="list-disc list-inside mb-4 space-y-1">
                    <li>
                      <code className="text-sm bg-muted px-1 py-0.5 rounded">markdown</code> - The markdown content to
                      extract headings from
                    </li>
                  </ul>

                  <h4 className="font-medium mb-2">Returns</h4>
                  <p className="text-muted-foreground">
                    An array of <code className="text-sm bg-muted px-1 py-0.5 rounded">Heading</code> objects.
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">buildToc</h3>
                  <p className="text-muted-foreground mb-4">Builds a table of contents from markdown content.</p>

                  <h4 className="font-medium mb-2">Signature</h4>
                  <div className="bg-muted rounded-md p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
                      <code>function buildToc(markdown: string, maxDepth?: number): TocItem[]</code>
                    </pre>
                  </div>

                  <h4 className="font-medium mb-2">Parameters</h4>
                  <ul className="list-disc list-inside mb-4 space-y-1">
                    <li>
                      <code className="text-sm bg-muted px-1 py-0.5 rounded">markdown</code> - The markdown content to
                      build TOC from
                    </li>
                    <li>
                      <code className="text-sm bg-muted px-1 py-0.5 rounded">maxDepth</code> (optional) - Maximum
                      heading level to include (default: Infinity)
                    </li>
                  </ul>

                  <h4 className="font-medium mb-2">Returns</h4>
                  <p className="text-muted-foreground">
                    An array of <code className="text-sm bg-muted px-1 py-0.5 rounded">TocItem</code> objects
                    representing the TOC structure.
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">exportTocAsMarkdown</h3>
                  <p className="text-muted-foreground mb-4">Exports the TOC as a markdown string.</p>

                  <h4 className="font-medium mb-2">Signature</h4>
                  <div className="bg-muted rounded-md p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
                      <code>function exportTocAsMarkdown(toc: TocItem[]): string</code>
                    </pre>
                  </div>

                  <h4 className="font-medium mb-2">Parameters</h4>
                  <ul className="list-disc list-inside mb-4 space-y-1">
                    <li>
                      <code className="text-sm bg-muted px-1 py-0.5 rounded">toc</code> - The TOC structure to export
                    </li>
                  </ul>

                  <h4 className="font-medium mb-2">Returns</h4>
                  <p className="text-muted-foreground">A markdown string representing the TOC.</p>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">exportTocAsHtml</h3>
                  <p className="text-muted-foreground mb-4">
                    Exports the TOC as an HTML string with interactive features.
                  </p>

                  <h4 className="font-medium mb-2">Signature</h4>
                  <div className="bg-muted rounded-md p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
                      <code>function exportTocAsHtml(toc: TocItem[]): string</code>
                    </pre>
                  </div>

                  <h4 className="font-medium mb-2">Parameters</h4>
                  <ul className="list-disc list-inside mb-4 space-y-1">
                    <li>
                      <code className="text-sm bg-muted px-1 py-0.5 rounded">toc</code> - The TOC structure to export
                    </li>
                  </ul>

                  <h4 className="font-medium mb-2">Returns</h4>
                  <p className="text-muted-foreground">
                    An HTML string with CSS and JavaScript for an interactive TOC.
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">exportTocAsJson</h3>
                  <p className="text-muted-foreground mb-4">Exports the TOC as a JSON string.</p>

                  <h4 className="font-medium mb-2">Signature</h4>
                  <div className="bg-muted rounded-md p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
                      <code>function exportTocAsJson(toc: TocItem[]): string</code>
                    </pre>
                  </div>

                  <h4 className="font-medium mb-2">Parameters</h4>
                  <ul className="list-disc list-inside mb-4 space-y-1">
                    <li>
                      <code className="text-sm bg-muted px-1 py-0.5 rounded">toc</code> - The TOC structure to export
                    </li>
                  </ul>

                  <h4 className="font-medium mb-2">Returns</h4>
                  <p className="text-muted-foreground">A JSON string representing the TOC.</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="types" className="mt-6">
              <div className="space-y-8">
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">Heading</h3>
                  <p className="text-muted-foreground mb-4">Represents a heading extracted from markdown.</p>

                  <div className="bg-muted rounded-md p-4">
                    <CopyButton
                      text={`interface Heading {
  text: string;
  level: number;
  anchorId?: string;
}`}
                    />
                    <pre className="text-sm overflow-x-auto">
                      <code>{`interface Heading {
  text: string;
  level: number;
  anchorId?: string;
}`}</code>
                    </pre>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Properties</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <code className="text-sm bg-muted px-1 py-0.5 rounded">text</code> - The text content of the
                        heading
                      </li>
                      <li>
                        <code className="text-sm bg-muted px-1 py-0.5 rounded">level</code> - The heading level (1-6)
                      </li>
                      <li>
                        <code className="text-sm bg-muted px-1 py-0.5 rounded">anchorId</code> - The HTML anchor ID for
                        the heading
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">TocItem</h3>
                  <p className="text-muted-foreground mb-4">Represents an item in the table of contents.</p>

                  <div className="bg-muted rounded-md p-4">
                    <CopyButton
                      text={`interface TocItem extends Heading {
  children: TocItem[];
}`}
                    />
                    <pre className="text-sm overflow-x-auto">
                      <code>{`interface TocItem extends Heading {
  children: TocItem[];
}`}</code>
                    </pre>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Properties</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <code className="text-sm bg-muted px-1 py-0.5 rounded">text</code> - The text content of the
                        heading
                      </li>
                      <li>
                        <code className="text-sm bg-muted px-1 py-0.5 rounded">level</code> - The heading level (1-6)
                      </li>
                      <li>
                        <code className="text-sm bg-muted px-1 py-0.5 rounded">anchorId</code> - The HTML anchor ID for
                        the heading
                      </li>
                      <li>
                        <code className="text-sm bg-muted px-1 py-0.5 rounded">children</code> - Array of child TOC
                        items
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
