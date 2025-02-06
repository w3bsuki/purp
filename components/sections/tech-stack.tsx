"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  Code2,
  Server,
  Database,
  Cloud,
  Shield,
  Cpu,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";

const colorMap = {
  purple: {
    border: "border-purple-500/50",
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    gradient: "from-purple-500/10"
  },
  indigo: {
    border: "border-indigo-500/50",
    bg: "bg-indigo-500/10",
    text: "text-indigo-400",
    gradient: "from-indigo-500/10"
  },
  blue: {
    border: "border-blue-500/50",
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    gradient: "from-blue-500/10"
  },
  cyan: {
    border: "border-cyan-500/50",
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    gradient: "from-cyan-500/10"
  },
  teal: {
    border: "border-teal-500/50",
    bg: "bg-teal-500/10",
    text: "text-teal-400",
    gradient: "from-teal-500/10"
  },
  emerald: {
    border: "border-emerald-500/50",
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    gradient: "from-emerald-500/10"
  }
} as const;

const techStack = [
  {
    category: "Frontend",
    icon: Code2,
    technologies: [
      { name: "Next.js 14", description: "App Router & React Server Components" },
      { name: "TypeScript", description: "Type-safe development" },
      { name: "Tailwind CSS", description: "Utility-first styling" },
      { name: "Framer Motion", description: "Smooth animations" },
    ],
    color: "purple"
  },
  {
    category: "Backend",
    icon: Server,
    technologies: [
      { name: "Node.js", description: "Runtime environment" },
      { name: "tRPC", description: "End-to-end type safety" },
      { name: "Prisma", description: "Type-safe ORM" },
      { name: "GraphQL", description: "Efficient data fetching" },
    ],
    color: "indigo"
  },
  {
    category: "Database",
    icon: Database,
    technologies: [
      { name: "PostgreSQL", description: "Primary database" },
      { name: "Redis", description: "Caching layer" },
      { name: "MongoDB", description: "Document storage" },
      { name: "Elasticsearch", description: "Search engine" },
    ],
    color: "blue"
  },
  {
    category: "Infrastructure",
    icon: Cloud,
    technologies: [
      { name: "AWS", description: "Cloud platform" },
      { name: "Docker", description: "Containerization" },
      { name: "Kubernetes", description: "Orchestration" },
      { name: "Terraform", description: "Infrastructure as Code" },
    ],
    color: "cyan"
  },
  {
    category: "Security",
    icon: Shield,
    technologies: [
      { name: "Auth.js", description: "Authentication" },
      { name: "JWT", description: "Token-based auth" },
      { name: "HTTPS", description: "TLS encryption" },
      { name: "WAF", description: "Web Application Firewall" },
    ],
    color: "teal"
  },
  {
    category: "AI/ML",
    icon: Cpu,
    technologies: [
      { name: "TensorFlow", description: "Machine Learning" },
      { name: "PyTorch", description: "Deep Learning" },
      { name: "Scikit-learn", description: "Data Science" },
      { name: "OpenAI", description: "AI Integration" },
    ],
    color: "emerald"
  }
];

export function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  
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
            <Code2 className="h-4 w-4 text-purple-500" />
            <span className="bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              Modern Tech Stack
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
              Built with Cutting-Edge Technology
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-neutral-400 text-base md:text-lg"
          >
            Our stack is carefully chosen to deliver scalable, secure, and high-performance solutions
          </motion.p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((stack, index) => {
            const Icon = stack.icon;
            const colors = colorMap[stack.color as keyof typeof colorMap];
            
            return (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  perspective: "1000px"
                }}
              >
                <motion.div
                  whileHover={{ 
                    rotateX: isMobile ? 0 : 5,
                    rotateY: isMobile ? 0 : 5,
                    translateZ: isMobile ? 0 : 20
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                  className="group relative h-full"
                >
                  {/* Card Background */}
                  <div className={cn(
                    "relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm transition-colors duration-300",
                    hoveredCard === index && colors.border
                  )}>
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={cn("rounded-xl p-2.5", colors.bg)}>
                        <Icon className={cn("h-6 w-6", colors.text)} />
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {stack.category}
                      </h3>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-4">
                      {stack.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: (index * 0.1) + (techIndex * 0.1) }}
                          className="group/item flex items-center justify-between"
                        >
                          <div>
                            <div className="font-medium text-white">
                              {tech.name}
                            </div>
                            <div className="text-sm text-neutral-400">
                              {tech.description}
                            </div>
                          </div>
                          <ExternalLink className={cn(
                            "h-4 w-4 opacity-0 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:translate-x-1",
                            colors.text
                          )} />
                        </motion.div>
                      ))}
                    </div>

                    {/* Hover Effects */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className={cn(
                        "absolute inset-0 bg-gradient-to-br via-transparent to-transparent",
                        colors.gradient
                      )} />
                      <div className="absolute inset-0 backdrop-blur-[1px]" />
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
          className="mt-12 md:mt-20 text-center"
        >
          <Button
            size="lg"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 px-6 py-5 md:px-8 md:py-6 text-base md:text-lg font-medium text-white transition-all hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(168,85,247,0.4)] active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Our Stack
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 