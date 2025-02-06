"use client";

import { motion } from "framer-motion";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DemoForm } from "@/components/demo-form";
import { MarqueeDemo } from "@/components/ui/code.demo";
import { ArrowRight, ArrowUpRight, Sparkles, Brain, Zap, Bot } from "lucide-react";
import { Suspense } from "react";
import { ClientAnimations } from "@/components/client-animations";

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-7xl px-4">
          <ClientAnimations>
            <div className="flex flex-col items-center justify-center gap-6 md:gap-12">
              {/* Enhanced Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex flex-col sm:flex-row items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-3 py-1.5 text-xs sm:text-sm backdrop-blur-sm"
              >
                <div className="flex items-center gap-2">
                  <Brain className="h-4 w-4 text-purple-500" />
                  <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent font-medium whitespace-nowrap">
                    Next-Gen AI Solutions
                  </span>
                </div>
                <span className="hidden sm:block text-neutral-400">|</span>
                <div className="flex items-center gap-2">
                  <Bot className="h-4 w-4 text-indigo-500" />
                  <span className="bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent whitespace-nowrap">
                    Enterprise Innovation
                  </span>
                </div>
                <span className="relative flex h-2 w-2 ml-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500"></span>
                </span>
              </motion.div>

              {/* Main Title with Enhanced Visual Effects */}
              <div className="relative">
                {/* Animated gradient backgrounds */}
                <div className="absolute -left-32 -top-32 h-[300px] w-[300px] bg-purple-500/10 blur-[100px]" />
                <div className="absolute -right-32 -top-32 h-[300px] w-[300px] bg-indigo-500/10 blur-[100px]" />
                
                <div className="relative space-y-3 text-center px-4">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white"
                  >
                    <span className="block bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                      Transform Your Business
                    </span>
                    <span className="mt-2 block bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                      with Intelligent AI
                    </span>
                  </motion.h1>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-2"
                  >
                    <div className="flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1">
                      <Zap className="h-5 w-5 text-purple-400" />
                      <span className="text-xs sm:text-sm text-purple-200 whitespace-nowrap">24hr Delivery</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1">
                      <Bot className="h-5 w-5 text-indigo-400" />
                      <span className="text-xs sm:text-sm text-indigo-200 whitespace-nowrap">AI-Powered</span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Enhanced Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="max-w-[600px] text-center px-4"
              >
                <p className="text-sm sm:text-base text-neutral-400 [text-wrap:balance]">
                  Experience the future of business automation. Our enterprise-grade AI solutions deliver
                  <span className="text-purple-400"> measurable results in 24 hours</span>. Join the AI revolution today.
                </p>
              </motion.div>

              {/* Enhanced CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg font-medium text-white transition-all hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(168,85,247,0.4)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Your AI Journey
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </Button>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto group relative overflow-hidden rounded-full border-purple-500/20 bg-black/30 px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg font-medium text-white backdrop-blur-sm transition-all hover:border-purple-500/40 hover:bg-black/40"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Schedule Demo
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                      </span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="border-neutral-800 bg-black/95 p-0 backdrop-blur-xl">
                    <Suspense>
                      <DemoForm />
                    </Suspense>
                  </DialogContent>
                </Dialog>
              </motion.div>

              {/* Enhanced Logo Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="w-full mt-8 sm:mt-16"
              >
                <div className="text-center">
                  <div className="mb-6 text-xs sm:text-sm font-medium text-neutral-500">
                    Trusted by Industry Leaders
                  </div>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent" />
                    <MarqueeDemo />
                  </div>
                </div>
              </motion.div>
            </div>
          </ClientAnimations>
        </div>
      </div>
    </div>
  );
} 