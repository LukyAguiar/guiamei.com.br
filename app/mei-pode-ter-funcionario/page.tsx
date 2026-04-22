import type { Metadata } from "next";
import { PageHero, AlertBox, RelatedPages, FaqItem , AdSlot , InternalLink , ArticleSchema, FaqSchema } from "../components/ui";

// ISR — revalida a página a cada 24h sem rebuild
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "MEI pode ter funcionário em 2026? Limite, encargos e obrigações",
  description: "Saiba se o MEI pode contratar funcionário, quantos pode ter, quanto paga de encargos e quais são as obrigações trabalhistas.",
  alternates: { canonical: "https://guiamei.com.br/mei-pode-ter-funcionario" }
};

export default function Page() {
  return (
    <main>
      <ArticleSchema
        title="MEI pode ter funcionário em 2026? Limite, encargos e obrigações"
        description="Veja quantos funcionários o MEI pode ter, quais encargos paga e quais são as obrigações trabalhistas."
        url="https://guiamei.com.br/mei-pode-ter-funcionario"
        dateModified="2026-04-21"
      />
      <FaqSchema items={[
        { q: "Quantos funcionários o MEI pode ter?", a: "O MEI pode ter apenas 1 funcionário contratado com carteira assinada, recebendo o salário mínimo ou o piso da categoria." },
    { q: "Quais encargos o MEI paga com funcionário?", a: "O MEI paga 8% de FGTS mais 3% de INSS patronal sobre o salário do empregado." },
    { q: "MEI com funcionário precisa de eSocial?", a: "Sim. O MEI empregador deve registrar o empregado no eSocial, dependendo da natureza do trabalho." },
    { q: "O que acontece se o MEI tiver mais de 1 funcionário?", a: "Isso descaracteriza o MEI e pode forçar migração para ME ou EPP, com carga tributária maior." }
      ]} />
      <PageHero
        badge="Funcionário MEI · 2026"
        title="MEI pode ter funcionário?"
        desc="Sim — mas com regras. Veja quantos funcionários o MEI pode ter, quanto custa e quais obrigações você precisa cumprir."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">

        {/* AD TOPO */}
        <AdSlot position="topo" />

        <AlertBox type="success">
          <p className="font-semibold mb-1">✅ Resposta direta</p>
          <p className="text-sm">O MEI pode ter <strong>até 1 (um) funcionário</strong> com carteira assinada, recebendo até 1 salário mínimo ou o piso da categoria.</p>
        </AlertBox>

        <section aria-labelledby="encargos-title">
          <h2 id="encargos-title" className="font-serif text-2xl mb-4">Quanto custa contratar um funcionário como MEI?</h2>
          <p className="text-[var(--muted)] text-sm mb-4">Com salário de R$ 1.518,00 (salário mínimo 2026), os encargos ficam assim:</p>
          <div className="bg-white border border-[var(--border)] rounded-2xl overflow-hidden">
            {[
              { item: "Salário bruto", valor: "R$ 1.518,00", obs: "Ou piso da categoria, se maior" },
              { item: "FGTS (8%)", valor: "R$ 121,44", obs: "Pago pelo MEI, não descontado do funcionário" },
              { item: "INSS Patronal (3%)", valor: "R$ 45,54", obs: "MEI paga 3% em vez de 20% das outras empresas" },
              { item: "13º salário (mensal)", valor: "+ R$ 126,50", obs: "Provisão mensal para o 13º" },
              { item: "Férias (mensal)", valor: "+ R$ 168,66", obs: "Provisão de 1/3 + férias por mês trabalhado" },
              { item: "Custo total estimado/mês", valor: "≈ R$ 1.980,00", obs: "Considerando todas as provisões" },
            ].map((row, i) => (
              <div key={i} className={`flex justify-between items-center px-5 py-3.5 ${i < 5 ? "border-b border-[var(--border)]" : "bg-[var(--green-light)]"}`}>
                <div>
                  <p className={`text-sm ${i === 5 ? "font-bold text-[var(--green)]" : "font-medium"}`}>{row.item}</p>
                  <p className="text-xs text-[var(--muted)]">{row.obs}</p>
                </div>
                <p className={`text-sm font-semibold ml-4 shrink-0 ${i === 5 ? "text-[var(--green)]" : ""}`}>{row.valor}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="obrig-title">
          <h2 id="obrig-title" className="font-serif text-2xl mb-4">Obrigações com o funcionário</h2>
          <div className="space-y-3">
            {[
              { icon: "📋", titulo: "Assinar a carteira de trabalho (CTPS)", desc: "Obrigatório. Pode ser feito pela Carteira de Trabalho Digital no aplicativo." },
              { icon: "💳", titulo: "Pagar FGTS mensalmente", desc: "Depositar 8% do salário no FGTS pelo portal fgts.caixa.gov.br até o dia 7 de cada mês." },
              { icon: "📊", titulo: "Enviar eSocial", desc: "O MEI com funcionário precisa enviar informações pelo eSocial (esocial.gov.br). É gratuito." },
              { icon: "🏥", titulo: "Recolher INSS do funcionário", desc: "Descontar e recolher o INSS do salário do funcionário (7,5% a 14%, dependendo do salário)." },
              { icon: "🏖️", titulo: "Pagar férias e 13º", desc: "Obrigações anuais. Férias de 30 dias com adicional de 1/3, e 13º salário até dez/20." },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 bg-white border border-[var(--border)] rounded-xl p-4">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <p className="font-medium text-sm">{item.titulo}</p>
                  <p className="text-xs text-[var(--muted)] mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <AlertBox type="warning">
          <p className="font-semibold mb-1">⚠️ Atenção: limite de 1 funcionário</p>
          <p className="text-sm">Se o negócio cresceu e você precisa de mais de 1 funcionário, está na hora de migrar para ME (Microempresa). Isso não é uma opção — é uma exigência legal. Com 2+ funcionários como MEI, você fica irregular.</p>
        </AlertBox>

        <section aria-labelledby="faq-title">
          <h2 id="faq-title" className="font-serif text-2xl mb-4">Dúvidas frequentes</h2>
          <div className="space-y-2">
            <FaqItem q="Posso contratar funcionário como autônomo para não assinar carteira?" a="Juridicamente é possível em alguns casos, mas há riscos de reconhecimento de vínculo empregatício. Se o trabalhador tiver horário fixo, subordinação e salário regular, a Justiça do Trabalho pode considerar que é empregado — independente do contrato." />
            <FaqItem q="Posso ser sócio de outra empresa sendo MEI?" a="Não. O MEI não pode ser sócio, administrador ou titular de outra empresa. Se isso acontecer, o MEI perde o enquadramento automaticamente." />
            <FaqItem q="O funcionário do MEI tem os mesmos direitos que qualquer CLT?" a="Sim. Férias, 13º, FGTS, INSS, aviso prévio — todos os direitos trabalhistas se aplicam normalmente." />
            <FaqItem q="Quantos funcionários o MEI pode ter?" a="O MEI pode ter apenas 1 funcionário contratado com carteira assinada." />
            <FaqItem q="Quais encargos o MEI paga com funcionário?" a="O MEI paga 8% de FGTS + 3% de INSS patronal sobre o salário do empregado." />
            <FaqItem q="O que acontece se o MEI tiver mais de 1 funcionário?" a="Isso descaracteriza o MEI e pode forçar migração para ME ou EPP, com carga tributária maior." />
          </div>
        </section>

        {/* AD FINAL */}
        <AdSlot position="final" />

        {/* INTERLINKS */}
        <AlertBox type="info">
          <p className="font-semibold mb-2">🔗 Veja também</p>
          <ul className="space-y-1 text-sm">
            <li>→ <InternalLink href="/limite-mei-2026">Limite do MEI em 2026</InternalLink></li>
            <li>→ <InternalLink href="/como-declarar-dasn-simei">Como declarar o DASN-SIMEI</InternalLink></li>
            <li>→ <InternalLink href="/mei-precisa-de-contador">MEI precisa de contador?</InternalLink></li>
            <li>→ <InternalLink href="/mei-ou-clt">MEI ou CLT: qual vale mais?</InternalLink></li>
          </ul>
        </AlertBox>

      </div>

      <RelatedPages current="/mei-pode-ter-funcionario" />
    </main>
  );
}
