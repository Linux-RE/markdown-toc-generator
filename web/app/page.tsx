import Hero from "@/components/hero"
import Features from "@/components/features"
import Installation from "@/components/installation"
import Usage from "@/components/usage"
import Demo from "@/components/demo"
import ApiDocs from "@/components/api-docs"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <Features />
      <Installation />
      <Usage />
      <Demo />
      <ApiDocs />
    </div>
  )
}
