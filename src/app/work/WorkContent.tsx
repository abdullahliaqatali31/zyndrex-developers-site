"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";

export default function WorkContent() {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="border-b border-[#1E2E45] pb-16 pt-16">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              eyebrow="Our Work"
              heading="Systems We've Engineered"
              subheading="In production."
            />
            <div className="mt-4 h-px w-32 bg-[#1E2E45]" />
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <ProjectCard
                tag="Internal Operations"
                title="70-Person Company Operations Platform"
                outcome='Replaced every manual process. The client said "you freed us" after delivery.'
                techStack={["Next.js 15", "React 19", "Supabase", "PostgreSQL", "Recharts", "Tailwind", "TypeScript"]}
                href="/work/team-management-system"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ProjectCard
                tag="Data Pipeline"
                title="Centralized Email Processing Platform"
                outcome="Millions of records. Automated. 24/7. No human intervention required."
                techStack={["Node.js", "BullMQ", "Redis", "PostgreSQL", "Socket.IO", "Supabase", "Nginx", "PM2"]}
                href="/work/email-pipeline"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
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

            {/* Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-start rounded-md border border-dashed border-[#1E2E45] bg-[#0F1A2E]/50 p-6"
            >
              <span className="mb-3 inline-flex items-center rounded-sm border border-[#1E2E45] bg-[#1A2740] px-2.5 py-1 text-xs font-[family-name:var(--font-jetbrains-mono)] text-[#8B9AB5]">
                Coming Soon
              </span>
              <p className="font-[family-name:var(--font-syne)] text-lg font-semibold text-[#8B9AB5]">
                More Projects
              </p>
              <p className="mt-1 text-sm text-[#8B9AB5]/60 font-[family-name:var(--font-dm-sans)]">
                Additional case studies in preparation. We build in public.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1E2E45] bg-[#0F1A2E] py-20">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
          >
            <p className="font-[family-name:var(--font-syne)] text-xl font-semibold text-[#F0F4FF]">
              Have a project like these?
            </p>
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-md bg-[#2D7DFA] px-5 py-2.5 text-sm font-[family-name:var(--font-dm-sans)] font-medium text-white hover:bg-[#2D7DFA]/90 transition-colors"
            >
              Start a Conversation <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
