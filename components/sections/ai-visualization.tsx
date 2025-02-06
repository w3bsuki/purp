"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Network, 
  Sparkles,
  Zap,
  ArrowRight,
  Bot,
  Cpu
} from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";

const visualNodes = [
  { x: 20, y: 20, mobileX: 30, mobileY: 15, icon: Brain, label: "Neural Processing" },
  { x: 80, y: 30, mobileX: 70, mobileY: 30, icon: Network, label: "Deep Learning" },
  { x: 50, y: 60, mobileX: 50, mobileY: 50, icon: Bot, label: "AI Agents" },
  { x: 15, y: 70, mobileX: 25, mobileY: 70, icon: Cpu, label: "Edge Computing" },
  { x: 85, y: 80, mobileX: 75, mobileY: 85, icon: Sparkles, label: "Machine Learning" },
];

const connections = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [1, 3], [0, 2]
];

export default function AIVisualization() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<number | null>(null);
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
            <Zap className="h-4 w-4 text-purple-500" />
            <span className="bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              Advanced AI Architecture
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
              Intelligent Systems Working Together
            </span>
          </motion.h2>
        </div>

        {/* 3D Visualization */}
        <div className="relative h-[400px] md:h-[600px] w-full perspective-1000">
          <div className="absolute inset-0">
            {/* Connection Lines */}
            <svg className="absolute inset-0 h-full w-full">
              {connections.map(([from, to], index) => {
                const fromNode = visualNodes[from];
                const toNode = visualNodes[to];
                const isActive = activeNode === from || activeNode === to;

                const fromX = isMobile ? fromNode.mobileX : fromNode.x;
                const fromY = isMobile ? fromNode.mobileY : fromNode.y;
                const toX = isMobile ? toNode.mobileX : toNode.x;
                const toY = isMobile ? toNode.mobileY : toNode.y;

                return (
                  <motion.line
                    key={`${from}-${to}`}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    x1={`${fromX}%`}
                    y1={`${fromY}%`}
                    x2={`${toX}%`}
                    y2={`${toY}%`}
                    stroke={isActive ? "#A855F7" : "#262626"}
                    strokeWidth={isMobile ? "1.5" : "2"}
                    strokeDasharray="6 6"
                    className="transition-colors duration-300"
                  />
                );
              })}
            </svg>

            {/* Nodes */}
            {visualNodes.map((node, index) => {
              const Icon = node.icon;
              const nodeX = isMobile ? node.mobileX : node.x;
              const nodeY = isMobile ? node.mobileY : node.y;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="absolute"
                  style={{ left: `${nodeX}%`, top: `${nodeY}%` }}
                  onMouseEnter={() => setActiveNode(index)}
                  onMouseLeave={() => setActiveNode(null)}
                  onTouchStart={() => setActiveNode(index)}
                  onTouchEnd={() => setActiveNode(null)}
                >
                  <div className="relative -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group relative rounded-xl border border-neutral-800 bg-neutral-900/50 p-3 md:p-4 backdrop-blur-sm transition-colors duration-300 ${
                        activeNode === index ? "border-purple-500/50" : ""
                      }`}
                    >
                      <div className="relative z-10 flex flex-col items-center gap-2">
                        <div className={`rounded-lg bg-purple-500/10 p-1.5 md:p-2 transition-colors duration-300 ${
                          activeNode === index ? "bg-purple-500/20" : ""
                        }`}>
                          <Icon className={`h-4 w-4 md:h-6 md:w-6 transition-colors duration-300 ${
                            activeNode === index ? "text-purple-400" : "text-neutral-400"
                          }`} />
                        </div>
                        <span className="text-xs md:text-sm font-medium text-neutral-300 text-center">
                          {node.label}
                        </span>
                      </div>

                      {/* Hover/Touch Effect */}
                      <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent" />
                        <div className="absolute inset-0 backdrop-blur-[1px]" />
                      </div>
                    </motion.div>

                    {/* Connection Points */}
                    <div className="absolute -inset-2">
                      <div className="absolute inset-0 animate-ping rounded-full bg-purple-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
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