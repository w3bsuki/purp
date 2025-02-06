"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { 
  Calculator,
  DollarSign,
  Clock,
  TrendingUp,
  Users,
  Zap,
  ArrowRight,
  ChartBar,
  Sparkles
} from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";

interface ROIMetrics {
  annualSavings: number;
  productivityGain: number;
  roi: number;
  paybackPeriod: number;
}

export function ROICalculator() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  // Form state
  const [employees, setEmployees] = useState(100);
  const [avgSalary, setAvgSalary] = useState(60000);
  const [automationLevel, setAutomationLevel] = useState(50);
  
  // Calculate ROI metrics
  const calculateROI = (): ROIMetrics => {
    const hoursPerYear = 2080; // 40 hours/week * 52 weeks
    const hourlyRate = avgSalary / hoursPerYear;
    const automationDecimal = automationLevel / 100;
    
    // Calculate time savings
    const hoursAutomated = hoursPerYear * automationDecimal;
    const timeSavingsPerEmployee = hoursAutomated * 0.85; // Assuming 85% efficiency
    
    // Calculate cost savings
    const costSavingsPerEmployee = timeSavingsPerEmployee * hourlyRate;
    const totalAnnualSavings = costSavingsPerEmployee * employees;
    
    // Implementation cost estimate (simplified)
    const implementationCost = 50000 + (employees * 500);
    
    // Calculate ROI and metrics
    const roi = ((totalAnnualSavings - implementationCost) / implementationCost) * 100;
    const paybackPeriod = implementationCost / totalAnnualSavings * 12; // in months
    
    return {
      annualSavings: totalAnnualSavings,
      productivityGain: timeSavingsPerEmployee / hoursPerYear * 100,
      roi: roi,
      paybackPeriod: paybackPeriod
    };
  };

  const metrics = calculateROI();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

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
            <Calculator className="h-4 w-4 text-purple-500" />
            <span className="bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              ROI Calculator
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
              Calculate Your AI ROI
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-neutral-400 text-base md:text-lg"
          >
            See how much you can save with our AI solutions
          </motion.p>
        </div>

        {/* Calculator Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 p-6 md:p-8 rounded-3xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold text-white">Enter Your Details</h3>
            
            {/* Number of Employees */}
            <div className="space-y-4">
              <label className="flex items-center justify-between text-sm text-neutral-400">
                <span>Number of Employees</span>
                <Users className="h-4 w-4 text-purple-500" />
              </label>
              <Input
                type="number"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="h-12 border-neutral-800 bg-neutral-900/50 text-white"
              />
            </div>

            {/* Average Salary */}
            <div className="space-y-4">
              <label className="flex items-center justify-between text-sm text-neutral-400">
                <span>Average Annual Salary</span>
                <DollarSign className="h-4 w-4 text-purple-500" />
              </label>
              <Input
                type="number"
                value={avgSalary}
                onChange={(e) => setAvgSalary(Number(e.target.value))}
                className="h-12 border-neutral-800 bg-neutral-900/50 text-white"
              />
            </div>

            {/* Automation Level */}
            <div className="space-y-4">
              <label className="flex items-center justify-between text-sm text-neutral-400">
                <span>Automation Level (%)</span>
                <span className="text-purple-500">{automationLevel}%</span>
              </label>
              <Slider
                value={[automationLevel]}
                onValueChange={([value]) => setAutomationLevel(value)}
                max={100}
                step={1}
                className="py-4"
              />
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {/* Annual Savings */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="col-span-2 p-6 rounded-3xl border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-sm font-medium text-neutral-400">Annual Savings</h4>
                <DollarSign className="h-5 w-5 text-purple-400" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-purple-400">
                ${Math.round(metrics.annualSavings).toLocaleString()}
              </div>
            </motion.div>

            {/* ROI */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-3xl border border-indigo-500/20 bg-indigo-500/5 backdrop-blur-sm"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-sm font-medium text-neutral-400">ROI</h4>
                <TrendingUp className="h-5 w-5 text-indigo-400" />
              </div>
              <div className="text-2xl font-bold text-indigo-400">
                {Math.round(metrics.roi)}%
              </div>
            </motion.div>

            {/* Payback Period */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-3xl border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-sm font-medium text-neutral-400">Payback Period</h4>
                <Clock className="h-5 w-5 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-blue-400">
                {Math.round(metrics.paybackPeriod)} mo
              </div>
            </motion.div>

            {/* Productivity Gain */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="col-span-2 p-6 rounded-3xl border border-teal-500/20 bg-teal-500/5 backdrop-blur-sm"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-sm font-medium text-neutral-400">Productivity Gain</h4>
                <Zap className="h-5 w-5 text-teal-400" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-teal-400">
                {Math.round(metrics.productivityGain)}%
              </div>
            </motion.div>
          </motion.div>
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
              Get Detailed Analysis
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 