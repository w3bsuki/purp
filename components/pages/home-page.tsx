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
const Navbar = dynamic(() => import("@/components/navbar"));
const HeroSection = dynamic(() => import("@/components/sections/hero-section"));
const AICapabilities = dynamic(() => import("@/components/sections/ai-capabilities"));
const AIVisualization = dynamic(() => import("@/components/sections/ai-visualization"));
const TransformBusinessSection = dynamic(() => import("@/components/sections/transform-business"));
const CaseStudies = dynamic(() => import("@/components/sections/case-studies"));
const ROICalculator = dynamic(() => import("@/components/sections/roi-calculator"));
const TechStack = dynamic(() => import("@/components/sections/tech-stack"));
const ProcessTimeline = dynamic(() => import("@/components/sections/process-timeline"));
const Footer = dynamic(() => import("@/components/sections/footer"));
const ToasterProvider = dynamic(() => import("@/components/providers/toaster-provider"));

export default function HomePage() {
  return (
    <>
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
      <ToasterProvider />
    </>
  );
} 