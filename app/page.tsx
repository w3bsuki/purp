import { Suspense } from "react"
import dynamic from "next/dynamic"

// Loading component
function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500" />
    </div>
  );
}

// Client page
const HomePage = dynamic(() => import("@/components/pages/home-page"), {
  loading: () => <LoadingSpinner />,
  ssr: true
});

export default function Page() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HomePage />
    </Suspense>
  );
}

