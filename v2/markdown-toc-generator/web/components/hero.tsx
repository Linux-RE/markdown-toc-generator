"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Code, List } from "lucide-react"

export default function Hero() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg" />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Markdown TOC Generator</h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            A TypeScript utility to generate Table of Contents from markdown, with HTML/Markdown/JSON export options.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <a
                href="#installation"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById("installation")
                  if (element) {
                    const headerOffset = 80
                    const elementPosition = element.getBoundingClientRect().top
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    })
                  }
                }}
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/Linux-RE/markdown-toc-generator" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 relative"
        >
          <div className="bg-card border rounded-lg shadow-lg p-4 md:p-6 overflow-hidden">
            <pre className="text-left overflow-x-auto text-sm">
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

          <div className="absolute -bottom-6 -right-6 -z-10 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
          <div className="absolute -top-6 -left-6 -z-10 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
        </motion.div>
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-card border rounded-lg p-6 text-center"
        >
          <div className="mx-auto bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <FileText className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-medium mb-2">Multiple Formats</h3>
          <p className="text-muted-foreground">Export TOC as HTML, Markdown, or JSON</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-card border rounded-lg p-6 text-center"
        >
          <div className="mx-auto bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <Code className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-medium mb-2">TypeScript Ready</h3>
          <p className="text-muted-foreground">Full TypeScript support with type definitions</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-card border rounded-lg p-6 text-center"
        >
          <div className="mx-auto bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <List className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-medium mb-2">Customizable</h3>
          <p className="text-muted-foreground">Control depth and structure of your TOC</p>
        </motion.div>
      </div>
    </section>
  )
}
