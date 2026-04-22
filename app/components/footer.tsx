import Link from "next/link";

function ExternalLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-16 py-8 px-6">
      <div className="max-w-3xl mx-auto space-y-4">
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
