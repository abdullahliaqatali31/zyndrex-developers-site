"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import TechChip from "./TechChip";

interface ProjectCardProps {
  tag: string;
  tagColor?: string;
  title: string;
  outcome: string;
  description?: string;
  techStack: string[];
  href: string;
  ctaText?: string;
}

export default function ProjectCard({
  tag,
  tagColor = "#2D7DFA",
  title,
  outcome,
  description,
  techStack,
  href,
  ctaText = "View Case Study",
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group flex flex-col rounded-md border border-[#1E2E45] bg-[#0F1A2E] p-6 transition-all hover:border-[#2D7DFA]/40 hover:shadow-[0_0_30px_rgba(45,125,250,0.1)] h-full"
    >
      <div className="mb-4">
        <span 
          className="inline-flex items-center rounded-sm border px-2.5 py-1 text-xs font-[family-name:var(--font-jetbrains-mono)]"
          style={{ 
            borderColor: `${tagColor}4D`, 
            backgroundColor: `${tagColor}1A`, 
            color: tagColor 
          }}
        >
          {tag}
        </span>
      </div>

      <h3 className="mb-3 font-[family-name:var(--font-syne)] text-xl font-bold text-[#F0F4FF]">
        {title}
      </h3>
      
      {description && (
        <p className="mb-3 text-sm text-[#8B9AB5] font-[family-name:var(--font-dm-sans)] leading-relaxed">
          {description}
        </p>
      )}

      <p className="mb-5 flex-1 text-sm text-[#F0F4FF] font-medium font-[family-name:var(--font-dm-sans)] leading-relaxed">
        {outcome}
      </p>

      <div className="mb-5 flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <TechChip key={tech} label={tech} />
        ))}
      </div>

      <Link
        href={href}
        className="flex items-center gap-1.5 text-sm font-[family-name:var(--font-dm-sans)] font-medium transition-gap group-hover:gap-2"
        style={{ color: tagColor }}
      >
        {ctaText} <ArrowRight size={14} />
      </Link>
    </motion.div>
  );
}
