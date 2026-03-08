import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  preload: true,
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Zyndrex Developers — We Build Systems That Run Businesses",
  description:
    "Enterprise software studio building internal operations platforms, data pipeline automation, and SaaS products. Based on Next.js, PostgreSQL, and Redis.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://zyndrex.com"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Zyndrex Developers",
    title: "Zyndrex Developers — We Build Systems That Run Businesses",
    description:
      "Enterprise software studio building internal operations platforms, data pipeline automation, and SaaS products.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zyndrex Developers — We Build Systems That Run Businesses",
    description:
      "Enterprise software studio building internal operations platforms, data pipeline automation, and SaaS products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
