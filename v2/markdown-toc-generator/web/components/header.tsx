"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { Menu, X, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="text-xl font-bold">
              <span className="text-primary">Markdown</span> TOC Generator
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <Link
                href="#features"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("features")
                }}
              >
                Features
              </Link>
              <Link
                href="#installation"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("installation")
                }}
              >
                Installation
              </Link>
              <Link
                href="#usage"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("usage")
                }}
              >
                Usage
              </Link>
              <Link
                href="#demo"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("demo")
                }}
              >
                Demo
              </Link>
              <Link
                href="#api"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("api")
                }}
              >
                API
              </Link>
            </nav>

            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/Linux-RE/markdown-toc-generator" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <ModeToggle />
            </div>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t"
          >
            <div className="container mx-auto px-4 py-4 bg-background">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="#features"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("features")
                  }}
                >
                  Features
                </Link>
                <Link
                  href="#installation"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("installation")
                  }}
                >
                  Installation
                </Link>
                <Link
                  href="#usage"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("usage")
                  }}
                >
                  Usage
                </Link>
                <Link
                  href="#demo"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("demo")
                  }}
                >
                  Demo
                </Link>
                <Link
                  href="#api"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("api")
                  }}
                >
                  API
                </Link>
                <div className="flex items-center space-x-2 pt-2">
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://github.com/Linux-RE/markdown-toc-generator"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <ModeToggle />
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
