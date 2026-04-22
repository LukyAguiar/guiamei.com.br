import type { Metadata } from "next";
import { PageHero, AlertBox, RelatedPages, InternalLink, FaqItem, StepItem, ExternalLink , AdSlot } from "../components/ui";

export const metadata: Metadata = {
  title: "Como consultar débitos do MEI em 2026: veja pendências do CNPJ",
  description: "Veja como consultar todos os débitos do seu MEI: DAS em atraso, declarações pendentes e situação do CNPJ — pelo celular ou computador.",
  alternates: { canonical: "https://guiamei.com.br/como-consultar-debitos-mei" },
};

export default function Page() {
  return (
    <main>
      <PageHero
        badge="Débitos MEI · Consulta"
        title="Como consultar débitos do MEI"
        desc="Três portais para verificar sua situação completa: DAS em atraso, declarações pendentes e status do CNPJ — tudo gratuito."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">

        {/* AD TOPO */}
        <AdSlot position="topo" />

        <section aria-labelledby="portais-title">
          <h2 id="portais-title" className="font-serif text-2xl mb-4">Os 3 portais que você precisa verificar</h2>
          <div className="space-y-4">
            {[
              {
                n: "1",
                nome: "PGMEI — Débitos do DAS",
                desc: "O sistema principal de pagamento do MEI. Mostra todos os meses em aberto, com valor atualizado (principal + multa + juros).",
                link: "https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgmei.app/Identificacao",
                label: "Acessar PGMEI",
                cor: "red",
              },
              {
                n: "2",
                nome: "Receita Federal — Declarações (DASN-SIMEI)",
                desc: "Mostra quais anos-calendário você não declarou. DASN-SIMEI em atraso gera multa mesmo que não tenha faturado nada.",
                link: "https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/dasnsimeiretificacao.app/Default.aspx",
                label: "Acessar Declarações",
                cor: "gold",
              },
              {
                n: "3",
                nome: "Consulta CNPJ — Situação cadastral",
                desc: "Mostra o status atual do seu CNPJ: Ativo, Inapto, Suspenso ou Cancelado. Se não estiver 'Ativo', é urgente regularizar.",
                link: "https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/cadastros/consultas/dados-publicos-cnpj",
                label: "Consultar CNPJ",
                cor: "green",
              },
            ].map((item) => (
              <div key={item.n} className="bg-white border border-[var(--border)] rounded-2xl p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="min-w-[28px] h-7 rounded-full bg-[var(--green)] text-white flex items-center justify-center text-xs font-bold shrink-0">{item.n}</div>
                  <p className="font-semibold text-sm">{item.nome}</p>
                </div>
                <p className="text-sm text-[var(--muted)] mb-3">{item.desc}</p>
                <ExternalLink href={item.link} className="inline-flex items-center gap-2 bg-[var(--green)] text-white text-xs font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                  {item.label} ↗
                </ExternalLink>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="passo-title">
          <h2 id="passo-title" className="font-serif text-2xl mb-4">Como consultar no PGMEI (passo a passo)</h2>
          <div className="space-y-0">
            <StepItem num="1" title="Acesse o portal PGMEI" desc="Entre pelo link acima ou pesquise 'PGMEI' no Google. Clique em 'Entrar com Gov.br' ou use seu CNPJ diretamente." />
            <StepItem num="2" title="Informe o CNPJ do MEI" desc="Digite o CNPJ (sem pontos e traços) e confirme. O sistema carrega automaticamente todos os períodos em aberto." />
            <StepItem num="3" title="Verifique os períodos pendentes" desc="Cada linha representa um mês. O valor já aparece atualizado com multa de 0,33% ao dia (máximo 20%) e juros pela taxa Selic." />
            <StepItem num="4" title="Gere os boletos para pagamento" desc={<>Selecione os períodos que quer pagar e clique em gerar DAS. Veja como pagar: <InternalLink href="/das-atrasado">DAS atrasado — como pagar e parcelar</InternalLink>.</>} isLast />
          </div>
        </section>

        <AlertBox type="info">
          <p className="font-semibold mb-1">💡 Dica: faça essa consulta a cada 3 meses</p>
          <p className="text-sm">Mesmo quem paga em dia deve verificar periodicamente. Às vezes o pagamento é feito mas não é baixado corretamente no sistema, gerando pendências indevidas. A consulta é gratuita e leva menos de 2 minutos.</p>
        </AlertBox>

        <section aria-labelledby="certidao-title">
          <h2 id="certidao-title" className="font-serif text-2xl mb-4">Como emitir a certidão negativa de débitos</h2>
          <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
            A Certidão Negativa de Débitos (CND) comprova que o MEI não tem pendências com a Receita Federal. É exigida em licitações, financiamentos bancários e alguns contratos comerciais.
          </p>
          <div className="space-y-0">
            <StepItem num="1" title="Acesse o portal da Receita Federal" desc={<><ExternalLink href="https://solucoes.receita.fazenda.gov.br/Servicos/certidaointernet/PF/Emitir" className="text-[var(--green)] underline">solucoes.receita.fazenda.gov.br</ExternalLink> — use o CPF do titular do MEI (não o CNPJ).</>} />
            <StepItem num="2" title="Emita a certidão" desc="Se não houver débitos, a certidão é emitida na hora em PDF. Ela tem validade de 180 dias e pode ser usada em qualquer documento que exija comprovação." />
            <StepItem num="3" title="Se houver débitos" desc="A certidão não será emitida enquanto houver pendências. Regularize primeiro pelo PGMEI e aguarde até 5 dias úteis para o sistema atualizar." isLast />
          </div>
        </section>

        <section aria-labelledby="faq-title">
          <h2 id="faq-title" className="font-serif text-2xl mb-4">Dúvidas frequentes</h2>
          <div className="space-y-2">
            <FaqItem q="Paguei o DAS mas ainda aparece como pendente. O que fazer?" a="Aguarde até 2 dias úteis para o sistema atualizar. Se após esse prazo ainda aparecer, acesse o PGMEI e use a opção 'Informar pagamento' com o número do recibo bancário." />
            <FaqItem q="Consultar débitos do MEI custa alguma coisa?" a="Não. Todos os portais citados são gratuitos e oficiais do governo. Desconfie de sites que cobram para consultar débitos do MEI." />
            <FaqItem q="Posso consultar débitos de um MEI que não é meu?" a="Sim, a consulta de situação cadastral e dados públicos do CNPJ é pública. Mas para ver os valores detalhados dos débitos, é necessário o CNPJ com acesso Gov.br do titular." />
          </div>
        </section>

        {/* AD FINAL */}
        <AdSlot position="final" />

        {/* INTERLINKS */}
        <AlertBox type="info">
          <p className="font-semibold mb-2">🔗 Veja também</p>
          <ul className="space-y-1 text-sm">
            <li>→ <InternalLink href="/das-atrasado">DAS atrasado: o que fazer</InternalLink></li>
            <li>→ <InternalLink href="/mei-irregular-como-regularizar">MEI irregular: como regularizar</InternalLink></li>
            <li>→ <InternalLink href="/mei-inapto-o-que-significa">MEI inapto: o que significa</InternalLink></li>
            <li>→ <InternalLink href="/o-que-acontece-se-nao-pagar">O que acontece se não pagar</InternalLink></li>
            <li>→ <InternalLink href="/calculadora-das-mei">Calculadora DAS MEI</InternalLink></li>
          </ul>
        </AlertBox>

      </div>

      <RelatedPages current="/como-consultar-debitos-mei" />
    </main>
  );
}
