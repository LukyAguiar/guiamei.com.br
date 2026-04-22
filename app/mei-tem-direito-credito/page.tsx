import type { Metadata } from "next";
import { PageHero, AlertBox, RelatedPages, InternalLink, FaqItem , AdSlot } from "../components/ui";

// ISR — revalida a página a cada 24h sem rebuild
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "MEI tem direito a crédito em 2026? Veja linhas e como acessar",
  description: "Descubra todos os direitos de crédito do MEI: empréstimos, FGTS, aposentadoria, auxílio-doença, licença-maternidade e financiamentos em 2026.",
  alternates: { canonical: "https://guiamei.com.br/mei-tem-direito-credito" },
};

export default function Page() {
  return (
    <main>
      <PageHero
        badge="Direitos MEI · 2026"
        title="MEI tem direito a crédito?"
        desc="Sim — e a muita coisa mais. Veja todos os direitos previdenciários e financeiros que o CNPJ MEI garante ao empreendedor."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">

        {/* AD TOPO */}
        <AdSlot position="topo" />

        <section aria-labelledby="previdencia-title">
          <h2 id="previdencia-title" className="font-serif text-2xl mb-4">Direitos previdenciários (INSS)</h2>
          <p className="text-[var(--muted)] text-sm mb-4">O DAS mensal inclui contribuição ao INSS, o que garante ao MEI acesso a benefícios previdenciários:</p>
          <div className="space-y-3">
            {[
              { beneficio: "Aposentadoria por idade", detalhe: "Homens: 65 anos com 15 anos de contribuição. Mulheres: 62 anos com 15 anos de contribuição.", disponivel: true },
              { beneficio: "Auxílio-doença", detalhe: "Em caso de incapacidade por doença ou acidente, após 12 meses de contribuição ininterrupta.", disponivel: true },
              { beneficio: "Licença-maternidade", detalhe: "MEI mulher tem direito a salário-maternidade por 120 dias, após 10 meses de contribuição.", disponivel: true },
              { beneficio: "Salário-família", detalhe: "Para MEI com renda familiar baixa e filhos menores de 14 anos ou inválidos.", disponivel: true },
              { beneficio: "Aposentadoria por invalidez", detalhe: "Em caso de invalidez permanente para o trabalho, após carência de 12 meses.", disponivel: true },
              { beneficio: "FGTS", detalhe: "MEI não recolhe FGTS para si mesmo. O FGTS se aplica apenas ao funcionário contratado pelo MEI.", disponivel: false },
            ].map((item, i) => (
              <div key={i} className={`flex gap-4 border rounded-xl px-5 py-4 ${item.disponivel ? "bg-[var(--green-light)] border-[#b2ddc4]" : "bg-[var(--paper)] border-[var(--border)]"}`}>
                <span className={`font-bold text-sm shrink-0 ${item.disponivel ? "text-[var(--green)]" : "text-[var(--muted)]"}`}>{item.disponivel ? "✓" : "✗"}</span>
                <div>
                  <p className="font-semibold text-sm">{item.beneficio}</p>
                  <p className="text-[var(--muted)] text-sm mt-0.5">{item.detalhe}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <AlertBox type="warning">
          <p className="font-semibold mb-1">⚠️ Os benefícios exigem contribuição em dia</p>
          <p className="text-sm">Para ter direito aos benefícios previdenciários, o MEI precisa estar em dia com o DAS. Meses em atraso <strong>não contam como período de contribuição</strong>. Regularize sempre que houver atraso: <InternalLink href="/das-atrasado">como pagar o DAS atrasado</InternalLink>.</p>
        </AlertBox>

        <section aria-labelledby="credito-title">
          <h2 id="credito-title" className="font-serif text-2xl mb-4">Direitos de crédito financeiro</h2>
          <div className="space-y-3">
            {[
              { tipo: "Linhas de crédito PJ", desc: "Acesso a empréstimos e financiamentos específicos para pessoa jurídica, com taxas geralmente menores que crédito pessoal.", link: "/mei-pode-fazer-emprestimo", linklabel: "Ver linhas disponíveis" },
              { tipo: "Conta PJ gratuita", desc: "Várias fintechs oferecem conta jurídica gratuita para MEI, com cartão CNPJ, Pix e acesso a crédito.", link: "/melhores-contas-para-mei", linklabel: "Ver melhores contas" },
              { tipo: "Cartão de crédito PJ", desc: "MEI pode solicitar cartão de crédito vinculado ao CNPJ, com benefícios como cashback e pontos em compras para o negócio.", link: "/cartao-para-mei-melhor-opcao", linklabel: "Ver opções de cartão" },
              { tipo: "Financiamento de equipamentos", desc: "Linhas do BNDES e bancos permitem financiar equipamentos com prazos longos e taxas diferenciadas para MEI." },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[var(--border)] rounded-xl px-5 py-4">
                <p className="font-semibold text-sm">{item.tipo}</p>
                <p className="text-[var(--muted)] text-sm mt-1">{item.desc}</p>
                {item.link && <InternalLink href={item.link} className="text-xs mt-2 inline-block">{item.linklabel} →</InternalLink>}
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="faq-title">
          <h2 id="faq-title" className="font-serif text-2xl mb-4">Dúvidas frequentes</h2>
          <div className="space-y-2">
            <FaqItem q="MEI que está começando já tem direito a benefícios?" a="Alguns benefícios têm carência (período mínimo de contribuição). Auxílio-doença e aposentadoria por invalidez exigem 12 meses. Licença-maternidade exige 10 meses. Aposentadoria por idade exige 15 anos." />
            <FaqItem q="Posso me aposentar pelo MEI e continuar trabalhando?" a="Sim. Após se aposentar por idade pelo INSS, o MEI pode continuar exercendo a atividade e emitindo DAS, sem perder o benefício." />
            <FaqItem q="MEI tem direito a seguro-desemprego?" a="Não. O seguro-desemprego é um benefício trabalhista para empregados com carteira assinada. MEI, como empreendedor, não tem acesso a esse benefício." />
            <FaqItem q="O cônjuge do MEI tem direito à pensão por morte?" a="Sim, se o MEI falecer com contribuições em dia e atender à carência exigida. O cônjuge ou dependentes têm direito à pensão por morte pelo INSS." />
          </div>
        </section>

        {/* AD FINAL */}
        <AdSlot position="final" />

        {/* INTERLINKS */}
        <AlertBox type="info">
          <p className="font-semibold mb-2">🔗 Veja também</p>
          <ul className="space-y-1 text-sm">
            <li>→ <InternalLink href="/mei-pode-fazer-emprestimo">MEI pode fazer empréstimo?</InternalLink></li>
            <li>→ <InternalLink href="/cartao-para-mei-melhor-opcao">Melhor cartão para MEI</InternalLink></li>
            <li>→ <InternalLink href="/melhores-contas-para-mei">Melhores contas para MEI</InternalLink></li>
            <li>→ <InternalLink href="/mei-precisa-conta-pj">MEI precisa de conta PJ?</InternalLink></li>
          </ul>
        </AlertBox>

      </div>

      <RelatedPages current="/mei-tem-direito-credito" />
    </main>
  );
}
