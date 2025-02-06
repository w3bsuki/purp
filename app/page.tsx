"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";

// Loading component
function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500" />
    </div>
  );
}

// Dynamically import components with SSR enabled
const Navbar = dynamic(() => import("@/components/navbar").then(mod => ({ default: mod.Navbar })), {
  ssr: true,
  loading: () => <LoadingSpinner />
});

const HeroSection = dynamic(() => import("@/components/sections/hero-section").then(mod => ({ default: mod.HeroSection })), {
  ssr: true,
  loading: () => <LoadingSpinner />
});

const AICapabilities = dynamic(() => import("@/components/sections/ai-capabilities").then(mod => ({ default: mod.AICapabilities })), {
  ssr: true,
  loading: () => <LoadingSpinner />
});

const AIVisualization = dynamic(() => import("@/components/sections/ai-visualization").then(mod => ({ default: mod.AIVisualization })), {
  ssr: true,
  loading: () => <LoadingSpinner />
});

const TransformBusinessSection = dynamic(() => import("@/components/sections/transform-business").then(mod => ({ default: mod.TransformBusinessSection })), {
  ssr: true,
  loading: () => <LoadingSpinner />
});

const CaseStudies = dynamic(() => import("@/components/sections/case-studies").then(mod => ({ default: mod.CaseStudies })), {
  ssr: true,
  loading: () => <LoadingSpinner />
});

const ROICalculator = dynamic(() => import("@/components/sections/roi-calculator").then(mod => ({ default: mod.ROICalculator })), {
  ssr: true,
  loading: () => <LoadingSpinner />
});

const TechStack = dynamic(() => import("@/components/sections/tech-stack").then(mod => ({ default: mod.TechStack })), {
  ssr: true,
  loading: () => <LoadingSpinner />
});

const ProcessTimeline = dynamic(() => import("@/components/sections/process-timeline").then(mod => ({ default: mod.ProcessTimeline })), {
  ssr: true,
  loading: () => <LoadingSpinner />
});

const Footer = dynamic(() => import("@/components/sections/footer").then(mod => ({ default: mod.Footer })), {
  ssr: true,
  loading: () => <LoadingSpinner />
});

const ToasterProvider = dynamic(() => import("@/components/providers/client-toaster").then(mod => ({ default: mod.ClientToaster })), {
  ssr: false
});

export default function Page() {
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
        <Suspense fallback={<LoadingSpinner />}>
          <Navbar />
          <HeroSection />
          <AICapabilities />
          <AIVisualization />
          <TransformBusinessSection />
          <CaseStudies />
          <ROICalculator />
          <TechStack />
          <ProcessTimeline />
          <Footer />
        </Suspense>
      </div>
      <ToasterProvider />
    </div>
  );
}

