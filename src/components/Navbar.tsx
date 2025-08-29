// src/components/Navbar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-950/60 border-b border-zinc-200 dark:border-zinc-800">
      <nav className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">Nick Russert</Link>
        <div className="flex items-center gap-2">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-xl px-3 py-1 text-sm transition ${
                  active
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                    : "hover:bg-zinc-100 dark:hover:bg-zinc-900"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
