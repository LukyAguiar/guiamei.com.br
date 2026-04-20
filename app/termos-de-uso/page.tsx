import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso — MEI/guia",
  description: "Leia os termos de uso do MEI/guia: condições de acesso, limitação de responsabilidade e propriedade intelectual.",
};

export default function Page() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="font-serif text-4xl mb-2">Termos de Uso</h1>
      <p className="text-xs text-[var(--muted)] mb-10">Última atualização: abril de 2026</p>

      <div className="space-y-8 text-sm text-[var(--muted)] leading-relaxed">

        <section>
          <h2 className="font-serif text-xl text-[var(--ink)] mb-2">1. Aceitação dos termos</h2>
          <p>Ao acessar e usar o MEI/guia (guiamei.com.br), você concorda com estes Termos de Uso. Se não concordar com algum item, pedimos que não utilize o site.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-[var(--ink)] mb-2">2. Natureza do conteúdo</h2>
          <p>O MEI/guia oferece <strong className="text-[var(--ink)]">conteúdo informativo e educativo</strong> sobre obrigações do Microempreendedor Individual. O conteúdo <strong className="text-[var(--ink)]">não constitui consultoria jurídica, contábil ou fiscal</strong>.</p>
          <p className="mt-2">Para situações específicas, recomendamos consultar um contador ou advogado habilitado. As informações podem não refletir mudanças legais recentes — sempre verifique no Portal Gov.br.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-[var(--ink)] mb-2">3. Limitação de responsabilidade</h2>
          <p>O MEI/guia não se responsabiliza por:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Decisões tomadas com base exclusivamente no conteúdo do site</li>
            <li>Alterações legislativas que tornem o conteúdo desatualizado</li>
            <li>Erros ou omissões nas informações publicadas</li>
            <li>Danos diretos ou indiretos decorrentes do uso do site</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl text-[var(--ink)] mb-2">4. Propriedade intelectual</h2>
          <p>Todo o conteúdo do MEI/guia (textos, layout, código, marca) é de propriedade do site ou de seus licenciantes. É proibida a reprodução total ou parcial sem autorização prévia por escrito, exceto para fins não comerciais com devida atribuição.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-[var(--ink)] mb-2">5. Links externos</h2>
          <p>O site pode conter links para portais governamentais e outros sites. Não nos responsabilizamos pelo conteúdo ou disponibilidade de sites externos, mesmo quando recomendados.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-[var(--ink)] mb-2">6. Publicidade</h2>
          <p>O MEI/guia exibe anúncios do Google AdSense para manter o site gratuito. Os anúncios são selecionados pelo Google e não representam endosso ou recomendação do MEI/guia aos produtos anunciados.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-[var(--ink)] mb-2">7. Contato</h2>
          <p>Dúvidas sobre estes termos: contato@guiamei.com.br</p>
        </section>

      </div>
    </main>
  );
}
