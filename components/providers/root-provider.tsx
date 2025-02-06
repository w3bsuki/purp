"use client";

import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
        <pre className="bg-neutral-900 p-4 rounded-lg overflow-auto text-sm mb-4">
          {error.message}
        </pre>
        <button
          onClick={() => window.location.reload()}
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500" />
    </div>
  );
}

export default function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<LoadingSpinner />}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
} 