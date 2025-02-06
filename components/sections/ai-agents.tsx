"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { aiAgents } from "@/lib/solutions";
import { cn } from "@/lib/utils";
import { 
  Bot,
  FileText,
  BarChart,
  Sparkles,
  ArrowRight,
  Phone,
  BookOpen,
  BrainCircuit
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Update the icons in the aiAgents data
const agentIcons = {
  "document-ai": FileText,
  "trade-assistant": Bot,
  "analytics-agent": BarChart,
};

export function AIAgentsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeAgent, setActiveAgent] = useState<string | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <section 
      ref={containerRef}
      className="relative py-16 md:py-32 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black">
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent"
        />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)] opacity-20" />
      </div>

      {/* Animated Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"
        />
      </div>

      {/* Content Container */}
      <div className="relative mx-auto max-w-7xl px-4">
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
              <BrainCircuit className="h-4 w-4 text-indigo-500" />
            </span>
            <span className="bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              Powered by Advanced AI
            </span>
            <span className="ml-2">
              <Sparkles className="h-4 w-4 text-indigo-500" />
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 bg-gradient-to-b from-white to-[#adadad] bg-clip-text text-4xl font-medium tracking-tight text-transparent sm:text-5xl lg:text-6xl"
          >
            Meet Our AI Agents
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-neutral-400 md:text-xl"
          >
            Our specialized AI agents work together seamlessly to transform your business processes with unprecedented efficiency and intelligence.
          </motion.p>
        </div>

        {/* Agents Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {aiAgents.map((agent, index) => {
            const Icon = agentIcons[agent.id as keyof typeof agentIcons];
            return (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group/card perspective-1000"
                onMouseEnter={() => setActiveAgent(index)}
                onMouseLeave={() => setActiveAgent(null)}
              >
                <motion.div
                  className="relative preserve-3d transition-all duration-500 [transform-style:preserve-3d]"
                  animate={{
                    rotateX: activeAgent === index ? 5 : 0,
                    rotateY: activeAgent === index ? 5 : 0,
                    scale: activeAgent === index ? 1.02 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                >
                  {/* Card Front */}
                  <div className="relative h-full">
                    <div className={cn(
                      "relative overflow-hidden rounded-3xl border bg-neutral-900/50 p-6 backdrop-blur-sm transition-colors duration-300",
                      activeAgent === index ? "border-indigo-500/50" : "border-neutral-800"
                    )}>
                      {/* Card Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-3"
                        >
                          {Icon && <Icon className="h-8 w-8 text-indigo-400" />}
                        </motion.div>
                        <h3 className="text-xl font-semibold text-white">
                          {agent.name}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-neutral-400 mb-6">
                        {agent.description}
                      </p>

                      {/* Features with 3D Effect */}
                      <ul className="space-y-4">
                        {agent.features.map((feature, featureIndex) => (
                          <motion.li
                            key={feature.title}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index * 0.1) + (featureIndex * 0.1) }}
                            className="group/feature relative"
                          >
                            <div className="relative z-10 flex items-start gap-3 rounded-xl border border-neutral-800 bg-neutral-900/50 p-3 transition-colors duration-300 group-hover/feature:border-indigo-500/50">
                              <div className="mt-1 rounded-lg bg-indigo-500/10 p-1">
                                <Sparkles className="h-4 w-4 text-indigo-400" />
                              </div>
                              <div>
                                <div className="font-medium text-white">
                                  {feature.title}
                                </div>
                                <div className="text-sm text-neutral-400">
                                  {feature.description}
                                </div>
                              </div>
                            </div>
                            
                            {/* Feature Hover Effect */}
                            <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover/feature:opacity-100">
                              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent" />
                              <div className="absolute inset-0 backdrop-blur-[1px]" />
                            </div>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Action Buttons */}
                      <div className="mt-6 flex gap-2">
                        <Button
                          variant="ghost"
                          className="flex-1 border border-neutral-800 bg-neutral-900/50 text-white hover:bg-indigo-500/10 hover:text-indigo-400"
                        >
                          <Phone className="mr-2 h-4 w-4" />
                          Call
                        </Button>
                        <Button
                          variant="ghost"
                          className="flex-1 border border-neutral-800 bg-neutral-900/50 text-white hover:bg-indigo-500/10 hover:text-indigo-400"
                        >
                          <BookOpen className="mr-2 h-4 w-4" />
                          Learn More
                        </Button>
                      </div>

                      {/* Card Hover Effects */}
                      <div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover/card:opacity-100">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent" />
                        <div className="absolute inset-0 backdrop-blur-[1px]" />
                      </div>

                      {/* 3D Lighting Effect */}
                      <div 
                        className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
                        style={{
                          transform: "translateZ(2px)",
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
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
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-6 text-lg font-medium text-white transition-all hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(99,102,241,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Hire Our AI Agents
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 