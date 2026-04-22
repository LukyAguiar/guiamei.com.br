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

// ─── FaqSchema ────────────────────────────────────────────────────────────────
// Gera o JSON-LD para FAQ Schema.org automaticamente a partir dos dados.
// Uso: <FaqSchema items={[{ q: "...", a: "..." }]} />
export function FaqSchema({ items }: { items: { q: string; a: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
