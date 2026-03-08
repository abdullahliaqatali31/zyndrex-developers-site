import { cn } from "@/lib/utils";

interface TechChipProps {
  label: string;
  className?: string;
}

export default function TechChip({ label, className }: TechChipProps) {
  return (
    <span
      className={cn(
        "group relative inline-flex items-center overflow-hidden rounded-sm border border-[#1E2E45] bg-[#1A2740] px-2.5 py-1 text-xs text-[#8B9AB5] font-[family-name:var(--font-jetbrains-mono)] hover:border-[#2D7DFA]/40 hover:text-[#F0F4FF] transition-colors duration-300",
        className
      )}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
      <span className="relative z-10">{label}</span>
    </span>
  );
}
