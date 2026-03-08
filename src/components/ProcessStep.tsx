interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

export default function ProcessStep({
  number,
  title,
  description,
}: ProcessStepProps) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:gap-6">
      <div className="flex-shrink-0">
        <span className="font-[family-name:var(--font-jetbrains-mono)] text-4xl font-bold text-[#2D7DFA]/40 leading-none">
          {number}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-[family-name:var(--font-syne)] text-base font-semibold text-[#F0F4FF]">
          {title}
        </h3>
        <p className="text-sm text-[#8B9AB5] font-[family-name:var(--font-dm-sans)] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
