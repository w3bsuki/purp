"use client";

import { Suspense } from "react"
import dynamic from "next/dynamic"

// Dynamically import components with no SSR and loading states
const Navbar = dynamic(() => import("@/components/navbar"), { 
  ssr: false,
  loading: () => <LoadingFallback />
});

const HeroSection = dynamic(() => import("@/components/sections/hero-section"), { 
  ssr: false,
  loading: () => <LoadingFallback />
});

const AICapabilities = dynamic(() => import("@/components/sections/ai-capabilities"), { 
  ssr: false,
  loading: () => <LoadingFallback />
});

const AIVisualization = dynamic(() => import("@/components/sections/ai-visualization"), { 
  ssr: false,
  loading: () => <LoadingFallback />
});

const TransformBusinessSection = dynamic(() => import("@/components/sections/transform-business"), { 
  ssr: false,
  loading: () => <LoadingFallback />
});

const CaseStudies = dynamic(() => import("@/components/sections/case-studies"), { 
  ssr: false,
  loading: () => <LoadingFallback />
});

const ROICalculator = dynamic(() => import("@/components/sections/roi-calculator"), { 
  ssr: false,
  loading: () => <LoadingFallback />
});

const TechStack = dynamic(() => import("@/components/sections/tech-stack"), { 
  ssr: false,
  loading: () => <LoadingFallback />
});

const ProcessTimeline = dynamic(() => import("@/components/sections/process-timeline"), { 
  ssr: false,
  loading: () => <LoadingFallback />
});

const Footer = dynamic(() => import("@/components/sections/footer"), { 
  ssr: false,
  loading: () => <LoadingFallback />
});

// Client components
const ToasterProvider = dynamic(() => import("@/components/providers/toaster-provider"), {
  ssr: false,
});

const ClientPage = dynamic(() => import("@/components/pages/home-page"), {
  loading: () => (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500" />
    </div>
  ),
});

function LoadingFallback() {
  return (
    <div className="min-h-[40vh] bg-black flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500" />
    </div>
  );
}

export default function Home() {
  return <ClientPage />;
}

