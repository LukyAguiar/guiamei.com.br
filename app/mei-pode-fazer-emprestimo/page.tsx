import type { Metadata } from "next";
import { PageHero, AlertBox, RelatedPages, InternalLink, FaqItem, ExternalLink , AdSlot } from "../components/ui";

// ISR — revalida a página a cada 24h sem rebuild
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "MEI pode fazer empréstimo em 2026? Veja requisitos e cuidados",
  description: "Sim, MEI pode fazer empréstimo. Conheça as principais linhas de crédito disponíveis em 2026, taxas, requisitos e como aumentar suas chances de aprovação.",
  alternates: { canonical: "https://guiamei.vercel.app/mei-pode-fazer-emprestimo" },
};

export default function Page() {
  return (
    <main>
      <PageHero
        badge="Crédito · MEI 2026"
        title="MEI pode fazer empréstimo?"
        desc="Sim! MEI tem acesso a linhas de crédito específicas com taxas menores que o crédito pessoal. Veja as opções disponíveis em 2026."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">

        {/* AD TOPO */}
        <AdSlot position="topo" />

        <AlertBox type="success">
          <p className="font-semibold mb-1">✅ MEI pode sim fazer empréstimo</p>
          <p className="text-sm">O CNPJ do MEI abre acesso a linhas de crédito para pessoa jurídica, geralmente com taxas menores que empréstimos pessoais. A chave é ter o CNPJ regular e histórico de faturamento.</p>
        </AlertBox>

        <section aria-labelledby="linhas-title">
          <h2 id="linhas-title" className="font-serif text-2xl mb-4">Principais linhas de crédito para MEI</h2>
          <div className="space-y-4">
            {[
              {
                nome: "BNDES Microcrédito",
                desc: "Linha de crédito federal para microempreendedores. Taxas subsidiadas pelo governo, ideais para capital de giro e investimento em equipamentos.",
                taxa: "A partir de 1,49% a.m.",
                limite: "Até R$ 21.000",
                requisito: "CNPJ ativo há pelo menos 6 meses",
                destaque: true,
              },
              {
                nome: "Banco do Brasil — Crédito MEI",
                desc: "Linha específica para MEI com análise simplificada. Disponível para correntistas e não correntistas.",
                taxa: "Varia conforme análise",
                limite: "Até R$ 30.000",
                requisito: "CNPJ ativo, sem débitos na Receita",
                destaque: false,
              },
              {
                nome: "Caixa Econômica Federal — MEI Fácil",
                desc: "Produto específico para MEI da Caixa, com análise rápida e condições especiais para quem tem conta na Caixa.",
                taxa: "A partir de 1,59% a.m.",
                limite: "Até R$ 25.000",
                requisito: "Conta ativa e CNPJ regular",
                destaque: false,
              },
              {
                nome: "Fintechs (Creditas, Nexoos, etc.)",
                desc: "Plataformas digitais com aprovação mais rápida e menor burocracia. Taxas podem ser maiores, mas o processo é mais ágil.",
                taxa: "A partir de 1,9% a.m.",
                limite: "Varia por plataforma",
                requisito: "CNPJ ativo e faturamento comprovável",
                destaque: false,
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-2xl p-5 border-2 ${item.destaque ? "bg-[var(--green-light)] border-[#b2ddc4]" : "bg-white border-[var(--border)]"}`}>
                <div className="flex justify-between items-start gap-2 mb-2">
                  <p className="font-semibold text-sm">{item.nome}</p>
                  {item.destaque && <span className="text-[10px] font-semibold uppercase tracking-widest bg-[var(--green)] text-white px-2 py-0.5 rounded-full shrink-0">Indicado</span>}
                </div>
                <p className="text-sm text-[var(--muted)] mb-3">{item.desc}</p>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div><p className="text-[var(--muted)]">Taxa</p><p className="font-semibold">{item.taxa}</p></div>
                  <div><p className="text-[var(--muted)]">Limite</p><p className="font-semibold">{item.limite}</p></div>
                  <div><p className="text-[var(--muted)]">Requisito</p><p className="font-semibold">{item.requisito}</p></div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[var(--muted)] mt-2">* Taxas e limites sujeitos a alteração. Consulte diretamente a instituição para condições atualizadas.</p>
        </section>

        <section aria-labelledby="aprovacao-title">
          <h2 id="aprovacao-title" className="font-serif text-2xl mb-4">Como aumentar as chances de aprovação</h2>
          <div className="space-y-3">
            {[
              { dica: "CNPJ sem débitos na Receita", desc: "DAS em atraso ou DASN-SIMEI não entregue são os principais motivos de reprovação. Regularize antes de pedir crédito." },
              { dica: "Emita notas fiscais", desc: "Notas emitidas comprovam faturamento de forma oficial. Bancos confiam mais em quem tem histórico documentado de notas." },
              { dica: "Conta PJ com movimentação", desc: "Ter uma conta jurídica com movimentações regulares mostra que o negócio é ativo. Veja: MEI precisa de conta PJ." },
              { dica: "Tempo de CNPJ", desc: "Quanto mais antigo o CNPJ ativo, mais confiança gera. MEI com menos de 6 meses costuma ter mais dificuldade." },
              { dica: "Score de crédito do CPF", desc: "Para MEI, o score pessoal do titular ainda pesa bastante na análise. Manter CPF limpo é importante." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white border border-[var(--border)] rounded-xl px-5 py-4">
                <span className="text-[var(--green)] font-bold text-sm shrink-0">✓</span>
                <div>
                  <p className="font-semibold text-sm">{item.dica}</p>
                  <p className="text-[var(--muted)] text-sm mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <AlertBox type="warning">
          <p className="font-semibold mb-1">⚠️ Cuidado com agiotas disfarçados</p>
          <p className="text-sm">Desconfie de ofertas de crédito fácil sem consulta ao CNPJ ou CPF, com taxas muito baixas ou que pedem pagamento antecipado. Verifique se a instituição tem autorização do Banco Central em <ExternalLink href="https://www.bcb.gov.br/estabilidadefinanceira/pesquisainstituicao" className="text-[var(--green)] underline">bcb.gov.br</ExternalLink>.</p>
        </AlertBox>

        <section aria-labelledby="faq-title">
          <h2 id="faq-title" className="font-serif text-2xl mb-4">Dúvidas frequentes</h2>
          <div className="space-y-2">
            <FaqItem q="MEI pode pegar empréstimo sem CNPJ?" a="Pode pegar crédito pessoal pelo CPF, mas não acessa as linhas específicas de PJ. Usar o CNPJ geralmente dá acesso a condições melhores e limites maiores." />
            <FaqItem q="Empréstimo do MEI afeta meu CPF?" a="Depende da modalidade. Em empréstimos PJ para MEI, geralmente o titular assina como avalista — então sim, inadimplência pode impactar o CPF também." />
            <FaqItem q="Posso usar o empréstimo para qualquer finalidade?" a="Linhas de capital de giro permitem uso livre. Já linhas de investimento (compra de equipamento, por exemplo) podem exigir comprovação do uso. Consulte as condições específicas." />
          </div>
        </section>

        {/* AD FINAL */}
        <AdSlot position="final" />

        {/* INTERLINKS */}
        <AlertBox type="info">
          <p className="font-semibold mb-2">🔗 Veja também</p>
          <ul className="space-y-1 text-sm">
            <li>→ <InternalLink href="/mei-tem-direito-credito">MEI tem direito a crédito?</InternalLink></li>
            <li>→ <InternalLink href="/cartao-para-mei-melhor-opcao">Melhor cartão para MEI</InternalLink></li>
            <li>→ <InternalLink href="/mei-precisa-conta-pj">MEI precisa de conta PJ?</InternalLink></li>
            <li>→ <InternalLink href="/melhores-contas-para-mei">Melhores contas para MEI</InternalLink></li>
          </ul>
        </AlertBox>

      </div>

      <RelatedPages current="/mei-pode-fazer-emprestimo" />
    </main>
  );
}
