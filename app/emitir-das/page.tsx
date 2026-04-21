import type { Metadata } from "next";
import { PageHero, AlertBox, RelatedPages, InternalLink, FaqItem, StepItem, ExternalLink } from "../components/ui";

export const metadata: Metadata = {
  title: "Como emitir DAS MEI | MEI/guia",
  description: "Guia para emitir DAS (Débito Automático do Simples) - pagamento mensal do MEI com detalhes sobre quando é obrigatório.",
  alternates: { canonical: "https://guiamei.com.br/emitir-das" },
};

export default function Page() {
  return (
    <main>
      <PageHero
        badge="DAS · Emitir"
        title="Como emitir DAS MEI"
        desc="Guia para emitir o Débito Automático do Simples Nacional - saiba quando é obrigatório pagar e como proceder."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">
        <section className="bg-white border border-[var(--border)] rounded-2xl p-6 shadow-sm">
          <h2 className="font-serif text-xl mb-6">Passo a passo para emitir</h2>
          <div className="space-y-0">
            <StepItem num="1" title="Verifique o vencimento" desc="O DAS vence dia 20 de cada mês. Consulte a tabela no portal PGMEI para datas específicas." />
            <StepItem num="2" title="Acesse o PGMEI" desc={<><ExternalLink href="https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgmei.app/Identificacao" className="text-[var(--green)] underline">pgmei.app</ExternalLink> com sua conta Gov.br."</>} />
            <StepItem num="3" title="Emita o débito" desc="No portal, acesse 'Débito Automático' e confirme as informações do seu MEI para geração do boleto." />
            <StepItem num="4" title="Realize o pagamento" desc="Pague o boleto pelo seu banco ou use o débito automático configurado para evitar multas." />
            <StepItem num="5" title="Guarde o comprovante" desc="Mantenha o comprovante de pagamento para sua contabilidade e eventual consulta à Receita Federal." isLast />
          </div>
        </section>

        <AlertBox type="warning">
          <p className="font-semibold mb-1">⚠️ DAS vence no dia 20 de cada mês</p>
          <p className="text-sm">O pagamento do DAS deve ser realizado até o dia 20 de cada mês. Consulte o portal PGMEI para datas específicas e horários de pagamento.</p>
        </AlertBox>

        <AlertBox type="warning">
          <p className="font-semibold mb-1">⚠️ Sem prorrogação automática</p>
          <p className="text-sm">Se o dia 20 cair em fim de semana ou feriado, o pagamento deve ser realizado no primeiro dia útil seguinte. Não há prorrogação automática - fique atento aos calendários oficiais.</p>
        </AlertBox>

        <section aria-labelledby="perguntas-title">
          <h2 id="perguntas-title" className="font-serif text-2xl mb-4">Perguntas frequentes</h2>
          <div className="space-y-2">
            <FaqItem q="Quando devo pagar o DAS?" a="O DAS deve ser pago no dia 20 de cada mês. Consulte a tabela no portal PGMEI para datas específicas, pois em alguns meses pode haver alterações devido a feriados." />
            <FaqItem q="Posso pagar após o dia 20?" a="Não recomendamos. O pagamento após o vencimento gera multas e juros. Se perdeu o prazo, pague o mais rápido possível através do portal PGMEI para reduzir custos." />
            <FaqItem q="Precisa de contador para emitir DAS?" a="Não necessariamente. O débito automático simplifica o processo. Porém, para MEIs que optam pelo regime de caixa ou têm várias fontes de renda, a consultoria contábil pode ser útil." />
            <FaqItem q="O que fazer se o débito automático falhar?" a="Verifique o saldo disponível na conta bancária. Se falhar por saldo insuficiente, acesse o portal PGMEI e pague o valor manualmente antes do próximo vencimento para evitar multas." />
          </div>
        </section>

        <RelatedPages current="/emitir-das" />
      </div>
    </main>
  );
}
