// src/components/ThemeToggle.tsx
"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="ml-1 rounded-xl border border-zinc-200 dark:border-zinc-800 p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}
