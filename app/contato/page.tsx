import type { Metadata } from "next";

// ISR — revalida a página a cada 24h sem rebuild
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Contato — MEI/guia",
  description: "Entre em contato com o MEI/guia para dúvidas, sugestões ou reportar informações desatualizadas.",
  alternates: { canonical: "https://guiamei.com.br/contato" },
};

export default function Page() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="font-serif text-4xl mb-4">Contato</h1>
      <p className="text-[var(--muted)] mb-10 leading-relaxed text-sm">
        Encontrou alguma informação desatualizada? Tem uma sugestão de conteúdo? Quer nos avisar sobre uma mudança na legislação do MEI? Adoramos receber esse tipo de feedback.
      </p>

      <div className="space-y-4">
        <div className="bg-white border border-[var(--border)] rounded-xl p-5">
          <p className="font-medium text-sm mb-1">📧 E-mail</p>
          <p className="text-sm text-[var(--muted)]">lkprojects@outlook.com.br</p>
          <p className="text-xs text-[var(--muted)] mt-1">Respondemos em até 2 dias úteis.</p>
        </div>

        <div className="bg-[var(--green-light)] border border-[#b2ddc4] rounded-xl p-5">
          <p className="font-medium text-sm mb-1">💡 Antes de entrar em contato</p>
          <p className="text-sm text-[var(--muted)]">
            Para dúvidas sobre MEI (pagamento, declaração, nota fiscal), consulte nossos guias — a maioria das perguntas frequentes já está respondida em detalhes. Não somos contadores e não prestamos consultoria individual.
          </p>
        </div>

        <div className="bg-white border border-[var(--border)] rounded-xl p-5">
          <p className="font-medium text-sm mb-1">🔗 Links úteis para dúvidas oficiais</p>
          <div className="space-y-1 mt-2">
            {[
              { label: "Portal do Empreendedor (Gov.br)", href: "https://www.gov.br/empresas-e-negocios/pt-br/empreendedor" },
              { label: "SEBRAE — Atendimento MEI", href: "https://www.sebrae.com.br" },
              { label: "Receita Federal — Simples Nacional", href: "https://www8.receita.fazenda.gov.br/SimplesNacional" },
            ].map((link, i) => (
              <a key={i} href={link.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[var(--green)] hover:underline">
                <span>→</span> {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
