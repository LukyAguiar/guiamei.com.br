import type { Metadata } from "next";
import { PageHero, AlertBox, RelatedPages, InternalLink, FaqItem, StepItem, ExternalLink , AdSlot } from "../components/ui";

// ISR — revalida a página a cada 24h sem rebuild
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Como emitir nota fiscal MEI na prefeitura em 2026: passo a passo",
  description: "Guia completo para emitir NFS-e (nota fiscal de serviços) pela prefeitura sendo MEI: cadastro, login, preenchimento e envio ao cliente.",
  alternates: { canonical: "https://guiamei.com.br/como-emitir-nf-mei-prefeitura" },
};

export default function Page() {
  return (
    <main>
      <PageHero
        badge="NFS-e · Prefeitura"
        title="Como emitir nota fiscal pela prefeitura sendo MEI"
        desc="Passo a passo para emitir a Nota Fiscal de Serviços Eletrônica (NFS-e) no sistema da sua prefeitura — gratuito e pelo computador ou celular."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">

        {/* AD TOPO */}
        <AdSlot position="topo" />

        <AlertBox type="info">
          <p className="font-semibold mb-1">📌 Este guia é para MEI prestador de serviços</p>
          <p className="text-sm">Se você vende produtos (comércio/indústria), precisa emitir NF-e pela SEFAZ estadual, não pela prefeitura. Veja o guia completo: <InternalLink href="/mei-como-emitir-nota-fiscal">como emitir nota fiscal sendo MEI</InternalLink>.</p>
        </AlertBox>

        <section aria-labelledby="sistema-title">
          <h2 id="sistema-title" className="font-serif text-2xl mb-4">Qual sistema usar?</h2>
          <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
            Cada prefeitura tem seu próprio sistema de NFS-e. Há duas situações:
          </p>
          <div className="space-y-3">
            <div className="bg-[var(--green-light)] border border-[#b2ddc4] rounded-xl p-5">
              <p className="font-semibold text-sm mb-1">🌐 NFS-e Nacional (Gov.br)</p>
              <p className="text-sm text-[var(--muted)]">Desde 2023, o governo federal lançou o sistema <strong>NFS-e Nacional</strong>, integrado ao Gov.br. Muitas prefeituras já aderiram — é o sistema mais simples e unificado. Acesse em <ExternalLink href="https://www.nfse.gov.br" className="text-[var(--green)] underline">nfse.gov.br</ExternalLink>.</p>
            </div>
            <div className="bg-white border border-[var(--border)] rounded-xl p-5">
              <p className="font-semibold text-sm mb-1">🏛️ Sistema próprio da prefeitura</p>
              <p className="text-sm text-[var(--muted)]">Prefeituras que ainda não aderiram ao sistema nacional têm plataforma própria. Pesquise no Google: <em>"nota fiscal eletrônica serviços [nome da sua cidade]"</em> para encontrar o link correto.</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="passo-title">
          <h2 id="passo-title" className="font-serif text-2xl mb-4">Passo a passo — NFS-e Nacional</h2>
          <div className="space-y-0">
            <StepItem num="1" title="Acesse o portal NFS-e Nacional" desc={<>Entre em <ExternalLink href="https://www.nfse.gov.br" className="text-[var(--green)] underline">nfse.gov.br</ExternalLink> e clique em "Emitir NFS-e". Faça login com sua conta Gov.br (a mesma usada para emitir o DAS).</>} />
            <StepItem num="2" title="Cadastre sua empresa" desc="Na primeira vez, você precisará cadastrar o CNPJ do MEI e informar o código de serviço (CNAE) da sua atividade. Esse código define qual tributo municipal se aplica." />
            <StepItem num="3" title="Preencha os dados do tomador" desc="Informe CNPJ ou CPF de quem está contratando o serviço, nome/razão social e endereço. Para clientes com CNPJ, esses dados são obrigatórios." />
            <StepItem num="4" title="Descreva o serviço prestado" desc='No campo "Discriminação do Serviço", escreva o que foi feito. Seja específico: ao invés de "serviço", escreva "Desenvolvimento de logo para campanha de marketing — mês de abril/2026".' />
            <StepItem num="5" title="Informe o valor e confirme" desc="Digite o valor total cobrado. O sistema calculará o ISS automaticamente (já incluso no seu DAS — não é cobrado a mais). Revise tudo e clique em emitir." />
            <StepItem num="6" title="Envie ao cliente" desc="Baixe o PDF da nota e envie por e-mail ao cliente. Guarde também o XML para seus registros. Pronto — nota emitida!" isLast />
          </div>
        </section>

        <AlertBox type="warning">
          <p className="font-semibold mb-1">⚠️ Atenção ao ISS retido na fonte</p>
          <p className="text-sm">Algumas empresas (tomadores) fazem a retenção do ISS na fonte — ou seja, descontam o valor do ISS do pagamento e recolhem direto à prefeitura. Isso é legal e não muda o valor do seu DAS. Se isso acontecer, sua nota deve indicar "ISS retido pelo tomador".</p>
        </AlertBox>

        <section aria-labelledby="faq-title">
          <h2 id="faq-title" className="font-serif text-2xl mb-4">Dúvidas frequentes</h2>
          <div className="space-y-2">
            <FaqItem q="Preciso ir à prefeitura para me cadastrar?" a="Depende da prefeitura. Muitas fazem o cadastro 100% online pelo Gov.br. Outras exigem comparecimento presencial com documentos na primeira vez. Verifique no site da sua prefeitura." />
            <FaqItem q="O que é o código de serviço (LC 116)?" a="É o código que identifica o tipo de serviço prestado, conforme a Lei Complementar 116/2003. Cada atividade tem um código específico. O SEBRAE disponibiliza uma tabela de consulta gratuita." />
            <FaqItem q="Posso emitir nota por celular?" a="Sim. O sistema NFS-e Nacional é responsivo e funciona no navegador do celular. Algumas prefeituras também têm aplicativos próprios." />
            <FaqItem q="Como cancelar uma nota emitida errada?" a="No próprio sistema de emissão há a opção de cancelar a nota. Geralmente há um prazo (24h a 7 dias dependendo da prefeitura). Após o prazo, é necessário emitir uma nota de substituição." />
          </div>
        </section>

        {/* AD FINAL */}
        <AdSlot position="final" />

        {/* INTERLINKS */}
        <AlertBox type="info">
          <p className="font-semibold mb-2">🔗 Veja também</p>
          <ul className="space-y-1 text-sm">
            <li>→ <InternalLink href="/nota-fiscal-mei">Nota fiscal MEI: guia completo</InternalLink></li>
            <li>→ <InternalLink href="/mei-precisa-emitir-nota-fiscal">MEI precisa emitir nota fiscal?</InternalLink></li>
            <li>→ <InternalLink href="/mei-como-emitir-nota-fiscal">Como emitir nota fiscal sendo MEI</InternalLink></li>
            <li>→ <InternalLink href="/como-emitir-das-mei">Como emitir o DAS-MEI</InternalLink></li>
          </ul>
        </AlertBox>

      </div>

      <RelatedPages current="/como-emitir-nf-mei-prefeitura" />
    </main>
  );
}
