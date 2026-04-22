import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página não encontrada — MEI/guia",
};

export default function NotFound() {
  const links = [
    { href: "/como-emitir-das-mei", label: "Como emitir o DAS-MEI" },
    { href: "/das-atrasado", label: "DAS atrasado: o que fazer" },
    { href: "/nota-fiscal-mei", label: "Nota fiscal MEI" },
    { href: "/limite-mei-2026", label: "Limite do MEI em 2026" },
  ];

  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="max-w-md text-center space-y-6">
        <div className="text-5xl">🔍</div>
        <h1 className="font-serif text-3xl text-[var(--ink)]">
          Página não encontrada
        </h1>
        <p className="text-[var(--muted)] text-sm leading-relaxed">
          O endereço que você acessou não existe ou foi movido. Confira
          alguns dos nossos guias mais acessados:
        </p>
        <div className="grid grid-cols-1 gap-2 text-left">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="flex items-center gap-3 bg-white border border-[var(--border)] rounded-xl px-4 py-3 text-sm font-medium text-[var(--ink)] hover:border-[var(--green)] hover:text-[var(--green)] transition-colors"
            >
              <span className="text-[var(--green)]">→</span>
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          href="/"
          className="inline-block text-[var(--green)] font-semibold text-sm underline underline-offset-2 hover:opacity-75 transition-opacity"
        >
          Ver todos os guias →
        </Link>
      </div>
    </main>
  );
}
