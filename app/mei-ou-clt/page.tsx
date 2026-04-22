import type { Metadata } from "next";
import { PageHero, AlertBox, RelatedPages, InternalLink, FaqItem , AdSlot } from "../components/ui";

// ISR — revalida a página a cada 24h sem rebuild
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "MEI ou CLT em 2026? Compare renda líquida e benefícios",
  description: "Compare MEI e CLT em 2026: impostos, direitos trabalhistas, aposentadoria, FGTS, plano de saúde e quando vale a pena migrar de um para o outro.",
  alternates: { canonical: "https://guiamei.com.br/mei-ou-clt" },
};

export default function Page() {
  return (
    <main>
      <PageHero
        badge="Comparativo · MEI vs CLT"
        title="MEI ou CLT: qual é melhor?"
        desc="Comparação honesta e completa entre trabalhar como MEI ou com carteira assinada — impostos, direitos, riscos e quando vale cada um."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">

        {/* AD TOPO */}
        <AdSlot position="topo" />

        <AlertBox type="info">
          <p className="font-semibold mb-1">📌 Não existe resposta universal</p>
          <p className="text-sm">A melhor opção depende do seu setor, renda, segurança desejada e perfil profissional. Este guia mostra os pontos de cada modelo para você decidir com informação.</p>
        </AlertBox>

        <section aria-labelledby="comparativo-title">
          <h2 id="comparativo-title" className="font-serif text-2xl mb-4">Comparativo direto</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--paper)]">
                  <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-widest text-[var(--muted)] border border-[var(--border)]">Aspecto</th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-[var(--green)] border border-[var(--border)] text-center">MEI</th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-blue-600 border border-[var(--border)] text-center">CLT</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { aspecto: "Custo mensal (imposto)", mei: "R$ 82–87 fixo", clt: "INSS: 7,5% a 14% do salário" },
                  { aspecto: "FGTS", mei: "❌ Não tem", clt: "✅ 8% do salário/mês" },
                  { aspecto: "13º salário", mei: "❌ Não tem", clt: "✅ Garantido" },
                  { aspecto: "Férias remuneradas", mei: "❌ Não tem", clt: "✅ 30 dias + 1/3" },
                  { aspecto: "Aviso prévio", mei: "❌ Não tem", clt: "✅ Mínimo 30 dias" },
                  { aspecto: "Seguro-desemprego", mei: "❌ Não tem", clt: "✅ Em caso de demissão" },
                  { aspecto: "Aposentadoria (INSS)", mei: "✅ Por idade (carência)", clt: "✅ Por tempo/idade" },
                  { aspecto: "Auxílio-doença", mei: "✅ Após 12 meses", clt: "✅ A partir do 16º dia" },
                  { aspecto: "Licença-maternidade", mei: "✅ Após 10 meses", clt: "✅ 120 dias garantidos" },
                  { aspecto: "Plano de saúde", mei: "❌ Por conta própria", clt: "✅ Muitas empresas oferecem" },
                  { aspecto: "Limite de renda", mei: "R$ 81.000/ano", clt: "Sem limite" },
                  { aspecto: "Liberdade de horário", mei: "✅ Total", clt: "❌ Definido pelo empregador" },
                  { aspecto: "Estabilidade de renda", mei: "❌ Variável", clt: "✅ Salário fixo garantido" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[var(--paper)]"}>
                    <td className="px-4 py-3 font-medium border border-[var(--border)]">{row.aspecto}</td>
                    <td className="px-4 py-3 text-center border border-[var(--border)] text-[var(--muted)]">{row.mei}</td>
                    <td className="px-4 py-3 text-center border border-[var(--border)] text-[var(--muted)]">{row.clt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="quando-mei-title">
          <h2 id="quando-mei-title" className="font-serif text-2xl mb-4">Quando vale ser MEI</h2>
          <div className="space-y-3">
            {[
              "Você tem múltiplos clientes ou projetos simultâneos",
              "Quer flexibilidade de horário e autonomia",
              "Sua renda supera o salário que receberia como CLT",
              "O cliente/empresa só contrata como PJ",
              "Você já tem experiência e carteira de clientes consolidada",
              "Quer empreender com custo inicial baixo",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 bg-[var(--green-light)] border border-[#b2ddc4] rounded-xl px-4 py-3 text-sm">
                <span className="text-[var(--green)] font-bold shrink-0">✓</span>
                <span className="text-[var(--muted)]">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="quando-clt-title">
          <h2 id="quando-clt-title" className="font-serif text-2xl mb-4">Quando vale ser CLT</h2>
          <div className="space-y-3">
            {[
              "Você precisa de estabilidade de renda garantida",
              "A empresa oferece bons benefícios (plano de saúde, vale-refeição, etc.)",
              "Sua renda como MEI seria menor do que o salário CLT oferecido",
              "Você está em início de carreira e quer aprender em ambiente estruturado",
              "Tem dependentes e precisa da segurança do FGTS e 13º",
              "O segmento tem baixa demanda por trabalho autônomo",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 text-sm">
                <span className="text-blue-500 font-bold shrink-0">✓</span>
                <span className="text-[var(--muted)]">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="calculo-title">
          <h2 id="calculo-title" className="font-serif text-2xl mb-4">Como calcular se vale a pena ser MEI</h2>
          <div className="bg-white border border-[var(--border)] rounded-xl p-5 text-sm">
            <p className="font-semibold mb-3">Regra geral: o MEI precisa ganhar ao menos 30–40% a mais que o CLT para compensar os benefícios perdidos.</p>
            <div className="space-y-2 text-[var(--muted)]">
              <p>Se você receberia <strong>R$ 5.000/mês como CLT</strong>, como MEI precisaria faturar:</p>
              <div className="bg-[var(--paper)] rounded-lg p-3 font-mono text-xs space-y-1">
                <p>Salário CLT líquido: ~R$ 4.200 (após INSS + IR)</p>
                <p>+ FGTS acumulado: ~R$ 400/mês</p>
                <p>+ 13º proporcional: ~R$ 417/mês</p>
                <p>+ Férias: ~R$ 556/mês</p>
                <p>─────────────────────────</p>
                <p className="font-bold text-[var(--green)]">MEI precisaria faturar: ~R$ 7.500–8.000/mês</p>
              </div>
              <p className="mt-2">Use essa lógica para calcular a equivalência no seu caso específico.</p>
            </div>
          </div>
        </section>

        <AlertBox type="success">
          <p className="font-semibold mb-1">💡 Você pode ser MEI e CLT ao mesmo tempo</p>
          <p className="text-sm">Não há impedimento legal para ter carteira assinada e CNPJ MEI simultaneamente — desde que o contrato de trabalho não proíba e as atividades não gerem conflito de interesse. Muitos profissionais combinam os dois.</p>
        </AlertBox>

        <section aria-labelledby="faq-title">
          <h2 id="faq-title" className="font-serif text-2xl mb-4">Dúvidas frequentes</h2>
          <div className="space-y-2">
            <FaqItem q="Empresa pode me obrigar a abrir MEI para me contratar?" a='Sim, mas é uma prática chamada "pejotização" que pode ser questionada na Justiça do Trabalho se houver relação de subordinação, exclusividade e habitualidade — características de vínculo empregatício. Se você trabalha como se fosse empregado mas com CNPJ, pode pleitear o reconhecimento de vínculo CLT.' />
            <FaqItem q="MEI tem direito a previdência privada?" a="Sim. Qualquer pessoa pode contratar previdência privada independente do regime de trabalho. Para MEI, é uma boa forma de complementar a aposentadoria pelo INSS, que será limitada ao salário mínimo na aposentadoria por idade." />
            <FaqItem q="Como migrar de CLT para MEI?" a="Abra o MEI pelo Portal do Empreendedor antes ou depois de sair do emprego. Não há impedimento para abrir o CNPJ enquanto ainda está empregado. Planeje a transição financeira com pelo menos 3–6 meses de reserva de emergência." />
          </div>
        </section>

        {/* AD FINAL */}
        <AdSlot position="final" />

        {/* INTERLINKS */}
        <AlertBox type="info">
          <p className="font-semibold mb-2">🔗 Veja também</p>
          <ul className="space-y-1 text-sm">
            <li>→ <InternalLink href="/mei-ou-autonomo">MEI ou autônomo</InternalLink></li>
            <li>→ <InternalLink href="/limite-mei-2026">Limite do MEI em 2026</InternalLink></li>
            <li>→ <InternalLink href="/mei-pode-ter-funcionario">MEI pode ter funcionário?</InternalLink></li>
            <li>→ <InternalLink href="/mei-precisa-de-contador">MEI precisa de contador?</InternalLink></li>
          </ul>
        </AlertBox>

      </div>

      <RelatedPages current="/mei-ou-clt" />
    </main>
  );
}
