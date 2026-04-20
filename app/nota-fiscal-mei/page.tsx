import type { Metadata } from "next";
import { PageHero, StepItem, AlertBox, RelatedPages, ExternalLink, FaqItem } from "../components/ui";

export const metadata: Metadata = {
  title: "Como emitir nota fiscal MEI em 2026 — NFS-e e NF-e",
  description: "Saiba quando o MEI é obrigado a emitir nota fiscal, como emitir NFS-e pelo portal nacional e NF-e pelo estado. Guia atualizado 2026.",
};

export default function Page() {
  return (
    <main>
      <PageHero
        badge="Nota Fiscal MEI · 2026"
        title="Como emitir nota fiscal sendo MEI"
        desc="Entenda quando a nota fiscal é obrigatória, qual tipo emitir e como fazer tudo pelo portal do governo, gratuitamente."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">

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
          </div>
        </section>

      </div>

      <RelatedPages current="/nota-fiscal-mei" />
    </main>
  );
}
