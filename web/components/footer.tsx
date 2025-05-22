import Link from "next/link"
import { Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-xl font-bold">
              <span className="text-primary">Markdown</span> TOC Generator
            </Link>
            <p className="mt-2 text-muted-foreground">A TypeScript utility to generate TOC from markdown.</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center space-x-4 mb-4">
              <a
                href="https://github.com/Linux-RE/markdown-toc-generator"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Rajesh Epili. GPL-3.0 License.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
