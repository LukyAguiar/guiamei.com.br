import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade — MEI/guia",
  description: "Saiba como o MEI/guia coleta, usa e protege seus dados pessoais conforme a LGPD.",
};

export default function Page() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="font-serif text-4xl mb-2">Política de Privacidade</h1>
      <p className="text-xs text-[var(--muted)] mb-10">Última atualização: abril de 2026</p>

      <div className="space-y-8 text-sm text-[var(--muted)] leading-relaxed">

        <section>
          <h2 className="font-serif text-xl text-[var(--ink)] mb-2">1. Quem somos</h2>
          <p>O MEI/guia (acessível em guiamei.com.br) é um site informativo sobre obrigações do Microempreendedor Individual no Brasil. Esta política descreve como tratamos informações dos visitantes.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-[var(--ink)] mb-2">2. Dados coletados</h2>
          <p>Este site pode coletar automaticamente dados de navegação por meio de ferramentas de análise (como Google Analytics), incluindo:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Endereço IP (anonimizado)</li>
            <li>Tipo de navegador e dispositivo</li>
            <li>Páginas visitadas e tempo de permanência</li>
            <li>Origem do acesso (busca orgânica, redes sociais, etc.)</li>
          </ul>
          <p className="mt-3">Não coletamos nome, e-mail, CPF ou qualquer dado pessoal identificável sem que você nos forneça voluntariamente (ex: pelo formulário de contato).</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-[var(--ink)] mb-2">3. Cookies e publicidade</h2>
          <p>Utilizamos cookies para análise de tráfego e exibição de anúncios por meio do Google AdSense. O Google pode usar cookies para exibir anúncios personalizados com base em visitas anteriores a este e a outros sites. Você pode desativar a personalização de anúncios em <a href="https://www.google.com/settings/ads" className="text-[var(--green)] underline" target="_blank" rel="noopener noreferrer">google.com/settings/ads</a>.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-[var(--ink)] mb-2">4. Finalidade do uso dos dados</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Melhorar a qualidade do conteúdo e experiência do usuário</li>
            <li>Analisar o desempenho das páginas</li>
            <li>Exibir anúncios relevantes (via Google AdSense)</li>
            <li>Responder a mensagens enviadas pelo contato</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl text-[var(--ink)] mb-2">5. Compartilhamento de dados</h2>
          <p>Não vendemos, alugamos ou compartilhamos dados pessoais com terceiros, exceto nas situações previstas em lei ou estritamente necessárias para operação do site (ex: provedores de hospedagem e análise).</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-[var(--ink)] mb-2">6. Seus direitos (LGPD)</h2>
          <p>Conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018), você tem direito a:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Saber quais dados temos sobre você</li>
            <li>Solicitar correção ou exclusão de dados</li>
            <li>Revogar consentimento para uso de dados</li>
          </ul>
          <p className="mt-2">Para exercer esses direitos, entre em contato: contato@guiamei.com.br</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-[var(--ink)] mb-2">7. Alterações nesta política</h2>
          <p>Esta política pode ser atualizada a qualquer momento. Recomendamos revisá-la periodicamente. Mudanças significativas serão sinalizadas com a data de atualização no topo da página.</p>
        </section>

      </div>
    </main>
  );
}
