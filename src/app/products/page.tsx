import type { Metadata } from "next";
import ProductsContent from "./ProductsContent";

export const metadata: Metadata = {
  title: "Our Products — Zyndrex Developers",
  description:
    "Software products built and operated by Zyndrex Developers. GrowZen — a 6-role enterprise operations platform for growing companies.",
};

export default function ProductsPage() {
  return <ProductsContent />;
}
