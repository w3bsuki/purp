"use client";

import { motion } from "framer-motion";
import { GradientHeading } from "./gradient-heading";
import { cn } from "@/lib/utils";

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  align?: "left" | "center";
  variant?: "default" | "alternate";
  children: React.ReactNode;
}

export function FeatureSection({
  title,
  subtitle,
  align = "center",
  variant = "default",
  children
}: FeatureSectionProps) {
  return (
    <section className={cn(
      "relative w-full py-32 lg:py-40",
      variant === "alternate" ? "bg-black/50" : "bg-black/30"
    )}>
      {variant === "default" && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-purple-500/5 to-black/0" />
      )}
      <div className="container relative mx-auto px-4">
        <div className={cn(
          "mx-auto max-w-[800px] space-y-4",
          align === "center" ? "text-center" : "text-left"
        )}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-8 bg-gradient-to-b from-white to-[#adadad] bg-clip-text text-4xl font-medium tracking-tight text-transparent sm:text-5xl">
              {title}
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-neutral-400"
          >
            {subtitle}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
} 