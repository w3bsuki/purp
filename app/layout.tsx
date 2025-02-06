import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] })

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
};

// Separate client component for error handling
const ClientErrorFallback = ({ error }: { error: Error }) => {
  "use client";
  
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
};

// Loading component
function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500" />
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ErrorBoundary FallbackComponent={ClientErrorFallback}>
          <Suspense fallback={<LoadingSpinner />}>
            {children}
          </Suspense>
        </ErrorBoundary>
      </body>
    </html>
  );
}

