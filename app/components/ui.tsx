// ─── ui.tsx — barrel de componentes ──────────────────────────────────────────
// Mantém compatibilidade com todos os imports existentes.
// Novos componentes ficam em arquivos próprios; este arquivo re-exporta tudo.

import Link from "next/link";
export { Header } from "./header";
export { Footer } from "./footer";
export { FaqItem, FaqSchema } from "./faq-item";
export { ArticleSchema } from "./article-schema";

// ─── Badge ────────────────────────────────────────────────────────────────────
export function Badge({
  children,
  variant = "green",
}: {
  children: React.ReactNode;
  variant?: "green" | "gold" | "white" | "red";
}) {
  const styles: Record<string, string> = {
    green: "bg-[var(--green-light)] text-[var(--green)]",
    gold: "bg-[var(--gold-light)] text-[var(--gold)]",
    white: "bg-white/15 text-white",
    red: "bg-red-100 text-red-700",
  };
  return (
    <span className={`inline-block text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full ${styles[variant]}`}>
      {children}
    </span>
  );
}

// ─── ExternalLink ─────────────────────────────────────────────────────────────
export function ExternalLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${children} (abre em nova aba)`} className={className}>
      {children}
    </a>
  );
}

// ─── InternalLink ─────────────────────────────────────────────────────────────
export function InternalLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link href={href} className={`text-[var(--green)] font-semibold underline underline-offset-2 hover:opacity-75 transition-opacity ${className}`}>
      {children}
    </Link>
  );
}

// ─── PageHero ─────────────────────────────────────────────────────────────────
export function PageHero({ badge, title, desc }: { badge: string; title: string; desc: string }) {
  return (
    <section className="relative overflow-hidden bg-[var(--green)] text-white">
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/[0.04]" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/[0.04]" />
      <div className="relative max-w-3xl mx-auto px-6 py-14">
        <Badge variant="white">{badge}</Badge>
        <h1 className="font-serif text-4xl md:text-5xl mt-4 mb-4 leading-tight">{title}</h1>
        <p className="text-white/85 text-lg leading-relaxed max-w-xl">{desc}</p>
      </div>
    </section>
  );
}

// ─── StepItem ─────────────────────────────────────────────────────────────────
export function StepItem({ num, title, desc, isLast }: { num: string; title: string; desc: React.ReactNode; isLast?: boolean }) {
  return (
    <div className="flex gap-5 pb-8 relative">
      {!isLast && <div className="absolute left-5 top-10 bottom-0 w-px bg-[var(--border)]" />}
      <div className="min-w-[40px] h-10 rounded-full bg-[var(--green)] text-white flex items-center justify-center text-xs font-bold shrink-0 z-10">
        {num}
      </div>
      <div className="pt-2">
        <h3 className="text-base font-medium mb-1">{title}</h3>
        <div className="text-[var(--muted)] text-sm leading-relaxed">{desc}</div>
      </div>
    </div>
  );
}

// ─── AlertBox ─────────────────────────────────────────────────────────────────
export function AlertBox({ type = "warning", children }: { type?: "warning" | "info" | "success"; children: React.ReactNode }) {
  const styles: Record<string, string> = {
    warning: "bg-red-50 border-red-200 text-red-800",
    info: "bg-blue-50 border-blue-200 text-blue-800",
    success: "bg-[var(--green-light)] border-[#b2ddc4] text-[var(--ink)]",
  };
  return (
    <div className={`border rounded-xl p-5 text-sm leading-relaxed ${styles[type]}`}>
      {children}
    </div>
  );
}

// ─── RelatedPages ─────────────────────────────────────────────────────────────
export function RelatedPages({ current }: { current: string }) {
  const pages = [
    { href: "/como-emitir-das-mei", label: "Como emitir o DAS-MEI" },
    { href: "/das-atrasado", label: "DAS atrasado: o que fazer" },
    { href: "/como-declarar-dasn-simei", label: "Como declarar o DASN-SIMEI" },
    { href: "/nota-fiscal-mei", label: "Como emitir nota fiscal MEI" },
    { href: "/o-que-acontece-se-nao-pagar", label: "O que acontece se não pagar" },
    { href: "/como-dar-baixa-no-mei", label: "Como dar baixa no MEI" },
    { href: "/mei-precisa-de-contador", label: "MEI precisa de contador?" },
    { href: "/mei-pode-ter-funcionario", label: "MEI pode ter funcionário?" },
    { href: "/limite-mei-2026", label: "Limite do MEI em 2026" },
  ].filter((p) => p.href !== current);

  return (
    <section className="max-w-3xl mx-auto px-6 pt-14 pb-4">
      <h2 className="font-serif text-2xl mb-5">Veja também</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {pages.slice(0, 6).map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="flex items-center gap-3 bg-white border border-[var(--border)] rounded-xl px-4 py-3 text-sm font-medium text-[var(--ink)] hover:border-[var(--green)] hover:text-[var(--green)] transition-colors group"
          >
            <span className="text-[var(--green)] group-hover:translate-x-0.5 transition-transform">→</span>
            {p.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

// ─── AdSlot ───────────────────────────────────────────────────────────────────
export function AdSlot({ position = "meio" }: { position?: "topo" | "meio" | "final" }) {
  const labels: Record<string, string> = {
    topo: "Publicidade — topo",
    meio: "Publicidade",
    final: "Publicidade — final",
  };
  return (
    <div
      className="w-full rounded-xl border border-dashed border-[var(--border)] bg-white/60 flex items-center justify-center py-6 text-xs text-[var(--muted)] tracking-widest uppercase"
      aria-label={labels[position]}
      data-ad-slot={position}
    >
      {/* Espaço reservado para anúncio — substitua pelo script do AdSense */}
      {labels[position]}
    </div>
  );
}

export function Badge({
  children,
  variant = "green",
}: {
  children: React.ReactNode;
  variant?: "green" | "gold" | "white" | "red";
}) {
  const styles: Record<string, string> = {
    green: "bg-[var(--green-light)] text-[var(--green)]",
    gold: "bg-[var(--gold-light)] text-[var(--gold)]",
    white: "bg-white/15 text-white",
    red: "bg-red-100 text-red-700",
  };
  return (
    <span className={`inline-block text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full ${styles[variant]}`}>
      {children}
    </span>
  );
}

// ─── ExternalLink ─────────────────────────────────────────────────────────────
export function ExternalLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${children} (abre em nova aba)`} className={className}>
      {children}
    </a>
  );
}

// ─── InternalLink ─────────────────────────────────────────────────────────────
export function InternalLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link href={href} className={`text-[var(--green)] font-semibold underline underline-offset-2 hover:opacity-75 transition-opacity ${className}`}>
      {children}
    </Link>
  );
}

// ─── PageHero ─────────────────────────────────────────────────────────────────
export function PageHero({ badge, title, desc }: { badge: string; title: string; desc: string }) {
  return (
    <section className="relative overflow-hidden bg-[var(--green)] text-white">
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/[0.04]" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/[0.04]" />
      <div className="relative max-w-3xl mx-auto px-6 py-14">
        <Badge variant="white">{badge}</Badge>
        <h1 className="font-serif text-4xl md:text-5xl mt-4 mb-4 leading-tight">{title}</h1>
        <p className="text-white/85 text-lg leading-relaxed max-w-xl">{desc}</p>
      </div>
    </section>
  );
}

// ─── StepItem ─────────────────────────────────────────────────────────────────
export function StepItem({ num, title, desc, isLast }: { num: string; title: string; desc: React.ReactNode; isLast?: boolean }) {
  return (
    <div className="flex gap-5 pb-8 relative">
      {!isLast && <div className="absolute left-5 top-10 bottom-0 w-px bg-[var(--border)]" />}
      <div className="min-w-[40px] h-10 rounded-full bg-[var(--green)] text-white flex items-center justify-center text-xs font-bold shrink-0 z-10">
        {num}
      </div>
      <div className="pt-2">
        <h3 className="text-base font-medium mb-1">{title}</h3>
        <div className="text-[var(--muted)] text-sm leading-relaxed">{desc}</div>
      </div>
    </div>
  );
}

// ─── AlertBox ─────────────────────────────────────────────────────────────────
export function AlertBox({ type = "warning", children }: { type?: "warning" | "info" | "success"; children: React.ReactNode }) {
  const styles: Record<string, string> = {
    warning: "bg-red-50 border-red-200 text-red-800",
    info: "bg-blue-50 border-blue-200 text-blue-800",
    success: "bg-[var(--green-light)] border-[#b2ddc4] text-[var(--ink)]",
  };
  return (
    <div className={`border rounded-xl p-5 text-sm leading-relaxed ${styles[type]}`}>
      {children}
    </div>
  );
}

// ─── SatelliteLinks (related pages) ──────────────────────────────────────────
export function RelatedPages({ current }: { current: string }) {
  const pages = [
    { href: "/como-emitir-das-mei", label: "Como emitir o DAS-MEI" },
    { href: "/das-atrasado", label: "DAS atrasado: o que fazer" },
    { href: "/como-declarar-dasn-simei", label: "Como declarar o DASN-SIMEI" },
    { href: "/nota-fiscal-mei", label: "Como emitir nota fiscal MEI" },
    { href: "/o-que-acontece-se-nao-pagar", label: "O que acontece se não pagar" },
    { href: "/como-dar-baixa-no-mei", label: "Como dar baixa no MEI" },
    { href: "/mei-precisa-de-contador", label: "MEI precisa de contador?" },
    { href: "/mei-pode-ter-funcionario", label: "MEI pode ter funcionário?" },
    { href: "/limite-mei-2026", label: "Limite do MEI em 2026" },
  ].filter((p) => p.href !== current);

  return (
    <section className="max-w-3xl mx-auto px-6 pt-14 pb-4">
      <h2 className="font-serif text-2xl mb-5">Veja também</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {pages.slice(0, 6).map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="flex items-center gap-3 bg-white border border-[var(--border)] rounded-xl px-4 py-3 text-sm font-medium text-[var(--ink)] hover:border-[var(--green)] hover:text-[var(--green)] transition-colors group"
          >
            <span className="text-[var(--green)] group-hover:translate-x-0.5 transition-transform">→</span>
            {p.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

// ─── Header ──────────────────────────────────────────────────────────────────
export function Header() {
  return (
    <header className="border-b border-[var(--border)] bg-white sticky top-0 z-50">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl text-[var(--green)] font-bold">
          MEI<span className="text-[var(--muted)] font-sans font-normal text-base">/guia</span>
        </Link>
        <nav className="flex gap-5 text-sm text-[var(--muted)]">
          <Link href="/" className="hover:text-[var(--green)] transition-colors">Início</Link>
          <Link href="/sobre" className="hover:text-[var(--green)] transition-colors">Sobre</Link>
          <Link href="/contato" className="hover:text-[var(--green)] transition-colors">Contato</Link>
        </nav>
      </div>
    </header>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-16 py-8 px-6">
      <div className="max-w-3xl mx-auto space-y-4">
        {/* Aviso legal */}
        <div className="bg-[var(--gold-light)] border border-[#f0d8a8] rounded-lg px-4 py-3 text-xs text-[var(--muted)] leading-relaxed">
          <strong className="text-[var(--ink)]">⚠️ Aviso legal:</strong>{" "}
          Este site é informativo e não possui vínculo com a Receita Federal do Brasil, Governo Federal ou qualquer órgão público.
          As informações são baseadas nas regras do Simples Nacional e podem estar sujeitas a alterações.
          Sempre consulte o{" "}
          <ExternalLink href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor" className="underline hover:text-[var(--green)]">
            Portal Gov.br
          </ExternalLink>{" "}
          para dados oficiais.
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-4 text-xs text-[var(--muted)]">
          <p>© 2026 MEI/guia · Informações baseadas nas regras do Simples Nacional.</p>
          <div className="flex gap-4 shrink-0">
            <Link href="/politica-de-privacidade" className="hover:text-[var(--green)]">Privacidade</Link>
            <Link href="/termos-de-uso" className="hover:text-[var(--green)]">Termos</Link>
            <Link href="/sobre" className="hover:text-[var(--green)]">Sobre</Link>
            <Link href="/contato" className="hover:text-[var(--green)]">Contato</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── AdSlot ───────────────────────────────────────────────────────────────────
export function AdSlot({ position = "meio" }: { position?: "topo" | "meio" | "final" }) {
  const labels: Record<string, string> = {
    topo: "Publicidade — topo",
    meio: "Publicidade",
    final: "Publicidade — final",
  };
  return (
    <div
      className="w-full rounded-xl border border-dashed border-[var(--border)] bg-white/60 flex items-center justify-center py-6 text-xs text-[var(--muted)] tracking-widest uppercase"
      aria-label={labels[position]}
      data-ad-slot={position}
    >
      {/* Espaço reservado para anúncio — substitua pelo script do AdSense */}
      {labels[position]}
    </div>
  );
}

// ─── FaqItem ─────────────────────────────────────────────────────────────────
export function FaqItem({ q, a }: { q: string; a: React.ReactNode }) {
  return (
    <details className="bg-white border border-[var(--border)] rounded-xl overflow-hidden">
      <summary className="flex justify-between items-center px-5 py-4 font-medium text-[0.95rem] cursor-pointer list-none">
        {q}
        <span className="text-[var(--muted)] text-xs ml-3 shrink-0 chevron">▼</span>
      </summary>
      <div className="px-5 pb-4 text-[var(--muted)] text-sm leading-relaxed">{a}</div>
    </details>
  );
}
