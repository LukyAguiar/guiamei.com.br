import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      // ── Cores do design system ───────────────────────────────────────────────
      colors: {
        green: {
          DEFAULT: "#1a6b3c",
          light:   "#e8f5ee",
          mid:     "#2d9b5a",
          dark:    "#14522e",
        },
        gold: {
          DEFAULT: "#c8922a",
          light:   "#fdf4e3",
          dark:    "#a0741f",
        },
        ink:    "#1a1a18",
        muted:  "#5c5c58",
        paper:  "#faf9f6",
        border: "#e2e0d8",
      },

      // ── Tipografia ───────────────────────────────────────────────────────────
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans:  ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],  // 10px
        "badge": ["0.6875rem", { lineHeight: "1rem", letterSpacing: "0.08em" }], // 11px
      },

      // ── Espaçamento consistente ───────────────────────────────────────────────
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "container": "48rem", // max-w-3xl = 768px → 48rem
      },

      // ── Border radius ─────────────────────────────────────────────────────────
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },

      // ── Sombras ───────────────────────────────────────────────────────────────
      boxShadow: {
        card:       "0 2px 8px rgba(0,0,0,0.06)",
        "card-hover": "0 8px 24px rgba(0,0,0,0.10)",
        inner:      "inset 0 1px 3px rgba(0,0,0,0.06)",
      },

      // ── Animações ─────────────────────────────────────────────────────────────
      transitionDuration: {
        DEFAULT: "200ms",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          from: { opacity: "0", transform: "translateX(-16px)" },
          to:   { opacity: "1", transform: "translateX(0)" },
        },
        pulseDot: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%":       { transform: "scale(1.4)", opacity: "0.6" },
        },
      },
      animation: {
        "fade-up":  "fadeUp 0.6s ease both",
        "slide-in": "slideIn 0.5s ease both",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
      },

      // ── Largura máxima de conteúdo ────────────────────────────────────────────
      maxWidth: {
        content: "48rem", // 768px — padrão do site
      },
    },
  },
  plugins: [],
};

export default config;
