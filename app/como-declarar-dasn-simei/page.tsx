import type { Metadata } from "next";
import { PageHero, StepItem, AlertBox, RelatedPages, InternalLink, ExternalLink, FaqItem , AdSlot , ArticleSchema, FaqSchema } from "../components/ui";

// ISR — revalida a página a cada 24h sem rebuild
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Como declarar o DASN-SIMEI em 2026: prazo até 31 de maio",
  description: "Aprenda como fazer a declaração anual do MEI (DASN-SIMEI), prazo, o que declarar e como corrigir erros. Guia atualizado 2026.",
  alternates: { canonical: "https://guiamei.com.br/como-declarar-dasn-simei" }
};

export default function Page() {
  return (
    <main>
      <ArticleSchema
        title="Como declarar o DASN-SIMEI em 2026: prazo até 31 de maio"
        description="Aprenda como fazer a declaração anual do MEI (DASN-SIMEI) passo a passo, prazo e o que acontece se não declarar."
        url="https://guiamei.com.br/como-declarar-dasn-simei"
        dateModified="2026-04-21"
      />
      <FaqSchema items={[
        { q: "Quando é o prazo da DASN-SIMEI em 2026?", a: "O prazo é até 31 de maio de 2026. A declaração é referente ao faturamento do ano anterior (2025)." },
    { q: "DASN-SIMEI é paga ou gratuita?", a: "É completamente gratuita. Nunca pague por serviços que prometem fazer a declaração do MEI." },
    { q: "O que acontece se não declarar o DASN-SIMEI?", a: "O CNPJ fica em situação irregular e incide multa mínima de R$ 50,00 por atraso." },
    { q: "Posso retificar a DASN-SIMEI depois de enviada?", a: "Sim. Você pode enviar uma declaração retificadora pelo mesmo sistema, sem prazo limite." }
      ]} />
      <PageHero
        badge="DASN-SIMEI · 2026"
        title="Como declarar o DASN-SIMEI"
        desc="A declaração anual do MEI é obrigatória — mesmo sem faturamento. Veja como fazer em poucos minutos e evitar multa."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">

        {/* AD TOPO */}
        <AdSlot position="topo" />

        <section>
          <p className="text-[var(--muted)] leading-relaxed">
            O <strong>DASN-SIMEI</strong> (Declaração Anual Simplificada para o Microempreendedor Individual) é a declaração de imposto de renda do MEI.
            Todo ano você precisa informar ao governo quanto faturou no ano anterior. É simples, gratuita e leva menos de 10 minutos.
          </p>
        </section>

        <AlertBox type="warning">
          <p className="font-semibold mb-1">📅 Prazo: até 31 de maio de cada ano</p>
          <p>A declaração de 2026 (referente ao faturamento de 2025) deve ser entregue até <strong>31 de maio de 2026</strong>. Quem perde o prazo paga multa de <strong>R$ 50,00</strong> (ou 2% ao mês sobre o imposto devido, se houver).</p>
        </AlertBox>

        <section aria-labelledby="steps-title">
          <h2 id="steps-title" className="font-serif text-2xl mb-6">Passo a passo para declarar</h2>
          <StepItem num="01" title="Acesse o portal do DASN-SIMEI"
            desc={<>Entre em{" "}<ExternalLink href="https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/dasnsimei.app/" className="text-[var(--green)] font-semibold underline">dasnsimei.gov.br</ExternalLink>{" "}e informe seu CNPJ.</>}
          />
          <StepItem num="02" title="Informe o ano de referência"
            desc="Escolha o ano que você está declarando (ex: 2025 para a declaração entregue em 2026). O sistema vai puxar os dados cadastrais do seu MEI."
          />
          <StepItem num="03" title="Informe o faturamento bruto"
            desc="Digite o total que você recebeu no ano (faturamento bruto), separado por tipo de atividade: comércio, indústria e/ou serviços. Se não faturou nada, informe R$ 0,00."
          />
          <StepItem num="04" title="Informe se teve funcionário"
            desc="Declare se você teve algum empregado com carteira assinada no ano. Se sim, informe o salário total pago."
          />
          <StepItem num="05" title="Revise e envie"
            desc="Confira todos os dados e clique em 'Transmitir'. Guarde o recibo de entrega — é a prova de que você declarou no prazo."
            isLast
          />
        </section>

        <section aria-labelledby="calc-title">
          <h2 id="calc-title" className="font-serif text-2xl mb-4">O que conta como faturamento?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { tipo: "✅ Conta", items: ["Vendas de produtos", "Prestação de serviços", "Comissões recebidas", "Qualquer entrada da atividade"] },
              { tipo: "❌ Não conta", items: ["Empréstimos recebidos", "Doações", "Rendimentos de aplicações", "Salário de emprego CLT paralelo"] },
            ].map((col, i) => (
              <div key={i} className={`rounded-xl p-4 border ${i === 0 ? "bg-[var(--green-light)] border-[#b2ddc4]" : "bg-red-50 border-red-200"}`}>
                <p className="font-semibold text-sm mb-2">{col.tipo}</p>
                <ul className="space-y-1">
                  {col.items.map((item, j) => (
                    <li key={j} className="text-xs text-[var(--muted)]">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="erros-title">
          <h2 id="erros-title" className="font-serif text-2xl mb-4">Como corrigir erros na declaração</h2>
          <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
            Declarou errado? Sem problema. Você pode entregar uma <strong>declaração retificadora</strong> — ela substitui a anterior e não gera multa se entregue antes do prazo.
          </p>
          <StepItem num="01" title="Acesse o DASN-SIMEI novamente" desc="Entre no mesmo portal com seu CNPJ e selecione o mesmo ano de referência." />
          <StepItem num="02" title="Marque como Retificadora" desc="O sistema perguntará se é uma declaração original ou retificadora. Marque 'Retificadora'." />
          <StepItem num="03" title="Corrija e reenvie" desc="Faça as correções necessárias e transmita novamente. A retificadora substitui a declaração anterior automaticamente." isLast />
        </section>

        <AlertBox type="success">
          <p className="font-semibold mb-1">💡 Lembre-se de pagar o DAS todo mês</p>
          <p>A declaração anual é separada do pagamento mensal. Declarar não substitui pagar o DAS. Veja como:{" "}<InternalLink href="/como-emitir-das-mei">como emitir o DAS-MEI mensalmente</InternalLink>.</p>
        </AlertBox>

        <section aria-labelledby="faq-title">
          <h2 id="faq-title" className="font-serif text-2xl mb-4">Dúvidas frequentes</h2>
          <div className="space-y-2">
            <FaqItem q="MEI sem faturamento precisa declarar?" a="Sim! Mesmo sem ter faturado nada no ano, a declaração é obrigatória. Informe R$ 0,00 no campo de faturamento." />
            <FaqItem q="A declaração é gratuita?" a="Sim, 100% gratuita. Nunca pague para alguém fazer a sua declaração — o processo é simples e feito direto no portal do governo." />
            <FaqItem q="O que acontece se eu não declarar?" a="Multa de R$ 50,00 mínimo. Além disso, o CNPJ fica com pendências que podem bloquear emissão de certidões e até levar ao cancelamento." />
            <FaqItem q="Quando é o prazo da DASN-SIMEI em 2026?" a="O prazo é até 31 de maio de 2026. A declaração é referente ao faturamento do ano anterior (2025). Se você não faturou nada, ainda assim precisa declarar." />
            <FaqItem q="DASN-SIMEI é paga ou gratuita?" a="É completamente gratuita. Nunca pague por serviços que prometem fazer a declaração do MEI — ela é feita pelo próprio empreendedor no portal da Receita Federal." />
            <FaqItem q="O que acontece se não declarar o DASN-SIMEI?" a="O CNPJ fica em situação irregular, você perde o Simples Nacional e pode ser cancelado. Além disso, incide multa mínima de R$ 50,00 por atraso." />
          </div>
        </section>

        {/* AD FINAL */}
        <AdSlot position="final" />

        {/* INTERLINKS */}
        <AlertBox type="info">
          <p className="font-semibold mb-2">🔗 Veja também</p>
          <ul className="space-y-1 text-sm">
            <li>→ <InternalLink href="/como-emitir-das-mei">Como emitir o DAS-MEI</InternalLink></li>
            <li>→ <InternalLink href="/das-atrasado">DAS atrasado: o que fazer</InternalLink></li>
            <li>→ <InternalLink href="/limite-mei-2026">Limite do MEI em 2026</InternalLink></li>
            <li>→ <InternalLink href="/mei-irregular-como-regularizar">MEI irregular: como regularizar</InternalLink></li>
            <li>→ <InternalLink href="/nota-fiscal-mei">Nota fiscal MEI</InternalLink></li>
          </ul>
        </AlertBox>

      </div>

      <RelatedPages current="/como-declarar-dasn-simei" />
    </main>
  );
}
