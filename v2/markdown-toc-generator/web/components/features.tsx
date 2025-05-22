"use client"

import { motion } from "framer-motion"
import { FileJson, FileText, Code2, Layers, Workflow, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Features() {
  const features = [
    {
      icon: <FileJson className="h-10 w-10 text-primary" />,
      title: "Multiple Export Formats",
      description: "Export your TOC as HTML, Markdown, or JSON to fit your specific needs.",
    },
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Markdown Parsing",
      description: "Accurately extracts headings from markdown content with proper hierarchy.",
    },
    {
      icon: <Code2 className="h-10 w-10 text-primary" />,
      title: "TypeScript Support",
      description: "Built with TypeScript for better developer experience and type safety.",
    },
    {
      icon: <Layers className="h-10 w-10 text-primary" />,
      title: "Nested Structure",
      description: "Maintains proper heading hierarchy with nested children in the TOC.",
    },
    {
      icon: <Workflow className="h-10 w-10 text-primary" />,
      title: "Customizable Depth",
      description: "Control the maximum depth of headings to include in your TOC.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: "Interactive HTML TOC",
      description: "HTML export includes JavaScript for collapsible sections and active state tracking.",
    },
  ]

  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 gradient-bg opacity-30" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to generate and manage table of contents for your markdown documents.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
