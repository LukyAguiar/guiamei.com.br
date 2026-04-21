import type { Metadata } from "next";
import { PageHero, AlertBox, RelatedPages, InternalLink, FaqItem } from "../components/ui";

export const metadata: Metadata = {
  title: "Quanto o MEI pode faturar por mês em 2026",
  description: "O MEI pode faturar até R$ 81.000 por ano — equivalente a R$ 6.750 por mês. Entenda como funciona o limite proporcional e o que fazer se ultrapassar.",
  alternates: { canonical: "https://guiamei.vercel.app/quanto-mei-pode-faturar-por-mes" },
};

export default function Page() {
  return (
    <main>
      <PageHero
        badge="Faturamento MEI · 2026"
        title="Quanto o MEI pode faturar por mês?"
        desc="O limite anual de R$ 81.000 equivale a R$ 6.750 por mês — mas existem nuances importantes que todo MEI precisa conhecer."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">

        <section aria-labelledby="limite-title">
          <h2 id="limite-title" className="font-serif text-2xl mb-4">O limite em números</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Limite anual", valor: "R$ 81.000", sub: "MEI padrão em 2026", cor: "green" },
              { label: "Média mensal", valor: "R$ 6.750", sub: "R$ 81.000 ÷ 12 meses", cor: "green" },
              { label: "MEI Caminhoneiro", valor: "R$ 130.000", sub: "Limite especial para transportador autônomo", cor: "gold" },
            ].map((item, i) => (
              <div key={i} className={`rounded-2xl p-5 border-2 ${item.cor === "green" ? "bg-[var(--green-light)] border-[#b2ddc4]" : "bg-[var(--gold-light)] border-[#f0d8a8]"}`}>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-2">{item.label}</p>
                <p className={`font-serif text-3xl ${item.cor === "green" ? "text-[var(--green)]" : "text-[var(--gold)]"}`}>{item.valor}</p>
                <p className="text-xs text-[var(--muted)] mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </section>

        <AlertBox type="info">
          <p className="font-semibold mb-1">📌 O limite é anual, não mensal</p>
          <p className="text-sm">Não existe um limite fixo por mês. O que existe é um limite de <strong>R$ 81.000 por ano</strong>. Isso significa que você pode faturar R$ 0 em janeiro e R$ 15.000 em dezembro — desde que o total do ano não ultrapasse R$ 81.000. O valor de R$ 6.750/mês é apenas a média.</p>
        </AlertBox>

        <section aria-labelledby="proporcional-title">
          <h2 id="proporcional-title" className="font-serif text-2xl mb-4">Limite proporcional (ano de abertura)</h2>
          <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
            Se você abriu o MEI no meio do ano, o limite é proporcional ao número de meses restantes. A fórmula é simples:
          </p>
          <div className="bg-white border border-[var(--border)] rounded-xl p-6">
            <p className="font-mono text-center text-sm font-semibold text-[var(--green)] mb-4">Limite = R$ 6.750 × nº de meses restantes no ano</p>
            <div className="space-y-2 text-sm text-[var(--muted)]">
              {[
                { mes: "Abriu em janeiro", meses: 12, limite: "R$ 81.000" },
                { mes: "Abriu em abril", meses: 9, limite: "R$ 60.750" },
                { mes: "Abriu em julho", meses: 6, limite: "R$ 40.500" },
                { mes: "Abriu em outubro", meses: 3, limite: "R$ 20.250" },
              ].map((row, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-[var(--border)] last:border-b-0">
                  <span>{row.mes}</span>
                  <span className="text-[var(--muted)]">{row.meses} meses</span>
                  <span className="font-semibold text-[var(--green)]">{row.limite}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="controle-title">
          <h2 id="controle-title" className="font-serif text-2xl mb-4">Como controlar o faturamento</h2>
          <div className="space-y-3">
            {[
              { icon: "📊", title: "Planilha mensal simples", desc: "Some tudo que recebeu em cada mês (Pix, dinheiro, cartão, transferências). Não importa se recebeu nota ou não — tudo entra no faturamento." },
              { icon: "🧾", title: "Notas fiscais emitidas", desc: "Se você emite nota para todos os clientes, elas servem como registro automático do faturamento. Some os valores das notas emitidas por mês." },
              { icon: "📱", title: "App MEI (Gov.br)", desc: "O aplicativo oficial do MEI permite consultar sua situação cadastral e alguns dados financeiros. Útil para acompanhamento rápido." },
              { icon: "⚠️", title: "Fique alerta a partir de R$ 65.000", desc: "Quando você chegar em 80% do limite anual, é hora de avaliar se vai ultrapassar e tomar uma decisão: desacelerar ou se preparar para o desenquadramento." },
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

        <AlertBox type="warning">
          <p className="font-semibold mb-1">⚠️ Faturamento ≠ lucro</p>
          <p className="text-sm">O limite do MEI se aplica ao faturamento <strong>bruto</strong> — tudo que entrou no caixa, antes de descontar custos. Se você comprou R$ 5.000 em materiais e vendeu por R$ 8.000, seu faturamento é R$ 8.000 (não R$ 3.000 de lucro).</p>
        </AlertBox>

        <section aria-labelledby="faq-title">
          <h2 id="faq-title" className="font-serif text-2xl mb-4">Dúvidas frequentes</h2>
          <div className="space-y-2">
            <FaqItem q="Posso faturar R$ 20.000 em um único mês?" a="Sim, desde que o total anual não ultrapasse R$ 81.000. Não há restrição de faturamento mensal — só o limite anual é relevante." />
            <FaqItem q="Devolução de clientes conta no faturamento?" a="Não. Devoluções e cancelamentos não entram no faturamento bruto. Só conta o que efetivamente ficou com você." />
            <FaqItem q="O que acontece se eu ultrapassar o limite?" a={<>Depende de quanto ultrapassou. Veja o guia completo: <InternalLink href="/mei-ultrapassou-limite-o-que-fazer">MEI ultrapassou o limite — o que fazer</InternalLink>.</>} />
            <FaqItem q="Presente ou bonificação conta como faturamento?" a="Depende. Se foi em troca de serviço ou produto, sim — é permuta e deve ser contabilizada pelo valor de mercado. Se foi um presente sem relação comercial, não." />
          </div>
        </section>

      </div>

      <RelatedPages current="/quanto-mei-pode-faturar-por-mes" />
    </main>
  );
}
