import type { Metadata } from "next";
import { PageHero, AlertBox, RelatedPages, InternalLink, FaqItem, StepItem, ExternalLink , AdSlot } from "../components/ui";

export const metadata: Metadata = {
  title: "Como usar o App MEI em 2026: passo a passo completo",
  description: "Aprenda a usar o aplicativo MEI da Receita Federal: emitir DAS, consultar situação, declarar DASN-SIMEI e muito mais pelo celular.",
  alternates: { canonical: "https://guiamei.com.br/app-mei-como-usar" },
};

export default function Page() {
  return (
    <main>
      <PageHero
        badge="App MEI · Oficial"
        title="App MEI: como usar o aplicativo"
        desc="O app oficial do MEI (Receita Federal) resolve a maioria das obrigações pelo celular — de graça e sem fila."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">

        {/* AD TOPO */}
        <AdSlot position="topo" />

        <section aria-labelledby="download-title">
          <h2 id="download-title" className="font-serif text-2xl mb-4">Como baixar o app MEI</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-[var(--border)] rounded-2xl p-5 text-center">
              <p className="text-3xl mb-2">🤖</p>
              <p className="font-bold text-sm mb-1">Android</p>
              <p className="text-xs text-[var(--muted)] mb-3">Pesquise "MEI Receita Federal" na Play Store</p>
              <ExternalLink href="https://play.google.com/store/apps/details?id=br.gov.fazenda.receita.meireceita" className="inline-block bg-[var(--green)] text-white text-xs font-semibold px-4 py-2 rounded-lg hover:opacity-90">
                Baixar no Google Play ↗
              </ExternalLink>
            </div>
            <div className="bg-white border border-[var(--border)] rounded-2xl p-5 text-center">
              <p className="text-3xl mb-2">🍎</p>
              <p className="font-bold text-sm mb-1">iPhone (iOS)</p>
              <p className="text-xs text-[var(--muted)] mb-3">Pesquise "MEI Receita Federal" na App Store</p>
              <ExternalLink href="https://apps.apple.com/br/app/mei-receita-federal/id1445853895" className="inline-block bg-[var(--green)] text-white text-xs font-semibold px-4 py-2 rounded-lg hover:opacity-90">
                Baixar na App Store ↗
              </ExternalLink>
            </div>
          </div>
        </section>

        <section aria-labelledby="funcoes-title">
          <h2 id="funcoes-title" className="font-serif text-2xl mb-4">O que o app MEI permite fazer</h2>
          <div className="space-y-3">
            {[
              { icon: "💰", func: "Emitir e pagar o DAS", desc: "Gere o boleto mensal, pague via código de barras ou copie a linha digitável para pagar no banco. A função mais usada do app.", link: "/emitir-das-pelo-celular", linklabel: "Veja o passo a passo completo" },
              { icon: "📋", func: "Consultar situação cadastral", desc: "Veja se seu CNPJ está ativo, se há pendências e a data da última atualização dos dados." },
              { icon: "📊", func: "Verificar competências em aberto", desc: "Lista todos os meses do DAS em aberto, com valores atualizados de multa e juros." },
              { icon: "📑", func: "Declarar o DASN-SIMEI", desc: "Envie a declaração anual de faturamento direto pelo app, sem precisar acessar o computador." },
              { icon: "🔄", func: "Atualizar dados cadastrais", desc: "Atualize endereço, telefone e e-mail do CNPJ sem precisar ir a nenhuma repartição." },
              { icon: "🖨️", func: "Emitir comprovante de inscrição", desc: "Gere o CCMEI (Certificado da Condição do MEI) para apresentar em bancos e contratos." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white border border-[var(--border)] rounded-xl px-5 py-4">
                <span className="text-xl shrink-0">{item.icon}</span>
                <div>
                  <p className="font-semibold text-sm">{item.func}</p>
                  <p className="text-[var(--muted)] text-sm mt-0.5">{item.desc}</p>
                  {item.link && (
                    <InternalLink href={item.link} className="text-xs mt-1 inline-block">{item.linklabel} →</InternalLink>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="primeiro-acesso-title">
          <h2 id="primeiro-acesso-title" className="font-serif text-2xl mb-4">Primeiro acesso — passo a passo</h2>
          <div className="space-y-0">
            <StepItem num="1" title="Instale o app e abra" desc="Após instalar, abra o aplicativo. Na tela inicial, toque em 'Entrar' ou 'Acessar com Gov.br'." />
            <StepItem num="2" title="Faça login com Gov.br" desc="Use o mesmo login do Gov.br (CPF + senha) que você usa para acessar outros serviços do governo. Se não tem conta Gov.br, crie em gov.br." />
            <StepItem num="3" title="Selecione o CNPJ" desc="Se você tem mais de um vínculo, selecione o CNPJ do MEI que deseja gerenciar." />
            <StepItem num="4" title="Explore o menu principal" desc="Na tela inicial aparecem atalhos para as funções mais usadas: emitir DAS, consultar situação e declarar DASN-SIMEI." isLast />
          </div>
        </section>

        <AlertBox type="info">
          <p className="font-semibold mb-1">💡 App MEI vs portal PGMEI — qual usar?</p>
          <p className="text-sm">Para emitir o DAS, tanto o app quanto o portal web funcionam igual. O app é mais cômodo para o dia a dia. O portal web (<ExternalLink href="https://www8.receita.fazenda.gov.br/SimplesNacional" className="text-[var(--green)] underline">SimplesNacional</ExternalLink>) tem algumas funções extras como parcelamento. Use os dois conforme a necessidade.</p>
        </AlertBox>

        <section aria-labelledby="faq-title">
          <h2 id="faq-title" className="font-serif text-2xl mb-4">Dúvidas frequentes</h2>
          <div className="space-y-2">
            <FaqItem q="O app MEI é gratuito?" a="Sim, 100% gratuito. Desenvolvido e mantido pela Receita Federal. Desconfie de apps que cobram para emitir o DAS — o oficial é sempre de graça." />
            <FaqItem q="O app funciona sem internet?" a="Não. É necessária conexão com a internet para acessar os dados do CNPJ e emitir o DAS. Não há modo offline." />
            <FaqItem q="Posso pagar o DAS direto pelo app?" a={<>O app gera o boleto. O pagamento é feito no app do banco ou caixa eletrônico, lendo o código de barras. Veja: <InternalLink href="/emitir-das-pelo-celular">como emitir e pagar o DAS pelo celular</InternalLink>.</>} />
            <FaqItem q="O app MEI funciona no tablet?" a="Sim, funciona em qualquer dispositivo Android ou iOS — celular ou tablet. A interface se adapta ao tamanho da tela." />
          </div>
        </section>

        {/* AD FINAL */}
        <AdSlot position="final" />

        {/* INTERLINKS */}
        <AlertBox type="info">
          <p className="font-semibold mb-2">🔗 Veja também</p>
          <ul className="space-y-1 text-sm">
            <li>→ <InternalLink href="/como-emitir-das-mei">Como emitir o DAS-MEI</InternalLink></li>
            <li>→ <InternalLink href="/emitir-das-pelo-celular">Emitir DAS pelo celular</InternalLink></li>
            <li>→ <InternalLink href="/como-pagar-das-automatico">Pagar DAS automaticamente</InternalLink></li>
            <li>→ <InternalLink href="/mei-debito-automatico">MEI no débito automático</InternalLink></li>
          </ul>
        </AlertBox>

      </div>

      <RelatedPages current="/app-mei-como-usar" />
    </main>
  );
}
