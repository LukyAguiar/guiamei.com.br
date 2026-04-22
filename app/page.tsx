import type { Metadata } from "next";
import Link from "next/link";
import { Badge, ExternalLink, InternalLink, AlertBox, FaqItem } from "./components/ui";

export const metadata: Metadata = {
  title: "Guia Completo do MEI 2026 — tudo o que você precisa saber",
  description: "O guia mais completo sobre MEI em 2026: como pagar o DAS, declarar o DASN-SIMEI, emitir nota fiscal, limites, funcionários e muito mais.",
  alternates: { canonical: "https://guiamei.vercel.app" },
  openGraph: {
    title: "Guia Completo do MEI 2026",
    description: "Tudo sobre MEI em 2026: DAS, DASN-SIMEI, nota fiscal, limites e obrigações. Gratuito e atualizado.",
    url: "https://guiamei.vercel.app",
    siteName: "MEI/guia",
    locale: "pt_BR",
    type: "website",
  },
};

const satellites = [
  { href: "/como-emitir-das-mei", title: "Como emitir o DAS-MEI", desc: "Gere o boleto mensal em 3 minutos pelo celular", badge: "Essencial" },
  { href: "/das-atrasado", title: "DAS atrasado: o que fazer", desc: "Multas, juros e como parcelar em até 60x", badge: "Popular" },
  { href: "/como-declarar-dasn-simei", title: "Como declarar o DASN-SIMEI", desc: "Declaração anual obrigatória — até 31 de maio", badge: "Anual" },
  { href: "/nota-fiscal-mei", title: "Como emitir nota fiscal MEI", desc: "NFS-e e NF-e: quando emitir e como fazer", badge: "NF-e" },
  { href: "/o-que-acontece-se-nao-pagar", title: "O que acontece se não pagar", desc: "Consequências da inadimplência mês a mês", badge: "Alerta" },
  { href: "/como-dar-baixa-no-mei", title: "Como dar baixa no MEI", desc: "Encerre o CNPJ gratuitamente pelo Gov.br", badge: "Encerramento" },
  { href: "/mei-precisa-de-contador", title: "MEI precisa de contador?", desc: "Resposta honesta: quando vale a pena contratar", badge: "Dúvida" },
  { href: "/mei-pode-ter-funcionario", title: "MEI pode ter funcionário?", desc: "Limites, encargos e obrigações trabalhistas", badge: "RH" },
  { href: "/limite-mei-2026", title: "Limite do MEI em 2026", desc: "Faturamento máximo e o que fazer se ultrapassar", badge: "2026" },
    { href: "/mei-como-emitir-nota-fiscal", title: "Como emitir nota fiscal sendo MEI", desc: "Passo a passo para emitir nota fiscal como microempreendedor", badge: "Nota fiscal" },
  { href: "/mei-precisa-emitir-nota-fiscal", title: "MEI precisa emitir nota fiscal?", desc: "Descubra quando a emissão é obrigatória e quando não é", badge: "Obrigação" },
  { href: "/como-emitir-nf-mei-prefeitura", title: "Como emitir NF MEI na prefeitura", desc: "Veja como funciona a emissão municipal da nota de serviço", badge: "Prefeitura" },

  { href: "/mei-ultrapassou-limite-o-que-fazer", title: "MEI ultrapassou o limite: e agora?", desc: "Entenda os próximos passos e como regularizar a situação", badge: "Limite" },
  { href: "/quanto-mei-pode-faturar-por-mes", title: "Quanto o MEI pode faturar por mês", desc: "Entenda o cálculo mensal e o limite anual permitido", badge: "Faturamento" },

  { href: "/mei-irregular-como-regularizar", title: "MEI irregular: como regularizar", desc: "Veja como consultar pendências e voltar à regularidade", badge: "Regularização" },
  { href: "/como-consultar-debitos-mei", title: "Como consultar débitos do MEI", desc: "Descubra se há pendências e como verificar valores em aberto", badge: "Débitos" },
  { href: "/mei-inapto-o-que-significa", title: "MEI inapto: o que significa", desc: "Entenda as causas, os riscos e como resolver a situação", badge: "Situação" },

  { href: "/golpe-das-mei-boleto-falso", title: "Golpe do DAS MEI e boleto falso", desc: "Aprenda a identificar cobranças falsas e evitar prejuízo", badge: "Segurança" },
  { href: "/como-saber-se-o-das-e-falso", title: "Como saber se o DAS é falso", desc: "Confira os sinais de fraude antes de pagar qualquer guia", badge: "Alerta" },

  { href: "/mei-pode-fazer-emprestimo", title: "MEI pode fazer empréstimo?", desc: "Veja quando vale a pena, requisitos e cuidados antes de contratar", badge: "Crédito" },
  { href: "/mei-tem-direito-credito", title: "MEI tem direito a crédito?", desc: "Entenda linhas de crédito, análise e acesso ao financiamento", badge: "Financeiro" },
  { href: "/cartao-para-mei-melhor-opcao", title: "Melhor cartão para MEI", desc: "Compare opções, taxas e benefícios para o seu negócio", badge: "Cartão" },
  { href: "/mei-precisa-conta-pj", title: "MEI precisa de conta PJ?", desc: "Saiba se é obrigatório e quando separar finanças ajuda", badge: "Conta PJ" },
  { href: "/melhores-contas-para-mei", title: "Melhores contas para MEI", desc: "Compare contas digitais e bancárias para pessoa jurídica", badge: "Bancos" },

  { href: "/app-mei-como-usar", title: "Como usar o app MEI", desc: "App oficial, funções principais e primeiro acesso", badge: "Aplicativo" },
  { href: "/emitir-das-pelo-celular", title: "Como emitir DAS pelo celular", desc: "Use o app e o site mobile para gerar e pagar a guia", badge: "Mobile" },
  { href: "/como-pagar-das-automatico", title: "Como pagar DAS automaticamente", desc: "Veja como ativar pagamento recorrente e evitar atrasos", badge: "Automático" },
  { href: "/mei-debito-automatico", title: "MEI no débito automático", desc: "Entenda como funciona, vantagens e pontos de atenção", badge: "Bancos" },

  { href: "/guia-completo-mei-2026", title: "Guia completo do MEI 2026", desc: "Hub central com tudo sobre pagamento, nota, limite e obrigações", badge: "Hub" },
  { href: "/tudo-sobre-mei", title: "Tudo sobre MEI", desc: "Guia definitivo do zero ao avançado para o microempreendedor", badge: "Completo" },

  { href: "/calculadora-das-mei", title: "Calculadora DAS MEI", desc: "Simule atrasos, juros e o valor total da guia em aberto", badge: "Calculadora" },
  { href: "/simulador-faturamento-mei", title: "Simulador de faturamento MEI", desc: "Calcule o limite proporcional conforme o mês de abertura", badge: "Simulador" },

  { href: "/mei-ou-clt", title: "MEI ou CLT: qual vale mais a pena?", desc: "Compare custos, benefícios e renda líquida em cada modelo", badge: "Comparativo" },
  { href: "/mei-ou-autonomo", title: "MEI ou autônomo", desc: "Diferenças, custos do informal e quando vale formalizar", badge: "Escolha" },
];

const valores2026 = [
  { categoria: "Comércio / Indústria", valor: "R$ 82,05", detalhe: "INSS + ICMS", cor: "green" },
  { categoria: "Serviços", valor: "R$ 86,05", detalhe: "INSS + ISS", cor: "gold" },
  { categoria: "Comércio + Serviços", valor: "R$ 87,05", detalhe: "INSS + ICMS + ISS", cor: "green" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Quanto custa o MEI em 2026?", acceptedAnswer: { "@type": "Answer", text: "Em 2026, o DAS do MEI custa entre R$ 82,05 (comércio/indústria) e R$ 87,05 (comércio + serviços), dependendo da atividade exercida." } },
    { "@type": "Question", name: "Qual o prazo para pagar o DAS-MEI?", acceptedAnswer: { "@type": "Answer", text: "O DAS vence todo dia 20 de cada mês. Se cair em fim de semana ou feriado, o vencimento passa para o próximo dia útil." } },
    { "@type": "Question", name: "O que é o DASN-SIMEI?", acceptedAnswer: { "@type": "Answer", text: "É a declaração anual do MEI, onde você informa o faturamento bruto do ano anterior. Deve ser entregue até 31 de maio de cada ano, gratuitamente pelo portal da Receita Federal." } },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main>
        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-[var(--green)] text-white">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/[0.04]" />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/[0.04]" />
          <div className="relative max-w-3xl mx-auto px-6 py-16">
            <Badge variant="white">Guia completo · 2026</Badge>
            <h1 className="font-serif text-4xl md:text-5xl mt-4 mb-4 leading-tight">
              Tudo sobre MEI em 2026
            </h1>
            <p className="text-white/85 text-lg leading-relaxed max-w-xl mb-6">
              Do pagamento do DAS à declaração anual, nota fiscal e limites — um guia completo e gratuito para o Microempreendedor Individual manter o CNPJ em dia.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-green-300 live-dot" />
              Atualizado para 2026 · Portal oficial e gratuito
            </div>
            <div className="flex gap-3 flex-wrap">
              <ExternalLink href="https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgmei.app/Identificacao"
                className="bg-white text-[var(--green)] font-bold px-7 py-3 rounded-lg text-sm hover:opacity-90 transition-opacity">
                Emitir DAS agora ↗
              </ExternalLink>
              <a href="#guias" className="bg-white/10 border border-white/25 text-white font-medium px-7 py-3 rounded-lg text-sm hover:bg-white/20 transition-colors">
                Ver todos os guias ↓
              </a>
            </div>
          </div>
        </section>

        {/* ── VALORES ── */}
        <section aria-labelledby="valores-titulo" className="max-w-3xl mx-auto px-6 pt-14">
          <Badge variant="gold">Valores 2026</Badge>
          <h2 id="valores-titulo" className="font-serif text-3xl mt-3 mb-2">Quanto custa o DAS-MEI?</h2>
          <p className="text-[var(--muted)] mb-6 text-sm">
            Com o reajuste do salário mínimo em 2026, o INSS do MEI subiu para R$ 81,05. Veja o total por atividade. O prazo de pagamento é sempre o <strong>dia 20 de cada mês</strong> — se cair em fim de semana, passa para o próximo dia útil.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {valores2026.map((v, i) => (
              <div key={i} className={`rounded-2xl p-5 border-2 ${v.cor === "green" ? "bg-[var(--green-light)] border-[#b2ddc4]" : "bg-[var(--gold-light)] border-[#f0d8a8]"}`}>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-2">{v.categoria}</p>
                <p className={`font-serif text-4xl ${v.cor === "green" ? "text-[var(--green)]" : "text-[var(--gold)]"}`}>
                  {v.valor}<span className="font-sans text-sm text-[var(--muted)] ml-1">/mês</span>
                </p>
                <p className="text-xs text-[var(--muted)] mt-1">{v.detalhe}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[var(--muted)] mt-3">
            * Limite de faturamento: <strong>R$ 81.000/ano</strong>. Veja mais em{" "}
            <InternalLink href="/limite-mei-2026">limite do MEI em 2026</InternalLink>.
          </p>
        </section>

        {/* ── CLUSTER DE GUIAS ── */}
        <section id="guias" aria-labelledby="guias-titulo" className="max-w-3xl mx-auto px-6 pt-14">
          <Badge variant="green">Guias completos</Badge>
          <h2 id="guias-titulo" className="font-serif text-3xl mt-3 mb-2">Todos os guias do MEI</h2>
          <p className="text-[var(--muted)] text-sm mb-7">
            Cada guia abaixo é uma página completa com passo a passo, erros comuns, dúvidas frequentes e links para o portal oficial.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {satellites.map((page, i) => (
              <Link key={i} href={page.href}
                className="group bg-white border border-[var(--border)] rounded-2xl p-5 hover:border-[var(--green)] hover:shadow-sm transition-all">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-medium text-sm group-hover:text-[var(--green)] transition-colors">{page.title}</h3>
                  <span className="text-[10px] font-semibold uppercase tracking-widest bg-[var(--green-light)] text-[var(--green)] px-2 py-0.5 rounded-full shrink-0">{page.badge}</span>
                </div>
                <p className="text-xs text-[var(--muted)] leading-relaxed">{page.desc}</p>
                <p className="text-xs text-[var(--green)] mt-3 font-semibold group-hover:translate-x-0.5 transition-transform inline-block">Ler guia →</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── CALENDÁRIO RÁPIDO ── */}
        <section aria-labelledby="cal-titulo" className="max-w-3xl mx-auto px-6 pt-14">
          <h2 id="cal-titulo" className="font-serif text-2xl mb-4">Calendário de obrigações 2026</h2>
          <div className="bg-white border border-[var(--border)] rounded-2xl overflow-hidden">
            {[
              { prazo: "Todo dia 20 do mês", obrigacao: "Pagamento do DAS-MEI", link: "/como-emitir-das-mei", urgente: true },
              { prazo: "Até 31 de maio de 2026", obrigacao: "DASN-SIMEI — declaração do faturamento de 2025", link: "/como-declarar-dasn-simei", urgente: false },
              { prazo: "A qualquer momento", obrigacao: "Nota fiscal quando vender para outra empresa (CNPJ)", link: "/nota-fiscal-mei", urgente: false },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 px-6 py-4 border-b border-[var(--border)] last:border-b-0">
                <div className={`min-w-[8px] h-2 rounded-full shrink-0 ${item.urgente ? "bg-red-500 live-dot" : "bg-[var(--green)]"}`} />
                <div className="flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--muted)]">{item.prazo}</p>
                  <p className="text-sm text-[var(--ink)] mt-0.5">{item.obrigacao}</p>
                </div>
                <InternalLink href={item.link} className="text-xs shrink-0 no-underline font-semibold">Ver guia →</InternalLink>
              </div>
            ))}
          </div>
        </section>

        {/* ── O QUE ACONTECE SE ATRASAR ── */}
        <section className="max-w-3xl mx-auto px-6 pt-14">
          <AlertBox type="warning">
            <p className="font-semibold mb-1">⚠️ Não pagar o DAS tem consequências sérias</p>
            <p className="text-sm">Multa de até 20%, perda do INSS do mês e risco de cancelamento do CNPJ após 12 meses de inadimplência. Veja o guia completo:{" "}
              <InternalLink href="/o-que-acontece-se-nao-pagar">o que acontece se não pagar o MEI</InternalLink>.
              Se já está em atraso:{" "}
              <InternalLink href="/das-atrasado">como pagar o DAS atrasado e parcelar</InternalLink>.
            </p>
          </AlertBox>
        </section>

        {/* ── FAQ ── */}
        <section aria-labelledby="faq-titulo" className="max-w-3xl mx-auto px-6 pt-14">
          <h2 id="faq-titulo" className="font-serif text-3xl mb-6">Dúvidas frequentes</h2>
          <div className="space-y-2">
            <FaqItem q="Quanto custa o DAS-MEI em 2026?" a="Em 2026, o DAS custa R$ 82,05 para comércio/indústria, R$ 86,05 para serviços e R$ 87,05 para quem exerce as duas atividades. O valor inclui INSS + tributo estadual ou municipal." />
            <FaqItem q="Qual o prazo para pagar o DAS?" a="O vencimento é todo dia 20 de cada mês. Se cair em fim de semana ou feriado, o prazo passa automaticamente para o próximo dia útil. Pague com antecedência para evitar imprevistos." />
            <FaqItem q="O que é o DASN-SIMEI?" a="É a declaração anual do MEI, onde você informa o faturamento bruto do ano anterior. É obrigatória mesmo que não tenha faturado nada. O prazo é até 31 de maio de cada ano." />
            <FaqItem q="MEI precisa de contador?" a={<>Não é obrigatório. Toda a burocracia do MEI foi desenhada para ser feita pelo próprio empreendedor, gratuitamente. Veja mais em{" "}<InternalLink href="/mei-precisa-de-contador">MEI precisa de contador?</InternalLink></>} />
            <FaqItem q="Posso ter funcionário sendo MEI?" a={<>Sim, até 1 funcionário com carteira assinada. Veja encargos e obrigações em{" "}<InternalLink href="/mei-pode-ter-funcionario">MEI pode ter funcionário?</InternalLink></>} />
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="max-w-3xl mx-auto px-6 pt-14 pb-20">
          <div className="relative overflow-hidden bg-[var(--green)] text-white rounded-2xl p-10 text-center">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/[0.06]" />
            <h2 className="font-serif text-3xl mb-3">Pronto para regularizar seu MEI?</h2>
            <p className="text-white/85 text-sm mb-7 max-w-md mx-auto leading-relaxed">
              Acesse o portal oficial, gere o DAS e mantenha seu CNPJ ativo. É rápido, gratuito e pelo celular.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <ExternalLink href="https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgmei.app/Identificacao"
                className="bg-white text-[var(--green)] font-bold px-8 py-3 rounded-lg text-sm hover:opacity-90 transition-opacity">
                Emitir DAS agora ↗
              </ExternalLink>
              <ExternalLink href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor"
                className="bg-white/10 border border-white/25 text-white font-medium px-8 py-3 rounded-lg text-sm hover:bg-white/20 transition-colors">
                Portal do Empreendedor ↗
              </ExternalLink>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
