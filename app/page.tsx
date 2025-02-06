import { Suspense } from "react";
import dynamic from "next/dynamic";

// Client components
const ClientHomePage = dynamic(() => import("@/components/pages/home-page"), {
  ssr: true,
});

function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500" />
    </div>
  );
}

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

      <Suspense fallback={<LoadingSpinner />}>
        <ClientHomePage />
      </Suspense>
    </div>
  );
}

