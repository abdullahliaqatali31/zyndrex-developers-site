"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Layers, Database, Box, GitMerge, Globe } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import StatTile from "@/components/StatTile";
import SectionHeading from "@/components/SectionHeading";
import ProcessStep from "@/components/ProcessStep";
import ServiceCard from "@/components/ServiceCard";
import TechChip from "@/components/TechChip";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const stats = [
  { number: "70+", label: "Person Team System", sublabel: "Delivered" },
  { number: "Millions", label: "of Records", sublabel: "Processed & Validated" },
  { number: "24/7", label: "Cloud", sublabel: "Automated Pipelines" },
  { number: "Enterprise", label: "Grade", sublabel: "Since Day One" },
  { number: "24hrs", label: "Website", sublabel: "Delivered & Live" },
];

const services = [
  {
    icon: Layers,
    title: "Internal Systems",
    description:
      "Role-based dashboards for team operations — attendance, approvals, HR, analytics.",
  },
  {
    icon: Database,
    title: "Data Pipelines",
    description:
      "Multi-stage automation from ingestion to output, running 24/7 without human intervention.",
  },
  {
    icon: Box,
    title: "SaaS Products",
    description:
      "Full product builds from zero to production — auth, roles, billing, real-time, analytics.",
  },
  {
    icon: GitMerge,
    title: "API Integrations",
    description:
      "Queue-based worker systems at any scale. Rate-controlled. Self-healing. Auditable.",
  },
  {
    icon: Globe,
    title: "Local Business Website Program",
    description:
      "We find contractor and trade businesses with no web presence, build them a professional website in 24 hours, and collect $500 only after they approve. Zero upfront cost for the client.",
    badge: "New",
    badgeColor: "#F59E0B",
    cta: "Learn More",
    ctaLink: "/websprint"
  },
];

const growzenFeatures = [
  "6 User Roles",
  "Real-Time",
  "HR Suite",
  "PDF Reports",
  "Analytics",
];

export default function HomePage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-20">
        {/* grid overlay */}
        <div className="absolute inset-0 grid-overlay opacity-100" />
        {/* glow */}
        <div className="absolute inset-0 hero-glow" />

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          {/* Left Column: Text */}
          <div className="text-center md:text-left">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-6 inline-flex items-center"
            >
              <span className="inline-flex items-center rounded-sm border border-[#00E5B0]/30 bg-[#00E5B0]/10 px-3 py-1.5 font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-widest text-[#00E5B0]">
                Enterprise Software Studio
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-6 font-[family-name:var(--font-syne)] text-5xl font-bold leading-[1.1] text-[#F0F4FF] md:text-7xl lg:text-8xl"
            >
              We Build Systems
              <br />
              <span className="text-[#2D7DFA]">That Run Businesses.</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-10 max-w-xl text-base text-[#8B9AB5] font-[family-name:var(--font-dm-sans)] leading-relaxed md:text-lg"
            >
              From 70-person operations platforms to automated data pipelines
              processing millions of records — we engineer the infrastructure
              behind serious companies.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center justify-center gap-4 md:justify-start"
            >
              <Link
                href="/contact"
                className="rounded-md bg-[#2D7DFA] px-6 py-3 text-sm font-[family-name:var(--font-dm-sans)] font-medium text-white transition-colors hover:bg-[#2D7DFA]/90"
              >
                Start a Project
              </Link>
              <Link
                href="/work"
                className="flex items-center gap-2 rounded-md border border-[#1E2E45] px-6 py-3 text-sm font-[family-name:var(--font-dm-sans)] font-medium text-[#F0F4FF] transition-colors hover:border-[#2D7DFA]/50 hover:text-[#2D7DFA]"
              >
                See Our Work <ArrowRight size={14} />
              </Link>
            </motion.div>
            
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8 text-xs text-[#4A5A7A] font-[family-name:var(--font-dm-sans)]"
            >
              Enterprise-grade. Production-ready. Zero silent failures.
            </motion.div>
          </div>

          {/* Right Column: Animated System Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex w-full justify-center lg:mt-0 lg:w-auto"
          >
            <div className="group relative w-full max-w-[480px] overflow-hidden rounded-xl border border-[#1E2E45] bg-[#0A0F1E]/90 shadow-2xl backdrop-blur-md">
              
              {/* Window Header */}
              <div className="flex items-center gap-2 border-b border-[#1E2E45] bg-[#0F1A2E]/50 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
                <div className="ml-2 text-[10px] font-[family-name:var(--font-jetbrains-mono)] text-[#4A5A7A] opacity-60">
                  zyndrex-core.tsx
                </div>
              </div>

              {/* Grid Background */}
              <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(rgba(30,46,69,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(30,46,69,0.1)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]" />

              {/* Core Concept Container */}
              <div className="relative z-10 flex flex-col gap-6 p-6 sm:p-8">
                
                {/* 1. Systems Architecture */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#2D7DFA]/30 bg-[#2D7DFA]/10 text-[#2D7DFA] shadow-[0_0_15px_rgba(45,125,250,0.1)]">
                    <Layers size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="font-[family-name:var(--font-syne)] text-sm font-semibold text-[#F0F4FF]">
                      System Architecture
                    </p>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#1E2E45]">
                      <motion.div 
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
                        className="h-full rounded-full bg-[#2D7DFA]"
                      />
                    </div>
                  </div>
                </div>

                {/* Connection Line */}
                <div className="ml-6 h-8 w-px bg-gradient-to-b from-[#2D7DFA]/50 to-[#00E5B0]/50" />

                {/* 2. Product Engineering */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#00E5B0]/30 bg-[#00E5B0]/10 text-[#00E5B0] shadow-[0_0_15px_rgba(0,229,176,0.1)]">
                    <Box size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="font-[family-name:var(--font-syne)] text-sm font-semibold text-[#F0F4FF]">
                      Product Engineering
                    </p>
                    <div className="mt-2 flex gap-1">
                      {[1, 2, 3].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                          className="h-1.5 w-8 rounded-full bg-[#00E5B0]"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Connection Line */}
                <div className="ml-6 h-8 w-px bg-gradient-to-b from-[#00E5B0]/50 to-[#F59E0B]/50" />

                {/* 3. Automation & Scale */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#F59E0B]/30 bg-[#F59E0B]/10 text-[#F59E0B] shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                    <GitMerge size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="font-[family-name:var(--font-syne)] text-sm font-semibold text-[#F0F4FF]">
                      Automation & Scale
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-[10px] font-[family-name:var(--font-jetbrains-mono)] text-[#8B9AB5]">
                      <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]"
                      />
                      <span className="text-[#F59E0B]">24/7 Active</span>
                    </div>
                  </div>
                </div>

              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 h-40 w-40 bg-[#2D7DFA]/10 blur-[60px] rounded-full" />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 bg-[#00E5B0]/10 blur-[60px] rounded-full" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ChevronDown size={20} className="text-[#8B9AB5]" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="border-y border-[#1E2E45] bg-[#0F1A2E]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 divide-x divide-y divide-[#1E2E45] md:grid-cols-5 md:divide-y-0">
            {stats.map((stat) => (
              <StatTile
                key={stat.number}
                number={stat.number}
                label={stat.label}
                sublabel={stat.sublabel}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED WORK ── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <SectionHeading
              eyebrow="Our Work"
              heading="What We've Built"
              subheading="Real systems. Running in production."
            />
            <div className="mt-4 h-px w-32 bg-[#1E2E45]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            <ProjectCard
              tag="Internal Operations"
              title="70-Person Company Operations Platform"
              outcome='Replaced every manual process. The client said "you freed us" after delivery.'
              techStack={["Next.js", "PostgreSQL", "Supabase", "Redis", "Recharts"]}
              href="/work/team-management-system"
            />
            <ProjectCard
              tag="Data Pipeline"
              title="Centralized Email Processing Platform"
              outcome="Millions of records. Automated. 24/7. No human intervention required."
              techStack={["Node.js", "BullMQ", "Redis", "PostgreSQL", "Socket.IO"]}
              href="/work/email-pipeline"
            />
            <ProjectCard
              tag="Website Program"
              tagColor="#F59E0B"
              title="WebSprint — Zero-Risk Website Program for Contractors"
              outcome="$500 per site · 24hr delivery · 100% post-approval payment"
              techStack={["Framer", "Vercel", "Namecheap", "Elfsight", "Google Analytics", "WhatsApp API"]}
              href="/websprint"
              description="A repeatable lead generation and delivery system that finds local trade businesses with no website on Google Maps, builds a production site in 24 hours using AI-assisted tools, and charges $500 only after the client approves the result."
              ctaText="View Program"
            />
          </motion.div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="border-y border-[#1E2E45] bg-[#0F1A2E] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <SectionHeading
              eyebrow="Our Products"
              heading={`We Don't Just Build for Clients.\nWe Build for Ourselves.`}
              subheading="GrowZen is our own internal business management application — built on the same architecture we deliver to clients."
            />
          </motion.div>

          {/* GrowZen card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-3xl rounded-md border border-[#1E2E45] bg-[#0A0F1E] p-8 hover:border-[#2D7DFA]/40 hover:shadow-[0_0_40px_rgba(45,125,250,0.08)] transition-all"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#2D7DFA]/30 bg-[#2D7DFA]/10">
                <Box size={18} className="text-[#2D7DFA]" />
              </div>
              <div>
                <p className="font-[family-name:var(--font-syne)] text-lg font-bold text-[#F0F4FF]">
                  GrowZen
                </p>
                <p className="text-xs text-[#8B9AB5] font-[family-name:var(--font-dm-sans)]">
                  Internal Business Management Platform
                </p>
              </div>
            </div>

            <p className="mb-4 font-[family-name:var(--font-syne)] text-xl font-semibold text-[#F0F4FF]">
              Complete Internal Operations for Growing Companies
            </p>

            <p className="mb-6 text-sm text-[#8B9AB5] font-[family-name:var(--font-dm-sans)] leading-relaxed">
              A 6-role enterprise dashboard covering project management, HR
              administration, attendance, real-time chat, analytics, and PDF
              reporting — built for teams of 20 to 200.
            </p>

            <div className="mb-6 flex flex-wrap gap-2">
              {growzenFeatures.map((f) => (
                <span
                  key={f}
                  className="inline-flex items-center rounded-sm border border-[#00E5B0]/30 bg-[#00E5B0]/10 px-2.5 py-1 text-xs font-[family-name:var(--font-jetbrains-mono)] text-[#00E5B0]"
                >
                  {f}
                </span>
              ))}
            </div>

            <Link
              href="/products/growzen"
              className="flex items-center gap-1.5 text-sm text-[#2D7DFA] font-[family-name:var(--font-dm-sans)] font-medium hover:gap-2 transition-all"
            >
              Learn More <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <SectionHeading eyebrow="How We Work" heading="Our Process" />
          </motion.div>

          <div className="flex flex-col gap-8">
            {[
              {
                number: "01",
                title: "Discovery",
                description:
                  "We understand the operational problem, not just the feature list.",
              },
              {
                number: "02",
                title: "Architecture",
                description:
                  "We design the system before writing a line of code.",
              },
              {
                number: "03",
                title: "Build",
                description:
                  "TypeScript, PostgreSQL, real-time — production-grade from day one.",
              },
              {
                number: "04",
                title: "Deploy",
                description:
                  "Hosted, monitored, with self-healing mechanisms built in.",
              },
              {
                number: "05",
                title: "Handover",
                description:
                  "Full documentation, role-based access, your team in control.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <ProcessStep
                  number={step.number}
                  title={step.title}
                  description={step.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="border-t border-[#1E2E45] bg-[#0F1A2E] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <SectionHeading
              eyebrow="Services"
              heading="What We Build"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((svc) => (
              <ServiceCard
                key={svc.title}
                icon={svc.icon}
                title={svc.title}
                description={svc.description}
                // @ts-ignore
                badge={svc.badge}
                // @ts-ignore
                badgeColor={svc.badgeColor}
                // @ts-ignore
                cta={svc.cta}
                // @ts-ignore
                ctaLink={svc.ctaLink}
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10"
          >
            <Link
              href="/services"
              className="flex items-center gap-1.5 text-sm text-[#2D7DFA] font-[family-name:var(--font-dm-sans)] font-medium hover:gap-2 transition-all"
            >
              Full Service Breakdown <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="border-t border-[#1E2E45] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 items-center text-center"
          >
            <p className="text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-widest text-[#8B9AB5]">
              Our Stack
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Next.js",
                "TypeScript",
                "PostgreSQL",
                "Redis",
                "BullMQ",
                "Supabase",
                "Socket.IO",
                "Tailwind",
                "Vercel",
              ].map((tech) => (
                <TechChip key={tech} label={tech} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="relative overflow-hidden border-t border-[#1E2E45] bg-[#0F1A2E] py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(45,125,250,0.06)_0%,transparent_100%)]" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 font-[family-name:var(--font-syne)] text-3xl font-bold text-[#F0F4FF] md:text-4xl">
              Have a complex operational problem?
            </p>
            <p className="mb-8 font-[family-name:var(--font-syne)] text-3xl font-bold text-[#2D7DFA] md:text-4xl">
              Let&apos;s talk.
            </p>
            <p className="mb-8 max-w-2xl mx-auto text-lg text-[#8B9AB5] font-[family-name:var(--font-dm-sans)] leading-relaxed">
              We&apos;ve automated pipelines, freed operations teams, shipped enterprise systems — and now we build production websites for local businesses in 24 hours. Tell us what you need.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-[#2D7DFA] px-8 py-4 text-sm font-[family-name:var(--font-dm-sans)] font-medium text-white transition-colors hover:bg-[#2D7DFA]/90"
            >
              Book a Discovery Call
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
