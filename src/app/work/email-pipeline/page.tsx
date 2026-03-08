import type { Metadata } from "next";
import EmailPipelineContent from "./EmailPipelineContent";

export const metadata: Metadata = {
  title: "Centralized Email Processing Pipeline — Zyndrex Developers Case Study",
  description:
    "How Zyndrex built a multi-worker cloud pipeline processing millions of records per day — fully automated with BullMQ, Redis, and real-time monitoring.",
};

export default function EmailPipelinePage() {
  return <EmailPipelineContent />;
}
