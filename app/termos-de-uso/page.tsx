import type { Metadata } from "next";
import { PageHero } from "../components/ui";

export const metadata: Metadata = {
  title: "Termos de Uso — MEI/guia",
  description: "Termos e condições de uso do site MEI/guia. Leia antes de utilizar nosso conteúdo.",
  alternates: { canonical: "https://guiamei.com.br/termos-de-uso" },
};

export default function Page() {
  const lastUpdate = "21 de abril de 2026";

  return (
    <main>
      <PageHero
        badge="Legal"
        title="Termos de Uso"
        desc="As regras que governam o uso do MEI/guia e das informações publicadas neste site."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 pb-20 space-y-10 text-[var(--muted)] text-sm leading-relaxed">

        <p className="text-xs text-[var(--muted)]">Última atualização: {lastUpdate}</p>

        <section>
          <h2 className="font-serif text-xl text-[var(--ink)] mb-3">1. Aceitação dos termos</h2>
          <p>
            Ao acessar e utilizar o site <strong className="text-[var(--ink)]">guiamei.com.br</strong> ("MEI/guia"),
            você concorda com estes Termos de Uso. Se não concordar com alguma condição, pedimos que não utilize o site.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-[var(--ink)] mb-3">2. Natureza do conteúdo</h2>
          <div className="bg-[var(--gold-light)] border border-[#f0d8a8] rounded-xl p-5 mb-4">
            <p className="font-semibold text-[var(--ink)] mb-1">⚠️ Aviso importante</p>
            <p>
              O MEI/guia é um site <strong className="text-[var(--ink)]">estritamente informativo e educacional</strong>.
              Não somos afiliados à Receita Federal do Brasil, ao Governo Federal ou a qualquer órgão público.
              As informações publicadas <strong className="text-[var(--ink)]">não constituem assessoria jurídica, contábil ou fiscal</strong>.
            </p>
          </div>
          <p>
            Todo o conteúdo é baseado nas regras do Simples Nacional vigentes e está sujeito a alterações pela legislação.
            Sempre consulte o{" "}
            <a href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] underline">
              Portal do Empreendedor (gov.br)
            </a>{" "}
            para obter informações oficiais e atualizadas.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-[var(--ink)] mb-3">3. Limitação de responsabilidade</h2>
          <p className="mb-3">O MEI/guia não se responsabiliza por:</p>
          <ul className="space-y-2 ml-4 list-disc">
            <li>Decisões tomadas com base no conteúdo deste site;</li>
            <li>Erros ou desatualizações nas informações publicadas, mesmo que involuntários;</li>
            <li>Prejuízos financeiros, fiscais ou legais decorrentes do uso das informações;</li>
            <li>Indisponibilidade temporária do site por manutenção ou problemas técnicos;</li>
            <li>Conteúdo de sites externos para os quais haja links neste site.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl text-[var(--ink)] mb-3">4. Propriedade intelectual</h2>
          <p>
            Todo o conteúdo publicado no MEI/guia — incluindo textos, estruturas, organização e design —
            é de propriedade do MEI/guia, salvo indicação em contrário. É proibido reproduzir, copiar ou distribuir
            qualquer conteúdo sem autorização prévia por escrito.
          </p>
          <p className="mt-3">
            Citações breves com atribuição e link para a fonte original são permitidas para fins educacionais,
            desde que não desvirtuem o conteúdo original.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-[var(--ink)] mb-3">5. Publicidade</h2>
          <p>
            Este site pode exibir anúncios de terceiros por meio do <strong className="text-[var(--ink)]">Google AdSense</strong>.
            Os anúncios são selecionados de forma automática pelo Google e não representam recomendação ou endosso do MEI/guia
            aos produtos ou serviços anunciados.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-[var(--ink)] mb-3">6. Links externos</h2>
          <p>
            Este site contém links para portais governamentais e outros recursos externos. Esses links são fornecidos
            apenas como referência e conveniência. O MEI/guia não controla, endossa nem se responsabiliza pelo conteúdo
            de sites externos.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-[var(--ink)] mb-3">7. Conduta do usuário</h2>
          <p className="mb-3">Ao usar este site, você concorda em não:</p>
          <ul className="space-y-1 ml-4 list-disc">
            <li>Utilizar scrapers, bots ou ferramentas automatizadas para coletar conteúdo em massa;</li>
            <li>Tentar comprometer a segurança, disponibilidade ou integridade do site;</li>
            <li>Reproduzir o conteúdo de forma comercial sem autorização.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl text-[var(--ink)] mb-3">8. Alterações nos termos</h2>
          <p>
            Estes Termos podem ser alterados a qualquer momento. A data da última atualização é indicada no topo desta página.
            O uso continuado do site após qualquer alteração representa aceitação das novas condições.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-[var(--ink)] mb-3">9. Legislação aplicável</h2>
          <p>
            Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca
            de São Paulo/SP para dirimir quaisquer conflitos decorrentes deste instrumento.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-[var(--ink)] mb-3">10. Contato</h2>
          <p>
            Dúvidas sobre estes termos? Entre em contato pelo nosso{" "}
            <a href="/contato" className="text-[var(--green)] underline">formulário de contato</a>.
          </p>
        </section>

      </div>
    </main>
  );
}
