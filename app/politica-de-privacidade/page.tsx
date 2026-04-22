import type { Metadata } from "next";
import { PageHero } from "../components/ui";

// ISR — revalida a página a cada 24h sem rebuild
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Política de Privacidade — MEI/guia",
  description: "Saiba como o MEI/guia coleta, usa e protege seus dados pessoais. Política de privacidade completa e transparente.",
  alternates: { canonical: "https://guiamei.vercel.app/politica-de-privacidade" },
};

export default function Page() {
  const lastUpdate = "21 de abril de 2026";

  return (
    <main>
      <PageHero
        badge="Legal"
        title="Política de Privacidade"
        desc="Transparência sobre como coletamos, usamos e protegemos seus dados."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 pb-20 space-y-10 text-[var(--muted)] text-sm leading-relaxed">

        <p className="text-xs text-[var(--muted)]">Última atualização: {lastUpdate}</p>

        <section>
          <h2 className="font-serif text-xl text-[var(--ink)] mb-3">1. Quem somos</h2>
          <p>
            O <strong className="text-[var(--ink)]">MEI/guia</strong> (<strong>guiamei.vercel.app</strong>) é um site informativo independente
            sobre o Microempreendedor Individual (MEI) no Brasil. Não somos afiliados à Receita Federal, ao Governo Federal
            ou a qualquer órgão público.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-[var(--ink)] mb-3">2. Dados que coletamos</h2>
          <p className="mb-3">Este site coleta dados de forma automática e anônima para fins de análise e melhoria do conteúdo:</p>
          <ul className="space-y-2 ml-4 list-disc">
            <li><strong className="text-[var(--ink)]">Dados de navegação:</strong> páginas visitadas, tempo de permanência, origem do acesso (Google, redes sociais, acesso direto).</li>
            <li><strong className="text-[var(--ink)]">Dados técnicos:</strong> tipo de dispositivo, sistema operacional, navegador e endereço IP (anonimizado).</li>
            <li><strong className="text-[var(--ink)]">Cookies de analytics:</strong> utilizados pelo Google Analytics para entender o comportamento dos visitantes de forma agregada.</li>
          </ul>
          <p className="mt-3">
            <strong className="text-[var(--ink)]">Não coletamos</strong> nome, e-mail, CPF, CNPJ ou qualquer dado de identificação pessoal diretamente neste site,
            salvo quando você nos contata voluntariamente.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-[var(--ink)] mb-3">3. Uso de cookies</h2>
          <p className="mb-3">Utilizamos os seguintes tipos de cookies:</p>
          <div className="bg-white border border-[var(--border)] rounded-xl overflow-hidden">
            {[
              { tipo: "Necessários", desc: "Garantem o funcionamento básico do site. Não podem ser desativados." },
              { tipo: "Analytics (Google Analytics)", desc: "Coletam dados anônimos de navegação para melhorar o conteúdo. Podem ser recusados." },
              { tipo: "Publicidade (Google AdSense)", desc: "Exibem anúncios relevantes com base no seu perfil de navegação. Podem ser recusados." },
            ].map((c, i) => (
              <div key={i} className={`px-5 py-4 ${i < 2 ? "border-b border-[var(--border)]" : ""}`}>
                <p className="font-medium text-[var(--ink)] text-sm">{c.tipo}</p>
                <p className="text-xs mt-0.5">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-serif text-xl text-[var(--ink)] mb-3">4. Google AdSense e publicidade</h2>
          <p>
            Este site utiliza o <strong className="text-[var(--ink)]">Google AdSense</strong> para exibir anúncios. O Google pode usar cookies
            para personalizar os anúncios com base nas suas visitas a este e a outros sites. Você pode desativar a personalização
            de anúncios nas <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] underline">configurações de anúncios do Google</a>.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-[var(--ink)] mb-3">5. Compartilhamento de dados</h2>
          <p>
            Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros, exceto com prestadores de serviço
            essenciais (como Google Analytics e Google AdSense) que operam de acordo com suas próprias políticas de privacidade.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-[var(--ink)] mb-3">6. Seus direitos (LGPD)</h2>
          <p className="mb-3">Conforme a <strong className="text-[var(--ink)]">Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018)</strong>, você tem direito a:</p>
          <ul className="space-y-1 ml-4 list-disc">
            <li>Confirmar a existência de tratamento de dados pessoais;</li>
            <li>Solicitar a correção ou eliminação dos seus dados;</li>
            <li>Revogar o consentimento para uso de cookies não essenciais;</li>
            <li>Obter informações sobre o compartilhamento dos seus dados.</li>
          </ul>
          <p className="mt-3">Para exercer esses direitos, entre em contato pelo nosso <a href="/contato" className="text-[var(--green)] underline">formulário de contato</a>.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-[var(--ink)] mb-3">7. Links externos</h2>
          <p>
            Este site contém links para sites externos, incluindo portais governamentais (gov.br) e serviços privados.
            Não somos responsáveis pelas políticas de privacidade ou conteúdo desses sites.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-[var(--ink)] mb-3">8. Alterações nesta política</h2>
          <p>
            Podemos atualizar esta Política de Privacidade periodicamente. A data da última atualização é sempre indicada no topo desta página.
            O uso continuado do site após qualquer alteração implica a aceitação da política atualizada.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-[var(--ink)] mb-3">9. Contato</h2>
          <p>
            Dúvidas sobre esta política? Entre em contato pelo nosso <a href="/contato" className="text-[var(--green)] underline">formulário de contato</a>.
          </p>
        </section>

      </div>
    </main>
  );
}
