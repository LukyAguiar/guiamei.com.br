import type { Metadata } from "next";
import { PageHero, AlertBox, RelatedPages, InternalLink, FaqItem, StepItem, ExternalLink } from "../components/ui";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Como pagar DAS atrasado | MEI/guia",
  description: "Guia para pagar DAS MEI atrasado - multas, juros e passo a passo para regularizar sua situação fiscal.",
  alternates: { canonical: "https://guiamei.com.br/das-atrasado" },
};

export default function Page() {
  return (
    <main>
      <PageHero
        badge="DAS · Atrasado"
        title="Como pagar DAS atrasado"
        desc="Multas, juros e passo a passo para regularizar sua situação fiscal com o DAS MEI atrasado."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">
        <section className="bg-white border border-[var(--border)] rounded-2xl p-6 shadow-sm">
          <h2 className="font-serif text-xl mb-6">Passo a passo para pagar</h2>
          <div className="space-y-0">
            <StepItem num="1" title="Acesse o portal PGMEI" desc={<><ExternalLink href="https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgmei.app/Identificacao" className="text-[var(--green)] underline">pgmei.app</ExternalLink> com seu CNPJ ou login Gov.br."</>} />
            <StepItem num="2" title="Selecione o pagamento de DAS" desc="No menu principal, acesse 'Débito Automático' ou 'Pagamento de Débitos' para localizar o DAS em atrasado." />
            <StepItem num="3" title="Consulte débitos pendentes" desc="O sistema exibe todos os meses pendentes com valores de multa e juros atualizados." />
            <StepItem num="4" title="Emissão do boleto" desc={<><ExternalLink href="https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgmei.app/" className="text-[var(--green)] underline">Portal PGMEI</ExternalLink> - gere o boleto para pagamento."</>} />
            <StepItem num="5" title="Pague e guarde o comprovante" desc="Realize o pagamento e mantenha o comprovante para sua contabilidade." isLast />
          </div>
        </section>

        <AlertBox type="warning">
          <p className="font-semibold mb-1">⚠️ Pagamento recomendado o mais rápido possível</p>
          <p className="text-sm">O DAS atrasado acumula multas e juros mensalmente. Quanto mais rápido regularizar, menos custos você terá. Consulte sempre o portal oficial para valores atualizados.</p>
        </AlertBox>

        <section aria-labelledby="frequentes-title">
          <h2 id="frequentes-title" className="font-serif text-2xl mb-4">Perguntas frequentes</h2>
          <div className="space-y-2">
            <FaqItem q="Posso pagar DAS atrasado?" a="Sim, você pode pagar débitos atrasados através do portal PGMEI. O sistema permite consultar e pagar todos os meses pendentes com seus respectivos cálculos de multa e juros." />
            <FaqItem q="Tem multa e juros?" a="Sim, o DAS atrasado acumula multa de até 20% sobre o valor principal e juros calculados com base na taxa Selic diária, conforme tabela do portal oficial." />
            <FaqItem q="Precisa renovar débito automático?" a="Não. Uma vez configurado, o débito automático é permanente até cancelamento ou alteração de dados bancários." />
            <FaqItem q="O que fazer se o débito falhar?" a="Verifique o saldo disponível na data do vencimento (dia 20 de cada mês). Se o débito falhar por saldo insuficiente, você precisará pagar o valor manualmente através do portal PGMEI." />
          </div>
        </section>

        <RelatedPages current="/das-atrasado" />
      </div>
    </main>
  );
}
