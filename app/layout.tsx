import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import { Header, Footer } from "./components/ui";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script";

import "./globals.css";

const serif = DM_Serif_Display({ subsets: ["latin"], weight: "400", variable: "--font-serif" });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: { default: "MEI/guia — Guia completo do MEI 2026", template: "%s | MEI/guia" },
  description: "Guia completo e atualizado sobre MEI em 2026: como pagar o DAS, declarar o DASN-SIMEI, emitir nota fiscal e muito mais.",
  alternates: { canonical: "guiamei.vercel.app" },
  openGraph: {
    siteName: "MEI/guia",
    locale: "pt_BR",
    type: "website",
  },  
  verification: {
    google: 'Xt0jGkOLNmz6LL3vzFE469gsH4tmdH7JOYaZpnI92tg',
  },
    icons: {
    icon: "/favicon-mei-2.ico",
    shortcut: "/favicon-mei-2.ico",
    apple: "/apple-touch-icon-2.png",
  },
  other: {
  "google-adsense-account": "ca-pub-1997841883371001",
},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <Header />
        
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
