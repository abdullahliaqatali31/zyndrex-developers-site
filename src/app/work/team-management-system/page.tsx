import type { Metadata } from "next";
import TeamMgmtContent from "./TeamMgmtContent";

export const metadata: Metadata = {
  title: "70-Person Operations Platform — Zyndrex Developers Case Study",
  description:
    "How Zyndrex built a complete 6-role enterprise management system that automated every internal process for a 70-person company.",
};

export default function TeamManagementPage() {
  return <TeamMgmtContent />;
}
