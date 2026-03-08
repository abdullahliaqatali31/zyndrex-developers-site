import type { Metadata } from "next";
import WorkContent from "./WorkContent";

export const metadata: Metadata = {
  title: "Our Work — Zyndrex Developers",
  description:
    "Case studies from Zyndrex Developers — a 70-person operations platform and a cloud-based email processing pipeline handling millions of records.",
};

export default function WorkPage() {
  return <WorkContent />;
}
