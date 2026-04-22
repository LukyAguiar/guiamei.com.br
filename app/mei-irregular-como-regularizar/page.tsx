import type { Metadata } from "next";
import { PageHero, AlertBox, RelatedPages, InternalLink, FaqItem, StepItem, ExternalLink , AdSlot , ArticleSchema, FaqSchema } from "../components/ui";

// ISR — revalida a página a cada 24h sem rebuild
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "MEI irregular em 2026: como consultar e regularizar o CNPJ",
  description: "MEI com débitos, declarações atrasadas ou CNPJ inapto? Veja o passo a passo para regularizar sua situação e evitar o cancelamento do CNPJ.",
  alternates: { canonical: "https://guiamei.vercel.app/mei-irregular-como-regularizar" },
};

export default function Page() {
  return (
    <main>
      <ArticleSchema
        title="MEI irregular em 2026: como consultar e regularizar o CNPJ"
        description="Veja como consultar pendências do MEI, o que causa irregularidade e como regularizar o CNPJ passo a passo."
        url="https://guiamei.vercel.app/mei-irregular-como-regularizar"
        dateModified="2026-04-21"
      />
      <FaqSchema items={[
        { q: "Como saber se meu MEI está irregular?", a: "Acesse o portal da Receita Federal em receita.fazenda.gov.br e consulte a situação cadastral pelo CNPJ." },
    { q: "O que causa irregularidade no MEI?", a: "Débitos de DAS em aberto, DASN-SIMEI não declarada ou dados cadastrais desatualizados são as causas mais comuns." },
    { q: "MEI irregular perde o CNPJ?", a: "Após 12 meses de inadimplência consecutiva, o CNPJ pode ser cancelado automaticamente pela Receita Federal." },
    { q: "Quanto tempo leva para regularizar o MEI?", a: "O pagamento de débitos via Pix é reconhecido em até 2 dias úteis. A regularização da situação cadastral pode levar alguns dias adicionais." }
      ]} />
      <PageHero
        badge="Regularização MEI · 2026"
        title="MEI irregular: como regularizar"
        desc="DAS atrasado, DASN-SIMEI não declarada ou CNPJ inapto? Entenda as causas e o passo a passo para normalizar sua situação."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">

        {/* AD TOPO */}
        <AdSlot position="topo" />

        <section aria-labelledby="causas-title">
          <h2 id="causas-title" className="font-serif text-2xl mb-4">Por que o MEI fica irregular?</h2>
          <div className="space-y-3">
            {[
              { causa: "DAS em atraso", desc: "Não pagar o boleto mensal é a causa mais comum. Após alguns meses, gera multa e juros. Após 12 meses, pode levar ao cancelamento do CNPJ.", urgente: true },
              { causa: "DASN-SIMEI não entregue", desc: "A declaração anual do faturamento (prazo: 31 de maio) não enviada gera multa mínima de R$ 50 por declaração em atraso.", urgente: true },
              { causa: "Faturamento acima do limite", desc: "Ultrapassar R$ 81.000/ano sem fazer o desenquadramento voluntário gera pendências junto à Receita Federal.", urgente: false },
              { causa: "Dados cadastrais desatualizados", desc: "Endereço ou atividade desatualizada pode gerar inconsistências no CNPJ e bloquear certidões.", urgente: false },
            ].map((item, i) => (
              <div key={i} className={`flex gap-4 border rounded-xl px-5 py-4 ${item.urgente ? "bg-red-50 border-red-200" : "bg-white border-[var(--border)]"}`}>
                <span className="text-lg shrink-0">{item.urgente ? "🔴" : "🟡"}</span>
                <div>
                  <p className="font-semibold text-sm">{item.causa}</p>
                  <p className="text-[var(--muted)] text-sm mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="consultar-title">
          <h2 id="consultar-title" className="font-serif text-2xl mb-4">Passo 1: consulte sua situação atual</h2>
          <p className="text-[var(--muted)] text-sm mb-4">Antes de qualquer coisa, saiba exatamente o que está pendente. Veja como consultar:</p>
          <div className="space-y-3">
            <div className="bg-white border border-[var(--border)] rounded-xl p-5 text-sm">
              <p className="font-semibold mb-2">📋 Débitos do DAS (PGMEI)</p>
              <p className="text-[var(--muted)]">Acesse o <ExternalLink href="https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgmei.app/Identificacao" className="text-[var(--green)] underline">portal PGMEI</ExternalLink> com seu CNPJ. Todos os meses em aberto aparecem listados com multa e juros calculados automaticamente.</p>
            </div>
            <div className="bg-white border border-[var(--border)] rounded-xl p-5 text-sm">
              <p className="font-semibold mb-2">📑 Declarações em atraso (DASN-SIMEI)</p>
              <p className="text-[var(--muted)]">Acesse o <ExternalLink href="https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/dasnsimeiretificacao.app/Default.aspx" className="text-[var(--green)] underline">portal da Receita Federal</ExternalLink> e verifique quais anos-calendário não foram declarados.</p>
            </div>
            <div className="bg-white border border-[var(--border)] rounded-xl p-5 text-sm">
              <p className="font-semibold mb-2">🔍 Situação do CNPJ</p>
              <p className="text-[var(--muted)]">Consulte a situação cadastral em <ExternalLink href="https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/cadastros/consultas/dados-publicos-cnpj" className="text-[var(--green)] underline">Receita Federal — Consulta CNPJ</ExternalLink>. Status "Inapto" exige regularização urgente. Veja: <InternalLink href="/mei-inapto-o-que-significa">o que significa MEI inapto</InternalLink>.</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="passos-title">
          <h2 id="passos-title" className="font-serif text-2xl mb-4">Como regularizar passo a passo</h2>
          <div className="space-y-0">
            <StepItem num="1" title="Pague todos os DAS em atraso" desc={<>Acesse o PGMEI, selecione todos os períodos em aberto e gere os boletos atualizados com multa e juros. Pague preferencialmente do mais antigo para o mais recente. Veja o guia: <InternalLink href="/das-atrasado">DAS atrasado — como pagar e parcelar</InternalLink>.</>} />
            <StepItem num="2" title="Entregue as declarações atrasadas (DASN-SIMEI)" desc="Para cada ano não declarado, acesse o portal da Receita e envie a declaração. Mesmo sem faturamento, a declaração é obrigatória. A multa mínima é de R$ 50 por declaração atrasada." />
            <StepItem num="3" title="Atualize dados cadastrais se necessário" desc="Endereço, telefone ou atividade desatualizados? Acesse o Portal do Empreendedor (Gov.br) e atualize. Gratuito e online." />
            <StepItem num="4" title="Aguarde a atualização do status" desc="Após quitar os débitos e enviar as declarações, o sistema da Receita atualiza a situação do CNPJ automaticamente em até 5 dias úteis. Verifique novamente no portal de consulta." isLast />
          </div>
        </section>

        <AlertBox type="warning">
          <p className="font-semibold mb-1">⚠️ CNPJ cancelado não tem volta fácil</p>
          <p className="text-sm">Após 12 meses de inadimplência, a Receita Federal pode cancelar o CNPJ. Depois de cancelado, não é possível reativar o mesmo CNPJ — é necessário abrir um novo MEI. Por isso, regularize antes que isso aconteça.</p>
        </AlertBox>

        <section aria-labelledby="faq-title">
          <h2 id="faq-title" className="font-serif text-2xl mb-4">Dúvidas frequentes</h2>
          <div className="space-y-2">
            <FaqItem q="Posso parcelar os débitos do MEI?" a="Sim. O PGMEI oferece parcelamento em até 60 vezes para débitos do DAS. Acesse o portal, selecione os períodos e escolha a opção de parcelamento." />
            <FaqItem q="MEI irregular pode emitir nota fiscal?" a="Depende da prefeitura, mas em muitos casos o bloqueio de emissão de notas é uma das consequências da irregularidade. Regularize o quanto antes para não perder contratos." />
            <FaqItem q="Qual a multa por DASN-SIMEI atrasada?" a="R$ 50 por declaração em atraso, com valor mínimo mesmo que não haja faturamento a declarar. Se houver imposto a pagar, a multa pode ser maior." />
          </div>
        </section>

        {/* AD FINAL */}
        <AdSlot position="final" />

        {/* INTERLINKS */}
        <AlertBox type="info">
          <p className="font-semibold mb-2">🔗 Veja também</p>
          <ul className="space-y-1 text-sm">
            <li>→ <InternalLink href="/como-consultar-debitos-mei">Como consultar débitos do MEI</InternalLink></li>
            <li>→ <InternalLink href="/das-atrasado">DAS atrasado: como regularizar</InternalLink></li>
            <li>→ <InternalLink href="/mei-inapto-o-que-significa">MEI inapto: o que significa</InternalLink></li>
            <li>→ <InternalLink href="/calculadora-das-mei">Calculadora DAS MEI</InternalLink></li>
            <li>→ <InternalLink href="/o-que-acontece-se-nao-pagar">O que acontece se não pagar</InternalLink></li>
          </ul>
        </AlertBox>

      </div>

      <RelatedPages current="/mei-irregular-como-regularizar" />
    </main>
  );
}
