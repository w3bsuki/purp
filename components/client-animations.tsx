"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface ClientAnimationsProps {
  children: React.ReactNode;
}

export function ClientAnimations({ children }: ClientAnimationsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Stagger children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      }
    },
  };

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Animated content */}
      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full"
      >
        {Array.isArray(children) ? (
          children.map((child, i) => (
            <motion.div key={i} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        ) : (
          <motion.div variants={itemVariants}>{children}</motion.div>
        )}
      </motion.div>
    </>
  );
} 