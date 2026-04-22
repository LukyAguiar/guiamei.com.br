import type { Metadata } from "next";
import { PageHero, StepItem, AlertBox, RelatedPages, ExternalLink, FaqItem , AdSlot , InternalLink , ArticleSchema, FaqSchema } from "../components/ui";

// ISR — revalida a página a cada 24h sem rebuild
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Nota fiscal MEI em 2026: NFS-e e NF-e — quando e como emitir",
  description: "Saiba quando o MEI é obrigado a emitir nota fiscal, como emitir NFS-e pelo portal nacional e NF-e pelo estado. Guia atualizado 2026.",
  alternates: { canonical: "https://guiamei.vercel.app/nota-fiscal-mei" }
};

export default function Page() {
  return (
    <main>
      <ArticleSchema
        title="Nota fiscal MEI em 2026: NFS-e e NF-e — quando e como emitir"
        description="Saiba quando o MEI é obrigado a emitir nota fiscal, como emitir NFS-e e NF-e, e quais portais usar."
        url="https://guiamei.vercel.app/nota-fiscal-mei"
        dateModified="2026-04-21"
      />
      <FaqSchema items={[
        { q: "MEI é obrigado a emitir nota fiscal?", a: "Sim, quando vende para outra empresa (CNPJ). Para pessoa física (CPF), a emissão é facultativa, mas pode ser solicitada pelo comprador." },
    { q: "Qual portal usar para emitir nota fiscal de serviço?", a: "Para serviços, use o portal da prefeitura do seu município. Para mercadorias, acesse o portal da SEFAZ do seu estado." },
    { q: "Nota fiscal MEI tem custo?", a: "Não. A emissão de nota fiscal pelo MEI é gratuita, tanto pelo portal da prefeitura quanto pelo sistema federal." },
    { q: "Preciso de certificado digital para emitir nota fiscal MEI?", a: "Em geral, não. A maioria das prefeituras e o sistema federal dispensam o certificado digital para o MEI. Basta login pelo Gov.br." }
      ]} />
      <PageHero
        badge="Nota Fiscal MEI · 2026"
        title="Como emitir nota fiscal sendo MEI"
        desc="Entenda quando a nota fiscal é obrigatória, qual tipo emitir e como fazer tudo pelo portal do governo, gratuitamente."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">

        {/* AD TOPO */}
        <AdSlot position="topo" />

        <section>
          <p className="text-[var(--muted)] leading-relaxed">
            Uma das dúvidas mais comuns do MEI é sobre nota fiscal. A boa notícia: não é sempre obrigatória.
            Mas quando é, precisa ser feita corretamente para evitar problemas com o Fisco.
          </p>
        </section>

        <section aria-labelledby="quando-title">
          <h2 id="quando-title" className="font-serif text-2xl mb-4">Quando o MEI é obrigado a emitir nota fiscal?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { situacao: "Venda para outro CNPJ", obrigatorio: true, detalhe: "Sempre obrigatório, independente de solicitação." },
              { situacao: "Venda para pessoa física que solicita", obrigatorio: true, detalhe: "O cliente pediu? Você é obrigado a emitir." },
              { situacao: "Venda para pessoa física que NÃO solicita", obrigatorio: false, detalhe: "Não é obrigatório, mas você pode emitir se quiser." },
              { situacao: "Serviço para prefeitura ou governo", obrigatorio: true, detalhe: "Sempre obrigatório. Geralmente exigem NFS-e." },
            ].map((item, i) => (
              <div key={i} className={`border rounded-xl p-4 ${item.obrigatorio ? "bg-[var(--green-light)] border-[#b2ddc4]" : "bg-white border-[var(--border)]"}`}>
                <p className="text-sm font-semibold">{item.situacao}</p>
                <p className={`text-xs mt-1 font-bold ${item.obrigatorio ? "text-[var(--green)]" : "text-[var(--muted)]"}`}>
                  {item.obrigatorio ? "✓ Obrigatório" : "Não obrigatório"}
                </p>
                <p className="text-xs text-[var(--muted)] mt-1">{item.detalhe}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="tipos-title">
          <h2 id="tipos-title" className="font-serif text-2xl mb-4">Qual tipo de nota fiscal emitir?</h2>
          <div className="space-y-3">
            <div className="bg-white border border-[var(--border)] rounded-xl p-5">
              <p className="font-semibold mb-1">NFS-e — Nota de Serviço Eletrônica</p>
              <p className="text-sm text-[var(--muted)] mb-2">Para MEIs que prestam serviços (cabelereiro, designer, pedreiro, consultor, etc.)</p>
              <p className="text-xs text-[var(--muted)]">A partir de 2026, o governo centralizou no portal nacional:{" "}<ExternalLink href="https://www.nfse.gov.br" className="text-[var(--green)] font-semibold underline">nfse.gov.br</ExternalLink></p>
            </div>
            <div className="bg-white border border-[var(--border)] rounded-xl p-5">
              <p className="font-semibold mb-1">NF-e — Nota Fiscal Eletrônica de Produto</p>
              <p className="text-sm text-[var(--muted)] mb-2">Para MEIs que vendem produtos físicos (loja, artesanato, alimentos, etc.)</p>
              <p className="text-xs text-[var(--muted)]">Emitida pelo portal da Secretaria da Fazenda do seu estado (SEFAZ estadual).</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="nfse-title">
          <h2 id="nfse-title" className="font-serif text-2xl mb-6">Como emitir NFS-e pelo portal nacional</h2>
          <StepItem num="01" title="Acesse o portal NFS-e"
            desc={<>Entre em{" "}<ExternalLink href="https://www.nfse.gov.br" className="text-[var(--green)] font-semibold underline">nfse.gov.br</ExternalLink>{" "}e faça login com sua conta Gov.br (nível prata ou ouro).</>}
          />
          <StepItem num="02" title="Cadastre sua empresa"
            desc="Na primeira vez, você precisará cadastrar o CNPJ do MEI e confirmar os dados da empresa. O sistema puxa automaticamente da Receita Federal."
          />
          <StepItem num="03" title="Clique em 'Emitir NFS-e'"
            desc="Preencha os dados do tomador (quem vai receber a nota), o serviço prestado, o valor e a competência (mês do serviço)."
          />
          <StepItem num="04" title="Confirme e envie"
            desc="Revise os dados e clique em emitir. A nota será gerada em PDF e também enviada automaticamente para o e-mail do tomador se informado."
            isLast
          />
        </section>

        <AlertBox type="info">
          <p className="font-semibold mb-1">💡 Municípios com sistema próprio</p>
          <p>Algumas prefeituras ainda mantêm seus próprios sistemas de NFS-e. Se o portal nacional não aceitar seu município, consulte a prefeitura local. O processo de migração para o portal nacional está em andamento em 2026.</p>
        </AlertBox>

        <section aria-labelledby="faq-title">
          <h2 id="faq-title" className="font-serif text-2xl mb-4">Dúvidas frequentes</h2>
          <div className="space-y-2">
            <FaqItem q="MEI paga imposto sobre nota fiscal emitida?" a="Não diretamente. O MEI já paga o DAS mensalmente que cobre o ISS (serviços) e ICMS (comércio). Emitir nota fiscal não gera imposto adicional, exceto em situações específicas de retenção pelo contratante." />
            <FaqItem q="O cliente pode reter ISS na nota do MEI?" a="Sim. Alguns municípios obrigam empresas a reter o ISS na fonte quando contratam MEIs. Nesse caso, o valor é descontado do pagamento. Verifique as regras do município do tomador." />
            <FaqItem q="Posso emitir nota fiscal retroativa?" a="Depende do município e do sistema. Em geral, a nota deve ser emitida no momento ou logo após a prestação do serviço. Evite emitir com data retroativa." />
            <FaqItem q="MEI é obrigado a emitir nota fiscal?" a="Sim, quando vende para outra empresa (CNPJ). Para pessoa física (CPF), a emissão é facultativa, mas pode ser solicitada pelo comprador." />
            <FaqItem q="Qual portal usar para emitir nota fiscal de serviço?" a="Para serviços, use o portal da prefeitura do seu município. Para mercadorias, acesse o portal da SEFAZ do seu estado." />
            <FaqItem q="Nota fiscal MEI tem custo?" a="Não. A emissão de nota fiscal pelo MEI é gratuita, tanto pelo portal da prefeitura quanto pelo sistema federal." />
          </div>
        </section>

        {/* AD FINAL */}
        <AdSlot position="final" />

        {/* INTERLINKS */}
        <AlertBox type="info">
          <p className="font-semibold mb-2">🔗 Veja também</p>
          <ul className="space-y-1 text-sm">
            <li>→ <InternalLink href="/mei-precisa-emitir-nota-fiscal">MEI precisa emitir nota fiscal?</InternalLink></li>
            <li>→ <InternalLink href="/mei-como-emitir-nota-fiscal">Como emitir nota fiscal sendo MEI</InternalLink></li>
            <li>→ <InternalLink href="/como-emitir-nf-mei-prefeitura">Como emitir NF na prefeitura</InternalLink></li>
            <li>→ <InternalLink href="/como-declarar-dasn-simei">Como declarar o DASN-SIMEI</InternalLink></li>
            <li>→ <InternalLink href="/limite-mei-2026">Limite do MEI em 2026</InternalLink></li>
          </ul>
        </AlertBox>

      </div>

      <RelatedPages current="/nota-fiscal-mei" />
    </main>
  );
}
