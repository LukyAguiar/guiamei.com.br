import type { Metadata } from "next";
import { PageHero, AlertBox, RelatedPages, InternalLink, FaqItem } from "../components/ui";

export const metadata: Metadata = {
  title: "Melhores contas para MEI em 2026 — gratuitas e digitais",
  description: "Compare as melhores contas PJ para MEI em 2026: Nubank, Inter, Mercado Pago e outras. Sem anuidade, abertura pelo celular e recursos para empreendedores.",
  alternates: { canonical: "https://guiamei.vercel.app/melhores-contas-para-mei" },
};

export default function Page() {
  return (
    <main>
      <PageHero
        badge="Conta PJ · Comparativo 2026"
        title="Melhores contas para MEI em 2026"
        desc="Compare as principais contas empresariais gratuitas para MEI — abertura pelo celular, sem burocracia e com recursos que facilitam a gestão do negócio."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">

        <section aria-labelledby="contas-title">
          <h2 id="contas-title" className="font-serif text-2xl mb-4">Contas gratuitas para MEI</h2>
          <div className="space-y-4">
            {[
              {
                nome: "Nubank PJ",
                mensalidade: "R$ 0",
                pix: "✓ Gratuito",
                ted: "✓ Gratuito",
                cartao: "✓ Crédito e débito",
                diferencial: "App mais intuitivo do mercado, suporte 24h pelo chat, integração com CNPJ automática.",
                top: true,
              },
              {
                nome: "Inter Empresas",
                mensalidade: "R$ 0",
                pix: "✓ Gratuito",
                ted: "✓ 5 gratuitos/mês",
                cartao: "✓ Cashback no Inter Loop",
                diferencial: "Cashback em compras, marketplace de serviços e seguros para MEI.",
                top: true,
              },
              {
                nome: "Mercado Pago PJ",
                mensalidade: "R$ 0",
                pix: "✓ Gratuito",
                ted: "✓ Gratuito",
                cartao: "✓ Crédito PJ",
                diferencial: "Ideal para quem vende no Mercado Livre. Maquininha integrada.",
                top: false,
              },
              {
                nome: "Sicoob (cooperativa)",
                mensalidade: "Taxa de cooperado",
                pix: "✓ Gratuito",
                ted: "✓ Gratuito",
                cartao: "✓ Crédito e débito",
                diferencial: "Cooperativa: sobras distribuídas aos sócios. Ótimo relacionamento para crédito.",
                top: false,
              },
              {
                nome: "Itaú Conta MEI",
                mensalidade: "R$ 0 (12 primeiros meses)",
                pix: "✓ Gratuito",
                ted: "✓ Limitado",
                cartao: "✓ Opcional",
                diferencial: "Banco tradicional com suporte presencial. Boa opção para quem prefere banco físico.",
                top: false,
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-2xl p-5 border-2 ${item.top ? "bg-[var(--green-light)] border-[#b2ddc4]" : "bg-white border-[var(--border)]"}`}>
                <div className="flex justify-between items-start gap-2 mb-3">
                  <p className="font-bold text-base">{item.nome}</p>
                  {item.top && <span className="text-[10px] font-semibold uppercase tracking-widest bg-[var(--green)] text-white px-2 py-0.5 rounded-full shrink-0">Recomendado</span>}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs mb-3">
                  <div className="bg-white/60 rounded-lg p-2"><p className="text-[var(--muted)]">Mensalidade</p><p className="font-semibold mt-0.5">{item.mensalidade}</p></div>
                  <div className="bg-white/60 rounded-lg p-2"><p className="text-[var(--muted)]">Pix</p><p className="font-semibold mt-0.5">{item.pix}</p></div>
                  <div className="bg-white/60 rounded-lg p-2"><p className="text-[var(--muted)]">TED</p><p className="font-semibold mt-0.5">{item.ted}</p></div>
                  <div className="bg-white/60 rounded-lg p-2"><p className="text-[var(--muted)]">Cartão</p><p className="font-semibold mt-0.5">{item.cartao}</p></div>
                </div>
                <p className="text-sm text-[var(--muted)] italic">{item.diferencial}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[var(--muted)] mt-2">* Informações sujeitas a alteração. Consulte o site de cada instituição para condições atualizadas.</p>
        </section>

        <AlertBox type="info">
          <p className="font-semibold mb-1">💡 Não é obrigatório ter conta PJ</p>
          <p className="text-sm">MEI não é obrigado por lei a ter conta empresarial. Mas as vantagens são muitas — especialmente para acesso a crédito e profissionalismo. Veja: <InternalLink href="/mei-precisa-conta-pj">MEI precisa de conta PJ?</InternalLink></p>
        </AlertBox>

        <section aria-labelledby="escolha-title">
          <h2 id="escolha-title" className="font-serif text-2xl mb-4">Qual conta escolher?</h2>
          <div className="space-y-3 text-sm">
            {[
              { perfil: "Quer simplicidade e atendimento ágil", rec: "Nubank PJ — referência em experiência de usuário." },
              { perfil: "Quer cashback nas compras do negócio", rec: "Inter Empresas — melhor programa de cashback entre os gratuitos." },
              { perfil: "Vende muito no Mercado Livre", rec: "Mercado Pago PJ — integração direta com a plataforma." },
              { perfil: "Precisa de crédito com relacionamento bancário", rec: "Sicoob — cooperativas costumam ter as melhores taxas para crédito." },
              { perfil: "Prefere banco físico com agências", rec: "Itaú Conta MEI — banco tradicional com conta MEI gratuita por 1 ano." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white border border-[var(--border)] rounded-xl px-5 py-3">
                <span className="text-[var(--green)] font-bold shrink-0">→</span>
                <div>
                  <p className="font-semibold">{item.perfil}</p>
                  <p className="text-[var(--muted)] mt-0.5">{item.rec}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="faq-title">
          <h2 id="faq-title" className="font-serif text-2xl mb-4">Dúvidas frequentes</h2>
          <div className="space-y-2">
            <FaqItem q="Posso ter mais de uma conta PJ?" a="Sim. Não há restrição para ter contas em múltiplos bancos. Alguns MEI usam uma conta para receber e outra para pagar fornecedores, por exemplo." />
            <FaqItem q="Quanto tempo leva para abrir a conta PJ?" a="Nas fintechs digitais, geralmente de 1 a 3 dias úteis após envio dos documentos (CNPJ, CPF, selfie). Bancos tradicionais podem demorar mais." />
            <FaqItem q="Conta PJ tem IOF ou taxas escondidas?" a="As contas listadas acima são gratuitas na manutenção. Fique atento a cobranças em saques no caixa eletrônico ou acima do limite de transações incluídas no plano gratuito." />
          </div>
        </section>

      </div>

      <RelatedPages current="/melhores-contas-para-mei" />
    </main>
  );
}
