import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import { Suspense } from "react";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] })

// Import error boundary component dynamically with no SSR
const ErrorBoundaryClient = dynamic(() => import("@/components/error-boundary"), { ssr: false });

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
        <ErrorBoundaryClient>
          <Suspense fallback={<LoadingSpinner />}>
            {children}
          </Suspense>
        </ErrorBoundaryClient>
      </body>
    </html>
  );
}

