// src/components/Footer.tsx
export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between text-sm">
        <p>© {new Date().getFullYear()} Nick Russert</p>
        <p className="text-zinc-500">Built with Next.js + Tailwind</p>
      </div>
    </footer>
  );
}
