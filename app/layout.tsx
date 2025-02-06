import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next";
import RootProvider from "@/components/providers/root-provider";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <RootProvider>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}

