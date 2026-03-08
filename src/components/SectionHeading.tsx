import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  className?: string;
  centered?: boolean;
}

export default function SectionHeading({
  eyebrow,
  heading,
  subheading,
  className,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      {eyebrow && (
        <p className="mb-3 text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-widest text-[#00E5B0]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-[#F0F4FF] md:text-4xl lg:text-5xl">
        {heading}
      </h2>
      {subheading && (
        <p className="mt-4 text-[#8B9AB5] font-[family-name:var(--font-dm-sans)] text-base md:text-lg max-w-2xl">
          {subheading}
        </p>
      )}
    </div>
  );
}
