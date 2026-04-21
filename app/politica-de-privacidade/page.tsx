import type { Metadata } from "next";
import { PageHero } from "../components/ui";

export const metadata: Metadata = {
  title: "Política de Privacidade | MEI/guia",
  description: "Política de privacidade do MEI/guia - como coletamos e usamos seus dados",
  alternates: { canonical: "https://guiamei.com.br/politica-de-privacidade" },
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PageHero
        badge="Política"
        title="Política de Privacidade"
        desc="Saiba como tratamos suas informações pessoais e garantimos segurança e privacidade em nosso site."
      />
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="prose prose-lg max-w-none">
          <h2>1. Introdução</h2>
          <p>Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegem suas informações pessoais quando você acessa e utiliza o site MEI/guia.</p>

          <h2>2. Informações que Coletamos</h2>
          <p>Podemos coletar os seguintes tipos de informações:</p>
          <ul>
            <li>Informações de identificação pessoal (nome, email, telefone)</li>
            <li>Informações técnicas (endereço IP, tipo de navegador, páginas acessadas)</li>
            <li>Informações sobre seu uso do site (atividade, preferências)</li>
          </ul>

          <h2>3. Como Usamos Suas Informações</h2>
          <p>Utilizamos suas informações para:</p>
          <ul>
            <li>Melhorar a experiência do usuário no site</li>
            <li>Oferecer conteúdo e recursos relevantes</li>
            <li>Responder a suas perguntas e solicitações</li>
            <li>Enviar comunicações importantes sobre o serviço</li>
          </ul>

          <h2>4. Compartilhamento de Informações</h2>
          <p>Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para prestação de serviços ou quando exigido por lei.</p>

          <h2>5. Segurança das Informações</h2>
          <p>Implementamos medidas de segurança técnicas e administrativas para proteger suas informações contra acesso não autorizado, alteração ou divulgação.</p>

          <h2>6. Seus Direitos</h2>
          <p>Você tem o direito de:</p>
          <ul>
            <li>Acessar suas informações pessoais</li>
            <li>Solicitar a correção de dados incompletos ou inexatos</li>
            <li>Solicitar a exclusão de seus dados</li>
            <li>Revogar consentimento para o tratamento de dados</li>
          </ul>

          <h2>7. Alterações nesta Política</h2>
          <p>Reservamo-nos o direito de atualizar esta política periodicamente. As alterações serão publicadas nesta página com data de revisão.</p>
        </div>
      </div>
    </main>
  );
}
