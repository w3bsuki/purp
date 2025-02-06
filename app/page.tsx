"use client";

import { Suspense } from "react"
import dynamic from "next/dynamic"
import { Toaster } from "sonner"

// Dynamically import components with no SSR
const Navbar = dynamic(() => import("@/components/navbar"), { ssr: false });
const HeroSection = dynamic(() => import("@/components/sections/hero-section"), { ssr: false });
const AICapabilities = dynamic(() => import("@/components/sections/ai-capabilities"), { ssr: false });
const AIVisualization = dynamic(() => import("@/components/sections/ai-visualization"), { ssr: false });
const TransformBusinessSection = dynamic(() => import("@/components/sections/transform-business"), { ssr: false });
const CaseStudies = dynamic(() => import("@/components/sections/case-studies"), { ssr: false });
const ROICalculator = dynamic(() => import("@/components/sections/roi-calculator"), { ssr: false });
const TechStack = dynamic(() => import("@/components/sections/tech-stack"), { ssr: false });
const ProcessTimeline = dynamic(() => import("@/components/sections/process-timeline"), { ssr: false });
const Footer = dynamic(() => import("@/components/sections/footer"), { ssr: false });

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
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
        <Suspense fallback={<LoadingFallback />}>
          <Navbar />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <HeroSection />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <AICapabilities />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <AIVisualization />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <TransformBusinessSection />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <CaseStudies />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <ROICalculator />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <TechStack />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <ProcessTimeline />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Footer />
        </Suspense>
      </div>

      <Toaster position="top-center" />
    </div>
  )
}

