"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import TechChip from "@/components/TechChip";

const philosophy = [
  {
    number: "01",
    title: "Systems first, features second.",
    desc: "We design the architecture before writing code.",
  },
  {
    number: "02",
    title: "Zero silent failures.",
    desc: "Every job has an explicit state. Every failure is logged. Nothing drops silently.",
  },
  {
    number: "03",
    title: "Real-time by default.",
    desc: "If data changes, the UI should know. Polling is a last resort.",
  },
  {
    number: "04",
    title: "Role-based at the database level.",
    desc: "Row Level Security is not optional. Data isolation is structural, not cosmetic.",
  },
  {
    number: "05",
    title: "Self-healing over manual intervention.",
    desc: "Queue watchers, retry logic, dead letter queues. Systems that recover themselves.",
  },
  {
    number: "06",
    title: "Handover with dignity.",
    desc: "Full documentation, admin controls, and training. You own what we build.",
  },
];

const techStack = [
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "Redis",
  "BullMQ",
  "Supabase",
  "Socket.IO",
  "Tailwind",
  "Vercel",
];

export default function AboutPage() {
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
              eyebrow="About"
              heading="About Zyndrex Developers"
              subheading="We started because the software that businesses needed wasn't being built well enough."
            />
            <div className="mt-4 h-px w-32 bg-[#1E2E45]" />
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-20">
        {/* Story */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="mb-4 text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-widest text-[#00E5B0]">
            Our Story
          </p>
          <div className="flex flex-col gap-5 text-[#8B9AB5] font-[family-name:var(--font-dm-sans)] leading-relaxed">
            <p>
              Most software agencies build what they&apos;re asked to build. We
              build what the business actually needs.
            </p>
            <p>
              That distinction matters when the problem is complex — when it
              involves dozens of people with different roles, data that needs to
              be validated at scale, approvals that need to happen in real time,
              and reports that need to be generated automatically.
            </p>
            <p>
              Zyndrex was founded to solve that kind of problem. Not with
              off-the-shelf tools that almost fit. With systems engineered from
              the ground up for the specific operational reality of the client.
            </p>
            <p>
              We&apos;ve delivered a complete operations platform for a 70-person
              company. We&apos;ve built a cloud-based data pipeline that processes
              millions of records without a human in the loop. And we&apos;ve built
              our own products — because we believe the best engineers are also
              operators.
            </p>
          </div>
        </motion.section>

        {/* Philosophy */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="mb-8 text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-widest text-[#00E5B0]">
            Our Engineering Philosophy
          </p>
          <div className="flex flex-col gap-6">
            {philosophy.map((item, i) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex gap-6"
              >
                <span className="flex-shrink-0 font-[family-name:var(--font-jetbrains-mono)] text-3xl font-bold text-[#2D7DFA]/30 leading-none mt-1">
                  {item.number}
                </span>
                <div>
                  <p className="mb-1 font-[family-name:var(--font-syne)] text-base font-semibold text-[#F0F4FF]">
                    {item.title}
                  </p>
                  <p className="text-sm text-[#8B9AB5] font-[family-name:var(--font-dm-sans)]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Stack */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="mb-4 text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-widest text-[#00E5B0]">
            What We Use
          </p>
          <p className="mb-5 text-sm text-[#8B9AB5] font-[family-name:var(--font-dm-sans)]">
            A consistent, production-grade stack across all projects:
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <TechChip key={tech} label={tech} />
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-md bg-[#2D7DFA] px-6 py-3 text-sm font-[family-name:var(--font-dm-sans)] font-medium text-white hover:bg-[#2D7DFA]/90 transition-colors w-fit"
          >
            Work with us <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
