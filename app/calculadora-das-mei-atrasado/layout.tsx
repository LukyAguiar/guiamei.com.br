import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora DAS MEI 2026: simule multa e juros em segundos",
  description: "Calcule o valor exato do DAS MEI com multa e juros de atraso. Simulador gratuito e atualizado para 2026.",
  alternates: { canonical: "https://guiamei.vercel.app/calculadora-das-mei" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
