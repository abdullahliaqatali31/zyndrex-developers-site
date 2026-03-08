"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().min(1, "Company is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(10, "Please describe what you're trying to build"),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        const body = await res.json().catch(() => ({}));
        setErrorMsg(body.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-md border border-[#1E2E45] bg-[#1A2740] px-4 py-3 text-sm text-[#F0F4FF] placeholder-[#8B9AB5] font-[family-name:var(--font-dm-sans)] outline-none focus:border-[#2D7DFA] focus:ring-1 focus:ring-[#2D7DFA] transition-colors";
  const labelClass =
    "block mb-1.5 text-xs font-[family-name:var(--font-jetbrains-mono)] text-[#8B9AB5] uppercase tracking-wide";
  const errorClass =
    "mt-1 text-xs text-red-400 font-[family-name:var(--font-dm-sans)]";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-md border border-[#00E5B0]/30 bg-[#00E5B0]/5 p-10 text-center">
        <CheckCircle2 size={40} className="text-[#00E5B0]" />
        <p className="font-[family-name:var(--font-syne)] text-lg font-semibold text-[#F0F4FF]">
          Message received.
        </p>
        <p className="text-sm text-[#8B9AB5] font-[family-name:var(--font-dm-sans)]">
          We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Name *</label>
          <input
            {...register("name")}
            placeholder="Your name"
            className={inputClass}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Company *</label>
          <input
            {...register("company")}
            placeholder="Your company"
            className={inputClass}
          />
          {errors.company && (
            <p className={errorClass}>{errors.company.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className={labelClass}>Email *</label>
        <input
          {...register("email")}
          type="email"
          placeholder="you@company.com"
          className={inputClass}
        />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      <div>
        <label className={labelClass}>What are you trying to build? *</label>
        <textarea
          {...register("message")}
          placeholder="Describe your operational problem or project..."
          rows={5}
          className={inputClass}
        />
        {errors.message && (
          <p className={errorClass}>{errors.message.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Approximate budget range</label>
          <select {...register("budget")} className={inputClass}>
            <option value="" className="bg-[#1A2740]">
              Select budget
            </option>
            <option value="<$5,000" className="bg-[#1A2740]">
              &lt; $5,000
            </option>
            <option value="$5,000 – $15,000" className="bg-[#1A2740]">
              $5,000 – $15,000
            </option>
            <option value="$15,000 – $50,000" className="bg-[#1A2740]">
              $15,000 – $50,000
            </option>
            <option value="$50,000+" className="bg-[#1A2740]">
              $50,000+
            </option>
            <option value="Not sure yet" className="bg-[#1A2740]">
              Not sure yet
            </option>
          </select>
          {errors.budget && (
            <p className={errorClass}>{errors.budget.message}</p>
          )}
        </div>
        <div>
          <label className={labelClass}>Timeline</label>
          <select {...register("timeline")} className={inputClass}>
            <option value="" className="bg-[#1A2740]">
              Select timeline
            </option>
            <option value="ASAP" className="bg-[#1A2740]">
              ASAP
            </option>
            <option value="1–3 months" className="bg-[#1A2740]">
              1–3 months
            </option>
            <option value="3–6 months" className="bg-[#1A2740]">
              3–6 months
            </option>
            <option value="Flexible" className="bg-[#1A2740]">
              Flexible
            </option>
          </select>
          {errors.timeline && (
            <p className={errorClass}>{errors.timeline.message}</p>
          )}
        </div>
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3">
          <AlertCircle size={16} className="text-red-400 flex-shrink-0" />
          <p className="text-sm text-red-400 font-[family-name:var(--font-dm-sans)]">
            {errorMsg}
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex items-center justify-center gap-2 rounded-md bg-[#2D7DFA] px-6 py-3 text-sm font-[family-name:var(--font-dm-sans)] font-medium text-white transition-colors hover:bg-[#2D7DFA]/90 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending...
          </>
        ) : (
          "Send Message →"
        )}
      </button>
    </form>
  );
}
