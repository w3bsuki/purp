"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  Brain, 
  Cpu, 
  Network, 
  LineChart, 
  Shield, 
  Zap,
  ArrowRight,
  Bot
} from "lucide-react";
import { Button } from "@/components/ui/button";

const capabilities = [
  {
    icon: Brain,
    title: "Advanced NLP",
    description: "Process and understand complex human language with state-of-the-art natural language processing.",
    color: "purple"
  },
  {
    icon: Network,
    title: "Neural Networks",
    description: "Deep learning models that adapt and evolve with your business needs.",
    color: "indigo"
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "Forecast trends and make data-driven decisions with AI-powered analytics.",
    color: "blue"
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Enterprise-grade security with full regulatory compliance.",
    color: "cyan"
  },
  {
    icon: Cpu,
    title: "Edge Computing",
    description: "Process data at the source for faster, more efficient operations.",
    color: "teal"
  },
  {
    icon: Bot,
    title: "Autonomous Agents",
    description: "Self-learning AI agents that optimize your business processes 24/7.",
    color: "green"
  }
];

export function AICapabilities() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black">
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent"
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
          className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"
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
          className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-1.5 text-sm backdrop-blur-sm mb-8"
          >
            <Zap className="h-4 w-4 text-purple-500" />
            <span className="bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              AI Capabilities
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            <span className="block bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
              Next-Generation AI Technology
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-neutral-400"
          >
            Leverage our cutting-edge AI capabilities to transform your business operations.
            Built for enterprise scale with security and compliance at its core.
          </motion.p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="group relative h-full">
                {/* Card Background */}
                <div className="absolute inset-0 rounded-3xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm transition-all duration-300 group-hover:border-purple-500/50" />
                
                {/* Hover Effects */}
                <div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent" />
                  <div className="absolute inset-0 backdrop-blur-[1px]" />
                </div>

                {/* Content */}
                <div className="relative p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`rounded-2xl bg-${capability.color}-500/10 p-3`}
                    >
                      <capability.icon className={`h-8 w-8 text-${capability.color}-400`} />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white">
                      {capability.title}
                    </h3>
                  </div>
                  <p className="text-neutral-400">
                    {capability.description}
                  </p>
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
          className="mt-20 text-center"
        >
          <Button
            size="lg"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 px-8 py-6 text-lg font-medium text-white transition-all hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(168,85,247,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Our Technology
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 