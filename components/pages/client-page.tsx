"use client";

import { Suspense } from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { AICapabilities } from "@/components/sections/ai-capabilities";
import { AIVisualization } from "@/components/sections/ai-visualization";
import { TransformBusinessSection } from "@/components/sections/transform-business";
import { CaseStudies } from "@/components/sections/case-studies";
import { ROICalculator } from "@/components/sections/roi-calculator";
import { TechStack } from "@/components/sections/tech-stack";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { Footer } from "@/components/sections/footer";
import { ClientToaster } from "@/components/providers/client-toaster";

function LoadingSpinner() {
  return (
    <div className="min-h-[40vh] bg-black flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500" />
    </div>
  );
}

export default function ClientPage() {
  return (
    <>
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
      <ClientToaster />
    </>
  );
} 