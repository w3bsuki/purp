import { Suspense } from "react"
import { unstable_noStore as noStore } from "next/cache"
import { Metadata } from "next"
import Navbar from "@/components/navbar"
import { TransformBusinessSection } from "@/components/sections/transform-business"
import { AIAgentsSection } from "@/components/sections/ai-agents"
import { HeroSection } from "@/components/sections/hero-section"
import { AICapabilities } from "@/components/sections/ai-capabilities"
import { Footer } from "@/components/sections/footer"
import { Toaster } from "sonner"

export const metadata: Metadata = {
  title: "Amane Soft | AI Solutions for Business",
  description: "Transform your business with our custom AI solutions. Get enterprise-grade innovation in less than 24 hours.",
  openGraph: {
    title: "Amane Soft | AI Solutions for Business",
    description: "Transform your business with our custom AI solutions. Get enterprise-grade innovation in less than 24 hours.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amane Soft | AI Solutions for Business",
    description: "Transform your business with our custom AI solutions. Get enterprise-grade innovation in less than 24 hours.",
    images: ["/og-image.png"],
  },
}

export default function Home() {
  // This opts out of static rendering for this component
  noStore();

  return (
    <div className="relative min-h-screen bg-black">
      {/* Toast notifications */}
      <Toaster position="top-center" />

      {/* Enhanced background effects */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:radial-gradient(white,transparent_85%)]" />
        
        {/* Animated gradient orbs */}
        <div className="absolute right-[10%] top-[5%] h-[600px] w-[600px] animate-pulse bg-purple-500/20 blur-[120px] rounded-full" />
        <div className="absolute left-[20%] top-[25%] h-[600px] w-[600px] animate-pulse bg-indigo-500/20 blur-[120px] rounded-full" />
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
      </div>

      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <Suspense>
          <HeroSection />
        </Suspense>

        {/* AI Capabilities Section */}
        <Suspense>
          <AICapabilities />
        </Suspense>

        {/* Transform Business Section */}
        <Suspense>
          <TransformBusinessSection />
        </Suspense>

        {/* AI Agents Section */}
        <Suspense>
          <AIAgentsSection />
        </Suspense>

        {/* Footer */}
        <Suspense>
          <Footer />
        </Suspense>
      </div>
    </div>
  )
}

