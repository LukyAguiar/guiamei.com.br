import type { Metadata } from "next";
import { PageHero } from "../components/ui";

export const metadata: Metadata = {
  title: "Termos de Uso | MEI/guia",
  description: "Termos de uso do MEI/guia - regras e diretrizes para uso do site",
  alternates: { canonical: "https://guiamei.com.br/termos-de-uso" },
};

export default function TermsOfUsePage() {
  return (
    <main>
      <PageHero
        badge="Termos"
        title="Termos de Uso"
        desc="Leia nossos termos de uso e entenda as regras para utilizar o site MEI/guia de forma segura e responsável."
      />
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="prose prose-lg max-w-none">
          <h2>1. Aceitação dos Termos</h2>
          <p>Ao acessar e utilizar o site MEI/guia, você concorda em cumprir estes termos de uso e todas as leis aplicáveis.</p>

          <h2>2. Uso do Site</h2>
          <p>Você concorda em usar o site apenas para fins legais e não utilizará:</p>
          <ul>
            <li>Conteúdo para fins fraudulentos</li>
            <li>Tecnologias de varredura ou scraping sem permissão</li>
            <li>Conteúdo que viole direitos de terceiros</li>
          </ul>

          <h2>3. Conteúdo do Site</h2>
          <p>Todo o conteúdo do site é de propriedade exclusiva da MEI/guia e está protegido por direitos autorais. A cópia ou reprodução parcial ou total é proibida sem permissão prévia.</p>

          <h2>4. Links Externos</h2>
          <p>O site pode conter links para recursos de terceiros. Não nos responsabilizamos pelo conteúdo ou práticas de privacidade desses sites.</p>

          <h2>5. Alterações nos Termos</h2>
          <p>Reservamo-nos o direito de modificar estes termos a qualquer momento. O uso contínuo do site após alterações constitui aceitação dos novos termos.</p>

          <h2>6. Limitação de Responsabilidade</h2>
          <p>O site é fornecido "como está" e não garantimos a precisão, completude ou disponibilidade do conteúdo. Em nenhuma caso teremos responsabilidade por danos decorrentes do uso do site.</p>
        </div>
      </div>
    </main>
  );
}
