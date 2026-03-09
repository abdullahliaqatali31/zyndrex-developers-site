import Link from "next/link";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/websprint", label: "WebSprint" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1E2E45] bg-[#0A0F1E]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Logo + tagline */}
          <div>
            <Link
              href="/"
              className="font-[family-name:var(--font-syne)] text-lg font-bold text-[#F0F4FF]"
            >
              Zyndrex<span className="text-[#2D7DFA]">.</span>
            </Link>
            <p className="mt-2 text-sm text-[#8B9AB5] font-[family-name:var(--font-dm-sans)] max-w-xs">
              We Build Systems That Run Businesses.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-[family-name:var(--font-jetbrains-mono)] text-[#8B9AB5] uppercase tracking-widest mb-1">
              Navigation
            </p>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#8B9AB5] hover:text-[#F0F4FF] transition-colors font-[family-name:var(--font-dm-sans)]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-[family-name:var(--font-jetbrains-mono)] text-[#8B9AB5] uppercase tracking-widest mb-1">
              Contact
            </p>
            <a
              href="mailto:hello@zyndrex.com"
              className="text-sm text-[#8B9AB5] hover:text-[#2D7DFA] transition-colors font-[family-name:var(--font-dm-sans)]"
            >
              hello@zyndrex.com
            </a>
            <Link
              href="/contact"
              className="text-sm text-[#2D7DFA] hover:text-[#2D7DFA]/80 transition-colors font-[family-name:var(--font-dm-sans)]"
            >
              Start a project →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-2 border-t border-[#1E2E45] pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-[#8B9AB5] font-[family-name:var(--font-dm-sans)]">
            © 2025 Zyndrex Developers
          </p>
          <a
            href="mailto:hello@zyndrex.com"
            className="text-xs text-[#8B9AB5] hover:text-[#F0F4FF] transition-colors font-[family-name:var(--font-dm-sans)]"
          >
            hello@zyndrex.com
          </a>
        </div>
      </div>
    </footer>
  );
}
