"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Globe, Smartphone, Clock, Zap, MessageCircle } from "lucide-react";
import TechChip from "@/components/TechChip";
import SectionHeading from "@/components/SectionHeading";

const benefits = [
  {
    icon: Clock,
    title: "24-Hour Delivery",
    description: "From 'yes' to live URL in one day. We don't drag this out.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Built for phones because that's where your customers are.",
  },
  {
    icon: Globe,
    title: "Google Maps Optimization",
    description: "We help you claim and optimize your Google Business Profile.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "100/100 Lighthouse scores. Instant loading. No bloat.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "You Say Go",
    desc: "We agree on the domain name and business details. No deposit needed.",
  },
  {
    step: "02",
    title: "We Build (24hrs)",
    desc: "We design, write copy, build, and deploy the site on a live URL.",
  },
  {
    step: "03",
    title: "You Approve",
    desc: "You review the live site. If you like it, you pay $500. If not, you pay nothing.",
  },
  {
    step: "04",
    title: "Handover",
    desc: "You get full ownership, admin access, and 30 days of support.",
  },
];

const techStack = [
  "Framer",
  "React",
  "Vercel",
  "Namecheap",
  "Elfsight",
  "Google Analytics",
  "WhatsApp API",
];

export default function WebSprintPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="border-b border-[#1E2E45] pb-16 pt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(0,212,160,0.05)_0%,transparent_70%)]" />
        
        <div className="mx-auto max-w-5xl px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="mb-6 inline-flex items-center rounded-sm border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-3 py-1.5">
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] sm:text-xs uppercase tracking-widest text-[#F59E0B]">
                New Program
              </span>
            </div>
            
            <h1 className="mb-6 font-[family-name:var(--font-syne)] text-4xl sm:text-5xl font-bold leading-tight text-[#F0F4FF] md:text-6xl lg:text-7xl">
              WebSprint <br />
              <span className="text-[#00D4A0]">Zero-Risk Website Program</span>
            </h1>
            
            <p className="mb-10 max-w-2xl text-base sm:text-lg text-[#8B9AB5] font-[family-name:var(--font-dm-sans)] leading-relaxed mx-auto md:mx-0">
              We find contractor and trade businesses with no web presence, build them a professional website in 24 hours, and collect $500 only after they approve.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <Link
                href="/contact"
                className="w-full sm:w-auto text-center rounded-md bg-[#00D4A0] px-8 py-4 text-sm font-[family-name:var(--font-dm-sans)] font-bold text-[#0A0F1E] hover:bg-[#00D4A0]/90 transition-colors"
              >
                Get Your Site for $500
              </Link>
              <div className="flex items-center gap-2 text-sm text-[#8B9AB5] font-[family-name:var(--font-dm-sans)]">
                <CheckCircle size={16} className="text-[#00D4A0]" />
                <span>Pay only after approval</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          
          {/* Why WebSprint */}
          <div className="mb-24">
            <SectionHeading 
              eyebrow="The Deal" 
              heading="Professional Site. Zero Risk." 
              subheading="Most agencies charge $3000+ upfront and take weeks. We charge $500 and take 24 hours." 
            />
            
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-md border border-[#1E2E45] bg-[#0F1A2E] p-6 hover:border-[#00D4A0]/30 transition-colors"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-[#00D4A0]/10 text-[#00D4A0]">
                    <benefit.icon size={20} />
                  </div>
                  <h3 className="mb-2 font-[family-name:var(--font-syne)] text-lg font-bold text-[#F0F4FF]">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#8B9AB5] font-[family-name:var(--font-dm-sans)] leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-24">
            <p className="mb-6 text-[10px] sm:text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-widest text-[#00D4A0]">
              How It Works
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {processSteps.map((step, i) => (
                <div key={step.step} className="relative">
                  <span className="block font-[family-name:var(--font-syne)] text-4xl font-bold text-[#1E2E45] mb-4">
                    {step.step}
                  </span>
                  <h3 className="mb-2 font-[family-name:var(--font-syne)] text-lg font-bold text-[#F0F4FF]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#8B9AB5] font-[family-name:var(--font-dm-sans)]">
                    {step.desc}
                  </p>
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-6 right-0 w-full h-px bg-[#1E2E45] -z-10 translate-x-1/2" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-24">
            <p className="mb-6 text-[10px] sm:text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-widest text-[#00D4A0]">
              Built With
            </p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <TechChip key={tech} label={tech} className="border-[#00D4A0]/20 bg-[#00D4A0]/5 text-[#00D4A0]" />
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="rounded-xl border border-[#00D4A0]/30 bg-[#00D4A0]/5 p-6 sm:p-8 md:p-12 text-center">
            <h2 className="mb-4 font-[family-name:var(--font-syne)] text-2xl sm:text-3xl font-bold text-[#F0F4FF]">
              Ready to upgrade your business?
            </h2>
            <p className="mb-8 text-sm sm:text-base text-[#8B9AB5] font-[family-name:var(--font-dm-sans)] max-w-xl mx-auto">
              No deposit. No long contract. Just a great website delivered in 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto rounded-md bg-[#00D4A0] px-8 py-3 text-sm font-[family-name:var(--font-dm-sans)] font-bold text-[#0A0F1E] hover:bg-[#00D4A0]/90 transition-colors"
              >
                Start My WebSprint
              </Link>
              <a
                href="https://wa.me/1234567890" // Replace with actual WhatsApp link if available
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-md border border-[#1E2E45] px-8 py-3 text-sm font-[family-name:var(--font-dm-sans)] font-medium text-[#F0F4FF] hover:border-[#00D4A0]/50 hover:text-[#00D4A0] transition-colors"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
