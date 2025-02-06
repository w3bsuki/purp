"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";

// Loading component
function LoadingFallback() {
  return (
    <div className="min-h-[40vh] bg-black flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500" />
    </div>
  );
}

// Dynamically import components
const Navbar = dynamic(() => import("@/components/navbar"), {
  loading: () => <LoadingFallback />
});

const HeroSection = dynamic(() => import("@/components/sections/hero-section"), {
  loading: () => <LoadingFallback />
});

const AICapabilities = dynamic(() => import("@/components/sections/ai-capabilities"), {
  loading: () => <LoadingFallback />
});

const AIVisualization = dynamic(() => import("@/components/sections/ai-visualization"), {
  loading: () => <LoadingFallback />
});

const TransformBusinessSection = dynamic(() => import("@/components/sections/transform-business"), {
  loading: () => <LoadingFallback />
});

const CaseStudies = dynamic(() => import("@/components/sections/case-studies"), {
  loading: () => <LoadingFallback />
});

const ROICalculator = dynamic(() => import("@/components/sections/roi-calculator"), {
  loading: () => <LoadingFallback />
});

const TechStack = dynamic(() => import("@/components/sections/tech-stack"), {
  loading: () => <LoadingFallback />
});

const ProcessTimeline = dynamic(() => import("@/components/sections/process-timeline"), {
  loading: () => <LoadingFallback />
});

const Footer = dynamic(() => import("@/components/sections/footer"), {
  loading: () => <LoadingFallback />
});

const ToasterProvider = dynamic(() => import("@/components/providers/toaster-provider"));

export default function HomePage() {
  return (
    <>
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
      </div>
      <ToasterProvider />
    </>
  );
} 