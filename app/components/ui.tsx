import type { ReactNode } from "react";
import Link from "next/link";

export { Header } from "./header";
export { Footer } from "./footer";
export { FaqItem, FaqSchema } from "./faq-item";
export { ArticleSchema } from "./article-schema";

export function Badge({
  children,
  variant = "green",
}: {
  children: ReactNode;
  variant?: "green" | "gold" | "white" | "red";
}) {
  const styles: Record<string, string> = {
    green: "bg-[var(--green-light)] text-[var(--green)]",
    gold: "bg-[var(--gold-light)] text-[var(--gold)]",
    white: "bg-white/15 text-white",
    red: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-widest ${styles[variant]}`}
    >
      {children}
    </span>
  );
}

export function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${typeof children === "string" ? children : "Link"} (abre em nova aba)`}
      className={className}
    >
      {children}
    </a>
  );
}

export function InternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`font-semibold text-[var(--green)] underline underline-offset-2 transition-opacity hover:opacity-75 ${className}`}
    >
      {children}
    </Link>
  );
}

export function PageHero({
  badge,
  title,
  desc,
}: {
  badge: string;
  title: string;
  desc: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[var(--green)] text-white">
      <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/[0.04]" />
      <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/[0.04]" />
      <div className="relative mx-auto max-w-3xl px-6 py-14">
        <Badge variant="white">{badge}</Badge>
        <h1 className="mt-4 mb-4 font-serif text-4xl leading-tight md:text-5xl">
          {title}
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-white/85">{desc}</p>
      </div>
    </section>
  );
}

export function StepItem({
  num,
  title,
  desc,
  isLast,
}: {
  num: string;
  title: string;
  desc: ReactNode;
  isLast?: boolean;
}) {
  return (
    <div className="relative flex gap-5 pb-8">
      {!isLast && (
        <div className="absolute top-10 bottom-0 left-5 w-px bg-[var(--border)]" />
      )}
      <div className="z-10 flex h-10 min-w-[40px] shrink-0 items-center justify-center rounded-full bg-[var(--green)] text-xs font-bold text-white">
        {num}
      </div>
      <div className="pt-2">
        <h3 className="mb-1 text-base font-medium">{title}</h3>
        <div className="text-sm leading-relaxed text-[var(--muted)]">{desc}</div>
      </div>
    </div>
  );
}

export function AlertBox({
  type = "warning",
  children,
}: {
  type?: "warning" | "info" | "success";
  children: ReactNode;
}) {
  const styles: Record<string, string> = {
    warning: "border-red-200 bg-red-50 text-red-800",
    info: "border-blue-200 bg-blue-50 text-blue-800",
    success: "border-[#b2ddc4] bg-[var(--green-light)] text-[var(--ink)]",
  };

  return (
    <div className={`rounded-xl border p-5 text-sm leading-relaxed ${styles[type]}`}>
      {children}
    </div>
  );
}

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
  ].filter((page) => page.href !== current);

  return (
    <section className="mx-auto max-w-3xl px-6 pt-14 pb-4">
      <h2 className="mb-5 font-serif text-2xl">Veja também</h2>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {pages.slice(0, 6).map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="group flex items-center gap-3 rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--green)] hover:text-[var(--green)]"
          >
            <span className="text-[var(--green)] transition-transform group-hover:translate-x-0.5">
              →
            </span>
            {page.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

export function AdSlot({
  position = "meio",
}: {
  position?: "topo" | "meio" | "final";
}) {
  const labels: Record<string, string> = {
    topo: "Publicidade — topo",
    meio: "Publicidade",
    final: "Publicidade — final",
  };

  return (
    <div
      className="flex w-full items-center justify-center rounded-xl border border-dashed border-[var(--border)] bg-white/60 py-6 text-xs uppercase tracking-widest text-[var(--muted)]"
      aria-label={labels[position]}
      data-ad-slot={position}
    >
      {labels[position]}
    </div>
  );
}
