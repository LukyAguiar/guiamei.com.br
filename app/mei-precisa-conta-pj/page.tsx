import type { Metadata } from "next";
import { PageHero, AlertBox, RelatedPages, InternalLink, FaqItem } from "../components/ui";

export const metadata: Metadata = {
  title: "MEI precisa de conta PJ? A verdade em 2026",
  description: "MEI não é obrigado por lei a ter conta PJ, mas ter uma traz vantagens importantes. Veja quando vale a pena e as melhores opções gratuitas em 2026.",
  alternates: { canonical: "https://guiamei.vercel.app/mei-precisa-conta-pj" },
};

export default function Page() {
  return (
    <main>
      <PageHero
        badge="Conta PJ · MEI"
        title="MEI precisa de conta PJ?"
        desc="A resposta direta: não é obrigatório por lei. Mas há motivos práticos muito bons para ter uma — e as melhores são gratuitas."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">

        <section aria-labelledby="obrig-title">
          <h2 id="obrig-title" className="font-serif text-2xl mb-4">É obrigatório ter conta PJ?</h2>
          <div className="bg-[var(--green-light)] border-2 border-[#b2ddc4] rounded-2xl p-6">
            <p className="font-bold text-[var(--green)] text-lg mb-2">Não — não existe lei que obrigue o MEI a ter conta PJ.</p>
            <p className="text-sm text-[var(--muted)] leading-relaxed">O MEI pode receber pagamentos na conta pessoal, emitir o DAS pelo CPF e movimentar o negócio pelo banco pessoa física. Legalmente, não há impedimento.</p>
          </div>
        </section>

        <section aria-labelledby="porque-title">
          <h2 id="porque-title" className="font-serif text-2xl mb-4">Mas por que ter conta PJ faz sentido?</h2>
          <div className="space-y-3">
            {[
              { razao: "Separação financeira", desc: "Misturar dinheiro pessoal e do negócio dificulta saber quanto você realmente ganha e gasta no negócio. Com conta PJ, o controle é automático.", urgencia: "alta" },
              { razao: "Acesso a crédito PJ", desc: "Bancos usam o histórico da conta empresarial para liberar empréstimos com melhores taxas. Sem conta PJ, você só acessa crédito pessoal.", urgencia: "alta" },
              { razao: "Profissionalismo com clientes", desc: "Receber pagamento em conta CNPJ passa mais credibilidade — especialmente em contratos com empresas.", urgencia: "media" },
              { razao: "Facilidade no DASN-SIMEI", desc: "Com extrato da conta PJ, calcular o faturamento anual para a declaração fica muito mais simples.", urgencia: "media" },
              { razao: "Cartão de crédito PJ", desc: "A maioria dos cartões PJ exige conta empresarial no mesmo banco. Ter conta PJ abre essa porta.", urgencia: "baixa" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white border border-[var(--border)] rounded-xl px-5 py-4">
                <span className={`w-2 h-2 rounded-full shrink-0 mt-1.5 ${item.urgencia === "alta" ? "bg-[var(--green)]" : item.urgencia === "media" ? "bg-[var(--gold)]" : "bg-[var(--muted)]"}`} />
                <div>
                  <p className="font-semibold text-sm">{item.razao}</p>
                  <p className="text-[var(--muted)] text-sm mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <AlertBox type="success">
          <p className="font-semibold mb-1">💡 Hoje existem contas PJ 100% gratuitas para MEI</p>
          <p className="text-sm">Nubank PJ, Mercado Pago, Inter Empresas, Itaú (conta MEI) e outras fintechs oferecem conta empresarial sem mensalidade, sem tarifa de manutenção e abertura pelo celular. Não há mais motivo para não ter uma. Veja: <InternalLink href="/melhores-contas-para-mei">melhores contas para MEI em 2026</InternalLink>.</p>
        </AlertBox>

        <section aria-labelledby="quando-title">
          <h2 id="quando-title" className="font-serif text-2xl mb-4">Quando NÃO vale a pena?</h2>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            Se você acabou de abrir o MEI, tem faturamento muito baixo e poucos clientes, pode começar na conta pessoal mesmo. O importante é já separar mentalmente (ou em planilha) as finanças pessoais das do negócio. Assim que o volume aumentar, migre para conta PJ.
          </p>
        </section>

        <section aria-labelledby="faq-title">
          <h2 id="faq-title" className="font-serif text-2xl mb-4">Dúvidas frequentes</h2>
          <div className="space-y-2">
            <FaqItem q="Posso emitir nota fiscal sem conta PJ?" a="Sim. A emissão de nota fiscal (NFS-e ou NF-e) não exige conta PJ. O pagamento pode ser recebido em qualquer conta — pessoal ou empresarial." />
            <FaqItem q="Banco pode bloquear minha conta pessoal por movimentar dinheiro do MEI?" a="Sim. Alguns bancos, nos termos de uso, proíbem uso de conta pessoal para fins comerciais. Grandes volumes suspeitos de PJ em conta PF podem levar ao bloqueio. Mais um motivo para ter conta PJ." />
            <FaqItem q="Conta PJ de fintech é tão segura quanto banco tradicional?" a="Sim. Fintechs com conta PJ são reguladas pelo Banco Central e têm FGC (Fundo Garantidor de Créditos) para valores até R$ 250.000. Tão seguras quanto bancos tradicionais." />
          </div>
        </section>

      </div>

      <RelatedPages current="/mei-precisa-conta-pj" />
    </main>
  );
}
