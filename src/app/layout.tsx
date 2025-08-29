// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nick Russert — Portfolio",
  description:
    "Software Engineer · AI & Machine Learning — Computer Vision, Predictive Modeling, Data Science.",
  openGraph: {
    title: "Nick Russert — Portfolio",
    description:
      "Software Engineer · AI & Machine Learning — Computer Vision, Predictive Modeling, Data Science.",
    url: "https://your-domain.com",
    siteName: "Nick Russert",
    type: "website",
  },
  metadataBase: new URL("https://your-domain.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-dvh flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
