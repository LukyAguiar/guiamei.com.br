// ─── Dados centralizados das páginas do site ──────────────────────────────────
// Fonte única de verdade para todos os links, títulos e descrições.
// Usado em: home page, RelatedPages, sitemap, breadcrumbs, etc.

export interface PageEntry {
  href: string;
  title: string;
  desc: string;
  badge: string;
  cluster: PageCluster;
}

export type PageCluster =
  | "das"
  | "nota-fiscal"
  | "limite"
  | "regularizacao"
  | "seguranca"
  | "financeiro"
  | "mobile"
  | "hub"
  | "ferramentas"
  | "comparativo";

export const PAGES: PageEntry[] = [
  // ── DAS ──────────────────────────────────────────────────────────────────────
  { href: "/como-emitir-das-mei",       title: "Como emitir o DAS-MEI",                   desc: "Gere o boleto mensal em 3 minutos pelo celular",               badge: "Essencial",    cluster: "das" },
  { href: "/das-atrasado",              title: "DAS atrasado: o que fazer",                desc: "Multas, juros e como parcelar em até 60x",                    badge: "Popular",      cluster: "das" },
  { href: "/como-declarar-dasn-simei",  title: "Como declarar o DASN-SIMEI",              desc: "Declaração anual obrigatória — até 31 de maio",               badge: "Anual",        cluster: "das" },
  { href: "/o-que-acontece-se-nao-pagar", title: "O que acontece se não pagar",           desc: "Consequências da inadimplência mês a mês",                    badge: "Alerta",       cluster: "das" },

  // ── Nota fiscal ──────────────────────────────────────────────────────────────
  { href: "/nota-fiscal-mei",              title: "Nota fiscal MEI: guia completo",        desc: "NFS-e e NF-e: quando emitir e como fazer",                    badge: "NF-e",         cluster: "nota-fiscal" },
  { href: "/mei-como-emitir-nota-fiscal",  title: "Como emitir nota fiscal sendo MEI",     desc: "Passo a passo para emitir nota fiscal como MEI",              badge: "Nota fiscal",  cluster: "nota-fiscal" },
  { href: "/mei-precisa-emitir-nota-fiscal", title: "MEI precisa emitir nota fiscal?",     desc: "Descubra quando a emissão é obrigatória",                     badge: "Obrigação",    cluster: "nota-fiscal" },
  { href: "/como-emitir-nf-mei-prefeitura", title: "Como emitir NF MEI na prefeitura",    desc: "Veja como funciona a emissão municipal de serviço",           badge: "Prefeitura",   cluster: "nota-fiscal" },

  // ── Limite ───────────────────────────────────────────────────────────────────
  { href: "/limite-mei-2026",                   title: "Limite do MEI em 2026",            desc: "Faturamento máximo e o que fazer se ultrapassar",             badge: "2026",         cluster: "limite" },
  { href: "/mei-ultrapassou-limite-o-que-fazer", title: "MEI ultrapassou o limite: e agora?", desc: "Entenda os próximos passos e como regularizar",             badge: "Limite",       cluster: "limite" },
  { href: "/quanto-mei-pode-faturar-por-mes",   title: "Quanto o MEI pode faturar por mês", desc: "Entenda o cálculo mensal e o limite anual",                  badge: "Faturamento",  cluster: "limite" },

  // ── Regularização ────────────────────────────────────────────────────────────
  { href: "/mei-irregular-como-regularizar", title: "MEI irregular: como regularizar",    desc: "Veja como consultar pendências e voltar à regularidade",       badge: "Regularização", cluster: "regularizacao" },
  { href: "/como-consultar-debitos-mei",     title: "Como consultar débitos do MEI",      desc: "Descubra se há pendências e valores em aberto",               badge: "Débitos",       cluster: "regularizacao" },
  { href: "/mei-inapto-o-que-significa",     title: "MEI inapto: o que significa",        desc: "Causas, riscos e como resolver a situação",                   badge: "Situação",      cluster: "regularizacao" },
  { href: "/como-dar-baixa-no-mei",          title: "Como dar baixa no MEI",              desc: "Encerre o CNPJ gratuitamente pelo Gov.br",                    badge: "Encerramento",  cluster: "regularizacao" },

  // ── Segurança ────────────────────────────────────────────────────────────────
  { href: "/golpe-das-mei-boleto-falso",    title: "Golpe do DAS MEI e boleto falso",     desc: "Identifique cobranças falsas e evite prejuízo",               badge: "Segurança",    cluster: "seguranca" },
  { href: "/como-saber-se-o-das-e-falso",  title: "Como saber se o DAS é falso",          desc: "Sinais de fraude antes de pagar qualquer guia",               badge: "Alerta",       cluster: "seguranca" },

  // ── Financeiro ───────────────────────────────────────────────────────────────
  { href: "/mei-pode-fazer-emprestimo",   title: "MEI pode fazer empréstimo?",             desc: "Requisitos e cuidados antes de contratar",                    badge: "Crédito",      cluster: "financeiro" },
  { href: "/mei-tem-direito-credito",     title: "MEI tem direito a crédito?",             desc: "Linhas de crédito, análise e acesso ao financiamento",        badge: "Financeiro",   cluster: "financeiro" },
  { href: "/cartao-para-mei-melhor-opcao", title: "Melhor cartão para MEI",               desc: "Compare opções, taxas e benefícios",                          badge: "Cartão",       cluster: "financeiro" },
  { href: "/mei-precisa-conta-pj",        title: "MEI precisa de conta PJ?",              desc: "Quando separar finanças realmente ajuda",                     badge: "Conta PJ",     cluster: "financeiro" },
  { href: "/melhores-contas-para-mei",    title: "Melhores contas para MEI",              desc: "Compare contas digitais e bancárias para PJ",                 badge: "Bancos",       cluster: "financeiro" },

  // ── Mobile ───────────────────────────────────────────────────────────────────
  { href: "/app-mei-como-usar",          title: "Como usar o app MEI",                    desc: "App oficial, funções principais e primeiro acesso",           badge: "Aplicativo",   cluster: "mobile" },
  { href: "/emitir-das-pelo-celular",    title: "Como emitir DAS pelo celular",           desc: "Use o app e o site mobile para gerar e pagar",                badge: "Mobile",       cluster: "mobile" },
  { href: "/como-pagar-das-automatico",  title: "Como pagar DAS automaticamente",         desc: "Ative pagamento recorrente e evite atrasos",                  badge: "Automático",   cluster: "mobile" },
  { href: "/mei-debito-automatico",      title: "MEI no débito automático",               desc: "Como funciona, vantagens e pontos de atenção",                badge: "Bancos",       cluster: "mobile" },

  // ── Hub / Guias completos ────────────────────────────────────────────────────
  { href: "/guia-completo-mei-2026",     title: "Guia completo do MEI 2026",              desc: "Hub central com tudo sobre MEI",                              badge: "Hub",          cluster: "hub" },
  { href: "/tudo-sobre-mei",             title: "Tudo sobre MEI",                         desc: "Guia definitivo do zero ao avançado",                         badge: "Completo",     cluster: "hub" },
  { href: "/mei-precisa-de-contador",    title: "MEI precisa de contador?",               desc: "Quando vale a pena contratar",                                badge: "Dúvida",       cluster: "hub" },
  { href: "/mei-pode-ter-funcionario",   title: "MEI pode ter funcionário?",              desc: "Limites, encargos e obrigações trabalhistas",                 badge: "RH",           cluster: "hub" },

  // ── Ferramentas ──────────────────────────────────────────────────────────────
  { href: "/calculadora-das-mei",         title: "Calculadora DAS MEI",                   desc: "Simule atrasos, juros e o valor total em aberto",             badge: "Calculadora",  cluster: "ferramentas" },
  { href: "/simulador-faturamento-mei",   title: "Simulador de faturamento MEI",          desc: "Calcule o limite proporcional ao mês de abertura",            badge: "Simulador",    cluster: "ferramentas" },

  // ── Comparativos ─────────────────────────────────────────────────────────────
  { href: "/mei-ou-clt",      title: "MEI ou CLT: qual vale mais a pena?",               desc: "Compare custos, benefícios e renda líquida",                  badge: "Comparativo",  cluster: "comparativo" },
  { href: "/mei-ou-autonomo", title: "MEI ou autônomo",                                  desc: "Diferenças, custos do informal e quando formalizar",           badge: "Escolha",      cluster: "comparativo" },
];

// Helper: retorna páginas relacionadas excluindo a atual
export function getRelatedPages(currentHref: string, limit = 6): PageEntry[] {
  return PAGES.filter((p) => p.href !== currentHref).slice(0, limit);
}

// Helper: retorna páginas do mesmo cluster
export function getSameClusterPages(currentHref: string, limit = 4): PageEntry[] {
  const current = PAGES.find((p) => p.href === currentHref);
  if (!current) return [];
  return PAGES
    .filter((p) => p.href !== currentHref && p.cluster === current.cluster)
    .slice(0, limit);
}
