import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/lib/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 1px 2px rgba(0,0,0,.05), 0 10px 40px -12px rgba(0,0,0,.15)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            h1: { fontWeight: "700", letterSpacing: "-0.02em" },
            h2: { fontWeight: "700", letterSpacing: "-0.01em" },
            a: { textDecoration: "underline", textUnderlineOffset: "2px" },
            "p.lead": { color: theme("colors.zinc.600") },
          },
        },
        invert: {
          css: {
            "p.lead": { color: theme("colors.zinc.300") },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
