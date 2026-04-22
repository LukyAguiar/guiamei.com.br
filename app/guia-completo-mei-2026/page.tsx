import type { Metadata } from "next";
import Link from "next/link";
import { Badge, AlertBox, InternalLink, FaqItem, ExternalLink , AdSlot } from "../components/ui";

// ISR — revalida a página a cada 24h sem rebuild
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Guia completo do MEI 2026: tudo sobre DAS, nota fiscal e obrigações",
  description: "O guia mais completo sobre MEI em 2026: DAS, DASN-SIMEI, nota fiscal, limites, funcionários, direitos previdenciários, crédito e muito mais.",
  alternates: { canonical: "https://guiamei.vercel.app/guia-completo-mei-2026" },
};

const secoes = [
  {
    titulo: "Obrigações mensais e anuais",
    cor: "green",
    paginas: [
      { href: "/como-emitir-das-mei", label: "Como emitir o DAS-MEI", desc: "Gere o boleto em 3 minutos" },
      { href: "/das-atrasado", label: "DAS atrasado: o que fazer", desc: "Multas, juros e parcelamento" },
      { href: "/como-declarar-dasn-simei", label: "Como declarar o DASN-SIMEI", desc: "Declaração anual obrigatória" },
      { href: "/emitir-das-pelo-celular", label: "Emitir DAS pelo celular", desc: "Rápido, sem computador" },
      { href: "/como-pagar-das-automatico", label: "Pagar DAS automaticamente", desc: "Configure o débito automático" },
    ],
  },
  {
    titulo: "Nota Fiscal",
    cor: "gold",
    paginas: [
      { href: "/nota-fiscal-mei", label: "Nota fiscal MEI: visão geral", desc: "NFS-e e NF-e — quando emitir" },
      { href: "/mei-como-emitir-nota-fiscal", label: "Como emitir nota fiscal", desc: "Passo a passo completo" },
      { href: "/mei-precisa-emitir-nota-fiscal", label: "MEI precisa emitir nota?", desc: "Quando é obrigatório" },
      { href: "/como-emitir-nf-mei-prefeitura", label: "NF-e pela prefeitura", desc: "NFS-e no sistema municipal" },
    ],
  },
  {
    titulo: "Limites e faturamento",
    cor: "green",
    paginas: [
      { href: "/limite-mei-2026", label: "Limite do MEI em 2026", desc: "R$ 81.000/ano — regras completas" },
      { href: "/quanto-mei-pode-faturar-por-mes", label: "Quanto pode faturar por mês", desc: "Limite proporcional explicado" },
      { href: "/mei-ultrapassou-limite-o-que-fazer", label: "Ultrapassou o limite: o que fazer", desc: "Desenquadramento e migração" },
    ],
  },
  {
    titulo: "Regularização",
    cor: "gold",
    paginas: [
      { href: "/mei-irregular-como-regularizar", label: "MEI irregular: como regularizar", desc: "Passo a passo para se regularizar" },
      { href: "/como-consultar-debitos-mei", label: "Como consultar débitos", desc: "Verifique sua situação" },
      { href: "/mei-inapto-o-que-significa", label: "MEI inapto: o que significa", desc: "Causas e como resolver" },
      { href: "/o-que-acontece-se-nao-pagar", label: "Consequências de não pagar", desc: "Multas, bloqueios e cancelamento" },
    ],
  },
  {
    titulo: "Crédito e finanças",
    cor: "green",
    paginas: [
      { href: "/mei-pode-fazer-emprestimo", label: "MEI pode fazer empréstimo?", desc: "Linhas de crédito disponíveis" },
      { href: "/mei-tem-direito-credito", label: "Direitos de crédito do MEI", desc: "INSS, aposentadoria e benefícios" },
      { href: "/cartao-para-mei-melhor-opcao", label: "Cartão de crédito para MEI", desc: "Comparativo 2026" },
      { href: "/mei-precisa-conta-pj", label: "MEI precisa de conta PJ?", desc: "Vantagens e quando vale a pena" },
      { href: "/melhores-contas-para-mei", label: "Melhores contas para MEI", desc: "Opções gratuitas em 2026" },
    ],
  },
  {
    titulo: "Segurança e golpes",
    cor: "gold",
    paginas: [
      { href: "/golpe-das-mei-boleto-falso", label: "Golpe do DAS: boleto falso", desc: "Como identificar e denunciar" },
      { href: "/como-saber-se-o-das-e-falso", label: "Como verificar se o DAS é falso", desc: "Checagem rápida em 1 minuto" },
    ],
  },
  {
    titulo: "Outros guias essenciais",
    cor: "green",
    paginas: [
      { href: "/mei-precisa-de-contador", label: "MEI precisa de contador?", desc: "Quando vale a pena contratar" },
      { href: "/mei-pode-ter-funcionario", label: "MEI pode ter funcionário?", desc: "Regras e encargos" },
      { href: "/como-dar-baixa-no-mei", label: "Como dar baixa no MEI", desc: "Encerrar o CNPJ gratuitamente" },
      { href: "/app-mei-como-usar", label: "App MEI: como usar", desc: "Tudo pelo celular" },
    ],
  },
];

export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--green)] text-white">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/[0.04]" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/[0.04]" />
        <div className="relative max-w-3xl mx-auto px-6 py-16">
          <Badge variant="white">Guia completo · 2026</Badge>
          <h1 className="font-serif text-4xl md:text-5xl mt-4 mb-4 leading-tight">
            Guia Completo do MEI 2026
          </h1>
          <p className="text-white/85 text-lg leading-relaxed max-w-xl mb-6">
            Tudo que um MEI precisa saber em 2026 — organizado por tema, com linguagem direta e links para portais oficiais.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-12">

        {/* Valores rápidos */}
        <section aria-labelledby="valores-title">
          <h2 id="valores-title" className="font-serif text-2xl mb-4">Valores do MEI em 2026</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { tipo: "Comércio / Indústria", valor: "R$ 82,05/mês", detalhe: "INSS + ICMS", cor: "green" },
              { tipo: "Serviços", valor: "R$ 86,05/mês", detalhe: "INSS + ISS", cor: "gold" },
              { tipo: "Comércio + Serviços", valor: "R$ 87,05/mês", detalhe: "INSS + ICMS + ISS", cor: "green" },
            ].map((item, i) => (
              <div key={i} className={`rounded-2xl p-5 border-2 ${item.cor === "green" ? "bg-[var(--green-light)] border-[#b2ddc4]" : "bg-[var(--gold-light)] border-[#f0d8a8]"}`}>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-1">{item.tipo}</p>
                <p className={`font-serif text-2xl ${item.cor === "green" ? "text-[var(--green)]" : "text-[var(--gold)]"}`}>{item.valor}</p>
                <p className="text-xs text-[var(--muted)] mt-1">{item.detalhe}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[var(--muted)] mt-2">Limite anual: <strong>R$ 81.000</strong>. Vencimento do DAS: <strong>todo dia 20</strong>. DASN-SIMEI: <strong>até 31 de maio</strong>.</p>
        </section>

        {/* Seções de guias */}
        {secoes.map((secao, si) => (
          <section key={si} aria-labelledby={`secao-${si}`}>
            <div className="flex items-center gap-3 mb-4">
              <h2 id={`secao-${si}`} className="font-serif text-2xl">{secao.titulo}</h2>
              <div className={`h-px flex-1 ${secao.cor === "green" ? "bg-[var(--green-light)]" : "bg-[var(--gold-light)]"}`} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {secao.paginas.map((p, pi) => (
                <Link key={pi} href={p.href}
                  className="group bg-white border border-[var(--border)] rounded-xl p-4 hover:border-[var(--green)] hover:shadow-sm transition-all">
                  <p className="font-medium text-sm group-hover:text-[var(--green)] transition-colors">{p.label}</p>
                  <p className="text-xs text-[var(--muted)] mt-1">{p.desc}</p>
                  <p className="text-xs text-[var(--green)] mt-2 font-semibold group-hover:translate-x-0.5 transition-transform inline-block">Ler →</p>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* Ferramentas */}
        <section>
          <h2 className="font-serif text-2xl mb-4">Ferramentas e calculadoras</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/calculadora-das-mei" className="group bg-[var(--green-light)] border border-[#b2ddc4] rounded-xl p-4 hover:border-[var(--green)] transition-all">
              <p className="font-semibold text-sm text-[var(--green)]">🧮 Calculadora do DAS</p>
              <p className="text-xs text-[var(--muted)] mt-1">Calcule o valor do DAS com multa e juros</p>
            </Link>
            <Link href="/simulador-faturamento-mei" className="group bg-[var(--gold-light)] border border-[#f0d8a8] rounded-xl p-4 hover:border-[var(--gold)] transition-all">
              <p className="font-semibold text-sm text-[var(--gold)]">📊 Simulador de faturamento</p>
              <p className="text-xs text-[var(--muted)] mt-1">Veja quanto ainda pode faturar no ano</p>
            </Link>
          </div>
        </section>

        <AlertBox type="info">
          <p className="font-semibold mb-1">📌 Este guia é informativo</p>
          <p className="text-sm">Todas as informações são baseadas nas regras vigentes em 2026. Para dados oficiais e atualizados, consulte sempre o <ExternalLink href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor" className="text-[var(--green)] underline">Portal do Empreendedor</ExternalLink> e a <ExternalLink href="https://www8.receita.fazenda.gov.br/SimplesNacional" className="text-[var(--green)] underline">Receita Federal</ExternalLink>.</p>
        </AlertBox>

        <section aria-labelledby="faq-title" className="pb-16">
          <h2 id="faq-title" className="font-serif text-2xl mb-4">Dúvidas gerais</h2>
          <div className="space-y-2">
            <FaqItem q="Quem pode ser MEI?" a="Trabalhador autônomo que fatura até R$ 81.000/ano (ou R$ 130.000 para caminhoneiro), exerce atividade permitida para MEI, não tem sócios e não participa como sócio ou titular de outra empresa." />
            <FaqItem q="MEI paga imposto de renda?" a="O MEI não declara imposto de renda como empresa — o DAS já cobre tudo. Mas o empreendedor pessoa física pode ter que declarar IRPF dependendo da renda total (acima de R$ 30.639,90 em 2026)." />
            <FaqItem q="Como abrir um MEI?" a="Pelo Portal do Empreendedor (gov.br), em menos de 10 minutos, de graça. Você precisa apenas de CPF, RG e uma atividade permitida para MEI." />
            <FaqItem q="MEI precisa ter CNPJ?" a="Sim. Ao se registrar como MEI, você recebe automaticamente um CNPJ — é o número de identificação da sua empresa junto à Receita Federal." />
          </div>
        </section>

      </div>
    
        {/* INTERLINKS */}
        <AlertBox type="info">
          <p className="font-semibold mb-2">🔗 Veja também</p>
          <ul className="space-y-1 text-sm">
            <li>→ <InternalLink href="/como-emitir-das-mei">Como emitir o DAS-MEI</InternalLink></li>
            <li>→ <InternalLink href="/como-declarar-dasn-simei">Como declarar o DASN-SIMEI</InternalLink></li>
            <li>→ <InternalLink href="/nota-fiscal-mei">Nota fiscal MEI</InternalLink></li>
            <li>→ <InternalLink href="/limite-mei-2026">Limite do MEI em 2026</InternalLink></li>
            <li>→ <InternalLink href="/das-atrasado">DAS atrasado: o que fazer</InternalLink></li>
          </ul>
        </AlertBox>

    </main>
  );
}
