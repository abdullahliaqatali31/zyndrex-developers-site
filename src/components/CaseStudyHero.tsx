import TechChip from "./TechChip";

interface CaseStudyHeroProps {
  tag: string;
  title: string;
  outcome: string;
  chips: string[];
}

export default function CaseStudyHero({
  tag,
  title,
  outcome,
  chips,
}: CaseStudyHeroProps) {
  return (
    <section className="border-b border-[#1E2E45] bg-[#0A0F1E] pt-32 pb-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-5">
          <span className="inline-flex items-center rounded-sm border border-[#2D7DFA]/30 bg-[#2D7DFA]/10 px-3 py-1.5 text-xs font-[family-name:var(--font-jetbrains-mono)] text-[#2D7DFA]">
            {tag}
          </span>
        </div>
        <h1 className="mb-6 font-[family-name:var(--font-syne)] text-4xl font-bold text-[#F0F4FF] md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mb-8 text-lg text-[#00E5B0] font-[family-name:var(--font-dm-sans)] italic">
          &ldquo;{outcome}&rdquo;
        </p>
        <div className="flex flex-wrap gap-2">
          {chips.map((chip) => (
            <TechChip key={chip} label={chip} />
          ))}
        </div>
      </div>
    </section>
  );
}
