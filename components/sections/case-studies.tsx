"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  TrendingUp, 
  LineChart,
  BarChart,
  DollarSign,
  Clock,
  CheckCircle2
} from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";

const caseStudies = [
  {
    title: "Global Financial Institution",
    category: "Finance",
    metrics: [
      { label: "Processing Time", value: "-85%", icon: Clock },
      { label: "Cost Reduction", value: "67%", icon: DollarSign },
      { label: "Accuracy Rate", value: "99.9%", icon: CheckCircle2 },
    ],
    description: "Automated document processing and risk assessment, reducing manual work by 85% while improving accuracy.",
    results: [
      "Processed 1M+ documents monthly",
      "Saved $2.5M annually",
      "Reduced compliance risks by 90%"
    ],
    color: "purple"
  },
  {
    title: "E-commerce Giant",
    category: "Retail",
    metrics: [
      { label: "Revenue Increase", value: "+45%", icon: TrendingUp },
      { label: "Customer Satisfaction", value: "92%", icon: LineChart },
      { label: "Efficiency Gain", value: "73%", icon: BarChart },
    ],
    description: "Implemented AI-driven inventory management and demand forecasting, boosting revenue and efficiency.",
    results: [
      "Optimized $100M inventory",
      "Reduced stockouts by 78%",
      "Improved forecast accuracy by 40%"
    ],
    color: "indigo"
  },
  {
    title: "Healthcare Provider",
    category: "Healthcare",
    metrics: [
      { label: "Patient Care Time", value: "+35%", icon: Clock },
      { label: "Cost Savings", value: "52%", icon: DollarSign },
      { label: "Diagnostic Accuracy", value: "97%", icon: CheckCircle2 },
    ],
    description: "Deployed AI agents for patient data analysis and automated reporting, enhancing care quality.",
    results: [
      "Analyzed 500k+ patient records",
      "Reduced reporting time by 65%",
      "Improved diagnostic speed by 45%"
    ],
    color: "blue"
  }
];

export function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCase, setActiveCase] = useState<number | null>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <section ref={containerRef} className="relative py-16 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black">
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent"
        />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)] opacity-20" />
      </div>

      {/* Content Container */}
      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-1.5 text-sm backdrop-blur-sm mb-6 md:mb-8"
          >
            <TrendingUp className="h-4 w-4 text-purple-500" />
            <span className="bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              Success Stories
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl px-4"
          >
            <span className="block bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
              Real Results, Real Impact
            </span>
          </motion.h2>
        </div>

        {/* Case Studies Grid */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setActiveCase(index)}
              onMouseLeave={() => setActiveCase(null)}
              className="group relative"
            >
              <div className={`relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/50 p-6 md:p-8 backdrop-blur-sm transition-colors duration-300 ${
                activeCase === index ? `border-${study.color}-500/50` : ""
              }`}>
                {/* Category Badge */}
                <div className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900/50 px-3 py-1 text-xs backdrop-blur-sm mb-4">
                  <span className="text-neutral-400">{study.category}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  {study.title}
                </h3>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.metrics.map((metric, idx) => {
                    const Icon = metric.icon;
                    return (
                      <div key={idx} className="text-center">
                        <div className={`mx-auto rounded-lg bg-${study.color}-500/10 p-2 mb-2`}>
                          <Icon className={`h-5 w-5 text-${study.color}-400`} />
                        </div>
                        <div className={`text-${study.color}-400 font-semibold`}>
                          {metric.value}
                        </div>
                        <div className="text-xs text-neutral-400">
                          {metric.label}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Description */}
                <p className="text-neutral-400 text-sm md:text-base mb-6">
                  {study.description}
                </p>

                {/* Results */}
                <ul className="space-y-2">
                  {study.results.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-neutral-300">
                      <CheckCircle2 className={`h-4 w-4 mt-1 shrink-0 text-${study.color}-500`} />
                      {result}
                    </li>
                  ))}
                </ul>

                {/* Hover Effects */}
                <div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className={`absolute inset-0 bg-gradient-to-br from-${study.color}-500/10 via-transparent to-transparent`} />
                  <div className="absolute inset-0 backdrop-blur-[1px]" />
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
          className="mt-12 md:mt-20 text-center"
        >
          <Button
            size="lg"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 px-6 py-5 md:px-8 md:py-6 text-base md:text-lg font-medium text-white transition-all hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(168,85,247,0.4)] active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              View All Case Studies
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 