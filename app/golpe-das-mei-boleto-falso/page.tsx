import type { Metadata } from "next";
import { PageHero, AlertBox, RelatedPages, InternalLink, FaqItem, ExternalLink , AdSlot , ArticleSchema, FaqSchema } from "../components/ui";

// ISR — revalida a página a cada 24h sem rebuild
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Golpe do DAS MEI e boleto falso em 2026: como identificar e evitar",
  description: "Golpistas enviam cobranças falsas imitando o DAS do MEI. Saiba como identificar boletos fraudulentos, onde denunciar e como se proteger.",
  alternates: { canonical: "https://guiamei.com.br/golpe-das-mei-boleto-falso" },
};

export default function Page() {
  return (
    <main>
      <ArticleSchema
        title="Golpe do DAS MEI e boleto falso em 2026: como identificar e evitar"
        description="Golpistas enviam cobranças falsas imitando o DAS do MEI. Saiba como identificar boletos fraudulentos e como se proteger."
        url="https://guiamei.com.br/golpe-das-mei-boleto-falso"
        dateModified="2026-04-21"
      />
      <FaqSchema items={[
        { q: "Como identificar um boleto DAS falso?", a: "O DAS verdadeiro só pode ser gerado pelo site pgmei.gov.br. Qualquer boleto enviado por e-mail ou WhatsApp não solicitado é suspeito." },
    { q: "Existe taxa para emitir o DAS?", a: "Não. A emissão do DAS é sempre gratuita. Se alguém cobrou para emitir seu DAS, é golpe." },
    { q: "O que fazer se paguei um DAS falso?", a: "Entre em contato com seu banco imediatamente para contestar a transação e registre um boletim de ocorrência." },
    { q: "Recebi uma carta cobrando o MEI. É golpe?", a: "Desconfie de cobranças por carta ou e-mail não solicitadas. A Receita Federal não envia cobranças de DAS por correio." }
      ]} />
      <PageHero
        badge="Segurança · Golpes MEI"
        title="Golpe do DAS MEI: boleto falso"
        desc="Golpistas enviam cobranças imitando o DAS do MEI. Aprenda a identificar, não cair e onde denunciar."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">

        {/* AD TOPO */}
        <AdSlot position="topo" />

        <AlertBox type="warning">
          <p className="font-semibold mb-1">⚠️ A Receita Federal não envia boletos por e-mail ou WhatsApp</p>
          <p className="text-sm">O DAS legítimo é gerado APENAS pelo portal oficial (PGMEI) ou pelo aplicativo MEI. Qualquer boleto recebido por e-mail, SMS, WhatsApp ou carta deve ser tratado com desconfiança.</p>
        </AlertBox>

        <section aria-labelledby="como-title">
          <h2 id="como-title" className="font-serif text-2xl mb-4">Como funciona o golpe</h2>
          <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
            Os golpistas enviam cobranças falsas que parecem DAS do MEI, geralmente com layout parecido com o boleto oficial, mencionando o número do seu CNPJ (obtido na consulta pública) e valores plausíveis. Quem paga, transfere dinheiro direto para a conta do golpista.
          </p>
          <div className="space-y-3">
            {[
              { canal: "WhatsApp e SMS", desc: "Mensagem com link ou imagem de boleto, urgência artificial ('vence hoje', 'evite multa')." },
              { canal: "E-mail", desc: "E-mail com layout imitando a Receita Federal, com anexo PDF de boleto falso." },
              { canal: "Carta física", desc: "Correspondência impressa com visual de documento oficial, CNPJ correto e valores inventados." },
              { canal: "Ligação telefônica", desc: "Ligação afirmando que o MEI tem débito urgente e pedindo pagamento imediato via Pix ou boleto." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-red-50 border border-red-200 rounded-xl px-5 py-4">
                <span className="text-red-500 font-bold text-sm shrink-0">⚠️</span>
                <div>
                  <p className="font-semibold text-sm text-red-700">{item.canal}</p>
                  <p className="text-[var(--muted)] text-sm mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="identificar-title">
          <h2 id="identificar-title" className="font-serif text-2xl mb-4">Como identificar um boleto falso</h2>
          <div className="space-y-3">
            {[
              { sinal: "Recebido por canal não oficial", desc: "DAS legítimo é gerado por você, não enviado pela Receita. Se chegou por e-mail, WhatsApp ou carta — desconfie imediatamente." },
              { sinal: "Urgência exagerada", desc: "Frases como 'pague em 24h ou seu CNPJ será cancelado' são táticas de pressão. A Receita não age assim." },
              { sinal: "Código de barras diferente do padrão", desc: "O código de barras do DAS começa sempre com '8580'. Se começar com outro número, é falso." },
              { sinal: "Valor não bate com sua atividade", desc: "Você sabe quanto paga de DAS (entre R$ 82,05 e R$ 87,05/mês). Boleto com outro valor é suspeito." },
              { sinal: "Pedido de Pix em vez de boleto", desc: "O DAS legítimo é pago por boleto bancário ou débito autorizado. Nunca por Pix diretamente para uma pessoa." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white border border-[var(--border)] rounded-xl px-5 py-4">
                <span className="text-[var(--green)] font-bold text-sm shrink-0">✓</span>
                <div>
                  <p className="font-semibold text-sm">{item.sinal}</p>
                  <p className="text-[var(--muted)] text-sm mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="proteger-title">
          <h2 id="proteger-title" className="font-serif text-2xl mb-4">Como se proteger</h2>
          <div className="bg-[var(--green-light)] border border-[#b2ddc4] rounded-2xl p-6">
            <p className="font-bold text-[var(--green)] mb-3">Regra de ouro: só pague DAS gerado por você</p>
            <div className="space-y-2 text-sm text-[var(--muted)]">
              <p>→ Sempre gere o DAS pelo portal oficial: <ExternalLink href="https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgmei.app/Identificacao" className="text-[var(--green)] underline">pgmei.app</ExternalLink></p>
              <p>→ Ou pelo app MEI (disponível na App Store e Google Play)</p>
              <p>→ Jamais pague boleto recebido por e-mail, WhatsApp ou carta sem verificar no PGMEI</p>
              <p>→ Desconfie de qualquer cobrança com urgência ou ameaça de cancelamento imediato</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="denunciar-title">
          <h2 id="denunciar-title" className="font-serif text-2xl mb-4">O que fazer se cair no golpe ou receber cobrança suspeita</h2>
          <div className="space-y-3 text-sm">
            <div className="bg-white border border-[var(--border)] rounded-xl p-5">
              <p className="font-semibold mb-1">1. Não pague e não clique em links</p>
              <p className="text-[var(--muted)]">Se recebeu e não pagou ainda, simplesmente ignore e bloqueie o contato.</p>
            </div>
            <div className="bg-white border border-[var(--border)] rounded-xl p-5">
              <p className="font-semibold mb-1">2. Denuncie ao Ministério da Justiça</p>
              <p className="text-[var(--muted)]">Acesse <ExternalLink href="https://new.safernet.org.br/denuncie" className="text-[var(--green)] underline">SaferNet</ExternalLink> ou ligue no 197 (Polícia Federal) para denunciar golpes online.</p>
            </div>
            <div className="bg-white border border-[var(--border)] rounded-xl p-5">
              <p className="font-semibold mb-1">3. Se já pagou, conteste com o banco</p>
              <p className="text-[var(--muted)]">Entre em contato com seu banco imediatamente e registre um Boletim de Ocorrência (pode ser online pelo site da Polícia Civil do seu estado).</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="faq-title">
          <h2 id="faq-title" className="font-serif text-2xl mb-4">Dúvidas frequentes</h2>
          <div className="space-y-2">
            <FaqItem q="O código de barras do DAS começa com qual número?" a="Todo DAS legítimo do MEI começa com '8580' na linha digitável. Qualquer boleto com código diferente não é um DAS da Receita Federal." />
            <FaqItem q="Posso pagar o DAS via Pix?" a="O DAS em si não é pago por Pix diretamente. Mas alguns bancos permitem gerar um QR Code a partir do boleto do DAS. Nunca faça Pix para chave aleatória ou CPF de pessoa física para pagar o DAS." />
            <FaqItem q="A Receita me liga para cobrar o DAS?" a="Não. A Receita Federal não realiza cobranças por telefone. Qualquer ligação cobrando pagamento urgente de DAS é golpe." />
            <FaqItem q="Como identificar um boleto DAS falso?" a="O DAS verdadeiro só pode ser gerado pelo site pgmei.gov.br. Qualquer boleto enviado por e-mail ou WhatsApp não solicitado é suspeito." />
            <FaqItem q="Existe taxa para emitir o DAS?" a="Não. A emissão do DAS é sempre gratuita." />
            <FaqItem q="O que fazer se paguei um DAS falso?" a="Entre em contato com seu banco imediatamente para contestar a transação e registre um boletim de ocorrência." />
          </div>
        </section>

        {/* AD FINAL */}
        <AdSlot position="final" />

        {/* INTERLINKS */}
        <AlertBox type="info">
          <p className="font-semibold mb-2">🔗 Veja também</p>
          <ul className="space-y-1 text-sm">
            <li>→ <InternalLink href="/como-saber-se-o-das-e-falso">Como saber se o DAS é falso</InternalLink></li>
            <li>→ <InternalLink href="/como-emitir-das-mei">Como emitir o DAS oficial</InternalLink></li>
            <li>→ <InternalLink href="/das-atrasado">DAS atrasado: como regularizar</InternalLink></li>
            <li>→ <InternalLink href="/como-consultar-debitos-mei">Consultar débitos do MEI</InternalLink></li>
          </ul>
        </AlertBox>

      </div>

      <RelatedPages current="/golpe-das-mei-boleto-falso" />
    </main>
  );
}
