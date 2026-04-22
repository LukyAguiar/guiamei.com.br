import type { Metadata } from "next";
import { PageHero, AlertBox, RelatedPages, InternalLink, FaqItem, StepItem, ExternalLink , AdSlot } from "../components/ui";

// ISR — revalida a página a cada 24h sem rebuild
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Como emitir nota fiscal sendo MEI em 2026: passo a passo",
  description: "Aprenda como emitir nota fiscal sendo MEI em 2026: NFS-e pela prefeitura, NF-e para indústria e quando você é obrigado a emitir.",
  alternates: { canonical: "https://guiamei.vercel.app/mei-como-emitir-nota-fiscal" },
};

export default function Page() {
  return (
    <main>
      <PageHero
        badge="Nota Fiscal MEI · 2026"
        title="Como emitir nota fiscal sendo MEI"
        desc="Passo a passo para emitir NFS-e (serviços) ou NF-e (produtos) sendo MEI, quando é obrigatório e como se cadastrar na prefeitura."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">

        {/* AD TOPO */}
        <AdSlot position="topo" />

        <AlertBox type="info">
          <p className="font-semibold mb-1">📋 Qual tipo de nota fiscal o MEI emite?</p>
          <p className="text-sm">Depende da sua atividade: <strong>NFS-e</strong> (Nota Fiscal de Serviços Eletrônica) para prestadores de serviço — emitida pela prefeitura. <strong>NF-e</strong> (Nota Fiscal Eletrônica) para comércio e indústria — emitida pela Secretaria da Fazenda estadual (SEFAZ).</p>
        </AlertBox>

        <section aria-labelledby="quando-title">
          <h2 id="quando-title" className="font-serif text-2xl mb-4">Quando o MEI é obrigado a emitir nota fiscal?</h2>
          <div className="space-y-3 text-sm">
            {[
              { obrigado: true, caso: "Vendas para empresas (CNPJ)", detalhe: "Sempre que você vender para outra empresa, a nota fiscal é obrigatória, independente do valor." },
              { obrigado: true, caso: "Quando o cliente pessoa física solicitar", detalhe: "Se o cliente pedir a nota, você é obrigado a emitir. Não há valor mínimo." },
              { obrigado: false, caso: "Vendas para pessoa física sem solicitação", detalhe: "Para consumidor final pessoa física que não pedir nota, a emissão é opcional — mas recomendamos emitir para controle do faturamento." },
            ].map((item, i) => (
              <div key={i} className={`flex gap-4 border rounded-xl px-5 py-4 ${item.obrigado ? "bg-red-50 border-red-200" : "bg-[var(--green-light)] border-[#b2ddc4]"}`}>
                <span className="text-lg shrink-0">{item.obrigado ? "⚠️" : "✅"}</span>
                <div>
                  <p className="font-semibold text-sm">{item.caso}</p>
                  <p className="text-[var(--muted)] text-sm mt-0.5">{item.detalhe}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="nfse-title">
          <h2 id="nfse-title" className="font-serif text-2xl mb-4">Como emitir NFS-e (prestador de serviços)</h2>
          <div className="space-y-0">
            <StepItem num="1" title="Cadastre-se no portal da sua prefeitura" desc={<>Acesse o site da prefeitura da sua cidade e procure por "Nota Fiscal Eletrônica de Serviços" ou "NFS-e". Cada município tem seu próprio sistema. Veja o guia específico: <InternalLink href="/como-emitir-nf-mei-prefeitura">como emitir NF-e pela prefeitura</InternalLink>.</>} />
            <StepItem num="2" title="Faça o cadastro como prestador de serviço" desc="Use seu CNPJ do MEI, CPF e dados pessoais. Algumas prefeituras exigem validação presencial na primeira vez." />
            <StepItem num="3" title="Acesse o sistema e crie a nota" desc="Informe os dados do tomador (quem contratou o serviço), descrição do serviço, valor e alíquota do ISS (varia por município, geralmente 2% a 5%)." />
            <StepItem num="4" title="Envie a nota ao cliente" desc="Após emitir, você recebe um PDF e XML. Envie por e-mail ao cliente. Guarde todas as notas para o DASN-SIMEI anual." isLast />
          </div>
        </section>

        <section aria-labelledby="nfe-title">
          <h2 id="nfe-title" className="font-serif text-2xl mb-4">Como emitir NF-e (comércio e indústria)</h2>
          <div className="space-y-0">
            <StepItem num="1" title="Acesse o portal da SEFAZ do seu estado" desc="Cada estado tem seu próprio sistema de NF-e. Procure por 'Emissor de NF-e gratuito' no site da Secretaria da Fazenda estadual." />
            <StepItem num="2" title="Obtenha o certificado digital (se necessário)" desc="Alguns estados exigem certificado digital (A1 ou A3) para emissão. Verifique as exigências do seu estado — para MEI, muitos oferecem alternativas simplificadas." />
            <StepItem num="3" title="Preencha os dados da operação" desc="Informe o destinatário (CNPJ ou CPF), produtos vendidos, CFOP (código fiscal), valor e dados de transporte se houver entrega." />
            <StepItem num="4" title="Transmita e guarde o XML" desc="A NF-e é transmitida à SEFAZ e você recebe a chave de acesso e DANFE (documento auxiliar). Guarde os XMLs por 5 anos." isLast />
          </div>
        </section>

        <AlertBox type="warning">
          <p className="font-semibold mb-1">⚠️ MEI não paga impostos extras na nota fiscal</p>
          <p className="text-sm">O ISS já está incluído no DAS mensal. Emitir nota fiscal não gera cobrança adicional de imposto para o MEI — o valor pago no DAS já cobre isso. A nota é apenas um documento fiscal obrigatório.</p>
        </AlertBox>

        <section aria-labelledby="faq-title">
          <h2 id="faq-title" className="font-serif text-2xl mb-4">Dúvidas frequentes</h2>
          <div className="space-y-2">
            <FaqItem q="MEI pode emitir nota fiscal para pessoa física?" a="Sim. Se a pessoa física solicitar, você é obrigado a emitir. Se não solicitar, fica a seu critério — mas emitir ajuda no controle do faturamento." />
            <FaqItem q="Qual o custo para emitir nota fiscal sendo MEI?" a="Gratuito. Tanto o sistema da prefeitura (NFS-e) quanto o da SEFAZ (NF-e) são gratuitos para MEI. Você não precisa pagar nada além do DAS mensal." />
            <FaqItem q="Preciso emitir nota fiscal retroativa?" a="Não é possível emitir nota retroativa. Se não emitiu no momento da venda e o cliente solicitar, emita com a data atual e faça uma observação no campo de informações adicionais." />
            <FaqItem q="Quantas notas fiscais MEI pode emitir?" a="Não há limite de quantidade. Você pode emitir quantas notas precisar, desde que o faturamento total não ultrapasse R$ 81.000/ano." />
          </div>
        </section>

        <div className="bg-white border border-[var(--border)] rounded-xl p-5 text-sm">
          <p className="font-semibold mb-2">🔗 Links oficiais para emissão</p>
          <div className="space-y-2">
            <ExternalLink href="https://www.nfse.gov.br" className="flex items-center gap-2 text-[var(--green)] hover:underline text-sm">→ NFS-e Nacional (Gov.br)</ExternalLink>
            <ExternalLink href="https://www.nfe.fazenda.gov.br" className="flex items-center gap-2 text-[var(--green)] hover:underline text-sm">→ Portal Nacional da NF-e (Receita Federal)</ExternalLink>
          </div>
        </div>

        {/* AD FINAL */}
        <AdSlot position="final" />

        {/* INTERLINKS */}
        <AlertBox type="info">
          <p className="font-semibold mb-2">🔗 Veja também</p>
          <ul className="space-y-1 text-sm">
            <li>→ <InternalLink href="/nota-fiscal-mei">Nota fiscal MEI: guia completo</InternalLink></li>
            <li>→ <InternalLink href="/mei-precisa-emitir-nota-fiscal">MEI precisa emitir nota fiscal?</InternalLink></li>
            <li>→ <InternalLink href="/como-emitir-nf-mei-prefeitura">Como emitir NF na prefeitura</InternalLink></li>
            <li>→ <InternalLink href="/como-declarar-dasn-simei">Como declarar o DASN-SIMEI</InternalLink></li>
          </ul>
        </AlertBox>

      </div>

      <RelatedPages current="/mei-como-emitir-nota-fiscal" />
    </main>
  );
}
