import type { Metadata } from "next";
import { PageHero, AlertBox, RelatedPages, InternalLink, FaqItem, StepItem, ExternalLink } from "../components/ui";

export const metadata: Metadata = {
  title: "Como emitir o DAS MEI pelo celular em 2026",
  description: "Passo a passo para emitir e pagar o DAS do MEI pelo celular usando o app oficial ou o site mobile — rápido, gratuito e sem computador.",
  alternates: { canonical: "https://guiamei.vercel.app/emitir-das-pelo-celular" },
};

export default function Page() {
  return (
    <main>
      <PageHero
        badge="DAS · Celular"
        title="Como emitir o DAS MEI pelo celular"
        desc="Gere e pague o DAS do MEI em menos de 3 minutos pelo celular — sem precisar de computador ou ir ao banco."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">

        <section aria-labelledby="opcoes-title">
          <h2 id="opcoes-title" className="font-serif text-2xl mb-4">Duas formas de emitir pelo celular</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[var(--green-light)] border-2 border-[#b2ddc4] rounded-2xl p-5">
              <p className="font-bold text-[var(--green)] mb-1">📱 Pelo app MEI (recomendado)</p>
              <p className="text-sm text-[var(--muted)]">App oficial da Receita Federal. Mais fácil, sem precisar de navegador. Disponível no Android e iOS gratuitamente.</p>
            </div>
            <div className="bg-white border-2 border-[var(--border)] rounded-2xl p-5">
              <p className="font-bold mb-1">🌐 Pelo site mobile (PGMEI)</p>
              <p className="text-sm text-[var(--muted)]">Acesse o portal PGMEI pelo navegador do celular (Chrome, Safari). Funciona igual ao computador, adaptado para tela pequena.</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="app-passo-title">
          <h2 id="app-passo-title" className="font-serif text-2xl mb-4">Pelo app MEI — passo a passo</h2>
          <div className="space-y-0">
            <StepItem num="1" title='Abra o app e toque em "Emitir DAS"' desc="Na tela inicial do app MEI, o botão de emitir DAS fica em destaque. Toque nele." />
            <StepItem num="2" title="Selecione o mês de competência" desc="Escolha o mês que deseja pagar. Para pagamento em dia, selecione o mês atual. Para meses em atraso, selecione o período específico." />
            <StepItem num="3" title="Confirme os dados e gere o boleto" desc="O app mostra o valor atualizado (com multa e juros se for atraso). Confirme e toque em 'Gerar DAS'." />
            <StepItem num="4" title="Pague no app do seu banco" desc="Copie a linha digitável ou abra o app do seu banco e use a função 'Pagar conta' para escanear o código de barras do DAS." isLast />
          </div>
        </section>

        <section aria-labelledby="site-passo-title">
          <h2 id="site-passo-title" className="font-serif text-2xl mb-4">Pelo navegador do celular — passo a passo</h2>
          <div className="space-y-0">
            <StepItem num="1" title="Acesse o PGMEI pelo navegador" desc={<>No Chrome ou Safari do seu celular, acesse: <ExternalLink href="https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgmei.app/Identificacao" className="text-[var(--green)] underline">pgmei.app</ExternalLink></>} />
            <StepItem num="2" title="Digite seu CNPJ" desc="Informe o CNPJ do MEI (14 dígitos, sem pontuação) e toque em continuar." />
            <StepItem num="3" title="Selecione os períodos e gere o DAS" desc="Marque os meses que quer pagar e toque em 'Gerar DAS'. O boleto aparece na tela em PDF." />
            <StepItem num="4" title="Salve o PDF ou copie a linha digitável" desc="Salve o PDF para pagar depois ou copie a linha digitável para pagar direto no app do seu banco." isLast />
          </div>
        </section>

        <AlertBox type="warning">
          <p className="font-semibold mb-1">⚠️ Só use os canais oficiais</p>
          <p className="text-sm">Não pague DAS gerado por sites de terceiros, aplicativos não oficiais ou enviado por WhatsApp/e-mail. O DAS legítimo começa com <strong>8580</strong> no código de barras. Veja: <InternalLink href="/como-saber-se-o-das-e-falso">como identificar DAS falso</InternalLink>.</p>
        </AlertBox>

        <section aria-labelledby="pagamento-title">
          <h2 id="pagamento-title" className="font-serif text-2xl mb-4">Formas de pagar o DAS pelo celular</h2>
          <div className="space-y-3 text-sm">
            {[
              { forma: "App do banco (leitura de código de barras)", desc: "A forma mais prática. Abra o app do seu banco, vá em 'Pagar', escaneie o código de barras do DAS e confirme." },
              { forma: "Linha digitável (copiar e colar)", desc: "Copie a linha digitável do DAS e cole no campo de pagamento do app do banco. Útil quando a câmera não consegue ler o código." },
              { forma: "Internet banking mobile", desc: "Acesse o internet banking pelo navegador do celular e use a função de pagamento de contas." },
              { forma: "Caixa eletrônico (com cartão)", desc: "Leve o PDF do DAS impresso ou a linha digitável e pague em qualquer caixa eletrônico da rede bancária." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white border border-[var(--border)] rounded-xl px-5 py-4">
                <span className="text-[var(--green)] font-bold shrink-0">→</span>
                <div>
                  <p className="font-semibold">{item.forma}</p>
                  <p className="text-[var(--muted)] mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="faq-title">
          <h2 id="faq-title" className="font-serif text-2xl mb-4">Dúvidas frequentes</h2>
          <div className="space-y-2">
            <FaqItem q="Posso pagar o DAS via Pix?" a="O DAS não aceita Pix diretamente. Mas alguns bancos permitem pagar boletos usando o saldo Pix — o processo é feito dentro do próprio app do banco ao ler o código de barras." />
            <FaqItem q="O comprovante de pagamento chega por e-mail?" a="Não automaticamente. O comprovante é gerado pelo seu banco após o pagamento. Guarde o comprovante — pode ser solicitado se houver divergência no sistema da Receita." />
            <FaqItem q="Quanto tempo leva para o pagamento ser confirmado?" a="O sistema da Receita atualiza em até 2 dias úteis após o pagamento. Se continuar aparecendo como pendente após esse prazo, use a opção 'Informar pagamento' no PGMEI com o número do recibo." />
          </div>
        </section>

      </div>

      <RelatedPages current="/emitir-das-pelo-celular" />
    </main>
  );
}
