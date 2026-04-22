import type { Metadata } from "next";
import { PageHero, AlertBox, RelatedPages, InternalLink, FaqItem , AdSlot } from "../components/ui";

export const metadata: Metadata = {
  title: "MEI no débito automático em 2026: vantagens e como cadastrar",
  description: "Entenda como funciona o débito automático do DAS MEI, quais bancos aceitam, como ativar e o que fazer se o banco não oferecer a opção.",
  alternates: { canonical: "https://guiamei.com.br/mei-debito-automatico" },
};

export default function Page() {
  return (
    <main>
      <PageHero
        badge="DAS · Automação"
        title="Débito automático do DAS MEI"
        desc="Configure uma vez e esqueça: o DAS é debitado automaticamente todo mês no vencimento, sem boleto, sem fila, sem esquecimento."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">

        {/* AD TOPO */}
        <AdSlot position="topo" />

        <section aria-labelledby="funciona-title">
          <h2 id="funciona-title" className="font-serif text-2xl mb-4">Como funciona o débito automático</h2>
          <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
            Após a adesão, o sistema da Receita Federal envia uma instrução de débito para o seu banco todo mês, no dia do vencimento (dia 20). O banco debita o valor direto da sua conta corrente e envia a confirmação de pagamento.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            {[
              { etapa: "1", label: "Você faz a adesão", desc: "Uma única vez no PGMEI, informando banco, agência e conta." },
              { etapa: "2", label: "Todo dia 20", desc: "A Receita envia a ordem de débito ao seu banco automaticamente." },
              { etapa: "3", label: "Banco confirma", desc: "O valor é debitado e você recebe o comprovante pelo extrato." },
            ].map((item) => (
              <div key={item.etapa} className="bg-[var(--green-light)] border border-[#b2ddc4] rounded-xl p-4 text-center">
                <p className="text-2xl font-serif text-[var(--green)] mb-1">{item.etapa}</p>
                <p className="font-semibold text-sm mb-1">{item.label}</p>
                <p className="text-xs text-[var(--muted)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="vantagens-title">
          <h2 id="vantagens-title" className="font-serif text-2xl mb-4">Vantagens do débito automático</h2>
          <div className="space-y-3">
            {[
              { v: "Zero risco de esquecimento", desc: "A causa número 1 de DAS em atraso é o esquecimento. Com débito automático, isso não existe." },
              { v: "Sem multa e sem juros", desc: "Pagando sempre em dia, você economiza os 0,33% ao dia de multa e os juros Selic que acumulam rapidamente." },
              { v: "Benefícios previdenciários garantidos", desc: "Contribuição em dia todos os meses garante a contagem de tempo para aposentadoria, auxílio-doença e licença-maternidade." },
              { v: "Gratuito e cancelável a qualquer momento", desc: "Não tem custo para aderir nem para cancelar. Você mantém total controle." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white border border-[var(--border)] rounded-xl px-5 py-4">
                <span className="text-[var(--green)] font-bold shrink-0">✓</span>
                <div>
                  <p className="font-semibold text-sm">{item.v}</p>
                  <p className="text-[var(--muted)] text-sm mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <AlertBox type="info">
          <p className="font-semibold mb-1">📌 Como ativar o débito automático</p>
          <p className="text-sm">A ativação é feita no portal PGMEI em poucos minutos. Veja o passo a passo completo: <InternalLink href="/como-pagar-das-automatico">como configurar o pagamento automático do DAS</InternalLink>.</p>
        </AlertBox>

        <section aria-labelledby="cuidados-title">
          <h2 id="cuidados-title" className="font-serif text-2xl mb-4">Cuidados ao usar o débito automático</h2>
          <div className="space-y-3">
            {[
              { cuidado: "Mantenha saldo no dia 20", desc: "Se a conta não tiver saldo suficiente, o débito falha e o DAS fica em atraso — gerando multa normalmente.", tipo: "warning" },
              { cuidado: "Notifique o banco ao trocar de conta", desc: "Se mudar de banco ou encerrar a conta, atualize os dados no PGMEI antes do próximo vencimento.", tipo: "warning" },
              { cuidado: "O débito automático não paga atrasados", desc: "Se houver meses em aberto, o débito automático cobre apenas o mês corrente. Regularize os atrasados separadamente.", tipo: "info" },
              { cuidado: "Verifique o extrato mensalmente", desc: "Confirme nos extratos bancários que o débito está sendo efetuado corretamente todo mês.", tipo: "info" },
            ].map((item, i) => (
              <div key={i} className={`flex gap-4 border rounded-xl px-5 py-4 ${item.tipo === "warning" ? "bg-red-50 border-red-200" : "bg-blue-50 border-blue-200"}`}>
                <span className="text-lg shrink-0">{item.tipo === "warning" ? "⚠️" : "ℹ️"}</span>
                <div>
                  <p className="font-semibold text-sm">{item.cuidado}</p>
                  <p className="text-[var(--muted)] text-sm mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="faq-title">
          <h2 id="faq-title" className="font-serif text-2xl mb-4">Dúvidas frequentes</h2>
          <div className="space-y-2">
            <FaqItem q="Nubank e Inter aceitam débito automático do DAS?" a="Geralmente não, pois essas fintechs não estão integradas ao sistema de débito automático da Receita Federal. A alternativa é usar agendamento de pagamento pelo app do banco ou configurar lembretes mensais." />
            <FaqItem q="O débito automático vale para o DAS com atraso?" a="Não. O débito automático cobre apenas a competência do mês corrente. Para pagar meses atrasados, é necessário gerar os boletos individualmente no PGMEI." />
            <FaqItem q="Como sei se o débito foi efetuado?" a="O débito aparece no extrato bancário como 'DAS MEI' ou similar. Você também pode verificar no PGMEI se o período consta como pago." />
            <FaqItem q="Posso ter débito automático em mais de um banco?" a="Não. Só é possível cadastrar uma conta para débito automático por vez. Para alterar o banco, cancele o atual no PGMEI e cadastre o novo." />
          </div>
        </section>

        {/* AD FINAL */}
        <AdSlot position="final" />

        {/* INTERLINKS */}
        <AlertBox type="info">
          <p className="font-semibold mb-2">🔗 Veja também</p>
          <ul className="space-y-1 text-sm">
            <li>→ <InternalLink href="/como-pagar-das-automatico">Como pagar DAS automaticamente</InternalLink></li>
            <li>→ <InternalLink href="/como-emitir-das-mei">Como emitir o DAS-MEI</InternalLink></li>
            <li>→ <InternalLink href="/emitir-das-pelo-celular">Emitir DAS pelo celular</InternalLink></li>
            <li>→ <InternalLink href="/das-atrasado">DAS atrasado: o que fazer</InternalLink></li>
          </ul>
        </AlertBox>

      </div>

      <RelatedPages current="/mei-debito-automatico" />
    </main>
  );
}
