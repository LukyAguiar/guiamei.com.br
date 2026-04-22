import type { Metadata } from "next";
import { PageHero, AlertBox, RelatedPages, InternalLink, FaqItem , AdSlot } from "../components/ui";

// ISR — revalida a página a cada 24h sem rebuild
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "MEI ultrapassou o limite em 2026: o que fazer e como regularizar",
  description: "Ultrapassou o limite de R$ 81.000 do MEI? Saiba o que acontece, as consequências, prazo para regularizar e como migrar para ME no Simples Nacional.",
  alternates: { canonical: "https://guiamei.com.br/mei-ultrapassou-limite-o-que-fazer" },
};

export default function Page() {
  return (
    <main>
      <PageHero
        badge="Limite MEI · Desenquadramento"
        title="MEI ultrapassou o limite: o que fazer"
        desc="Entenda o que acontece quando você fatura mais de R$ 81.000/ano, quais são as consequências e como se regularizar."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">

        {/* AD TOPO */}
        <AdSlot position="topo" />

        <section aria-labelledby="cenarios-title">
          <h2 id="cenarios-title" className="font-serif text-2xl mb-4">Existem dois cenários — e fazem muita diferença</h2>
          <div className="space-y-4">
            <div className="bg-[var(--gold-light)] border-2 border-[#f0d8a8] rounded-2xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">🟡</span>
                <div>
                  <p className="font-bold text-[var(--gold)]">Ultrapassou até 20% do limite</p>
                  <p className="text-xs text-[var(--muted)] mt-0.5">Faturamento entre R$ 81.001 e R$ 97.200/ano</p>
                </div>
              </div>
              <p className="text-sm text-[var(--muted)] leading-relaxed">O desenquadramento ocorre <strong>no ano seguinte</strong>. Você continua como MEI até 31/12 do ano corrente. Em janeiro do próximo ano, passa automaticamente para Microempresa (ME) no Simples Nacional. O valor excedente é tributado com alíquota maior retroativamente, mas só no montante acima de R$ 81.000.</p>
            </div>
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">🔴</span>
                <div>
                  <p className="font-bold text-red-700">Ultrapassou mais de 20% do limite</p>
                  <p className="text-xs text-[var(--muted)] mt-0.5">Faturamento acima de R$ 97.200/ano</p>
                </div>
              </div>
              <p className="text-sm text-[var(--muted)] leading-relaxed">O desenquadramento é <strong>retroativo ao dia 1º de janeiro</strong> do ano em que ultrapassou. Isso significa que você deve pagar impostos como ME para todo o ano — o que pode gerar um valor alto de tributos e multas em atraso. É a situação mais grave.</p>
            </div>
          </div>
        </section>

        <AlertBox type="warning">
          <p className="font-semibold mb-1">⚠️ O que fazer IMEDIATAMENTE se perceber que vai ultrapassar</p>
          <p className="text-sm">Não espere o ano acabar. Se você perceber ao longo do ano que vai ultrapassar o limite, faça o <strong>desenquadramento voluntário</strong> pelo portal Gov.br assim que possível. Isso limita a retroatividade dos tributos e evita multas maiores.</p>
        </AlertBox>

        <section aria-labelledby="passos-title">
          <h2 id="passos-title" className="font-serif text-2xl mb-4">Como fazer o desenquadramento voluntário</h2>
          <div className="space-y-3 text-sm">
            {[
              { n: "1", t: "Acesse o Portal do Simples Nacional", d: "Entre em www8.receita.fazenda.gov.br/SimplesNacional e faça login com sua conta Gov.br." },
              { n: "2", t: "Vá em 'Outros Serviços > Desenquadramento do SIMEI'", d: "Localize essa opção no menu e clique para iniciar o processo de saída do MEI." },
              { n: "3", t: "Confirme o desenquadramento", d: "O sistema informará a data de efeito do desenquadramento. Revise as informações e confirme." },
              { n: "4", t: "Procure um contador", d: "Após sair do MEI, a gestão fiscal fica mais complexa. Um contador pode ajudar na transição para ME no Simples Nacional e evitar erros custosos." },
            ].map(item => (
              <div key={item.n} className="flex gap-4 bg-white border border-[var(--border)] rounded-xl px-5 py-4">
                <div className="min-w-[32px] h-8 rounded-full bg-[var(--green)] text-white flex items-center justify-center text-xs font-bold shrink-0">{item.n}</div>
                <div>
                  <p className="font-semibold">{item.t}</p>
                  <p className="text-[var(--muted)] mt-0.5">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="me-title">
          <h2 id="me-title" className="font-serif text-2xl mb-4">O que muda ao virar ME (Microempresa)?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {[
              { aspecto: "Limite de faturamento", mei: "R$ 81.000/ano", me: "R$ 360.000/ano" },
              { aspecto: "Impostos mensais", mei: "DAS fixo (~R$ 82–87)", me: "Percentual sobre o faturamento (varia por atividade, a partir de 4%)" },
              { aspecto: "Funcionários", mei: "Até 1", me: "Ilimitado" },
              { aspecto: "Contabilidade", mei: "Não obrigatória", me: "Obrigatória (precisa de contador)" },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[var(--border)] rounded-xl p-4">
                <p className="font-semibold text-xs uppercase tracking-widest text-[var(--muted)] mb-2">{item.aspecto}</p>
                <p className="text-xs text-[var(--muted)]"><span className="font-semibold text-[var(--ink)]">MEI:</span> {item.mei}</p>
                <p className="text-xs text-[var(--muted)] mt-1"><span className="font-semibold text-[var(--green)]">ME:</span> {item.me}</p>
              </div>
            ))}
          </div>
        </section>

        <AlertBox type="success">
          <p className="font-semibold mb-1">🚀 Crescer além do MEI é positivo</p>
          <p className="text-sm">Ultrapassar o limite é sinal de que seu negócio está crescendo. A migração para ME no Simples Nacional mantém uma tributação relativamente simples. Com planejamento e um bom contador, o impacto financeiro pode ser menor do que você imagina. Veja: <InternalLink href="/mei-precisa-de-contador">quando vale a pena ter contador</InternalLink>.</p>
        </AlertBox>

        <section aria-labelledby="faq-title">
          <h2 id="faq-title" className="font-serif text-2xl mb-4">Dúvidas frequentes</h2>
          <div className="space-y-2">
            <FaqItem q="Posso voltar a ser MEI depois de sair?" a="Sim, se seu faturamento voltar a ser compatível com o limite e você atender todos os requisitos do MEI — inclusive não ter débitos pendentes. Porém, precisará abrir um novo CNPJ MEI." />
            <FaqItem q="O que acontece com meu CNPJ ao ser desenquadrado?" a="Seu CNPJ não é cancelado — ele continua ativo, mas muda de categoria de MEI para ME. Você mantém o mesmo número de CNPJ." />
            <FaqItem q="Fui desenquadrado retroativamente. Como calcular o que devo?" a="Esse cálculo é complexo e varia conforme sua atividade e o Simples Nacional. Procure um contador — tentar calcular sozinho pode resultar em erros que geram multas adicionais." />
          </div>
        </section>

        {/* AD FINAL */}
        <AdSlot position="final" />

        {/* INTERLINKS */}
        <AlertBox type="info">
          <p className="font-semibold mb-2">🔗 Veja também</p>
          <ul className="space-y-1 text-sm">
            <li>→ <InternalLink href="/limite-mei-2026">Limite do MEI em 2026</InternalLink></li>
            <li>→ <InternalLink href="/quanto-mei-pode-faturar-por-mes">Quanto o MEI pode faturar por mês</InternalLink></li>
            <li>→ <InternalLink href="/simulador-faturamento-mei">Simulador de faturamento MEI</InternalLink></li>
            <li>→ <InternalLink href="/mei-precisa-de-contador">MEI precisa de contador?</InternalLink></li>
            <li>→ <InternalLink href="/como-declarar-dasn-simei">Como declarar o DASN-SIMEI</InternalLink></li>
          </ul>
        </AlertBox>

      </div>

      <RelatedPages current="/mei-ultrapassou-limite-o-que-fazer" />
    </main>
  );
}
