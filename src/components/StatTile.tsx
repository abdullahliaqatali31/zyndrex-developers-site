"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

interface StatTileProps {
  number: string;
  label: string;
  sublabel?: string;
}

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  
  // Extract numeric part and suffix
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");
  
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const displayValue = useTransform(spring, (current) => {
    // Handle cases where there's no number (e.g., "Enterprise")
    if (isNaN(numericValue)) return value;
    
    // Format number: integer or float based on input
    const isFloat = value.includes(".");
    const formatted = isFloat ? current.toFixed(1) : Math.round(current).toString();
    return `${formatted}${suffix}`;
  });

  useEffect(() => {
    if (inView && !isNaN(numericValue)) {
      spring.set(numericValue);
    }
  }, [inView, numericValue, spring]);

  if (isNaN(numericValue)) {
    return <span className="font-[family-name:var(--font-jetbrains-mono)] text-3xl font-bold text-[#2D7DFA] md:text-4xl">{value}</span>;
  }

  return (
    <motion.span 
      ref={ref}
      className="font-[family-name:var(--font-jetbrains-mono)] text-3xl font-bold text-[#2D7DFA] md:text-4xl"
    >
      {displayValue}
    </motion.span>
  );
}

export default function StatTile({ number, label, sublabel }: StatTileProps) {
  return (
    <div className="flex flex-col items-center text-center px-6 py-6">
      <Counter value={number} />
      <span className="mt-1 text-sm font-[family-name:var(--font-dm-sans)] font-medium text-[#F0F4FF]">
        {label}
      </span>
      {sublabel && (
        <span className="mt-0.5 text-xs font-[family-name:var(--font-dm-sans)] text-[#8B9AB5]">
          {sublabel}
        </span>
      )}
    </div>
  );
}
