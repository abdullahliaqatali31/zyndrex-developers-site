"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    id: "internal-operations",
    number: "01",
    title: "Internal Operations Systems",
    problem:
      "Your team uses 6 different tools that don't talk to each other. Approvals happen on WhatsApp. Nobody has a real-time view of anything.",
    deliver:
      "A unified, role-based internal platform — project management, HR, attendance, approvals, reporting — built for how your specific team actually works.",
    example:
      '70-person operations platform with 6 dashboards, 35+ pages, real-time Supabase subscriptions, and full HR suite. The owner called it "freedom."',
  },
  {
    id: "data-pipeline",
    number: "02",
    title: "Data Pipeline Automation",
    problem:
      "Your team manually processes data between systems. Someone downloads a file, cleans it, uploads it somewhere else. At scale, this breaks.",
    deliver:
      "A queue-based pipeline — ingestion, validation, transformation, distribution — running on the cloud 24/7 with zero manual steps. Self-healing. Rate-controlled. Auditable.",
    example:
      "Centralized email processing platform handling millions of records per day across multi-worker BullMQ infrastructure.",
  },
  {
    id: "saas-product",
    number: "03",
    title: "SaaS Product Development",
    problem:
      "You have a product idea but need an engineering team who can actually take it from concept to production — auth, roles, billing, real-time, analytics, deployment. All of it.",
    deliver:
      "A complete SaaS product. We handle architecture, build, deployment, and handover with full documentation. We've shipped our own products — we know what production means.",
    example:
      "GrowZen — our own 6-role enterprise SaaS platform, built on Next.js, Supabase, and PostgreSQL.",
  },
  {
    id: "api-integrations",
    number: "04",
    title: "API & Queue-Based Integration Systems",
    problem:
      "You use multiple third-party APIs and need them coordinated — rate limits respected, failures retried, results stored, data flowing between systems reliably.",
    deliver:
      "Worker-based integration architecture with BullMQ, Redis, and proper job state management. Not scripts. Actual systems.",
    example:
      "Multi-worker Ninja API validation system with per-worker rate limiting, self-healing job requeue, and Socket.IO live monitoring.",
  },
  {
    id: "real-time",
    number: "05",
    title: "Real-Time Applications",
    problem:
      "Your users need to see live data — not refresh a page. Live dashboards, collaborative tools, notifications, activity feeds. Polling won't cut it.",
    deliver:
      "Socket.IO or Supabase Realtime-powered applications with live state, presence indicators, and real-time updates across multiple connected clients.",
    example:
      "All our projects include real-time layers — live queue monitoring, live project updates, cross-dashboard notifications.",
  },
  {
    id: "auth-rbac",
    number: "06",
    title: "Enterprise Auth & Role-Based Access",
    problem:
      "You need different people to see different things. An admin sees everything. An employee sees their own data. A manager sees their team. Row-level, not just route-level.",
    deliver:
      "Supabase Auth with Row Level Security policies, JWT-validated API routes, and full role isolation. Data doesn't leak between roles at the database level.",
    example:
      "All Zyndrex projects ship with Supabase RLS, service-role separation, and no API keys exposed to the frontend.",
  },
];

export default function ServicesPage() {
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
              eyebrow="Services"
              heading="What We Build"
              subheading="We don't build websites. We build systems. Here's what that means in practice."
            />
            <div className="mt-4 h-px w-32 bg-[#1E2E45]" />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col divide-y divide-[#1E2E45]">
            {services.map((svc, i) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="py-14 first:pt-0"
              >
                <div className="flex flex-col gap-8 md:flex-row">
                  <div className="flex-shrink-0">
                    <span className="font-[family-name:var(--font-jetbrains-mono)] text-5xl font-bold text-[#2D7DFA]/25">
                      {svc.number}
                    </span>
                  </div>
                  <div className="flex flex-col gap-6">
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl font-bold text-[#F0F4FF]">
                      {svc.title}
                    </h2>

                    <div className="flex flex-col gap-5">
                      <div>
                        <p className="mb-1.5 text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-widest text-[#8B9AB5]">
                          The Problem
                        </p>
                        <p className="text-[#8B9AB5] font-[family-name:var(--font-dm-sans)] leading-relaxed">
                          {svc.problem}
                        </p>
                      </div>

                      <div>
                        <p className="mb-1.5 text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-widest text-[#00E5B0]">
                          We Deliver
                        </p>
                        <p className="text-[#F0F4FF] font-[family-name:var(--font-dm-sans)] leading-relaxed">
                          {svc.deliver}
                        </p>
                      </div>

                      <div className="rounded-sm border-l-2 border-[#2D7DFA] pl-4">
                        <p className="mb-0.5 text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-wide text-[#8B9AB5]">
                          Example
                        </p>
                        <p className="text-sm text-[#8B9AB5] font-[family-name:var(--font-dm-sans)] leading-relaxed">
                          {svc.example}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-[#1E2E45] bg-[#0F1A2E] py-20">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
          >
            <p className="font-[family-name:var(--font-syne)] text-xl font-semibold text-[#F0F4FF]">
              Have a project that fits one of these?
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-md bg-[#2D7DFA] px-5 py-2.5 text-sm font-[family-name:var(--font-dm-sans)] font-medium text-white hover:bg-[#2D7DFA]/90 transition-colors"
              >
                Book a Discovery Call <ArrowRight size={14} />
              </Link>
              <a
                href="mailto:hello@zyndrex.com"
                className="text-sm text-[#8B9AB5] font-[family-name:var(--font-dm-sans)] hover:text-[#F0F4FF] transition-colors"
              >
                hello@zyndrex.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
