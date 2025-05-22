"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { CopyButton } from "./copy-button"

export default function Demo() {
  const [markdown, setMarkdown] = useState(`# Introduction
## Getting Started
### Prerequisites
### Installation
## Basic Usage
### Configuration
#### Options
#### Examples
## Advanced Features
### Custom Formatting
### Integration
## Troubleshooting
## FAQ`)

  const [markdownToc, setMarkdownToc] = useState("")
  const [htmlToc, setHtmlToc] = useState("")
  const [jsonToc, setJsonToc] = useState("")
  const [maxDepth, setMaxDepth] = useState(6)

  useEffect(() => {
    // This is a client-side simulation of the package functionality
    // In a real implementation, we would import the actual package
    generateToc()
  }, [markdown, maxDepth])

  function generateToc() {
    try {
      // Extract headings
      const headings = extractHeadingsFromMarkdown(markdown)

      // Build TOC with max depth
      const toc = buildToc(headings, maxDepth)

      // Generate outputs
      setMarkdownToc(generateMarkdownToc(toc))
      setHtmlToc(generateHtmlToc(toc))
      setJsonToc(JSON.stringify(toc, null, 2))
    } catch (error) {
      console.error("Error generating TOC:", error)
    }
  }

  // Simplified implementation of the package functions for demo purposes
  function extractHeadingsFromMarkdown(markdown) {
    const headingRegex = /^(#{1,6})\s*(.+)$/gm
    const headings = []
    let match

    while ((match = headingRegex.exec(markdown)) !== null) {
      const level = match[1].length
      const text = match[2].trim()
      const anchorId = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-")
      headings.push({ text, level, anchorId })
    }

    return headings
  }

  function buildToc(headings, maxDepth = Number.POSITIVE_INFINITY) {
    const root = []
    const stack = []

    for (const heading of headings) {
      if (heading.level > maxDepth) continue
      const item = { ...heading, children: [] }

      while (stack.length > 0 && heading.level <= stack[stack.length - 1].level) {
        stack.pop()
      }

      if (stack.length === 0) {
        root.push(item)
      } else {
        stack[stack.length - 1].children.push(item)
      }

      stack.push(item)
    }

    return root
  }

  function generateMarkdownToc(toc, level = 0) {
    return toc
      .map((item) => {
        const indent = "  ".repeat(level)
        const link = `[${item.text}](#${item.anchorId})`
        const children = item.children.length ? "\n" + generateMarkdownToc(item.children, level + 1) : ""
        return `${indent}- ${link}${children}`
      })
      .join("\n")
  }

  function generateHtmlToc(toc) {
    function renderItem(item) {
      const childrenHtml = item.children.length
        ? `<ul class="toc-children">${item.children.map(renderItem).join("")}</ul>`
        : ""
      const toggleIcon = item.children.length ? `<span class="toc-toggle-icon">+</span>` : ""
      return `<li class="toc-item" data-level="${item.level}">
        <a href="#${item.anchorId}" class="toc-link">${toggleIcon} ${item.text}</a>${childrenHtml}</li>`
    }

    return `<ul class="toc">${toc.map(renderItem).join("")}</ul>`
  }

  return (
    <section id="demo" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Demo</h2>
          <p className="text-xl text-muted-foreground">Try the Markdown TOC Generator right in your browser.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Input Markdown</h3>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <label htmlFor="max-depth" className="text-sm">
                    Max Depth:
                  </label>
                  <select
                    id="max-depth"
                    value={maxDepth}
                    onChange={(e) => setMaxDepth(Number(e.target.value))}
                    className="bg-background border rounded px-2 py-1 text-sm"
                  >
                    {[1, 2, 3, 4, 5, 6].map((level) => (
                      <option key={level} value={level}>
                        H{level}
                      </option>
                    ))}
                  </select>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setMarkdown(`# Introduction
## Getting Started
### Prerequisites
### Installation
## Basic Usage
### Configuration
#### Options
#### Examples
## Advanced Features
### Custom Formatting
### Integration
## Troubleshooting
## FAQ`)
                  }
                >
                  Reset
                </Button>
              </div>
              <Textarea
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                className="h-[400px] font-mono text-sm"
                placeholder="Enter your markdown with headings here..."
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Generated TOC</h3>
              <Tabs defaultValue="markdown">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="markdown">Markdown</TabsTrigger>
                  <TabsTrigger value="html">HTML</TabsTrigger>
                  <TabsTrigger value="json">JSON</TabsTrigger>
                </TabsList>

                <TabsContent value="markdown" className="relative">
                  <div className="bg-muted rounded-md p-4 mt-4 relative h-[400px] overflow-auto">
                    <CopyButton text={markdownToc} />
                    <pre className="text-sm">
                      <code>{markdownToc}</code>
                    </pre>
                  </div>
                </TabsContent>

                <TabsContent value="html" className="relative">
                  <div className="bg-muted rounded-md p-4 mt-4 relative h-[400px] overflow-auto">
                    <CopyButton text={htmlToc} />
                    <pre className="text-sm">
                      <code>{htmlToc}</code>
                    </pre>
                  </div>
                </TabsContent>

                <TabsContent value="json" className="relative">
                  <div className="bg-muted rounded-md p-4 mt-4 relative h-[400px] overflow-auto">
                    <CopyButton text={jsonToc} />
                    <pre className="text-sm">
                      <code>{jsonToc}</code>
                    </pre>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
