"use client";

import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import { Suspense } from "react";
import { Toaster } from "sonner";
import { ErrorBoundary } from "react-error-boundary";
import { metadata } from "./metadata";

const inter = Inter({ subsets: ["latin"] })

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0]} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
      </head>
      <body className={inter.className}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={
            <div className="min-h-screen bg-black flex items-center justify-center">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500" />
            </div>
          }>
            {children}
            <Toaster position="top-center" />
          </Suspense>
        </ErrorBoundary>
      </body>
    </html>
  );
}

