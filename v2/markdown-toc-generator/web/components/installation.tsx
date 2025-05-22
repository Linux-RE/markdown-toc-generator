"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CopyButton } from "./copy-button"

export default function Installation() {
  return (
    <section id="installation" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Installation</h2>
          <p className="text-xl text-muted-foreground">Get started with Markdown TOC Generator in your project.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Tabs defaultValue="npm">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="npm">npm</TabsTrigger>
              <TabsTrigger value="yarn">Yarn</TabsTrigger>
              <TabsTrigger value="pnpm">pnpm</TabsTrigger>
            </TabsList>
            <TabsContent value="npm" className="relative">
              <div className="bg-muted rounded-md p-4 mt-4 relative">
                <CopyButton text="npm install @rrtechpro/markdown-toc-generator" />
                <pre className="text-sm overflow-x-auto">
                  <code>npm install @rrtechpro/markdown-toc-generator</code>
                </pre>
              </div>
            </TabsContent>
            <TabsContent value="yarn" className="relative">
              <div className="bg-muted rounded-md p-4 mt-4 relative">
                <CopyButton text="yarn add @rrtechpro/markdown-toc-generator" />
                <pre className="text-sm overflow-x-auto">
                  <code>yarn add @rrtechpro/markdown-toc-generator</code>
                </pre>
              </div>
            </TabsContent>
            <TabsContent value="pnpm" className="relative">
              <div className="bg-muted rounded-md p-4 mt-4 relative">
                <CopyButton text="pnpm add @rrtechpro/markdown-toc-generator" />
                <pre className="text-sm overflow-x-auto">
                  <code>pnpm add @rrtechpro/markdown-toc-generator</code>
                </pre>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Requirements</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Node.js 16 or higher</li>
              <li>TypeScript (for TypeScript projects)</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
