import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://guiamei.vercel.app';

  return [
    // ── Institucional ──────────────────────────────────────────────────────────
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/politica-de-privacidade`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/termos-de-uso`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },

    // ── Guias existentes ───────────────────────────────────────────────────────
    {
      url: `${baseUrl}/como-emitir-das-mei`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/das-atrasado`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/como-declarar-dasn-simei`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/nota-fiscal-mei`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/o-que-acontece-se-nao-pagar`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/como-dar-baixa-no-mei`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mei-precisa-de-contador`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mei-pode-ter-funcionario`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/limite-mei-2026`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // ── Nota Fiscal ────────────────────────────────────────────────────────────
    {
      url: `${baseUrl}/mei-como-emitir-nota-fiscal`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mei-precisa-emitir-nota-fiscal`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/como-emitir-nf-mei-prefeitura`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // ── Faturamento ────────────────────────────────────────────────────────────
    {
      url: `${baseUrl}/mei-ultrapassou-limite-o-que-fazer`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/quanto-mei-pode-faturar-por-mes`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // ── Regularização ──────────────────────────────────────────────────────────
    {
      url: `${baseUrl}/mei-irregular-como-regularizar`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/como-consultar-debitos-mei`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mei-inapto-o-que-significa`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // ── Segurança / Golpes ─────────────────────────────────────────────────────
    {
      url: `${baseUrl}/golpe-das-mei-boleto-falso`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/como-saber-se-o-das-e-falso`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // ── Crédito / Financeiro ───────────────────────────────────────────────────
    {
      url: `${baseUrl}/mei-pode-fazer-emprestimo`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/mei-tem-direito-credito`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/cartao-para-mei-melhor-opcao`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },

    // ── Conta PJ ──────────────────────────────────────────────────────────────
    {
      url: `${baseUrl}/mei-precisa-conta-pj`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/melhores-contas-para-mei`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },

    // ── App / Tecnologia ───────────────────────────────────────────────────────
    {
      url: `${baseUrl}/app-mei-como-usar`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/emitir-das-pelo-celular`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/como-pagar-das-automatico`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mei-debito-automatico`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // ── Guia completo / Autoridade ─────────────────────────────────────────────
    {
      url: `${baseUrl}/guia-completo-mei-2026`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tudo-sobre-mei`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },

    // ── Calculadoras ───────────────────────────────────────────────────────────
    {
      url: `${baseUrl}/calculadora-das-mei`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/simulador-faturamento-mei`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // ── Comparações ────────────────────────────────────────────────────────────
    {
      url: `${baseUrl}/mei-ou-clt`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/mei-ou-autonomo`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
  ];
}