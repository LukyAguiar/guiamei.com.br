import type { Metadata } from "next";
import { PageHero, AlertBox, RelatedPages, InternalLink, FaqItem , AdSlot , ArticleSchema, FaqSchema } from "../components/ui";

// ISR — revalida a página a cada 24h sem rebuild
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "MEI precisa de contador em 2026? Resposta honesta e definitiva",
  description: "Descubra se o MEI é obrigado a contratar contador, quando vale a pena e o que você pode fazer sozinho. Resposta direta e sem enrolação.",
  alternates: { canonical: "https://guiamei.com.br/mei-precisa-de-contador" }
};

export default function Page() {
  return (
    <main>
      <ArticleSchema
        title="MEI precisa de contador em 2026? Resposta honesta e definitiva"
        description="Descubra se o MEI é obrigado a ter contador, quando vale a pena contratar e o que pode fazer sozinho."
        url="https://guiamei.com.br/mei-precisa-de-contador"
        dateModified="2026-04-21"
      />
      <FaqSchema items={[
        { q: "MEI precisa pagar contador?", a: "Não é obrigatório. Toda a burocracia do MEI pode ser feita gratuitamente pelo próprio empreendedor." },
    { q: "Quando vale a pena contratar um contador sendo MEI?", a: "Quando você está próximo do limite de faturamento, tem funcionário, quer migrar para ME/EPP, ou enfrenta problemas com a Receita Federal." },
    { q: "Contador pode cobrar pelo cadastro do MEI?", a: "Não. O registro no Portal do Empreendedor é 100% gratuito. Se alguém cobrou, você pode registrar reclamação no Procon." },
    { q: "Quanto custa um contador para MEI?", a: "Não é obrigatório, mas se contratar, os valores variam entre R$ 100 e R$ 300 mensais dependendo da região e dos serviços incluídos." }
      ]} />
      <PageHero
        badge="Contador MEI · 2026"
        title="MEI precisa de contador?"
        desc="Resposta direta: não é obrigatório. Mas existem casos em que vale muito a pena. Entenda quando e por quê."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">

        {/* AD TOPO */}
        <AdSlot position="topo" />

        <AlertBox type="success">
          <p className="font-semibold mb-1">✅ Resposta direta</p>
          <p className="text-sm">O MEI <strong>não é obrigado por lei a ter contador</strong>. Toda a burocracia do MEI foi desenhada para ser feita pelo próprio empreendedor, gratuitamente, pelo portal do governo.</p>
        </AlertBox>

        <section aria-labelledby="pode-title">
          <h2 id="pode-title" className="font-serif text-2xl mb-4">O que o MEI pode fazer sozinho</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { tarefa: "Emitir o DAS mensalmente", link: "/como-emitir-das-mei" },
              { tarefa: "Fazer a declaração anual DASN-SIMEI", link: "/como-declarar-dasn-simei" },
              { tarefa: "Emitir nota fiscal (NFS-e e NF-e)", link: "/nota-fiscal-mei" },
              { tarefa: "Dar baixa no MEI", link: "/como-dar-baixa-no-mei" },
              { tarefa: "Pagar DAS atrasado e parcelar", link: "/das-atrasado" },
              { tarefa: "Consultar situação do CNPJ", link: null },
            ].map((item, i) => (
              <div key={i} className="flex gap-2 items-center bg-[var(--green-light)] border border-[#b2ddc4] rounded-xl px-4 py-3 text-sm">
                <span className="text-[var(--green)]">✓</span>
                {item.link ? <InternalLink href={item.link}>{item.tarefa}</InternalLink> : item.tarefa}
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="quando-title">
          <h2 id="quando-title" className="font-serif text-2xl mb-4">Quando vale a pena ter um contador?</h2>
          <div className="space-y-3">
            {[
              { situacao: "Vai ultrapassar o limite de R$ 81.000/ano", motivo: "O desenquadramento para ME exige contabilidade formal. Um contador facilita muito essa transição." },
              { situacao: "Presta serviços para grandes empresas", motivo: "Contratos com grandes tomadores podem exigir certidões, notas específicas e compliance tributário mais complexo." },
              { situacao: "Tem dúvidas sobre retenções de impostos", motivo: "ISS retido na fonte, INSS patronal e outros tributos variam por município e situação. Um contador evita erros." },
              { situacao: "Quer migrar para Simples Nacional como ME", motivo: "A abertura de ME exige contabilidade regular. Melhor já contratar para a transição." },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[var(--border)] rounded-xl p-4">
                <p className="font-medium text-sm mb-1">📌 {item.situacao}</p>
                <p className="text-xs text-[var(--muted)]">{item.motivo}</p>
              </div>
            ))}
          </div>
        </section>

        <AlertBox type="warning">
          <p className="font-semibold mb-1">⚠️ Cuidado com contadores cobrando pelo básico</p>
          <p className="text-sm">Emitir DAS, fazer a declaração anual e abrir/fechar MEI são <strong>gratuitos</strong> pelo portal do governo. Desconfie de qualquer cobrança por esses serviços básicos. Contador legítimo cobra por serviços que vão além disso.</p>
        </AlertBox>

        <section aria-labelledby="faq-title">
          <h2 id="faq-title" className="font-serif text-2xl mb-4">Dúvidas frequentes</h2>
          <div className="space-y-2">
            <FaqItem q="Quanto custa um contador para MEI?" a="Para MEIs simples, muitos contadores cobram entre R$ 80 e R$ 200/mês. Mas repita: não é obrigatório. Só contrate se realmente precisar do serviço." />
            <FaqItem q="O SEBRAE pode me ajudar de graça?" a="Sim! O SEBRAE oferece orientação gratuita para MEIs em todo o Brasil, incluindo consultoria básica sobre obrigações. Acesse sebrae.com.br ou a unidade mais próxima." />
            <FaqItem q="Posso deduzir o contador no imposto de renda?" a="O MEI não entrega Imposto de Renda como PJ — isso é feito na declaração de pessoa física. Despesas com contador para o MEI não são dedutíveis no IR pessoal." />
            <FaqItem q="MEI precisa pagar contador?" a="Não é obrigatório. Toda a burocracia do MEI pode ser feita gratuitamente pelo próprio empreendedor." />
            <FaqItem q="Quando vale a pena contratar um contador sendo MEI?" a="Quando você está próximo do limite de faturamento, tem funcionário, quer migrar para ME/EPP, ou enfrenta problemas com a Receita Federal." />
            <FaqItem q="Contador pode cobrar pelo cadastro do MEI?" a="Não. O registro no Portal do Empreendedor é 100% gratuito. Se alguém cobrou, você pode registrar reclamação no Procon." />
          </div>
        </section>

        {/* AD FINAL */}
        <AdSlot position="final" />

        {/* INTERLINKS */}
        <AlertBox type="info">
          <p className="font-semibold mb-2">🔗 Veja também</p>
          <ul className="space-y-1 text-sm">
            <li>→ <InternalLink href="/como-declarar-dasn-simei">Como declarar o DASN-SIMEI</InternalLink></li>
            <li>→ <InternalLink href="/como-emitir-das-mei">Como emitir o DAS-MEI</InternalLink></li>
            <li>→ <InternalLink href="/limite-mei-2026">Limite do MEI em 2026</InternalLink></li>
            <li>→ <InternalLink href="/mei-ultrapassou-limite-o-que-fazer">MEI ultrapassou o limite</InternalLink></li>
          </ul>
        </AlertBox>

      </div>

      <RelatedPages current="/mei-precisa-de-contador" />
    </main>
  );
}
