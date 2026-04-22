import type { Metadata } from "next";
import { PageHero, AlertBox, RelatedPages, InternalLink, FaqItem , AdSlot , ArticleSchema, FaqSchema } from "../components/ui";

// ISR — revalida a página a cada 24h sem rebuild
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Limite do MEI em 2026: R$ 81 mil/ano e o que fazer se ultrapassar",
  description: "Veja o limite de faturamento do MEI em 2026, o que acontece se ultrapassar, limites de funcionários e de atividades permitidas.",
  alternates: { canonical: "https://guiamei.vercel.app/limite-mei-2026" }
};

export default function Page() {
  return (
    <main>
      <ArticleSchema
        title="Limite do MEI em 2026: R$ 81 mil/ano e o que fazer se ultrapassar"
        description="Veja o limite de faturamento do MEI em 2026, como calcular o limite proporcional e o que fazer se ultrapassar."
        url="https://guiamei.vercel.app/limite-mei-2026"
        dateModified="2026-04-21"
      />
      <FaqSchema items={[
        { q: "Qual é o limite de faturamento do MEI em 2026?", a: "O limite é de R$ 81.000 por ano (ou R$ 6.750 por mês, em média). Para MEI caminhoneiro, o limite é de R$ 251.600/ano." },
    { q: "O que acontece se ultrapassar o limite do MEI?", a: "Se ultrapassar até 20% (R$ 97.200), você migra para Microempresa (ME) no ano seguinte. Se ultrapassar mais de 20%, a migração é imediata e retroativa a janeiro." },
    { q: "O limite é proporcional no ano de abertura?", a: "Sim. Se você abriu o MEI em julho, o limite é proporcional: R$ 6.750 × 6 meses = R$ 40.500." },
    { q: "Posso faturar mais em um mês e menos em outro?", a: "Sim, o que importa é o total anual. O limite de R$ 81.000 é calculado sobre o faturamento bruto acumulado no ano." }
      ]} />
      <PageHero
        badge="Limites MEI · 2026"
        title="Limite do MEI em 2026"
        desc="Faturamento máximo, número de funcionários, atividades permitidas e o que fazer se ultrapassar os limites."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">

        {/* AD TOPO */}
        <AdSlot position="topo" />

        <section aria-labelledby="fat-title">
          <h2 id="fat-title" className="font-serif text-2xl mb-4">Limite de faturamento</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { tipo: "MEI padrão", valor: "R$ 81.000", detalhe: "por ano (R$ 6.750/mês em média)", cor: "green" },
              { tipo: "MEI Caminhoneiro", valor: "R$ 130.000", detalhe: "por ano (transportador autônomo)", cor: "gold" },
              { tipo: "MEI Ambulante", valor: "R$ 81.000", detalhe: "mesmo limite do MEI padrão", cor: "green" },
            ].map((item, i) => (
              <div key={i} className={`rounded-2xl p-5 border-2 ${item.cor === "green" ? "bg-[var(--green-light)] border-[#b2ddc4]" : "bg-[var(--gold-light)] border-[#f0d8a8]"}`}>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-2">{item.tipo}</p>
                <p className={`font-serif text-3xl ${item.cor === "green" ? "text-[var(--green)]" : "text-[var(--gold)]"}`}>{item.valor}</p>
                <p className="text-xs text-[var(--muted)] mt-1">{item.detalhe}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[var(--muted)] mt-3 px-1">* O limite é calculado sobre o faturamento <strong>bruto anual</strong> — tudo que entrou no caixa da empresa, antes de descontar custos.</p>
        </section>

        <section aria-labelledby="ultra-title">
          <h2 id="ultra-title" className="font-serif text-2xl mb-4">O que acontece se ultrapassar o limite?</h2>
          <div className="space-y-3">
            <div className="bg-white border border-[var(--border)] rounded-xl p-5">
              <p className="font-semibold text-sm mb-2">Ultrapassou até 20% (até R$ 97.200)</p>
              <p className="text-sm text-[var(--muted)]">Você será desenquadrado do MEI e passará automaticamente para o Simples Nacional como ME (Microempresa) no ano seguinte. O excesso de receita é tributado com alíquota maior no ano corrente.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <p className="font-semibold text-sm text-red-700 mb-2">Ultrapassou mais de 20% (acima de R$ 97.200)</p>
              <p className="text-sm text-[var(--muted)]">O desenquadramento é retroativo ao início do ano em que ultrapassou. Isso significa que você deverá pagar impostos como ME para o <strong>ano inteiro</strong>, o que pode gerar um valor alto de tributos retroativos.</p>
            </div>
          </div>
        </section>

        <AlertBox type="info">
          <p className="font-semibold mb-1">💡 Dica: monitore seu faturamento mensalmente</p>
          <p className="text-sm">Somando R$ 6.750/mês você chega ao limite anual. Se perceber que vai ultrapassar, antecipe o desenquadramento voluntário — é menos doloroso do que ser desenquadrado retroativamente.</p>
        </AlertBox>

        <section aria-labelledby="outros-title">
          <h2 id="outros-title" className="font-serif text-2xl mb-4">Outros limites do MEI</h2>
          <div className="space-y-3 text-sm">
            {[
              { limite: "Funcionários", valor: "Máximo 1", detalhe: "Com carteira assinada. Mais de 1 = obrigação de migrar para ME." },
              { limite: "Sócios", valor: "Nenhum", detalhe: "MEI é individual. Não pode ter sócios. Também não pode ser sócio de outra empresa." },
              { limite: "Atividades simultâneas", valor: "Até 15", detalhe: "Pode ter múltiplas atividades desde que todas sejam permitidas para MEI." },
              { limite: "Filiais", valor: "Nenhuma", detalhe: "MEI não pode ter filiais. Só um estabelecimento." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white border border-[var(--border)] rounded-xl px-5 py-4">
                <div className="w-32 shrink-0">
                  <p className="font-semibold">{item.limite}</p>
                  <p className="text-[var(--green)] font-bold text-xs mt-0.5">{item.valor}</p>
                </div>
                <p className="text-[var(--muted)]">{item.detalhe}</p>
              </div>
            ))}
          </div>
        </section>

        <AlertBox type="success">
          <p className="font-semibold mb-1">🚀 Cresceu além do MEI? Hora de migrar</p>
          <p className="text-sm">Ultrapassar os limites do MEI não é um problema — é sinal de crescimento! A migração para ME no Simples Nacional mantém a tributação simplificada. Converse com um contador para planejar a transição. Veja também: <InternalLink href="/mei-precisa-de-contador">quando vale a pena ter contador</InternalLink>.</p>
        </AlertBox>

        <section aria-labelledby="faq-title">
          <h2 id="faq-title" className="font-serif text-2xl mb-4">Dúvidas frequentes</h2>
          <div className="space-y-2">
            <FaqItem q="O limite do MEI vai aumentar em 2026?" a="Não houve anúncio de aumento do limite de R$ 81.000 para 2026. Atualizaremos este guia assim que houver mudanças oficiais." />
            <FaqItem q="Faturamento proporcional no ano de abertura?" a="Sim! Se você abriu o MEI no meio do ano, o limite é proporcional. Exemplo: abriu em julho, seu limite para 2026 é R$ 40.500 (6 meses × R$ 6.750)." />
            <FaqItem q="Vale a pena ficar no limite propositalmente?" a="Alguns empreendedores 'freiam' o faturamento para não perder o MEI. Isso pode ser contraproducente — faturar mais como ME pode ser mais lucrativo mesmo com mais impostos. Faça as contas." />
            <FaqItem q="Qual é o limite de faturamento do MEI em 2026?" a="O limite é de R$ 81.000 por ano (ou R$ 6.750 por mês, em média). Para MEI caminhoneiro, o limite é de R$ 251.600/ano." />
            <FaqItem q="O que acontece se ultrapassar o limite do MEI?" a="Se ultrapassar até 20% (R$ 97.200), você migra para Microempresa (ME) no ano seguinte. Se ultrapassar mais de 20%, a migração é imediata e retroativa a janeiro." />
            <FaqItem q="O limite é proporcional no ano de abertura?" a="Sim. Se você abriu o MEI em julho, o limite é proporcional: R$ 6.750 × 6 meses = R$ 40.500." />
          </div>
        </section>

        {/* AD FINAL */}
        <AdSlot position="final" />

        {/* INTERLINKS */}
        <AlertBox type="info">
          <p className="font-semibold mb-2">🔗 Veja também</p>
          <ul className="space-y-1 text-sm">
            <li>→ <InternalLink href="/mei-ultrapassou-limite-o-que-fazer">MEI ultrapassou o limite: e agora?</InternalLink></li>
            <li>→ <InternalLink href="/quanto-mei-pode-faturar-por-mes">Quanto o MEI pode faturar por mês</InternalLink></li>
            <li>→ <InternalLink href="/simulador-faturamento-mei">Simulador de faturamento MEI</InternalLink></li>
            <li>→ <InternalLink href="/como-declarar-dasn-simei">Como declarar o DASN-SIMEI</InternalLink></li>
            <li>→ <InternalLink href="/mei-ou-clt">MEI ou CLT: qual vale mais?</InternalLink></li>
          </ul>
        </AlertBox>

      </div>

      <RelatedPages current="/limite-mei-2026" />
    </main>
  );
}
