import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
  badgeColor?: string;
  cta?: string;
  ctaLink?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  badge,
  badgeColor,
  cta,
  ctaLink,
}: ServiceCardProps) {
  return (
    <div className="group relative flex flex-col gap-4 rounded-md border border-[#1E2E45] bg-[#0F1A2E] p-6 transition-all hover:border-[#2D7DFA]/40 hover:shadow-[0_0_20px_rgba(45,125,250,0.05)]">
      {badge && (
        <span 
          className="absolute right-4 top-4 rounded-sm border px-1.5 py-0.5 text-[10px] font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-wide"
          style={{ borderColor: badgeColor, color: badgeColor, backgroundColor: `${badgeColor}15` }}
        >
          {badge}
        </span>
      )}
      
      <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#1E2E45] bg-[#1A2740]">
        <Icon size={18} className="text-[#2D7DFA]" />
      </div>
      
      <div className="flex flex-col h-full">
        <h3 className="mb-2 font-[family-name:var(--font-syne)] text-lg font-semibold text-[#F0F4FF]">
          {title}
        </h3>
        <p className="mb-4 flex-grow text-sm text-[#8B9AB5] font-[family-name:var(--font-dm-sans)] leading-relaxed">
          {description}
        </p>
        
        {cta && ctaLink && (
          <Link 
            href={ctaLink}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#2D7DFA] font-[family-name:var(--font-dm-sans)] hover:gap-2 transition-all"
          >
            {cta} <ArrowRight size={12} />
          </Link>
        )}
      </div>
    </div>
  );
}
