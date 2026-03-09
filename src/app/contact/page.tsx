"use client";

import { motion } from "framer-motion";
import { Calendar, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="pt-24">
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 sm:gap-16 lg:grid-cols-2">
            {/* Left column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6 sm:gap-8"
            >
              <div>
                <p className="mb-3 text-[10px] sm:text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-widest text-[#00E5B0]">
                  Contact
                </p>
                <h1 className="mb-4 font-[family-name:var(--font-syne)] text-3xl sm:text-4xl font-bold text-[#F0F4FF] md:text-5xl">
                  Start a Project
                </h1>
                <p className="text-sm sm:text-base text-[#8B9AB5] font-[family-name:var(--font-dm-sans)] leading-relaxed">
                  Book a 30-minute discovery call. We&apos;ll understand your
                  problem, tell you honestly what we&apos;d build, and give you a
                  rough sense of scope and timeline.
                </p>
              </div>

              <div className="rounded-md border border-[#1E2E45] bg-[#0F1A2E] p-5 sm:p-6">
                <p className="mb-4 font-[family-name:var(--font-syne)] text-base font-semibold text-[#F0F4FF]">
                  No pitch. No deck. Just a conversation.
                </p>

                <a
                  href={`https://cal.com/${process.env.NEXT_PUBLIC_CAL_USERNAME || "zyndrex"}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center sm:justify-start gap-2 rounded-md bg-[#2D7DFA] px-5 py-2.5 text-sm font-[family-name:var(--font-dm-sans)] font-medium text-white hover:bg-[#2D7DFA]/90 transition-colors w-full sm:w-fit"
                >
                  <Calendar size={15} />
                  Book a Call
                </a>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[10px] sm:text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-widest text-[#8B9AB5]">
                  Or send a message
                </p>
                <a
                  href="mailto:hello@zyndrex.com"
                  className="flex items-center gap-2 text-[#2D7DFA] font-[family-name:var(--font-dm-sans)] text-sm hover:text-[#2D7DFA]/80 transition-colors"
                >
                  <Mail size={14} />
                  hello@zyndrex.com
                </a>
                <p className="text-xs text-[#8B9AB5] font-[family-name:var(--font-dm-sans)]">
                  We respond within 24 hours.
                </p>
              </div>
            </motion.div>

            {/* Right column — form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
