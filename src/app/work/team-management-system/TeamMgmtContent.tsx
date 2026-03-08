"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CaseStudyHero from "@/components/CaseStudyHero";
import TechChip from "@/components/TechChip";

const dashboards = [
  { name: "Employee Dashboard", path: "/dashboard", users: "All staff", capabilities: "CRM, project tracking, attendance, personal analytics" },
  { name: "Team Leader Dashboard", path: "/dashboard + team", users: "Team leads", capabilities: "All employee features + team reports, team attendance, CSV exports" },
  { name: "Team Manager Dashboard", path: "/admin", users: "Managers", capabilities: "Employee performance, team creation, advanced analytics" },
  { name: "Company Admin Dashboard", path: "/dashboard/company-admin", users: "Owners", capabilities: "Full system control, price panel, client analytics, history" },
  { name: "Engineer Dashboard", path: "/dashboard/engineering", users: "Technical staff", capabilities: "Technical quoting, project completion, history" },
  { name: "HR Admin Dashboard", path: "/dashboard/hr", users: "HR team", capabilities: "Salary admin, contracts, increments, department management" },
];

const scale = [
  { number: "6", label: "Role-specific dashboards" },
  { number: "35+", label: "Unique pages and views" },
  { number: "30+", label: "Core features" },
  { number: "8+", label: "Real-time features" },
  { number: "5", label: "PDF report types" },
  { number: "15+", label: "Automated workflow triggers" },
];

const techStack = [
  "Next.js 15", "React 19", "TypeScript", "Supabase Auth",
  "PostgreSQL", "RLS Policies", "Supabase Realtime", "Recharts",
  "Tailwind CSS", "ShadCN UI", "Vercel", "PDF Generation",
];

export default function TeamMgmtContent() {
  return (
    <main>
      <CaseStudyHero
        tag="Internal Operations System"
        title="70-Person Company Operations Platform"
        outcome="You freed us. — Company Owner, after delivery"
        chips={["Next.js 15", "React 19", "Supabase", "PostgreSQL", "Recharts", "Tailwind", "TypeScript"]}
      />

      <div className="mx-auto max-w-5xl px-6 py-20">
        {/* Problem */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-20">
          <p className="mb-4 text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-widest text-[#00E5B0]">The Problem</p>
          <div className="rounded-md border border-[#1E2E45] bg-[#0F1A2E] p-8">
            <p className="mb-4 text-[#8B9AB5] font-[family-name:var(--font-dm-sans)] leading-relaxed">
              A 70-person estimation and construction company was running its entire operation manually. Attendance was tracked on paper. Projects existed in disconnected spreadsheets. HR processes — salary, contracts, increments — lived in someone&apos;s inbox. Quotes moved through WhatsApp messages. Approvals happened in hallways.
            </p>
            <p className="text-[#8B9AB5] font-[family-name:var(--font-dm-sans)] leading-relaxed">
              At 70 people, this doesn&apos;t scale. The noise becomes the business.
            </p>
          </div>
        </motion.section>

        {/* What We Built */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-20">
          <p className="mb-4 text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-widest text-[#00E5B0]">What We Built</p>
          <h2 className="mb-8 font-[family-name:var(--font-syne)] text-2xl font-bold text-[#F0F4FF]">A 6-Role System — One Platform</h2>
          <div className="overflow-x-auto rounded-md border border-[#1E2E45]">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#1E2E45] bg-[#0F1A2E]">
                  <th className="px-5 py-4 text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-wide text-[#8B9AB5]">Dashboard</th>
                  <th className="hidden px-5 py-4 text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-wide text-[#8B9AB5] sm:table-cell">Path</th>
                  <th className="px-5 py-4 text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-wide text-[#8B9AB5]">Users</th>
                  <th className="hidden px-5 py-4 text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-wide text-[#8B9AB5] md:table-cell">Key Capabilities</th>
                </tr>
              </thead>
              <tbody>
                {dashboards.map((d, i) => (
                  <tr key={d.name} className={`border-b border-[#1E2E45] ${i % 2 === 0 ? "bg-[#0A0F1E]" : "bg-[#0F1A2E]"}`}>
                    <td className="px-5 py-4 font-[family-name:var(--font-dm-sans)] text-sm font-medium text-[#F0F4FF]">{d.name}</td>
                    <td className="hidden px-5 py-4 font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#8B9AB5] sm:table-cell">{d.path}</td>
                    <td className="px-5 py-4 font-[family-name:var(--font-dm-sans)] text-sm text-[#8B9AB5]">{d.users}</td>
                    <td className="hidden px-5 py-4 font-[family-name:var(--font-dm-sans)] text-sm text-[#8B9AB5] md:table-cell">{d.capabilities}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Scale */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-20">
          <p className="mb-4 text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-widest text-[#00E5B0]">System Scale</p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {scale.map((item) => (
              <div key={item.label} className="rounded-md border border-[#1E2E45] bg-[#0F1A2E] p-5 text-center">
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-3xl font-bold text-[#2D7DFA]">{item.number}</p>
                <p className="mt-1 text-xs text-[#8B9AB5] font-[family-name:var(--font-dm-sans)]">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Outcome */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-20">
          <p className="mb-4 text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-widest text-[#00E5B0]">The Outcome</p>
          <div className="rounded-md border border-[#00E5B0]/20 bg-[#00E5B0]/5 p-8">
            <p className="mb-6 font-[family-name:var(--font-syne)] text-2xl font-bold text-[#00E5B0] italic">&ldquo;You freed us.&rdquo;</p>
            <p className="text-[#8B9AB5] font-[family-name:var(--font-dm-sans)] leading-relaxed">
              Every manual process — attendance, approvals, quotes, HR, project tracking — now runs through a single unified system. The team knows what to do. The managers see everything. The owners are out of the operational weeds.
            </p>
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-20">
          <p className="mb-4 text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-widest text-[#00E5B0]">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (<TechChip key={tech} label={tech} />))}
          </div>
        </motion.section>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 border-t border-[#1E2E45] pt-10">
          <Link href="/contact" className="flex items-center gap-2 rounded-md bg-[#2D7DFA] px-5 py-2.5 text-sm font-[family-name:var(--font-dm-sans)] font-medium text-white hover:bg-[#2D7DFA]/90 transition-colors">
            Start a Similar Project
          </Link>
          <Link href="/work" className="flex items-center gap-2 rounded-md border border-[#1E2E45] px-5 py-2.5 text-sm font-[family-name:var(--font-dm-sans)] font-medium text-[#F0F4FF] hover:border-[#2D7DFA]/50 hover:text-[#2D7DFA] transition-colors">
            See All Work <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </main>
  );
}
