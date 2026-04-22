import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ── Performance ─────────────────────────────────────────────────────────────
  compress: true,

  // ── Segurança ────────────────────────────────────────────────────────────────
  poweredByHeader: false,

  // ── Imagens ──────────────────────────────────────────────────────────────────
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 dias
  },

  // ── Headers de segurança ─────────────────────────────────────────────────────
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        source: "/(.*)\\.(ico|png|jpg|jpeg|svg|woff2|woff)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },

  // ── Redirects ────────────────────────────────────────────────────────────────
  // Nenhum redirect de domínio necessário — o site roda em guiamei.vercel.app.
  // Se no futuro tiver domínio customizado, adicione o redirect aqui.
};

export default nextConfig;
