import type { Metadata } from "next";
import { PageHero, AlertBox, RelatedPages, InternalLink, FaqItem, ExternalLink } from "../components/ui";

export const metadata: Metadata = {
  title: "Como saber se o DAS do MEI é falso — verificação rápida",
  description: "Aprenda a verificar se um boleto DAS do MEI é legítimo ou falso em menos de 1 minuto, com o código de barras e o portal oficial.",
  alternates: { canonical: "https://guiamei.vercel.app/como-saber-se-o-das-e-falso" },
};

export default function Page() {
  return (
    <main>
      <PageHero
        badge="Verificação · DAS Falso"
        title="Como saber se o DAS é falso"
        desc="Verifique se um boleto DAS do MEI é legítimo em menos de 1 minuto. Três formas simples e infalíveis."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">

        <section aria-labelledby="metodo1-title">
          <h2 id="metodo1-title" className="font-serif text-2xl mb-4">Método 1: verifique o código de barras (mais rápido)</h2>
          <div className="bg-[var(--green-light)] border-2 border-[#b2ddc4] rounded-2xl p-6 text-center">
            <p className="text-sm text-[var(--muted)] mb-2">Todo DAS legítimo começa com:</p>
            <p className="font-mono font-bold text-3xl text-[var(--green)] tracking-widest">8580</p>
            <p className="text-xs text-[var(--muted)] mt-3">Essa é a identificação do Produto Arrecadação da Receita Federal.<br />Se começa com outro número → boleto falso.</p>
          </div>
          <p className="text-sm text-[var(--muted)] mt-4 leading-relaxed">
            Olhe os primeiros 4 dígitos da linha digitável (aquela sequência de números impressa abaixo do código de barras). Se não começar com <strong>8580</strong>, descarte imediatamente.
          </p>
        </section>

        <section aria-labelledby="metodo2-title">
          <h2 id="metodo2-title" className="font-serif text-2xl mb-4">Método 2: gere um novo DAS e compare</h2>
          <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
            Se recebeu um boleto e quer confirmar, gere um DAS novo no portal oficial para o mesmo mês e compare os valores e datas.
          </p>
          <div className="bg-white border border-[var(--border)] rounded-xl p-5">
            <p className="font-semibold text-sm mb-3">Como gerar o DAS oficial:</p>
            <div className="space-y-2 text-sm text-[var(--muted)]">
              <p>1. Acesse: <ExternalLink href="https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgmei.app/Identificacao" className="text-[var(--green)] underline">pgmei.app (PGMEI oficial)</ExternalLink></p>
              <p>2. Digite seu CNPJ</p>
              <p>3. Gere o DAS para o mês desejado</p>
              <p>4. Compare o valor e o código de barras com o boleto recebido</p>
            </div>
            <p className="text-xs text-[var(--muted)] mt-3 bg-[var(--paper)] rounded-lg p-2">Se os valores ou códigos forem diferentes → o boleto recebido é falso.</p>
          </div>
        </section>

        <section aria-labelledby="metodo3-title">
          <h2 id="metodo3-title" className="font-serif text-2xl mb-4">Método 3: verifique pelo aplicativo MEI</h2>
          <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
            O app oficial do MEI (disponível gratuitamente no Android e iOS) mostra os DAS em aberto e permite gerar o boleto direto pelo celular.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="bg-white border border-[var(--border)] rounded-xl p-4 text-center">
              <p className="font-semibold mb-1">📱 Android</p>
              <ExternalLink href="https://play.google.com/store/apps/details?id=br.gov.fazenda.receita.meireceita" className="text-[var(--green)] underline text-xs">Google Play → app MEI</ExternalLink>
            </div>
            <div className="bg-white border border-[var(--border)] rounded-xl p-4 text-center">
              <p className="font-semibold mb-1">🍎 iPhone</p>
              <ExternalLink href="https://apps.apple.com/br/app/mei-receita-federal/id1445853895" className="text-[var(--green)] underline text-xs">App Store → app MEI</ExternalLink>
            </div>
          </div>
        </section>

        <AlertBox type="warning">
          <p className="font-semibold mb-1">⚠️ Sinais de alerta de boleto falso</p>
          <p className="text-sm">Código não começa com 8580 · Valor diferente do DAS da sua atividade (deve ser R$ 82,05, R$ 86,05 ou R$ 87,05 em 2026) · Chegou por e-mail, WhatsApp ou carta sem você ter solicitado · Tem urgência exagerada ou ameaças · Pede pagamento por Pix para pessoa física</p>
        </AlertBox>

        <section aria-labelledby="tabela-title">
          <h2 id="tabela-title" className="font-serif text-2xl mb-4">Valores reais do DAS em 2026</h2>
          <div className="bg-white border border-[var(--border)] rounded-2xl overflow-hidden text-sm">
            {[
              { atividade: "Comércio ou Indústria", valor: "R$ 82,05", composicao: "INSS + ICMS" },
              { atividade: "Serviços", valor: "R$ 86,05", composicao: "INSS + ISS" },
              { atividade: "Comércio + Serviços", valor: "R$ 87,05", composicao: "INSS + ICMS + ISS" },
            ].map((row, i) => (
              <div key={i} className="flex items-center gap-4 px-6 py-4 border-b border-[var(--border)] last:border-b-0">
                <div className="flex-1">
                  <p className="font-medium">{row.atividade}</p>
                  <p className="text-xs text-[var(--muted)]">{row.composicao}</p>
                </div>
                <p className="font-bold text-[var(--green)] text-lg shrink-0">{row.valor}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[var(--muted)] mt-2">Se o boleto tem valor diferente desses, provavelmente é falso ou foi gerado incorretamente.</p>
        </section>

        <section aria-labelledby="faq-title">
          <h2 id="faq-title" className="font-serif text-2xl mb-4">Dúvidas frequentes</h2>
          <div className="space-y-2">
            <FaqItem q="Posso validar o boleto num site de verificação?" a="Sim. O Banco Central tem o portal 'Registrato' e validadores de código de barras. Mas o método mais confiável para o DAS é comparar diretamente com o gerado no PGMEI oficial." />
            <FaqItem q="E se o DAS tiver valor diferente por causa de multa e juros?" a="DAS com atraso pode ter valor maior pelo cálculo de multa e juros. Mas isso só ocorre se você mesmo gerar pelo PGMEI para um período vencido. Boleto chegando 'pronto' com valores alterados é suspeito." />
            <FaqItem q="Recebi um boleto falso. Preciso fazer algo?" a={<>Não pague e denuncie. Veja o guia completo: <InternalLink href="/golpe-das-mei-boleto-falso">golpe do DAS MEI — como denunciar</InternalLink>.</>} />
          </div>
        </section>

      </div>

      <RelatedPages current="/como-saber-se-o-das-e-falso" />
    </main>
  );
}
