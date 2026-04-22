import type { Metadata } from "next";
import { PageHero, AlertBox, RelatedPages, InternalLink, FaqItem , AdSlot } from "../components/ui";

// ISR — revalida a página a cada 24h sem rebuild
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "MEI precisa emitir nota fiscal em 2026? Veja quando é obrigatório",
  description: "Descubra quando o MEI é obrigado a emitir nota fiscal, quais as consequências de não emitir e como funciona para serviços e produtos.",
  alternates: { canonical: "https://guiamei.vercel.app/mei-precisa-emitir-nota-fiscal" },
};

export default function Page() {
  return (
    <main>
      <PageHero
        badge="Nota Fiscal · Obrigatoriedade"
        title="MEI precisa emitir nota fiscal?"
        desc="A resposta direta: depende. Nem sempre é obrigatório — mas há situações em que sim. Entenda quando e por quê."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">

        {/* AD TOPO */}
        <AdSlot position="topo" />

        <section aria-labelledby="resposta-title">
          <h2 id="resposta-title" className="font-serif text-2xl mb-4">A resposta direta</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-5">
              <p className="font-bold text-red-700 text-sm mb-2">🔴 SIM, é obrigatório quando:</p>
              <ul className="space-y-1 text-sm text-[var(--muted)]">
                <li>→ Vender para empresa (CNPJ)</li>
                <li>→ Pessoa física solicitar a nota</li>
                <li>→ Contrato exigir nota fiscal</li>
              </ul>
            </div>
            <div className="bg-[var(--green-light)] border-2 border-[#b2ddc4] rounded-2xl p-5">
              <p className="font-bold text-[var(--green)] text-sm mb-2">🟢 Opcional quando:</p>
              <ul className="space-y-1 text-sm text-[var(--muted)]">
                <li>→ Venda para pessoa física sem solicitação</li>
                <li>→ Serviço informal entre conhecidos</li>
                <li>→ Venda com cupom fiscal (varejo físico)</li>
              </ul>
            </div>
          </div>
        </section>

        <section aria-labelledby="cnpj-title">
          <h2 id="cnpj-title" className="font-serif text-2xl mb-4">Por que é obrigatório para empresas?</h2>
          <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
            Quando uma empresa contrata um MEI, ela precisa da nota fiscal para lançar o gasto na contabilidade dela e deduzir impostos. Sem nota, a empresa não pode registrar a despesa — e muitas simplesmente se recusam a pagar sem ela.
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            Na prática, se você presta serviço para qualquer empresa, <strong>sempre emita a nota antes de receber</strong>. É parte do acordo comercial.
          </p>
        </section>

        <AlertBox type="warning">
          <p className="font-semibold mb-1">⚠️ Não emitir nota quando obrigatório tem punição</p>
          <p className="text-sm">A omissão de nota fiscal pode gerar multa da Receita Federal ou da prefeitura (no caso de serviços). Além disso, dificulta comprovar o faturamento para o DASN-SIMEI anual e para conseguir crédito no banco.</p>
        </AlertBox>

        <section aria-labelledby="vantagens-title">
          <h2 id="vantagens-title" className="font-serif text-2xl mb-4">Por que emitir mesmo quando não é obrigatório?</h2>
          <div className="space-y-3">
            {[
              { icon: "📊", title: "Controle do faturamento", desc: "As notas emitidas somam automaticamente seu faturamento. Isso ajuda a não ultrapassar o limite de R$ 81.000/ano sem perceber." },
              { icon: "🏦", title: "Facilita crédito no banco", desc: "Bancos e fintechs usam o histórico de notas para liberar empréstimos e linhas de crédito para MEI. Sem notas, fica difícil comprovar renda." },
              { icon: "📋", title: "DASN-SIMEI mais fácil", desc: "Na declaração anual, você precisa informar o faturamento bruto. Ter todas as notas emitidas torna isso muito mais simples e preciso." },
              { icon: "🤝", title: "Profissionalismo", desc: "Clientes percebem mais profissionalismo em quem emite nota. Pode ser o diferencial para fechar contratos maiores." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white border border-[var(--border)] rounded-xl px-5 py-4">
                <span className="text-xl shrink-0">{item.icon}</span>
                <div>
                  <p className="font-semibold text-sm">{item.title}</p>
                  <p className="text-[var(--muted)] text-sm mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <AlertBox type="success">
          <p className="font-semibold mb-1">💡 Emitir nota fiscal não custa nada a mais</p>
          <p className="text-sm">O ISS (imposto sobre serviços) já está incluído no DAS mensal do MEI. Emitir a nota não gera nenhuma cobrança extra. É só um documento — e é gratuito. Veja como emitir: <InternalLink href="/mei-como-emitir-nota-fiscal">como emitir nota fiscal sendo MEI</InternalLink>.</p>
        </AlertBox>

        <section aria-labelledby="faq-title">
          <h2 id="faq-title" className="font-serif text-2xl mb-4">Dúvidas frequentes</h2>
          <div className="space-y-2">
            <FaqItem q="MEI pode se recusar a emitir nota fiscal?" a="Não, quando há obrigação (venda para CNPJ ou solicitação do cliente). A recusa é infração fiscal. Quando for opcional, tecnicamente sim, mas não é recomendado." />
            <FaqItem q="Nota fiscal conta no limite de R$ 81.000?" a="Sim. Todo valor faturado — com ou sem nota — entra no limite anual do MEI. Emitir notas só facilita o controle, não aumenta o limite." />
            <FaqItem q="MEI que não emite nota pode cair na malha fina?" a="Pode. Se a Receita detectar inconsistências entre o faturamento declarado no DASN-SIMEI e movimentações bancárias, pode abrir uma fiscalização." />
            <FaqItem q="Preciso guardar as notas emitidas?" a="Sim, por pelo menos 5 anos. Guarde os PDFs e XMLs em pasta organizada por mês e ano. Na declaração anual, você vai precisar somar tudo." />
          </div>
        </section>

        {/* AD FINAL */}
        <AdSlot position="final" />

        {/* INTERLINKS */}
        <AlertBox type="info">
          <p className="font-semibold mb-2">🔗 Veja também</p>
          <ul className="space-y-1 text-sm">
            <li>→ <InternalLink href="/nota-fiscal-mei">Nota fiscal MEI: guia completo</InternalLink></li>
            <li>→ <InternalLink href="/mei-como-emitir-nota-fiscal">Como emitir nota fiscal sendo MEI</InternalLink></li>
            <li>→ <InternalLink href="/como-emitir-nf-mei-prefeitura">Como emitir NF na prefeitura</InternalLink></li>
            <li>→ <InternalLink href="/como-declarar-dasn-simei">Como declarar o DASN-SIMEI</InternalLink></li>
          </ul>
        </AlertBox>

      </div>

      <RelatedPages current="/mei-precisa-emitir-nota-fiscal" />
    </main>
  );
}
