"use client";

import { ArrowRight } from "lucide-react";
import type { Solution } from "@/lib/solutions";
import { cn } from "@/lib/utils";
import { MotionDiv } from "./motion";

interface ServicesGridProps {
  items: Solution[];
  variant?: "default" | "alternate";
}

export function ServicesGrid({ items, variant = "default" }: ServicesGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <MotionDiv
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <MotionDiv
            whileHover={{ scale: 1.02 }}
            className={cn(
              "group relative overflow-hidden rounded-3xl border p-8 transition-all duration-300",
              variant === "alternate" 
                ? "border-neutral-800 bg-black/50 hover:border-purple-500/50 hover:bg-purple-500/5" 
                : "border-neutral-800 bg-black/30 hover:border-indigo-500/50 hover:bg-indigo-500/5"
            )}
          >
            {/* Gradient overlay */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className={cn(
                "absolute inset-0",
                variant === "alternate"
                  ? "bg-gradient-to-br from-purple-500/10 via-transparent to-transparent"
                  : "bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent"
              )} />
              <div className="absolute inset-0 backdrop-blur-[1px]" />
            </div>

            {/* Content */}
            <div className="relative space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {item.name}
                </h3>
                <p className="text-neutral-400">
                  {item.description}
                </p>
              </div>

              <div className="space-y-4">
                {item.features.map((feature, featureIndex) => (
                  <MotionDiv
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (featureIndex * 0.1) }}
                    key={feature.title}
                    className="group/item flex items-start gap-3"
                  >
                    <ArrowRight 
                      className={cn(
                        "h-5 w-5 shrink-0 transition-transform duration-300 group-hover/item:translate-x-1",
                        variant === "alternate" ? "text-purple-400" : "text-indigo-400"
                      )}
                    />
                    <div>
                      <div className="font-medium leading-none mb-1.5 text-white">
                        {feature.title}
                      </div>
                      <div className="text-sm leading-relaxed text-neutral-400">
                        {feature.description}
                      </div>
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </div>
          </MotionDiv>
        </MotionDiv>
      ))}
    </div>
  );
} 