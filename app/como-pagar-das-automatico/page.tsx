import type { Metadata } from "next";
import { PageHero, AlertBox, RelatedPages, InternalLink, FaqItem, StepItem, ExternalLink , AdSlot } from "../components/ui";

export const metadata: Metadata = {
  title: "Como pagar o DAS automaticamente em 2026: débito recorrente",
  description: "Configure o débito automático do DAS MEI e nunca mais esqueça de pagar. Veja como habilitar pelo PGMEI e quais bancos aceitam o débito automático.",
  alternates: { canonical: "https://guiamei.com.br/como-pagar-das-automatico" },
};

export default function Page() {
  return (
    <main>
      <PageHero
        badge="DAS · Débito Automático"
        title="Como pagar o DAS automaticamente"
        desc="Configure o débito automático do DAS e elimine o risco de esquecer o pagamento — o valor é debitado todo mês no dia 20 direto da sua conta."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">

        {/* AD TOPO */}
        <AdSlot position="topo" />

        <AlertBox type="success">
          <p className="font-semibold mb-1">✅ Débito automático: a forma mais segura de pagar o DAS</p>
          <p className="text-sm">Com o débito automático habilitado, o DAS é pago automaticamente todo mês sem que você precise fazer nada. Sem risco de esquecimento, sem multa, sem juros. É de graça e pode ser cancelado a qualquer momento.</p>
        </AlertBox>

        <section aria-labelledby="como-title">
          <h2 id="como-title" className="font-serif text-2xl mb-4">Como configurar o débito automático</h2>
          <div className="space-y-0">
            <StepItem num="1" title="Acesse o portal PGMEI" desc={<>Entre em <ExternalLink href="https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgmei.app/Identificacao" className="text-[var(--green)] underline">pgmei.app</ExternalLink> com seu CNPJ ou login Gov.br.</>} />
            <StepItem num="2" title='Localize a opção "Débito Automático"' desc='No menu principal do PGMEI, procure por "Agendamento" ou "Débito Automático". A opção pode variar conforme a versão do sistema.' />
            <StepItem num="3" title="Informe os dados bancários" desc="Selecione o banco, agência e número da conta corrente onde o débito será realizado. A conta deve ser do titular do MEI ou de alguém autorizado." />
            <StepItem num="4" title="Confirme a adesão" desc="O sistema confirma a adesão ao débito automático. A partir do próximo vencimento (dia 20), o valor será debitado automaticamente." isLast />
          </div>
        </section>

        <section aria-labelledby="bancos-title">
          <h2 id="bancos-title" className="font-serif text-2xl mb-4">Bancos que aceitam débito automático do DAS</h2>
          <div className="bg-white border border-[var(--border)] rounded-2xl overflow-hidden text-sm">
            {[
              "Banco do Brasil",
              "Caixa Econômica Federal",
              "Bradesco",
              "Itaú",
              "Santander",
              "Sicoob",
              "Sicredi",
              "Banrisul",
              "Banco do Nordeste (BNB)",
              "Banco da Amazônia",
            ].map((banco, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-3 border-b border-[var(--border)] last:border-b-0">
                <span className="text-[var(--green)] text-xs">✓</span>
                <span>{banco}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-[var(--muted)] mt-2">* Fintechs como Nubank e Inter geralmente não estão habilitadas para débito automático do DAS. Nesses casos, use o agendamento pelo app do banco ou configure lembretes mensais.</p>
        </section>

        <section aria-labelledby="alternativas-title">
          <h2 id="alternativas-title" className="font-serif text-2xl mb-4">Alternativas se seu banco não aceita débito automático</h2>
          <div className="space-y-3">
            {[
              { alt: "Agendamento no app do banco", desc: "Configure um agendamento recorrente no app do seu banco para pagar o DAS todo dia 18 ou 19 (antes do vencimento no dia 20). Você gera o boleto uma vez, o banco paga na data programada." },
              { alt: "Lembrete no celular", desc: "Configure um lembrete repetitivo todo mês (por exemplo, dia 15) para emitir e pagar o DAS. Simples mas eficaz para quem não tem débito automático disponível." },
              { alt: "Calendário compartilhado", desc: "Adicione o vencimento do DAS como evento recorrente no Google Agenda ou iCalendar — com notificação com 5 dias de antecedência." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white border border-[var(--border)] rounded-xl px-5 py-4">
                <span className="text-[var(--green)] font-bold shrink-0">→</span>
                <div>
                  <p className="font-semibold text-sm">{item.alt}</p>
                  <p className="text-[var(--muted)] text-sm mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <AlertBox type="warning">
          <p className="font-semibold mb-1">⚠️ Atenção: mantenha saldo na conta no dia 20</p>
          <p className="text-sm">Com débito automático, certifique-se de ter saldo suficiente na conta bancária no dia 20 de cada mês. Se o débito falhar por saldo insuficiente, o DAS não é pago e você acumula multa e juros normalmente.</p>
        </AlertBox>

        <section aria-labelledby="faq-title">
          <h2 id="faq-title" className="font-serif text-2xl mb-4">Dúvidas frequentes</h2>
          <div className="space-y-2">
            <FaqItem q="Posso cancelar o débito automático?" a="Sim, a qualquer momento pelo próprio PGMEI. O cancelamento é imediato e o próximo DAS precisará ser pago manualmente." />
            <FaqItem q="O débito automático paga DAS atrasado também?" a="Não. O débito automático cobre apenas a competência corrente (mês atual). Para pagar meses atrasados, você precisa gerar os boletos individualmente no PGMEI." />
            <FaqItem q="Preciso renovar o débito automático todo ano?" a="Não. Uma vez configurado, o débito automático é permanente até que você cancele ou altere os dados bancários." />
            <FaqItem q="O débito automático funciona para qualquer tipo de conta?" a="Geralmente funciona para contas correntes. Contas poupança e de pagamento (fintechs) costumam não ser aceitas. Verifique com seu banco." />
          </div>
        </section>

        {/* AD FINAL */}
        <AdSlot position="final" />

        {/* INTERLINKS */}
        <AlertBox type="info">
          <p className="font-semibold mb-2">🔗 Veja também</p>
          <ul className="space-y-1 text-sm">
            <li>→ <InternalLink href="/como-emitir-das-mei">Como emitir o DAS-MEI</InternalLink></li>
            <li>→ <InternalLink href="/mei-debito-automatico">MEI no débito automático</InternalLink></li>
            <li>→ <InternalLink href="/emitir-das-pelo-celular">Emitir DAS pelo celular</InternalLink></li>
            <li>→ <InternalLink href="/das-atrasado">DAS atrasado: o que fazer</InternalLink></li>
          </ul>
        </AlertBox>

      </div>

      <RelatedPages current="/como-pagar-das-automatico" />
    </main>
  );
}
