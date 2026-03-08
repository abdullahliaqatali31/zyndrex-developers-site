"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

interface PipelineStep {
  label: string;
  description: string;
}

interface PipelineFlowProps {
  steps: PipelineStep[];
}

export default function PipelineFlow({ steps }: PipelineFlowProps) {
  return (
    <div className="w-full">
      {/* Mobile: vertical */}
      <div className="flex flex-col gap-0 md:hidden">
        {steps.map((step, i) => (
          <div key={step.label} className="flex flex-col">
            <div className="rounded-md border border-[#1E2E45] bg-[#0F1A2E] p-4">
              <p className="mb-1 font-[family-name:var(--font-jetbrains-mono)] text-sm font-semibold text-[#2D7DFA]">
                {step.label}
              </p>
              <p className="text-xs text-[#8B9AB5] font-[family-name:var(--font-dm-sans)] leading-relaxed">
                {step.description}
              </p>
            </div>
            {i < steps.length - 1 && (
              <div className="flex justify-center py-1.5 relative h-8">
                <div className="absolute inset-y-0 w-px bg-[#1E2E45]" />
                <motion.div
                  animate={{ top: ["0%", "100%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
                  className="absolute top-0 w-1.5 h-1.5 rounded-full bg-[#2D7DFA] shadow-[0_0_8px_#2D7DFA] z-10"
                />
                <ArrowDown size={12} className="absolute bottom-0 text-[#1E2E45] z-0" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop: horizontal */}
      <div className="hidden md:flex items-start gap-0 overflow-x-auto pb-4">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-start group">
            <div className="flex flex-col gap-2 rounded-md border border-[#1E2E45] bg-[#0F1A2E] p-4 min-w-[140px] max-w-[160px] transition-all hover:border-[#2D7DFA]/30 hover:shadow-[0_0_20px_rgba(45,125,250,0.05)]">
              <p className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-semibold text-[#2D7DFA]">
                {step.label}
              </p>
              <p className="text-xs text-[#8B9AB5] font-[family-name:var(--font-dm-sans)] leading-relaxed">
                {step.description}
              </p>
            </div>
            {i < steps.length - 1 && (
              <div className="flex items-center px-0 pt-8 relative w-12 justify-center">
                 {/* Connection Line */}
                <div className="absolute h-px w-full bg-[#1E2E45]" />
                
                {/* Animated Dot */}
                <motion.div
                  animate={{ left: ["0%", "100%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
                  className="absolute w-1.5 h-1.5 rounded-full bg-[#2D7DFA] shadow-[0_0_8px_#2D7DFA] z-10"
                />
                
                {/* Arrow Head */}
                <ArrowRight size={14} className="absolute right-0 text-[#1E2E45] z-0" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
