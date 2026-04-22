import type { Metadata } from "next";
import { PageHero, AlertBox, RelatedPages, FaqItem , AdSlot , InternalLink } from "../components/ui";

// ISR — revalida a página a cada 24h sem rebuild
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Melhor cartão para MEI em 2026: compare taxas e benefícios",
  description: "Compare os melhores cartões de crédito para MEI em 2026: anuidade zero, cashback, limite e requisitos. Escolha o ideal para o seu negócio.",
  alternates: { canonical: "https://guiamei.com.br/cartao-para-mei-melhor-opcao" },
};

export default function Page() {
  return (
    <main>
      <PageHero
        badge="Cartão PJ · MEI 2026"
        title="Cartão de crédito para MEI: melhor opção"
        desc="Compare os principais cartões PJ para MEI em 2026: sem anuidade, com cashback e aprovação simplificada."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">

        {/* AD TOPO */}
        <AdSlot position="topo" />

        <AlertBox type="info">
          <p className="font-semibold mb-1">📌 Cartão PJ vs cartão pessoal para gastos do negócio</p>
          <p className="text-sm">Usar um cartão vinculado ao CNPJ separa as finanças pessoais das empresariais, facilita o controle do faturamento e pode melhorar o histórico de crédito do CNPJ. Vale muito a pena ter um cartão PJ mesmo que gratuito.</p>
        </AlertBox>

        <section aria-labelledby="comparativo-title">
          <h2 id="comparativo-title" className="font-serif text-2xl mb-4">Comparativo dos principais cartões para MEI</h2>
          <div className="space-y-4">
            {[
              {
                nome: "Nubank PJ",
                anuidade: "Gratuito",
                cashback: "Não",
                limite: "Baseado no faturamento",
                requisito: "CNPJ ativo, análise de crédito",
                destaque: "Mais popular entre MEI. Gestão pelo app, sem burocracia.",
                top: true,
              },
              {
                nome: "Mercado Pago PJ",
                anuidade: "Gratuito",
                cashback: "Sim (em compras no Mercado Livre)",
                limite: "Variável",
                requisito: "CNPJ ativo, conta no Mercado Pago",
                destaque: "Ótimo para quem vende no Mercado Livre. Integrado com a conta PJ.",
                top: false,
              },
              {
                nome: "Inter Empresas",
                anuidade: "Gratuito",
                cashback: "Sim (Inter Loop)",
                limite: "Baseado no faturamento",
                requisito: "CNPJ ativo, conta no Inter",
                destaque: "Cashback em compras. Conta PJ gratuita inclusa.",
                top: false,
              },
              {
                nome: "C6 Carbon PJ",
                anuidade: "Gratuita (com gasto mínimo)",
                cashback: "Sim (em pontos Meli)",
                limite: "Variável",
                requisito: "CNPJ ativo, análise mais rigorosa",
                destaque: "Pontuação premium para MEI com bom histórico.",
                top: false,
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-2xl p-5 border-2 ${item.top ? "bg-[var(--green-light)] border-[#b2ddc4]" : "bg-white border-[var(--border)]"}`}>
                <div className="flex justify-between items-start gap-2 mb-3">
                  <p className="font-bold text-base">{item.nome}</p>
                  {item.top && <span className="text-[10px] font-semibold uppercase tracking-widest bg-[var(--green)] text-white px-2 py-0.5 rounded-full shrink-0">Popular</span>}
                </div>
                <p className="text-sm text-[var(--muted)] mb-3 italic">{item.destaque}</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-white/60 rounded-lg p-2"><p className="text-[var(--muted)]">Anuidade</p><p className="font-semibold mt-0.5">{item.anuidade}</p></div>
                  <div className="bg-white/60 rounded-lg p-2"><p className="text-[var(--muted)]">Cashback</p><p className="font-semibold mt-0.5">{item.cashback}</p></div>
                  <div className="bg-white/60 rounded-lg p-2"><p className="text-[var(--muted)]">Limite</p><p className="font-semibold mt-0.5">{item.limite}</p></div>
                  <div className="bg-white/60 rounded-lg p-2"><p className="text-[var(--muted)]">Requisito</p><p className="font-semibold mt-0.5">{item.requisito}</p></div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[var(--muted)] mt-2">* Condições sujeitas a alteração. Consulte o site de cada instituição para informações atualizadas.</p>
        </section>

        <section aria-labelledby="escolha-title">
          <h2 id="escolha-title" className="font-serif text-2xl mb-4">Como escolher o melhor cartão para você</h2>
          <div className="space-y-3 text-sm">
            {[
              { perfil: "Quer simplicidade e zero custo", recomendacao: "Nubank PJ — app intuitivo, sem anuidade e sem pegadinhas." },
              { perfil: "Vende muito no Mercado Livre", recomendacao: "Mercado Pago PJ — cashback direto em compras na plataforma." },
              { perfil: "Quer cashback em qualquer compra", recomendacao: "Inter Empresas — programa de cashback abrangente." },
              { perfil: "Quer acumular pontos de milhas", recomendacao: "C6 Carbon PJ — pontuação premium se tiver bom histórico de crédito." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white border border-[var(--border)] rounded-xl px-5 py-4">
                <span className="text-[var(--gold)] font-bold shrink-0">→</span>
                <div>
                  <p className="font-semibold">{item.perfil}</p>
                  <p className="text-[var(--muted)] mt-0.5">{item.recomendacao}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="faq-title">
          <h2 id="faq-title" className="font-serif text-2xl mb-4">Dúvidas frequentes</h2>
          <div className="space-y-2">
            <FaqItem q="MEI precisa de conta PJ para ter cartão PJ?" a="Na maioria dos casos, sim. Os cartões PJ para MEI estão vinculados à conta empresarial. Mas o processo é gratuito e rápido — geralmente feito 100% pelo app." />
            <FaqItem q="O cartão PJ afeta meu score pessoal?" a="Pode afetar indiretamente, pois para MEI o titular é o avalista. Inadimplência no cartão PJ pode impactar o CPF do titular." />
            <FaqItem q="Qual o limite mínimo para MEI conseguir cartão?" a="Depende da instituição e do histórico. MEI com CNPJ novo costuma começar com limites menores (R$ 500–2.000) que aumentam com o tempo de uso e faturamento." />
          </div>
        </section>

        {/* AD FINAL */}
        <AdSlot position="final" />

        {/* INTERLINKS */}
        <AlertBox type="info">
          <p className="font-semibold mb-2">🔗 Veja também</p>
          <ul className="space-y-1 text-sm">
            <li>→ <InternalLink href="/mei-precisa-conta-pj">MEI precisa de conta PJ?</InternalLink></li>
            <li>→ <InternalLink href="/melhores-contas-para-mei">Melhores contas para MEI</InternalLink></li>
            <li>→ <InternalLink href="/mei-pode-fazer-emprestimo">MEI pode fazer empréstimo?</InternalLink></li>
            <li>→ <InternalLink href="/mei-tem-direito-credito">MEI tem direito a crédito?</InternalLink></li>
          </ul>
        </AlertBox>

      </div>

      <RelatedPages current="/cartao-para-mei-melhor-opcao" />
    </main>
  );
}
