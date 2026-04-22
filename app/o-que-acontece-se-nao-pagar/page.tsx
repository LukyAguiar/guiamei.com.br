import type { Metadata } from "next";
import { PageHero, AlertBox, RelatedPages, InternalLink, FaqItem , AdSlot , ArticleSchema, FaqSchema } from "../components/ui";

// ISR — revalida a página a cada 24h sem rebuild
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "O que acontece se o MEI não pagar o DAS em 2026? Consequências",
  description: "Veja o que acontece quando o MEI não paga o DAS: multas, perda do INSS, cancelamento do CNPJ e como regularizar.",
  alternates: { canonical: "https://guiamei.vercel.app/o-que-acontece-se-nao-pagar" }
};

export default function Page() {
  return (
    <main>
      <ArticleSchema
        title="O que acontece se o MEI não pagar o DAS em 2026? Consequências"
        description="Veja o que acontece quando o MEI não paga o DAS: multas, perda do INSS, cancelamento do CNPJ e como regularizar."
        url="https://guiamei.vercel.app/o-que-acontece-se-nao-pagar"
        dateModified="2026-04-21"
      />
      <FaqSchema items={[
        { q: "O CNPJ cancelado pode ser recuperado?", a: "Não diretamente. Após o cancelamento, você precisaria abrir um novo MEI com novo CNPJ, perdendo o histórico anterior." },
    { q: "Quantos meses atrasados causam cancelamento do MEI?", a: "Após 12 meses consecutivos de inadimplência, a Receita Federal pode cancelar o CNPJ automaticamente." },
    { q: "DAS atrasado perde o INSS do mês?", a: "Sim. Meses não pagos não contam para a aposentadoria. Pagar em atraso regulariza o CNPJ, mas o período sem cobertura pode exigir análise separada." },
    { q: "Débito do MEI vai para o nome (CPF)?", a: "O MEI é uma pessoa jurídica, mas como o CPF do titular é vinculado ao CNPJ, débitos inscritos na Dívida Ativa podem impactar o CPF." }
      ]} />
      <PageHero
        badge="Inadimplência MEI · 2026"
        title="O que acontece se não pagar o MEI?"
        desc="Não pagar o DAS tem consequências sérias — mas tem solução. Entenda o que acontece em cada cenário e como regularizar."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">

        {/* AD TOPO */}
        <AdSlot position="topo" />

        <AlertBox type="warning">
          <p className="font-semibold mb-2">⚠️ Resumo rápido das consequências</p>
          <ul className="space-y-1 text-sm">
            <li>• Multa de até 20% + juros Selic sobre o valor devido</li>
            <li>• Mês sem pagamento não conta para aposentadoria</li>
            <li>• CNPJ fica em situação irregular após débitos</li>
            <li>• Após 12 meses sem pagar, o CNPJ pode ser cancelado</li>
            <li>• Dívida pode ser inscrita na Dívida Ativa da União</li>
          </ul>
        </AlertBox>

        <section aria-labelledby="linha-title">
          <h2 id="linha-title" className="font-serif text-2xl mb-6">O que acontece mês a mês</h2>
          <div className="space-y-4">
            {[
              { periodo: "1 a 30 dias de atraso", cor: "border-yellow-300 bg-yellow-50", icone: "🟡", titulo: "Multa de 2% + 0,33%/dia", desc: "O valor do DAS aumenta a cada dia. Pague o quanto antes — o próprio portal já calcula o valor correto." },
              { periodo: "31 a 60 dias", cor: "border-orange-300 bg-orange-50", icone: "🟠", titulo: "Multa máxima começa a travar", desc: "A multa começa a se estabilizar em 20%, mas os juros Selic continuam crescendo sobre o valor." },
              { periodo: "Acima de 60 dias", cor: "border-red-300 bg-red-50", icone: "🔴", titulo: "CNPJ pode ficar irregular", desc: "Com débitos acumulados, o CNPJ pode aparecer como irregular em consultas — o que dificulta contratos e certidões." },
              { periodo: "Acima de 12 meses", cor: "border-red-500 bg-red-100", icone: "🚨", titulo: "Risco de cancelamento do CNPJ", desc: "A Receita Federal pode cancelar o CNPJ automaticamente. Depois disso, recuperar o mesmo CNPJ é muito mais difícil." },
            ].map((item, i) => (
              <div key={i} className={`border-2 rounded-xl p-5 ${item.cor}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span>{item.icone}</span>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">{item.periodo}</p>
                </div>
                <p className="font-semibold mb-1">{item.titulo}</p>
                <p className="text-sm text-[var(--muted)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="inss-title">
          <h2 id="inss-title" className="font-serif text-2xl mb-4">Impacto na aposentadoria</h2>
          <p className="text-[var(--muted)] text-sm leading-relaxed mb-3">
            Este é o ponto que mais impacta no longo prazo. O DAS inclui o INSS do MEI (5% do salário mínimo).
            Cada mês que você não paga é um mês que <strong>não conta para a sua aposentadoria</strong>.
          </p>
          <div className="bg-white border border-[var(--border)] rounded-xl p-5 text-sm space-y-2">
            <p>✓ Pagar em atraso <strong>regulariza o CNPJ</strong>, mas o impacto no INSS pode exigir análise separada</p>
            <p>✓ Se estiver próximo de se aposentar, consulte uma agência do <strong>INSS</strong> para verificar o extrato previdenciário</p>
            <p>✓ O MEI tem direito a auxílio-doença, salário-maternidade e aposentadoria — mas só com os pagamentos em dia</p>
          </div>
        </section>

        <AlertBox type="success">
          <p className="font-semibold mb-1">✅ Como regularizar agora</p>
          <p className="text-sm">Está com o DAS atrasado? A solução está a um clique: veja nosso guia completo sobre{" "}<InternalLink href="/das-atrasado">como pagar o DAS atrasado e parcelar</InternalLink>. É possível parcelar em até 60 meses.</p>
        </AlertBox>

        <section aria-labelledby="faq-title">
          <h2 id="faq-title" className="font-serif text-2xl mb-4">Dúvidas frequentes</h2>
          <div className="space-y-2">
            <FaqItem q="O CNPJ cancelado pode ser recuperado?" a="Não diretamente. Após o cancelamento, você precisaria abrir um novo MEI (novo CNPJ). Por isso é tão importante regularizar antes de 12 meses de inadimplência." />
            <FaqItem q="Débito do MEI vai para o nome (CPF)?" a="Tecnicamente o MEI é uma pessoa jurídica, mas como o CPF do titular é vinculado ao CNPJ, débitos muito antigos inscritos na Dívida Ativa podem impactar o CPF." />
            <FaqItem q="Posso fechar o MEI se tiver dívida?" a={<>Sim, mas as dívidas não são canceladas com o fechamento. Você pode dar baixa e ainda precisará quitar os débitos. Veja:{" "}<InternalLink href="/como-dar-baixa-no-mei">como dar baixa no MEI</InternalLink>.</>} />
            <FaqItem q="Quantos meses atrasados causam cancelamento do MEI?" a="Após 12 meses consecutivos de inadimplência, a Receita Federal pode cancelar o CNPJ automaticamente." />
            <FaqItem q="DAS atrasado perde o INSS do mês?" a="Sim. Meses não pagos não contam para a aposentadoria." />
            <FaqItem q="DAS atrasado gera multa de quanto?" a="Multa de 2% + 0,33% ao dia, limitada a 20%, mais juros Selic." />
          </div>
        </section>

        {/* AD FINAL */}
        <AdSlot position="final" />

        {/* INTERLINKS */}
        <AlertBox type="info">
          <p className="font-semibold mb-2">🔗 Veja também</p>
          <ul className="space-y-1 text-sm">
            <li>→ <InternalLink href="/das-atrasado">DAS atrasado: como regularizar</InternalLink></li>
            <li>→ <InternalLink href="/calculadora-das-mei">Calculadora DAS MEI</InternalLink></li>
            <li>→ <InternalLink href="/mei-irregular-como-regularizar">MEI irregular: como regularizar</InternalLink></li>
            <li>→ <InternalLink href="/como-consultar-debitos-mei">Como consultar débitos do MEI</InternalLink></li>
            <li>→ <InternalLink href="/mei-inapto-o-que-significa">MEI inapto: o que significa</InternalLink></li>
          </ul>
        </AlertBox>

      </div>

      <RelatedPages current="/o-que-acontece-se-nao-pagar" />
    </main>
  );
}
