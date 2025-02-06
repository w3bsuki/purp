"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Coins, Box, CreditCard, FileText, Bot, BarChart } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Solution } from "@/lib/solutions";

const iconMap = {
  "coins": Coins,
  "box": Box,
  "credit-card": CreditCard,
  "file-text": FileText,
  "bot": Bot,
  "bar-chart": BarChart,
} as const;

interface SolutionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  solution: Solution;
}

export function SolutionCard({ solution, className, ...props }: SolutionCardProps) {
  const Icon = iconMap[solution.icon as keyof typeof iconMap];

  if (!Icon) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className={cn(
        "group relative overflow-hidden rounded-lg border bg-background p-6 shadow-md transition-all hover:shadow-lg",
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-neutral-100 p-2 dark:bg-neutral-800">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold">{solution.name}</h3>
        </div>
        <p className="text-muted-foreground">{solution.description}</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {solution.features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="space-y-2 rounded-lg border bg-neutral-50 p-4 dark:bg-neutral-900"
            >
              <h4 className="font-medium">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 