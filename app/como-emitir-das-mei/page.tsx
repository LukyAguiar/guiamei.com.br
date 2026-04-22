import type { Metadata } from "next";
import { PageHero, StepItem, AlertBox, RelatedPages, InternalLink, ExternalLink, FaqItem, AdSlot , ArticleSchema, FaqSchema } from "../components/ui";

// ISR — revalida a página a cada 24h sem rebuild
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Como emitir o DAS-MEI em 2026 — passo a passo pelo celular ou PC",
  description: "Veja como gerar o boleto DAS do MEI pelo portal Gov.br, pelo app ou pelo banco. Passo a passo atualizado para 2026.",
  alternates: { canonical: "https://guiamei.vercel.app/como-emitir-das-mei" },
};

export default function Page() {
  return (
    <main>
      <ArticleSchema
        title="Como emitir o DAS-MEI em 2026 — passo a passo pelo celular ou PC"
        description="Veja como gerar o boleto DAS do MEI pelo portal Gov.br, pelo app ou pelo banco. Passo a passo atualizado para 2026."
        url="https://guiamei.vercel.app/como-emitir-das-mei"
        dateModified="2026-04-21"
      />
      <FaqSchema items={[
        { q: "Posso emitir vários meses de uma vez?", a: "Sim! O sistema PGMEI permite emitir um DAS por vez, mas você pode repetir o processo para cada mês em atraso. Para múltiplos meses atrasados, considere o parcelamento." },
    { q: "O DAS pago no banco demora para compensar?", a: "Pagamentos via Pix são instantâneos. Boleto bancário pode levar até 2 dias úteis para compensar. Nunca pague no último dia com boleto." },
    { q: "Como saber se o boleto DAS é verdadeiro?", a: "O DAS só deve ser gerado pelo portal oficial pgmei.gov.br. Qualquer boleto enviado por e-mail ou WhatsApp não solicitado é suspeito." },
    { q: "Posso configurar o DAS para pagar automaticamente?", a: "Sim, é possível cadastrar débito automático no banco para nunca atrasar o pagamento do DAS." }
      ]} />
      <PageHero
        badge="DAS-MEI · 2026"
        title="Como emitir o DAS-MEI"
        desc="Aprenda a gerar o boleto mensal do MEI em menos de 3 minutos, direto pelo celular ou computador."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">

        {/* AD TOPO */}
        <AdSlot position="topo" />

        {/* Intro */}
        <section>
          <p className="text-[var(--muted)] leading-relaxed">
            O <strong>DAS-MEI</strong> (Documento de Arrecadação do Simples Nacional) é a guia mensal que todo
            Microempreendedor Individual precisa pagar. Ele reúne em uma única guia o INSS, o ICMS (comércio/indústria)
            e o ISS (serviços). Em 2026, os valores variam entre <strong>R$ 82,05 e R$ 87,05</strong> dependendo da atividade.
          </p>
          <p className="text-[var(--muted)] leading-relaxed mt-3">
            O prazo de vencimento é sempre o <strong>dia 20 de cada mês</strong>. Se cair em fim de semana ou feriado,
            o pagamento passa para o próximo dia útil — mas o ideal é não deixar para a última hora.
          </p>
        </section>

        {/* Passo a passo */}
        <section aria-labelledby="steps-title">
          <h2 id="steps-title" className="font-serif text-2xl mb-6">Passo a passo para emitir o DAS</h2>
          <StepItem num="01" title="Acesse o portal PGMEI"
            desc={<>Entre em{" "}<ExternalLink href="https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgmei.app/Identificacao" className="text-[var(--green)] font-semibold underline">pgmei.gov.br</ExternalLink>{" "}ou pesquise "emitir DAS MEI" no Google. Não precisa de login — basta o CNPJ.</>}
          />
          <StepItem num="02" title="Informe o CNPJ do MEI"
            desc="Digite o CNPJ (14 dígitos, sem pontos ou traços) e clique em Continuar. O sistema vai carregar os dados da sua empresa automaticamente."
          />
          <StepItem num="03" title="Escolha o mês de competência"
            desc="Selecione o mês que você quer pagar. Você pode emitir o DAS do mês atual ou de meses anteriores (atrasados). Para meses atrasados, o sistema já calcula multa e juros automaticamente."
          />
          <StepItem num="04" title="Gere e baixe o boleto"
            desc="Clique em 'Apurar/Gerar DAS'. O boleto vai aparecer em PDF. Você pode pagar via código de barras, Pix (QR Code), internet banking, app do banco ou lotérica."
            isLast
          />
        </section>

        {/* Formas de pagamento */}
        <section aria-labelledby="pagamento-title">
          <h2 id="pagamento-title" className="font-serif text-2xl mb-4">Formas de pagamento aceitas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: "📱", titulo: "Pix", desc: "Use o QR Code do boleto. Mais rápido e sem risco de atraso." },
              { icon: "💻", titulo: "Internet banking", desc: "Copie o código de barras e pague pelo site do seu banco." },
              { icon: "📲", titulo: "App do banco", desc: "Funciona igual ao internet banking, mas pelo celular." },
              { icon: "🏪", titulo: "Lotérica", desc: "Leve o boleto impresso ou o código de barras. Aceita dinheiro." },
            ].map((f, i) => (
              <div key={i} className="bg-white border border-[var(--border)] rounded-xl p-4 flex gap-3 items-start">
                <span className="text-2xl">{f.icon}</span>
                <div>
                  <p className="font-medium text-sm">{f.titulo}</p>
                  <p className="text-xs text-[var(--muted)] mt-0.5">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dica importante */}
        <AlertBox type="info">
          <p className="font-semibold mb-1">💡 Dica: vencimento em fim de semana</p>
          <p>Se o dia 20 cair em sábado, domingo ou feriado, o vencimento passa automaticamente para o próximo dia útil. Mesmo assim, o recomendado é pagar antes para evitar qualquer imprevisto bancário.</p>
        </AlertBox>

        {/* AD MEIO */}
        <AdSlot position="meio" />

        {/* Erros comuns */}
        <section aria-labelledby="erros-title">
          <h2 id="erros-title" className="font-serif text-2xl mb-4">Erros comuns ao emitir o DAS</h2>
          <div className="space-y-3">
            {[
              { erro: "Pagar o mês errado", solucao: "Sempre confira o mês de competência antes de gerar. O sistema não corrige automaticamente." },
              { erro: "Deixar para o dia 20", solucao: "Pague com 1-2 dias de antecedência. Sistemas bancários podem ter fila no vencimento." },
              { erro: "Não guardar o comprovante", solucao: "Salve o PDF do boleto e o comprovante de pagamento. São importantes para declaração anual." },
              { erro: "Emitir sem verificar CNPJ ativo", solucao: "Se o CNPJ foi cancelado, o sistema não gera o DAS. Verifique a situação em receita.fazenda.gov.br." },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 bg-white border border-[var(--border)] rounded-xl p-4">
                <div className="shrink-0 mt-0.5">
                  <span className="text-red-500 font-bold text-xs">✗</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-red-700">{item.erro}</p>
                  <p className="text-xs text-[var(--muted)] mt-0.5">✓ {item.solucao}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-title">
          <h2 id="faq-title" className="font-serif text-2xl mb-4">Dúvidas frequentes</h2>
          <div className="space-y-2">
            <FaqItem q="Posso emitir vários meses de uma vez?" a="Sim! O sistema PGMEI permite emitir um DAS por vez, mas você pode repetir o processo para cada mês em atraso. Para múltiplos meses atrasados, considere o parcelamento." />
            <FaqItem q="O DAS pago no banco demora para compensar?" a="Pagamentos via Pix são instantâneos. Boleto bancário pode levar até 2 dias úteis para compensar. Nunca pague no último dia com boleto." />
            <FaqItem q="Perdi o comprovante. Como reemitir?" a="Acesse o PGMEI com seu CNPJ e consulte o histórico de pagamentos. O sistema registra todos os pagamentos realizados." />
            <FaqItem q="Como saber se o boleto DAS é verdadeiro?" a={<>O DAS só deve ser gerado pelo portal oficial pgmei.gov.br. Boletos enviados por e-mail ou WhatsApp podem ser falsos. Veja como identificar no guia <InternalLink href="/como-saber-se-o-das-e-falso">como saber se o DAS é falso</InternalLink>.</>} />
            <FaqItem q="Posso configurar o DAS para pagar automaticamente?" a={<>Sim! É possível cadastrar débito automático no banco. Veja o passo a passo em <InternalLink href="/como-pagar-das-automatico">como pagar o DAS automaticamente</InternalLink>.</>} />
          </div>
        </section>

        {/* Interlinking */}
        <AlertBox type="info">
          <p className="font-semibold mb-2">🔗 Leituras relacionadas</p>
          <ul className="space-y-1 text-sm">
            <li>→ <InternalLink href="/das-atrasado">DAS atrasado: o que fazer e como parcelar</InternalLink></li>
            <li>→ <InternalLink href="/emitir-das-pelo-celular">Como emitir o DAS pelo celular</InternalLink></li>
            <li>→ <InternalLink href="/mei-debito-automatico">MEI no débito automático</InternalLink></li>
            <li>→ <InternalLink href="/golpe-das-mei-boleto-falso">Golpe do DAS MEI e boleto falso</InternalLink></li>
          </ul>
        </AlertBox>

        {/* AD FINAL */}
        <AdSlot position="final" />

      </div>

      <RelatedPages current="/como-emitir-das-mei" />
    </main>
  );
}
