import type { Metadata } from "next";
import { PageHero, AlertBox, RelatedPages, InternalLink, FaqItem, ExternalLink , AdSlot } from "../components/ui";

// ISR — revalida a página a cada 24h sem rebuild
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Tudo sobre MEI em 2026: guia definitivo do zero ao avançado",
  description: "Tudo que você precisa saber sobre o MEI em 2026: o que é, como abrir, obrigações, direitos, limites, benefícios e como fechar o CNPJ.",
  alternates: { canonical: "https://guiamei.vercel.app/tudo-sobre-mei" },
};

export default function Page() {
  return (
    <main>
      <PageHero
        badge="MEI · Guia Definitivo"
        title="Tudo sobre MEI em 2026"
        desc="Do zero ao avançado: o que é MEI, como abrir, o que pagar, quais os direitos, os limites e como fechar — tudo em um único lugar."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">

        {/* AD TOPO */}
        <AdSlot position="topo" />

        <section aria-labelledby="oque-title">
          <h2 id="oque-title" className="font-serif text-2xl mb-4">O que é o MEI?</h2>
          <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
            O Microempreendedor Individual (MEI) é uma categoria jurídica criada em 2009 para formalizar trabalhadores autônomos brasileiros. Com o registro como MEI, você passa a ter CNPJ, pode emitir nota fiscal, abrir conta PJ, contratar funcionário e ter acesso a benefícios previdenciários — tudo com uma tributação simplificada e de baixo custo.
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            O MEI faz parte do Simples Nacional e sua principal obrigação mensal é o pagamento do DAS (Documento de Arrecadação do Simples Nacional), que inclui INSS e os tributos municipais ou estaduais da atividade.
          </p>
        </section>

        <section aria-labelledby="quem-title">
          <h2 id="quem-title" className="font-serif text-2xl mb-4">Quem pode ser MEI?</h2>
          <div className="space-y-2">
            {[
              { ok: true, item: "Fatura até R$ 81.000/ano (R$ 130.000 para caminhoneiro)" },
              { ok: true, item: "Exerce atividade permitida na lista do MEI" },
              { ok: true, item: "Não tem sócios" },
              { ok: true, item: "Não participa como sócio ou titular de outra empresa" },
              { ok: false, item: "Servidor público federal (em alguns cargos)" },
              { ok: false, item: "Profissionais com registro em conselho (médico, advogado, engenheiro, etc.)" },
            ].map((item, i) => (
              <div key={i} className={`flex gap-3 rounded-xl px-4 py-3 text-sm border ${item.ok ? "bg-[var(--green-light)] border-[#b2ddc4]" : "bg-red-50 border-red-100"}`}>
                <span className={item.ok ? "text-[var(--green)] font-bold" : "text-red-500 font-bold"}>{item.ok ? "✓" : "✗"}</span>
                <span className="text-[var(--muted)]">{item.item}</span>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="abrir-title">
          <h2 id="abrir-title" className="font-serif text-2xl mb-4">Como abrir um MEI</h2>
          <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
            O processo é 100% online, gratuito e leva menos de 10 minutos no <ExternalLink href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor" className="text-[var(--green)] underline">Portal do Empreendedor</ExternalLink>. Você precisa apenas de CPF, RG e conta Gov.br. Ao finalizar o cadastro, o CNPJ é gerado na hora.
          </p>
        </section>

        <section aria-labelledby="obrigacoes-title">
          <h2 id="obrigacoes-title" className="font-serif text-2xl mb-4">Obrigações do MEI</h2>
          <div className="bg-white border border-[var(--border)] rounded-2xl overflow-hidden">
            {[
              { freq: "Todo mês (dia 20)", obrig: "Pagar o DAS-MEI", link: "/como-emitir-das-mei" },
              { freq: "Até 31 de maio (anual)", obrig: "Entregar a DASN-SIMEI", link: "/como-declarar-dasn-simei" },
              { freq: "Ao vender para empresa", obrig: "Emitir nota fiscal", link: "/mei-como-emitir-nota-fiscal" },
              { freq: "Qualquer alteração", obrig: "Atualizar dados cadastrais", link: null },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 px-5 py-4 border-b border-[var(--border)] last:border-b-0">
                <div className="w-44 shrink-0">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--muted)]">{item.freq}</p>
                </div>
                <div className="flex-1 text-sm font-medium">{item.obrig}</div>
                {item.link && <InternalLink href={item.link} className="text-xs shrink-0 no-underline font-semibold">Ver guia →</InternalLink>}
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="direitos-title">
          <h2 id="direitos-title" className="font-serif text-2xl mb-4">Direitos do MEI</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {[
              { d: "Aposentadoria por idade", icone: "👴" },
              { d: "Auxílio-doença (após 12 meses)", icone: "🏥" },
              { d: "Licença-maternidade (após 10 meses)", icone: "👶" },
              { d: "Acesso a crédito PJ", icone: "💳" },
              { d: "Emissão de nota fiscal", icone: "🧾" },
              { d: "Contratação de 1 funcionário", icone: "👷" },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 bg-[var(--green-light)] border border-[#b2ddc4] rounded-xl px-4 py-3">
                <span>{item.icone}</span>
                <span className="text-[var(--muted)]">{item.d}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-[var(--muted)] mt-3">* Direitos previdenciários exigem contribuição em dia. Veja mais em <InternalLink href="/mei-tem-direito-credito">direitos do MEI</InternalLink>.</p>
        </section>

        <section aria-labelledby="custos-title">
          <h2 id="custos-title" className="font-serif text-2xl mb-4">Quanto custa ser MEI em 2026?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { tipo: "Comércio / Indústria", valor: "R$ 82,05", cor: "green" },
              { tipo: "Serviços", valor: "R$ 86,05", cor: "gold" },
              { tipo: "Comércio + Serviços", valor: "R$ 87,05", cor: "green" },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl p-4 border-2 text-center ${item.cor === "green" ? "bg-[var(--green-light)] border-[#b2ddc4]" : "bg-[var(--gold-light)] border-[#f0d8a8]"}`}>
                <p className="text-xs text-[var(--muted)] mb-1">{item.tipo}</p>
                <p className={`font-serif text-2xl ${item.cor === "green" ? "text-[var(--green)]" : "text-[var(--gold)]"}`}>{item.valor}<span className="font-sans text-xs text-[var(--muted)]">/mês</span></p>
              </div>
            ))}
          </div>
        </section>

        <AlertBox type="info">
          <p className="font-semibold mb-1">📚 Quer se aprofundar em algum tema?</p>
          <p className="text-sm">Temos guias completos sobre cada aspecto do MEI. Explore pelo <InternalLink href="/guia-completo-mei-2026">guia completo organizado por tema</InternalLink> ou use o menu acima para navegar.</p>
        </AlertBox>

        <section aria-labelledby="faq-title">
          <h2 id="faq-title" className="font-serif text-2xl mb-4">Dúvidas frequentes</h2>
          <div className="space-y-2">
            <FaqItem q="MEI é a mesma coisa que autônomo?" a="Não. Autônomo é quem trabalha por conta própria sem registro formal. MEI é a formalização legal desse trabalhador — com CNPJ, direitos previdenciários e proteções jurídicas." />
            <FaqItem q="Posso ter mais de um MEI?" a="Não. Cada CPF só pode ter um CNPJ MEI registrado. Se quiser abrir um segundo negócio, precisaria de outra estrutura societária." />
            <FaqItem q="MEI pode trabalhar para empresa com carteira assinada ao mesmo tempo?" a="Sim. Ser CLT não impede de ser MEI simultaneamente — desde que o contrato de trabalho não proíba e as atividades não gerem conflito de interesse." />
            <FaqItem q="Como fechar um MEI?" a={<>O encerramento é gratuito e online pelo Portal do Empreendedor. Veja o passo a passo: <InternalLink href="/como-dar-baixa-no-mei">como dar baixa no MEI</InternalLink>.</>} />
          </div>
        </section>

        {/* AD FINAL */}
        <AdSlot position="final" />

      </div>

      <RelatedPages current="/tudo-sobre-mei" />
    </main>
  );
}
