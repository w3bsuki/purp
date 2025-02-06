"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ArrowRight, 
  Mail, 
  MapPin, 
  Phone, 
  Github, 
  Linkedin, 
  Twitter,
  Instagram,
  Send,
  ExternalLink,
  Heart
} from "lucide-react";

const footerLinks = {
  solutions: [
    { name: "Trade Finance", href: "#" },
    { name: "Supply Chain", href: "#" },
    { name: "Payment Solutions", href: "#" },
    { name: "AI Integration", href: "#" },
    { name: "Custom Development", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "News", href: "#" },
    { name: "Press Kit", href: "#" },
    { name: "Contact", href: "#" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Guides", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Blog", href: "#" },
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "License", href: "#" },
  ],
};

const socialLinks = [
  { name: "GitHub", icon: Github, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
];

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-neutral-800 bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <motion.div
          animate={{
            opacity: [0.5, 0.3, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-24 left-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-24 right-1/4 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 pt-20">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Column - Company Info */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-white">
                Stay Updated
              </h2>
              <p className="mt-2 text-neutral-400">
                Subscribe to our newsletter for AI insights, product updates, and industry news.
              </p>
            </div>

            {/* Newsletter Form */}
            <div className="flex max-w-md gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12 border-neutral-800 bg-neutral-900/50 text-white placeholder:text-neutral-500"
              />
              <Button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 px-6">
                <span className="relative z-10 flex items-center gap-2">
                  Subscribe
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </Button>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 text-neutral-400">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-purple-500" />
                <span>contact@amanesoft.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-purple-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-purple-500" />
                <span>123 Innovation Street, Tech City, TC 12345</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="group rounded-full border border-neutral-800 bg-neutral-900/50 p-3 transition-colors duration-300 hover:border-purple-500/50 hover:bg-purple-500/10"
                >
                  <social.icon className="h-5 w-5 text-neutral-400 transition-colors duration-300 group-hover:text-purple-500" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Column - Links */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Solutions */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-400">
                Solutions
              </h3>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-neutral-400 transition-colors duration-300 hover:text-purple-500"
                    >
                      {link.name}
                      <ExternalLink className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-400">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-neutral-400 transition-colors duration-300 hover:text-purple-500"
                    >
                      {link.name}
                      <ExternalLink className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-400">
                Resources
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-neutral-400 transition-colors duration-300 hover:text-purple-500"
                    >
                      {link.name}
                      <ExternalLink className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-400">
                Legal
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-neutral-400 transition-colors duration-300 hover:text-purple-500"
                    >
                      {link.name}
                      <ExternalLink className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 border-t border-neutral-800 py-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-neutral-400 sm:flex-row">
            <div className="flex items-center gap-2">
              <span>© 2024 Amane Soft. Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>in the Digital Realm</span>
            </div>
            <div className="flex items-center gap-8">
              <a href="#" className="hover:text-purple-500">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-purple-500">
                Terms of Service
              </a>
              <a href="#" className="hover:text-purple-500">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 