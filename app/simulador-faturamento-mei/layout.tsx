import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simulador de faturamento MEI 2026: calcule o limite proporcional",
  description: "Simule o limite de faturamento do MEI proporcional ao mês de abertura. Ferramenta gratuita e atualizada para 2026.",
  alternates: { canonical: "https://guiamei.vercel.app/simulador-faturamento-mei" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
