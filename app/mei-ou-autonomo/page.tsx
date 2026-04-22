import type { Metadata } from "next";
import { PageHero, AlertBox, RelatedPages, InternalLink, FaqItem, ExternalLink , AdSlot } from "../components/ui";

export const metadata: Metadata = {
  title: "MEI ou autônomo em 2026? Compare custos, benefícios e riscos",
  description: "Entenda as diferenças entre trabalhar como MEI (com CNPJ) e como autônomo sem registro — impostos, direitos, segurança e quando vale a pena formalizar.",
  alternates: { canonical: "https://guiamei.com.br/mei-ou-autonomo" },
};

export default function Page() {
  return (
    <main>
      <PageHero
        badge="Comparativo · MEI vs Autônomo"
        title="MEI ou autônomo: qual escolher?"
        desc="Comparação completa entre ter CNPJ MEI e trabalhar informalmente como autônomo — vantagens, riscos e quando cada um faz sentido."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">

        {/* AD TOPO */}
        <AdSlot position="topo" />

        <section aria-labelledby="diferenca-title">
          <h2 id="diferenca-title" className="font-serif text-2xl mb-4">Qual é a diferença?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[var(--green-light)] border-2 border-[#b2ddc4] rounded-2xl p-5">
              <p className="font-bold text-[var(--green)] mb-2">MEI (com CNPJ)</p>
              <p className="text-sm text-[var(--muted)] leading-relaxed">Trabalhador autônomo <strong>formalizado</strong>. Tem CNPJ, paga DAS mensal fixo, emite nota fiscal, tem direitos previdenciários e acesso a crédito PJ. É reconhecido legalmente como empresa.</p>
            </div>
            <div className="bg-white border-2 border-[var(--border)] rounded-2xl p-5">
              <p className="font-bold mb-2">Autônomo informal</p>
              <p className="text-sm text-[var(--muted)] leading-relaxed">Trabalhador por conta própria <strong>sem registro</strong>. Não tem CNPJ, não paga impostos empresariais, não emite nota fiscal como PJ. Pode contribuir ao INSS como contribuinte individual, mas sem os benefícios do MEI.</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="comparativo-title">
          <h2 id="comparativo-title" className="font-serif text-2xl mb-4">Comparativo completo</h2>
          <div className="space-y-2">
            {[
              { aspecto: "CNPJ próprio", mei: "✅ Sim", auto: "❌ Não" },
              { aspecto: "Emissão de nota fiscal PJ", mei: "✅ Sim", auto: "❌ Não (só recibo)" },
              { aspecto: "Custo mensal fixo", mei: "R$ 82–87/mês", auto: "R$ 0 (mas sem proteção)" },
              { aspecto: "Aposentadoria pelo INSS", mei: "✅ Incluído no DAS", auto: "⚠️ Precisa pagar separado" },
              { aspecto: "Auxílio-doença", mei: "✅ Após 12 meses no DAS", auto: "⚠️ Se pagar INSS como CI" },
              { aspecto: "Acesso a crédito PJ", mei: "✅ Sim", auto: "❌ Apenas crédito pessoal" },
              { aspecto: "Conta bancária PJ", mei: "✅ Sim", auto: "❌ Apenas conta PF" },
              { aspecto: "Contratos com empresas", mei: "✅ Mais fácil (exigem CNPJ)", auto: "⚠️ Difícil — muitas exigem CNPJ" },
              { aspecto: "ISS sobre serviços", mei: "Incluído no DAS", auto: "Prefeitura pode cobrar direto" },
              { aspecto: "Retenção de IR (pessoa física)", mei: "❌ Não se aplica", auto: "⚠️ Empresa retém 11% como INSS" },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-3 gap-2 px-4 py-3 rounded-xl text-sm ${i % 2 === 0 ? "bg-white border border-[var(--border)]" : "bg-[var(--paper)]"}`}>
                <span className="font-medium">{row.aspecto}</span>
                <span className="text-center text-[var(--green)]">{row.mei}</span>
                <span className="text-center text-[var(--muted)]">{row.auto}</span>
              </div>
            ))}
            <div className="grid grid-cols-3 gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
              <span></span><span className="text-center text-[var(--green)]">MEI</span><span className="text-center">Autônomo</span>
            </div>
          </div>
        </section>

        <section aria-labelledby="custo-title">
          <h2 id="custo-title" className="font-serif text-2xl mb-4">O autônomo informal não paga nada — mas há custos ocultos</h2>
          <div className="space-y-3 text-sm">
            {[
              { custo: "INSS como contribuinte individual", desc: "Para ter aposentadoria e auxílio-doença, o autônomo precisa contribuir ao INSS voluntariamente — 20% sobre o salário de contribuição (entre R$ 1.518 e R$ 7.786). Para a aposentadoria mínima, o custo seria de R$ 303,60/mês — quase 4x mais que o MEI." },
              { custo: "Impostos sobre nota/recibo", desc: "Se a empresa que te contrata exigir nota fiscal (ela vai precisar), ela pode reter ISS e INSS na fonte, reduzindo seu recebimento." },
              { custo: "Sem acesso a crédito PJ", desc: "Crédito pessoal tem taxas muito maiores que linhas PJ. Ao longo do tempo, a diferença de custo financeiro pode ser significativa." },
              { custo: "Perda de contratos", desc: "Cada vez mais empresas exigem CNPJ para fechar contratos. Ser autônomo informal pode te excluir de oportunidades maiores." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-red-50 border border-red-100 rounded-xl px-5 py-4">
                <span className="text-red-400 font-bold shrink-0">⚠</span>
                <div>
                  <p className="font-semibold text-red-700">{item.custo}</p>
                  <p className="text-[var(--muted)] mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <AlertBox type="success">
          <p className="font-semibold mb-1">✅ Abrir MEI é gratuito e leva 10 minutos</p>
          <p className="text-sm">Se você trabalha por conta própria e fatura até R$ 81.000/ano, não há motivo para ficar informal. Abrir o MEI é gratuito pelo <ExternalLink href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor" className="text-[var(--green)] underline">Portal do Empreendedor</ExternalLink> e o CNPJ é gerado na hora. O custo mensal do DAS cobre INSS + impostos.</p>
        </AlertBox>

        <section aria-labelledby="quando-autonomo-title">
          <h2 id="quando-autonomo-title" className="font-serif text-2xl mb-4">Quando faz sentido ficar como autônomo (sem MEI)?</h2>
          <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">Honestamente, em poucos casos. Mas algumas situações podem justificar:</p>
          <div className="space-y-3 text-sm">
            {[
              "Atividade esporádica — trabalhou uma única vez para um cliente e não pretende repetir",
              "A atividade não está na lista de atividades permitidas para MEI",
              "Você já está formalizando como ME ou outra estrutura societária",
              "Está testando se a atividade tem demanda antes de formalizar",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 bg-white border border-[var(--border)] rounded-xl px-4 py-3">
                <span className="text-[var(--muted)] font-bold shrink-0">→</span>
                <span className="text-[var(--muted)]">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="faq-title">
          <h2 id="faq-title" className="font-serif text-2xl mb-4">Dúvidas frequentes</h2>
          <div className="space-y-2">
            <FaqItem q="Posso emitir nota fiscal sendo autônomo sem MEI?" a="Como pessoa física, você pode emitir um recibo de prestação de serviços, mas não uma nota fiscal eletrônica (NFS-e ou NF-e), que é documento exclusivo de pessoa jurídica." />
            <FaqItem q="O autônomo informal pode ser multado?" a="Tecnicamente, a prefeitura pode cobrar ISS de autônomos que prestem serviços regularmente sem recolher o imposto. Na prática, a fiscalização é mais difícil, mas a formalização elimina esse risco." />
            <FaqItem q="Preciso encerrar o MEI se parar de trabalhar por conta própria?" a={<>Não é obrigatório fechar imediatamente, mas o DAS continua sendo gerado mensalmente enquanto o MEI estiver ativo. Se não vai mais usar, o ideal é dar baixa. Veja: <InternalLink href="/como-dar-baixa-no-mei">como dar baixa no MEI</InternalLink>.</>} />
          </div>
        </section>

        {/* AD FINAL */}
        <AdSlot position="final" />

        {/* INTERLINKS */}
        <AlertBox type="info">
          <p className="font-semibold mb-2">🔗 Veja também</p>
          <ul className="space-y-1 text-sm">
            <li>→ <InternalLink href="/mei-ou-clt">MEI ou CLT: qual vale mais?</InternalLink></li>
            <li>→ <InternalLink href="/limite-mei-2026">Limite do MEI em 2026</InternalLink></li>
            <li>→ <InternalLink href="/mei-precisa-de-contador">MEI precisa de contador?</InternalLink></li>
            <li>→ <InternalLink href="/como-emitir-das-mei">Como emitir o DAS-MEI</InternalLink></li>
          </ul>
        </AlertBox>

      </div>

      <RelatedPages current="/mei-ou-autonomo" />
    </main>
  );
}
