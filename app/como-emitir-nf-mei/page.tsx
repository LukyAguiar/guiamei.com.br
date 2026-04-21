import type { Metadata } from "next";
import { PageHero, AlertBox, RelatedPages, InternalLink, FaqItem, StepItem, ExternalLink } from "../components/ui";

export const metadata: Metadata = {
  title: "Como emitir nota fiscal MEI | MEI/guia",
  description: "Passo a passo para emitir notas fiscais como MEI corretamente - saiba quando é obrigatório e evite problemas.",
  alternates: { canonical: "https://guiamei.com.br/como-emitir-nf-mei" },
};

export default function Page() {
  return (
    <main>
      <PageHero
        badge="NF · Emitir"
        title="Como emitir nota fiscal MEI"
        desc="Passo a passo para emitir notas fiscais como MEI corretamente - saiba quando é obrigatório e evite problemas com a Receita Federal."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">
        <section className="bg-white border border-[var(--border)] rounded-2xl p-6 shadow-sm">
          <h2 className="font-serif text-xl mb-6">Passo a passo para emitir</h2>
          <div className="space-y-0">
            <StepItem num="1" title="Acesse o sistema da prefeitura" desc={<><ExternalLink href="https://www.prefeitura.sp.gov.br/servicos/online/" className="text-[var(--green)] underline">Portal da Prefeitura</ExternalLink> ou seu aplicativo municipal de emissão de notas."</>} />
            <StepItem num="2" title="Selecione a opção MEI" desc="Escolha o tipo de contribuinte como 'MEI' ou 'Microempreendedor Individual' no campo destinado." />
            <StepItem num="3" title="Preencha os dados da nota" desc="Informe cliente, serviço, valor e retenções devidas. O sistema valida automaticamente os limites do MEI." />
            <StepItem num="4" title="Emissão e armazenamento" desc={<><ExternalLink href="https://www.nfse.sp.gov.br" className="text-[var(--green)] underline">Portal da NFS-e</ExternalLink> - salve o PDF e guarde a chave de acesso."</>} />
            <StepItem num="5" title="Registro contábil" desc="Registre a nota em seu livro caixa ou contabilidade para conciliação fiscal." isLast />
          </div>
        </section>

        <AlertBox type="warning">
          <p className="font-semibold mb-1">⚠️ A nota precisa ser emitida no prazo</p>
          <p className="text-sm">O prazo para emissão da nota fiscal de serviços varia de acordo com a prefeitura. Em geral, o prazo é de até 48h após a prestação do serviço. Consulte o regulamento da sua cidade.</p>
        </AlertBox>

        <section aria-labelledby="faq-title">
          <h2 id="faq-title" className="font-serif text-2xl mb-4">Dúvidas frequentes</h2>
          <div className="space-y-2">
            <FaqItem q="Preciso emitir nota para todos os serviços?" a="Sim, exceto quando o serviço tiver valor inferior ao teto permitido para MEI (geralmente R$ 2.000 por mês). Verifique as regras da sua cidade." />
            <FaqItem q="Posso emitir nota para pessoa física?" a="Sim, é permitido emitir nota para pessoa física. A maioria dos prefeituras permite emissão para qualquer tipo de cliente." />
            <FaqItem q="Qual o valor máximo da nota?" a="O valor máximo geralmente está limitado ao teto do MEI (R$ 2.000 por mês em algumas cidades). Consulte a legislação municipal." />
            <FaqItem q="Preciso usar software específico?" a="Não necessariamente. Muitas prefeituras oferecem emissores online gratuitos. Também pode usar software contábil compatível com NFS-e." />
          </div>
        </section>

        <RelatedPages current="/como-emitir-nf-mei" />
      </div>
    </main>
  );
}
