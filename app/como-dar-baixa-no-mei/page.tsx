import type { Metadata } from "next";
import { PageHero, StepItem, AlertBox, RelatedPages, InternalLink, ExternalLink, FaqItem , AdSlot } from "../components/ui";

export const metadata: Metadata = {
  title: "Como dar baixa no MEI em 2026: passo a passo gratuito",
  description: "Veja como encerrar o MEI pelo portal Gov.br, o que acontece com as dívidas e quando vale a pena fechar o CNPJ.",
  alternates: { canonical: "https://guiamei.com.br/como-dar-baixa-no-mei" }
};

export default function Page() {
  return (
    <main>
      <PageHero
        badge="Baixa MEI · 2026"
        title="Como dar baixa no MEI"
        desc="Quer encerrar seu MEI? O processo é gratuito e pode ser feito online em poucos minutos. Veja o passo a passo completo."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">

        {/* AD TOPO */}
        <AdSlot position="topo" />

        <AlertBox type="warning">
          <p className="font-semibold mb-1">⚠️ Antes de fechar: verifique suas dívidas</p>
          <p className="text-sm">Dar baixa no MEI não cancela débitos em aberto. O DAS atrasado continua sendo sua responsabilidade mesmo após o encerramento. Regularize antes se possível — veja como{" "}<InternalLink href="/das-atrasado">pagar o DAS atrasado</InternalLink>.</p>
        </AlertBox>

        <section aria-labelledby="quando-title">
          <h2 id="quando-title" className="font-serif text-2xl mb-4">Quando faz sentido fechar o MEI?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Você parou de exercer a atividade",
              "Vai abrir uma empresa maior (ME/EPP)",
              "Ultrapassou o limite de faturamento",
              "Conseguiu emprego CLT e não vai mais empreender",
              "A atividade foi proibida para MEI",
              "Quer abrir um novo MEI em outra atividade",
            ].map((item, i) => (
              <div key={i} className="flex gap-2 items-start bg-white border border-[var(--border)] rounded-xl px-4 py-3 text-sm">
                <span className="text-[var(--green)] mt-0.5">✓</span>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="steps-title">
          <h2 id="steps-title" className="font-serif text-2xl mb-6">Passo a passo para dar baixa</h2>
          <StepItem num="01" title="Acesse o Portal do Empreendedor"
            desc={<>Entre em{" "}<ExternalLink href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor" className="text-[var(--green)] font-semibold underline">gov.br/mei</ExternalLink>{" "}e faça login com sua conta Gov.br.</>}
          />
          <StepItem num="02" title="Clique em 'Solicitar Baixa'"
            desc="No painel do MEI, localize a opção 'Baixa de MEI' ou 'Encerrar MEI'. O sistema vai exibir um aviso sobre débitos em aberto."
          />
          <StepItem num="03" title="Confirme os dados e a data de encerramento"
            desc="Informe a data de encerramento das atividades (pode ser retroativa até o início do mês). Confirme os dados do CNPJ."
          />
          <StepItem num="04" title="Transmita e guarde o comprovante"
            desc="Clique em 'Transmitir'. O sistema gera um comprovante de baixa com número de protocolo. Guarde esse documento."
            isLast
          />
        </section>

        <section aria-labelledby="apos-title">
          <h2 id="apos-title" className="font-serif text-2xl mb-4">O que acontece após a baixa?</h2>
          <div className="space-y-3 text-sm">
            {[
              { icon: "📋", text: "O CNPJ é encerrado imediatamente — você não poderá mais emitir notas fiscais com ele." },
              { icon: "💳", text: "Contas bancárias PJ vinculadas ao CNPJ devem ser encerradas junto ao banco." },
              { icon: "📅", text: "Você ainda precisará entregar a DASN-SIMEI do ano de encerramento, declarando o faturamento proporcional." },
              { icon: "💰", text: "Débitos em aberto continuam existindo e podem ser cobrados mesmo após o encerramento." },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 bg-white border border-[var(--border)] rounded-xl p-4">
                <span className="text-xl shrink-0">{item.icon}</span>
                <p className="text-[var(--muted)]">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="faq-title">
          <h2 id="faq-title" className="font-serif text-2xl mb-4">Dúvidas frequentes</h2>
          <div className="space-y-2">
            <FaqItem q="Posso reabrir o MEI após dar baixa?" a="Sim! Você pode abrir um novo MEI a qualquer momento após o encerramento, desde que não tenha débitos impeditivos. O novo MEI terá um CNPJ diferente." />
            <FaqItem q="A baixa cancela minha inscrição estadual e municipal?" a="A baixa pelo portal federal encerra o CNPJ nacional, mas pode ser necessário comunicar também a Prefeitura (para ISS) e a Sefaz estadual (para ICMS). O sistema tenta fazer isso automaticamente, mas verifique." />
            <FaqItem q="Quanto custa dar baixa no MEI?" a="É completamente gratuito. Desconfie de sites que cobram por isso." />
          </div>
        </section>

        {/* AD FINAL */}
        <AdSlot position="final" />

        {/* INTERLINKS */}
        <AlertBox type="info">
          <p className="font-semibold mb-2">🔗 Veja também</p>
          <ul className="space-y-1 text-sm">
            <li>→ <InternalLink href="/mei-irregular-como-regularizar">MEI irregular: como regularizar</InternalLink></li>
            <li>→ <InternalLink href="/o-que-acontece-se-nao-pagar">O que acontece se não pagar</InternalLink></li>
            <li>→ <InternalLink href="/como-declarar-dasn-simei">Como declarar o DASN-SIMEI</InternalLink></li>
            <li>→ <InternalLink href="/mei-inapto-o-que-significa">MEI inapto: o que significa</InternalLink></li>
          </ul>
        </AlertBox>

      </div>

      <RelatedPages current="/como-dar-baixa-no-mei" />
    </main>
  );
}
