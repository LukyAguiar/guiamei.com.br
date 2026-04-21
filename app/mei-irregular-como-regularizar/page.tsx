import type { Metadata } from "next";
import { PageHero, AlertBox, RelatedPages, InternalLink, FaqItem, StepItem, ExternalLink } from "../components/ui";

export const metadata: Metadata = {
  title: "MEI irregular: como regularizar em 2026",
  description: "MEI com débitos, declarações atrasadas ou CNPJ inapto? Veja o passo a passo para regularizar sua situação e evitar o cancelamento do CNPJ.",
  alternates: { canonical: "https://guiamei.vercel.app/mei-irregular-como-regularizar" },
};

export default function Page() {
  return (
    <main>
      <PageHero
        badge="Regularização MEI · 2026"
        title="MEI irregular: como regularizar"
        desc="DAS atrasado, DASN-SIMEI não declarada ou CNPJ inapto? Entenda as causas e o passo a passo para normalizar sua situação."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">

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

      </div>

      <RelatedPages current="/mei-irregular-como-regularizar" />
    </main>
  );
}
