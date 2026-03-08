"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Box } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export default function ProductsContent() {
  return (
    <main className="pt-24">
      <section className="border-b border-[#1E2E45] pb-16 pt-16">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionHeading eyebrow="Our Products" heading="We Are Engineers Who Also Operate Software." subheading="These are products we've built and run ourselves." />
            <div className="mt-4 h-px w-32 bg-[#1E2E45]" />
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-md border border-[#1E2E45] bg-[#0F1A2E] p-8 hover:border-[#2D7DFA]/40 hover:shadow-[0_0_40px_rgba(45,125,250,0.08)] transition-all">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#2D7DFA]/30 bg-[#2D7DFA]/10">
                  <Box size={20} className="text-[#2D7DFA]" />
                </div>
                <div>
                  <p className="font-[family-name:var(--font-syne)] text-xl font-bold text-[#F0F4FF]">GrowZen</p>
                  <p className="text-xs text-[#8B9AB5] font-[family-name:var(--font-dm-sans)]">Internal Business Management Platform</p>
                </div>
              </div>
              <h2 className="mb-4 font-[family-name:var(--font-syne)] text-2xl font-bold text-[#F0F4FF]">A complete operations platform for growing companies.</h2>
              <p className="mb-6 text-[#8B9AB5] font-[family-name:var(--font-dm-sans)] leading-relaxed">
                Covers project management, HR, attendance, approvals, engineering workflows, and executive analytics — in one system.
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                {["Employee", "Team Leader", "Team Manager", "Company Admin", "Engineer", "HR Admin"].map((role) => (
                  <span key={role} className="inline-flex items-center rounded-sm border border-[#1E2E45] bg-[#1A2740] px-2.5 py-1 text-xs font-[family-name:var(--font-jetbrains-mono)] text-[#8B9AB5]">{role}</span>
                ))}
              </div>
              <Link href="/products/growzen" className="flex items-center gap-1.5 text-sm text-[#2D7DFA] font-[family-name:var(--font-dm-sans)] font-medium hover:gap-2 transition-all">
                View Product <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-start rounded-md border border-dashed border-[#1E2E45] bg-[#0F1A2E]/50 p-8">
              <span className="mb-3 inline-flex items-center rounded-sm border border-[#1E2E45] bg-[#1A2740] px-2.5 py-1 text-xs font-[family-name:var(--font-jetbrains-mono)] text-[#8B9AB5]">In Development</span>
              <p className="font-[family-name:var(--font-syne)] text-xl font-semibold text-[#8B9AB5]">More Products</p>
              <p className="mt-2 text-sm text-[#8B9AB5]/60 font-[family-name:var(--font-dm-sans)]">We build in public. Follow our progress.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
