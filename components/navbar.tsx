"use client";

import { useState, useEffect } from "react";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Menu, 
  X, 
  ChevronRight, 
  Star, 
  ArrowUpRight, 
  MessageCircle,
  MessageSquare
} from "lucide-react"
import { MotionDiv } from "@/components/ui/motion"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { 
    name: "Agents", 
    href: "/agents",
    description: "Meet our AI-powered digital workforce",
    icon: Star,
    badge: "New"
  },
  { 
    name: "Solutions", 
    href: "/solutions",
    description: "Explore our business solutions",
    icon: ChevronRight
  },
  { 
    name: "About", 
    href: "/about",
    description: "Learn about our mission",
    icon: MessageCircle
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Enhanced scroll effect with smooth transitions
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Mouse movement effect for the gradient
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const navbar = document.getElementById('main-navbar');
      if (navbar) {
        const rect = navbar.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <MotionDiv
      initial={{ y: -20, opacity: 0 }}
      animate={{ 
        y: scrollDirection === "down" && scrolled ? -100 : 0,
        opacity: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="fixed top-0 z-50 w-full"
    >
      {/* Animated gradient line */}
      <div className="absolute inset-x-0 -top-px h-px">
        <div className="h-px w-full animate-gradient-x bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      </div>

      {/* 3D Glass Effect Navbar */}
      <div 
        id="main-navbar"
        className={cn(
          "relative border-b backdrop-blur-xl backdrop-saturate-200 transition-all duration-500",
          scrolled 
            ? "border-neutral-800/20 bg-black/50 shadow-[0_2px_20px_-2px_rgba(0,0,0,0.2)]" 
            : "border-transparent bg-transparent"
        )}
        style={{
          backgroundImage: scrolled ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(168,85,247,0.08), transparent 25%)` : 'none'
        }}
      >
        <div className="container relative mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
          {/* Logo with 3D flip effect */}
          <Link href="/" className="group relative perspective-1000">
            <MotionDiv
              whileHover={{ rotateX: 360 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="flex items-center space-x-3"
            >
              <div className="relative flex h-10 w-10 items-center justify-center">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 blur-sm transition-all duration-500 group-hover:blur-md group-hover:scale-110" />
                <div className="relative flex h-full w-full items-center justify-center rounded-xl bg-black">
                  <span className="bg-gradient-to-br from-white to-white/70 bg-clip-text text-lg font-bold text-transparent">A</span>
                </div>
              </div>
              <span className="relative bg-gradient-to-r from-white to-white/60 bg-clip-text text-lg font-semibold text-transparent">
                Amane Soft
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-purple-500/60 via-white/50 to-transparent transition-all duration-500 group-hover:w-full" />
              </span>
            </MotionDiv>
          </Link>

          {/* Center Navigation */}
          <nav className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex space-x-1">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="group relative px-4 py-2"
                  >
                    <div className="relative z-10 flex items-center gap-2">
                      <MotionDiv
                        whileHover={{ scale: 1.05 }}
                        className={cn(
                          "transition-colors duration-200",
                          isActive 
                            ? "text-white" 
                            : "text-neutral-400 group-hover:text-white"
                        )}
                      >
                        {item.name}
                        {item.badge && (
                          <span className="absolute -right-6 -top-2">
                            <span className="relative flex h-2 w-2">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
                              <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500" />
                            </span>
                          </span>
                        )}
                      </MotionDiv>
                    </div>

                    {/* Hover background effect */}
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <MotionDiv
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="absolute inset-0 -z-10"
                          layoutId="navbar-hover"
                          transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
                        >
                          {/* Animated gradient background */}
                          <div className="absolute inset-0 rounded-lg bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]" />
                          
                          {/* Geometric shapes */}
                          <div className="absolute inset-0 overflow-hidden rounded-lg">
                            <div className="absolute -left-2 top-1/2 h-8 w-8 -translate-y-1/2 transform bg-purple-500/10 blur-lg" />
                            <div className="absolute -right-2 top-1/2 h-8 w-8 -translate-y-1/2 transform bg-indigo-500/10 blur-lg" />
                            <div className="absolute left-1/2 -top-2 h-8 w-8 -translate-x-1/2 transform bg-pink-500/10 blur-lg" />
                            <div className="absolute left-1/2 -bottom-2 h-8 w-8 -translate-x-1/2 transform bg-blue-500/10 blur-lg" />
                          </div>

                          {/* Animated border */}
                          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 via-transparent to-indigo-500/20 opacity-50" />
                          <div className="absolute inset-[1px] rounded-lg bg-black/50 backdrop-blur-sm" />
                        </MotionDiv>
                      )}
                    </AnimatePresence>

                    {/* Active indicator */}
                    {isActive && (
                      <MotionDiv
                        layoutId="navbar-active"
                        className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-purple-500/60 via-purple-500 to-purple-500/60"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}

                    {/* Enhanced Tooltip */}
                    <div className="absolute left-1/2 top-full -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                      <MotionDiv
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileHover={{ scale: 1 }}
                        animate={{ scale: 0.95, opacity: 1 }}
                        className="relative flex items-center gap-2 rounded-full border border-neutral-800/50 bg-neutral-900/90 px-3 py-1.5 text-xs text-neutral-400 shadow-xl"
                      >
                        <item.icon className="h-3.5 w-3.5" />
                        <span>{item.description}</span>
                        <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-neutral-800/50 bg-neutral-900/90" />
                      </MotionDiv>
                    </div>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Contact Button */}
            <MotionDiv whileHover={{ scale: 1.05 }} className="group hidden md:block">
              <Button 
                variant="ghost" 
                size="sm"
                className="relative overflow-hidden text-neutral-300 hover:text-white"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                  <span>Contact</span>
                </span>
                <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              </Button>
            </MotionDiv>

            {/* Demo Button with 3D effect */}
            <MotionDiv
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="sm"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 px-4 py-2 transition-all duration-500 hover:shadow-[0_0_20px_4px_rgba(168,85,247,0.4)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get a Demo
                  <MotionDiv
                    animate={{ x: [0, 2, 0], y: [0, -2, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </MotionDiv>
                </span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                {/* 3D lighting effect */}
                <div className="absolute inset-0 opacity-0 mix-blend-overlay transition-opacity duration-200 group-hover:opacity-100"
                  style={{
                    background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.8), transparent 100px)"
                  }}
                />
              </Button>
            </MotionDiv>

            {/* Mobile Menu Button */}
            <MotionDiv whileHover={{ scale: 1.05 }} className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <MotionDiv
                  initial={false}
                  animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  {isMobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </MotionDiv>
              </Button>
            </MotionDiv>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MotionDiv
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute inset-x-0 top-full border-b border-neutral-800/20 bg-black/50 backdrop-blur-xl backdrop-saturate-150"
          >
            <nav className="container max-w-screen-2xl divide-y divide-neutral-800/20">
              {/* Navigation Items */}
              <div className="grid gap-1 p-4">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <MotionDiv
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "group flex items-center gap-4 rounded-xl p-3 transition-all duration-200",
                          isActive
                            ? "bg-white/10 text-white"
                            : "text-neutral-400 hover:bg-white/5 hover:text-white"
                        )}
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/10 to-indigo-500/10">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <div className="font-medium">{item.name}</div>
                            {item.badge && (
                              <span className="rounded-full bg-purple-500/10 px-2 py-0.5 text-xs font-medium text-purple-500">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-neutral-500">{item.description}</div>
                        </div>
                        <ChevronRight className="ml-auto h-5 w-5 text-neutral-600 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </Link>
                    </MotionDiv>
                  );
                })}
              </div>

              {/* Mobile Actions */}
              <div className="grid gap-1 p-4">
                <MotionDiv
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button 
                    variant="ghost" 
                    className="group flex w-full items-center justify-start gap-4 rounded-xl p-3 text-left text-neutral-400 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/10 to-indigo-500/10">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Contact</div>
                      <div className="text-sm text-neutral-500">Get in touch</div>
                    </div>
                  </Button>
                </MotionDiv>
              </div>
            </nav>
          </MotionDiv>
        )}
      </AnimatePresence>
    </MotionDiv>
  );
}

// Add this to your global CSS
const style = `
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 8s ease infinite;
}

.preserve-3d {
  transform-style: preserve-3d;
}

.perspective {
  perspective: 1000px;
}

.perspective-1000 {
  perspective: 1000px;
}

.backface-hidden {
  backface-visibility: hidden;
}

.rotateY-180 {
  transform: rotateY(180deg);
}
`;

