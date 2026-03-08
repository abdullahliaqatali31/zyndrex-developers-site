"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import CaseStudyHero from "@/components/CaseStudyHero";
import PipelineFlow from "@/components/PipelineFlow";
import TechChip from "@/components/TechChip";

const pipelineSteps = [
  { label: "Upload", description: "CSV ingestion, batch metadata, staging table" },
  { label: "Deduplicate", description: "Global uniqueness enforcement at DB level. One email = one master record." },
  { label: "Filter", description: "Rules in priority order — Global → Team → Employee → Unsubscribe" },
  { label: "Validate", description: "Multi-worker BullMQ jobs. Each worker has a dedicated API key." },
  { label: "Categorize", description: "Personal vs. Business classification by domain intelligence" },
  { label: "Distribute", description: "FreePool layer — fair allocation from Collection Team to Employees" },
];

const archLayers = [
  { label: "Client (Next.js)", desc: "Dashboard, real-time monitoring, batch management" },
  { label: "API Gateway (Express.js)", desc: "JWT-validated routes, rate limiting, role enforcement" },
  { label: "PostgreSQL", desc: "Primary data store — emails, batches, rules, results" },
  { label: "Redis", desc: "Queues + Cache + Pub/Sub" },
  { label: "BullMQ Workers", desc: "Dedupe / Filter / Validate — parallel multi-worker" },
  { label: "External Validation API", desc: "Ninja — per-worker rate limiting" },
];

const techStack = [
  { category: "Frontend", items: ["Next.js", "TypeScript", "Tailwind", "ShadCN", "Socket.IO Client"] },
  { category: "Backend", items: ["Express.js", "Node.js LTS", "TypeScript"] },
  { category: "Database", items: ["PostgreSQL (Supabase)", "Redis (ioredis)"] },
  { category: "Queue", items: ["BullMQ (multi-worker, round-robin)"] },
  { category: "Real-Time", items: ["Socket.IO Server"] },
  { category: "Infra", items: ["PM2", "Nginx", "Contabo VPS (Ubuntu)", "Vercel (frontend)"] },
];

const roles = [
  { role: "Admin", desc: "System config, global rules, monitoring, user management" },
  { role: "Collection Team", desc: "Batch upload, FreePool management, team analytics" },
  { role: "Employee", desc: "Personal workspace, assigned batches, downloads" },
];

export default function EmailPipelineContent() {
  return (
    <main>
      <CaseStudyHero
        tag="Data Pipeline & Automation"
        title="Centralized Email Processing Platform"
        outcome="What took a team days of manual work now runs autonomously — 24/7."
        chips={["Node.js", "Express", "BullMQ", "Redis", "PostgreSQL", "Socket.IO", "Supabase", "Nginx", "PM2"]}
      />

      <div className="mx-auto max-w-5xl px-6 py-20">
        {/* Problem */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-20">
          <p className="mb-4 text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-widest text-[#00E5B0]">The Problem</p>
          <div className="rounded-md border border-[#1E2E45] bg-[#0F1A2E] p-8">
            <p className="mb-4 text-[#8B9AB5] font-[family-name:var(--font-dm-sans)] leading-relaxed">
              A company running large-scale outbound email operations had a pipeline problem. Their collection teams gathered leads constantly. But before any email could be used, it had to be deduplicated, filtered against rules, validated, classified, and distributed to the right employees.
            </p>
            <p className="text-[#8B9AB5] font-[family-name:var(--font-dm-sans)] leading-relaxed">
              All of this happened manually. Across spreadsheets, shared drives, and human decisions about what was clean enough to use. It was slow, error-prone, and couldn&apos;t scale.
            </p>
          </div>
        </motion.section>

        {/* Pipeline */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-20">
          <p className="mb-4 text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-widest text-[#00E5B0]">The Pipeline We Built</p>
          <h2 className="mb-8 font-[family-name:var(--font-syne)] text-2xl font-bold text-[#F0F4FF]">6-Stage Automated Flow</h2>
          <PipelineFlow steps={pipelineSteps} />
        </motion.section>

        {/* Architecture */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-20">
          <p className="mb-4 text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-widest text-[#00E5B0]">System Architecture</p>
          <div className="inline-flex flex-col gap-0 rounded-md border border-[#1E2E45] overflow-hidden">
            {archLayers.map((layer, i) => (
              <div key={layer.label}>
                <div className={`px-6 py-4 ${i % 2 === 0 ? "bg-[#0A0F1E]" : "bg-[#0F1A2E]"}`}>
                  <p className="font-[family-name:var(--font-jetbrains-mono)] text-sm font-semibold text-[#2D7DFA]">{layer.label}</p>
                  <p className="text-xs text-[#8B9AB5] font-[family-name:var(--font-dm-sans)] mt-0.5">{layer.desc}</p>
                </div>
                {i < archLayers.length - 1 && (
                  <div className="flex justify-center bg-[#0F1A2E] py-1">
                    <ArrowDown size={14} className="text-[#1E2E45]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Scale */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-20">
          <p className="mb-4 text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-widest text-[#00E5B0]">Scale & Reliability</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { stat: "Millions", desc: "of records per day processed" },
              { stat: "Multi-worker", desc: "parallel validation with rate-controlled API usage" },
              { stat: "Self-healing", desc: "queue watcher — detects stalled jobs, requeues every 60 seconds" },
              { stat: "Zero", desc: "silent data loss — explicit failure states for every job" },
            ].map((item) => (
              <div key={item.stat} className="rounded-md border border-[#1E2E45] bg-[#0F1A2E] p-5">
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-xl font-bold text-[#2D7DFA]">{item.stat}</p>
                <p className="mt-1 text-sm text-[#8B9AB5] font-[family-name:var(--font-dm-sans)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Roles */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-20">
          <p className="mb-4 text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-widest text-[#00E5B0]">Roles & Access</p>
          <div className="flex flex-col divide-y divide-[#1E2E45] rounded-md border border-[#1E2E45] overflow-hidden">
            {roles.map((r) => (
              <div key={r.role} className="flex gap-4 px-6 py-4 bg-[#0F1A2E]">
                <span className="flex-shrink-0 font-[family-name:var(--font-jetbrains-mono)] text-sm font-semibold text-[#2D7DFA] min-w-[140px]">{r.role}</span>
                <span className="text-sm text-[#8B9AB5] font-[family-name:var(--font-dm-sans)]">{r.desc}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Outcome */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-20">
          <p className="mb-4 text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-widest text-[#00E5B0]">The Outcome</p>
          <div className="rounded-md border border-[#00E5B0]/20 bg-[#00E5B0]/5 p-8">
            <p className="mb-4 text-[#8B9AB5] font-[family-name:var(--font-dm-sans)] leading-relaxed">
              An entire team&apos;s multi-day manual workflow — deduplicate, filter, validate, classify, distribute — now runs on the cloud without human intervention.
            </p>
            <p className="text-[#8B9AB5] font-[family-name:var(--font-dm-sans)] leading-relaxed">
              The system processes, validates, and distributes records continuously. The pipeline that used to require coordination, spreadsheets, and manual decisions now runs itself.
            </p>
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-20">
          <p className="mb-4 text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-widest text-[#00E5B0]">Tech Stack</p>
          <div className="flex flex-col gap-4">
            {techStack.map((section) => (
              <div key={section.category}>
                <p className="mb-2 text-xs font-[family-name:var(--font-jetbrains-mono)] text-[#8B9AB5] uppercase tracking-wide">{section.category}</p>
                <div className="flex flex-wrap gap-2">
                  {section.items.map((item) => (<TechChip key={item} label={item} />))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 border-t border-[#1E2E45] pt-10">
          <Link href="/contact" className="flex items-center gap-2 rounded-md bg-[#2D7DFA] px-5 py-2.5 text-sm font-[family-name:var(--font-dm-sans)] font-medium text-white hover:bg-[#2D7DFA]/90 transition-colors">Start a Similar Project</Link>
          <Link href="/work" className="flex items-center gap-2 rounded-md border border-[#1E2E45] px-5 py-2.5 text-sm font-[family-name:var(--font-dm-sans)] font-medium text-[#F0F4FF] hover:border-[#2D7DFA]/50 hover:text-[#2D7DFA] transition-colors">
            See All Work <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </main>
  );
}
