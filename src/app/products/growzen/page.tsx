"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import TechChip from "@/components/TechChip";

const roles = [
  {
    title: "Employee Dashboard",
    description:
      "Personal stats, CRM, project tracking, attendance check-in, chat per project, notification center, history, PDF export",
  },
  {
    title: "Team Leader Dashboard",
    description:
      "All employee features + team management, team attendance reports, team performance analytics, CSV export, team communication",
  },
  {
    title: "Team Manager Dashboard",
    description:
      "Employee performance tracking, attendance dashboards, team creation, advanced analytics, report export",
  },
  {
    title: "Company Admin Dashboard",
    description:
      "Full system control, call schedules, price control panel, client analytics, quote settings, history management",
  },
  {
    title: "Engineer Dashboard",
    description:
      "Technical query review, quote submission, project completion, engineering history, project-specific chat",
  },
  {
    title: "HR Admin Dashboard",
    description:
      "HR analytics, user management, agent salary, engineering salary, contract management, increment history, department management",
  },
];

const features = [
  "Project Lifecycle Management",
  "Quote Submission System",
  "Multi-Level Approval Workflow",
  "Status Tracking",
  "Attendance System",
  "Real-Time Chat (per project)",
  "Analytics Dashboards",
  "PDF Report Generation",
  "Dynamic Pricing Control",
  "Role-Based Data Isolation",
  "HR Management Suite",
  "Team Hierarchy Management",
  "File Upload (PDF, CSV, ZIP)",
  "Notification System",
  "Salary Administration",
];

const techStack = [
  "Next.js 15",
  "React 19",
  "TypeScript",
  "Supabase Auth",
  "PostgreSQL",
  "RLS",
  "Supabase Realtime",
  "Recharts",
  "Tailwind CSS",
  "ShadCN UI",
  "Vercel",
];

export default function GrowZenPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="border-b border-[#1E2E45] pb-16 pt-16">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-widest text-[#00E5B0]">
              Product
            </p>
            <h1 className="mb-4 font-[family-name:var(--font-syne)] text-5xl font-bold text-[#F0F4FF] md:text-6xl lg:text-7xl">
              GrowZen
            </h1>
            <p className="mb-3 font-[family-name:var(--font-syne)] text-xl font-semibold text-[#2D7DFA] md:text-2xl">
              Complete Internal Operations for Growing Companies
            </p>
            <p className="mb-8 text-[#8B9AB5] font-[family-name:var(--font-dm-sans)]">
              Built by Zyndrex Developers. Used in production. The same
              architecture we deliver to enterprise clients.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-[#2D7DFA] px-6 py-3 text-sm font-[family-name:var(--font-dm-sans)] font-medium text-white hover:bg-[#2D7DFA]/90 transition-colors"
              >
                Request a Demo
              </Link>
              <a
                href="#"
                className="rounded-md border border-[#1E2E45] px-6 py-3 text-sm font-[family-name:var(--font-dm-sans)] font-medium text-[#F0F4FF] hover:border-[#2D7DFA]/50 hover:text-[#2D7DFA] transition-colors"
              >
                View Documentation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-20">
        {/* What is GrowZen */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="mb-4 text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-widest text-[#00E5B0]">
            What is GrowZen?
          </p>
          <div className="rounded-md border border-[#1E2E45] bg-[#0F1A2E] p-8">
            <p className="mb-4 text-[#8B9AB5] font-[family-name:var(--font-dm-sans)] leading-relaxed">
              GrowZen is an enterprise-grade internal operations platform built
              for companies between 20 and 200 people — the size where
              off-the-shelf tools stop working and custom infrastructure becomes
              necessary.
            </p>
            <p className="text-[#8B9AB5] font-[family-name:var(--font-dm-sans)] leading-relaxed">
              It replaces disconnected spreadsheets, WhatsApp approvals, and
              manual HR processes with a unified, role-aware dashboard system.
            </p>
          </div>
        </motion.section>

        {/* 6-Role System */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="mb-4 text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-widest text-[#00E5B0]">
            6-Role System
          </p>
          <h2 className="mb-8 font-[family-name:var(--font-syne)] text-2xl font-bold text-[#F0F4FF]">
            One Platform, Every Role
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {roles.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-md border border-[#1E2E45] bg-[#0F1A2E] p-5"
              >
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#2D7DFA]" />
                  <p className="font-[family-name:var(--font-syne)] text-sm font-semibold text-[#F0F4FF]">
                    {role.title}
                  </p>
                </div>
                <p className="text-xs text-[#8B9AB5] font-[family-name:var(--font-dm-sans)] leading-relaxed pl-3.5">
                  {role.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Key Features */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="mb-4 text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-widest text-[#00E5B0]">
            Key Features
          </p>
          <div className="flex flex-wrap gap-2">
            {features.map((f) => (
              <span
                key={f}
                className="inline-flex items-center rounded-sm border border-[#1E2E45] bg-[#1A2740] px-3 py-1.5 text-sm font-[family-name:var(--font-dm-sans)] text-[#F0F4FF]"
              >
                {f}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="mb-4 text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-widest text-[#00E5B0]">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <TechChip key={tech} label={tech} />
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <div className="rounded-md border border-[#1E2E45] bg-[#0F1A2E] p-8">
          <p className="mb-2 font-[family-name:var(--font-syne)] text-lg font-semibold text-[#F0F4FF]">
            Request a Demo
          </p>
          <p className="mb-6 text-sm text-[#8B9AB5] font-[family-name:var(--font-dm-sans)]">
            Built by Zyndrex Developers. Interested in a similar system for your
            team?
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-[#2D7DFA] px-5 py-2.5 text-sm font-[family-name:var(--font-dm-sans)] font-medium text-white hover:bg-[#2D7DFA]/90 transition-colors"
            >
              Request a Demo
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-1.5 rounded-md border border-[#1E2E45] px-5 py-2.5 text-sm font-[family-name:var(--font-dm-sans)] font-medium text-[#F0F4FF] hover:border-[#2D7DFA]/50 hover:text-[#2D7DFA] transition-colors"
            >
              Start a Project Conversation <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
