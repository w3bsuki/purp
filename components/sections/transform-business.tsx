"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { businessSolutions } from "@/lib/solutions";
import { cn } from "@/lib/utils";
import { 
  ArrowRight, 
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TransformBusinessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <section 
      ref={containerRef}
      className="relative py-32 lg:py-36 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black">
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent"
        />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)] opacity-20" />
      </div>

      {/* Floating Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      {/* Content Container */}
      <div className="container relative mx-auto px-4">
        {/* Header Section */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-1.5 text-sm backdrop-blur-sm"
          >
            <span className="mr-2">
              <Sparkles className="h-4 w-4 text-purple-500" />
            </span>
            <span className="bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              Transform Your Business Today
            </span>
            <span className="ml-2">
              <ArrowRight className="h-4 w-4 text-purple-500" />
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 bg-gradient-to-b from-white to-[#adadad] bg-clip-text text-4xl font-medium tracking-tight text-transparent sm:text-5xl lg:text-6xl"
          >
            Revolutionize Your Operations
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-neutral-400 md:text-xl"
          >
            Harness the power of AI to streamline processes, reduce costs, and drive unprecedented growth through intelligent automation.
          </motion.p>
        </div>

        {/* Solutions Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {businessSolutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group relative h-full">
                {/* Card Background */}
                <div className="absolute inset-0 rounded-3xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm transition-colors duration-300 group-hover:border-purple-500/50" />
                
                {/* Hover Effects */}
                <div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent" />
                  <div className="absolute inset-0 backdrop-blur-[1px]" />
                </div>

                {/* Content */}
                <div className="relative space-y-6 p-8">
                  {/* Header */}
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-purple-500/10 p-3">
                      <solution.Icon className="h-6 w-6 text-purple-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {solution.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-400">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {solution.features.map((feature) => (
                      <li key={feature.title} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-purple-500" />
                        <div>
                          <div className="font-medium text-white">
                            {feature.title}
                          </div>
                          <div className="text-sm text-neutral-400">
                            {feature.description}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Action Button */}
                  <Button
                    variant="ghost"
                    className="group/button mt-4 w-full justify-between border border-neutral-800 bg-neutral-900/50 text-white hover:bg-purple-500/10 hover:text-purple-500"
                  >
                    Learn More
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 text-center"
        >
          <Button
            size="lg"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 px-8 py-6 text-lg font-medium text-white transition-all hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(168,85,247,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started Today
              <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 