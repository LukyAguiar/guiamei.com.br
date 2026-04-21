import type { Metadata } from "next";
import { PageHero, AlertBox, RelatedPages, InternalLink, FaqItem } from "../components/ui";

export const metadata: Metadata = {
  title: "MEI inapto: o que significa e como regularizar",
  description: "CNPJ do MEI com situação 'inapto'? Entenda o que significa, por que acontece, quais as consequências e como regularizar em 2026.",
  alternates: { canonical: "https://guiamei.vercel.app/mei-inapto-o-que-significa" },
};

export default function Page() {
  return (
    <main>
      <PageHero
        badge="CNPJ Inapto · MEI"
        title="MEI inapto: o que significa?"
        desc="Status 'inapto' no CNPJ é sinal de alerta. Entenda o que causou, o que você perde e como resolver antes que o CNPJ seja cancelado."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">

        <AlertBox type="warning">
          <p className="font-semibold mb-1">🔴 MEI inapto: situação grave que exige ação rápida</p>
          <p className="text-sm">O status "inapto" significa que a Receita Federal identificou omissões ou irregularidades no seu CNPJ. Não é o mesmo que cancelado, mas é o estágio anterior. Se não regularizar, o CNPJ pode ser cancelado.</p>
        </AlertBox>

        <section aria-labelledby="significa-title">
          <h2 id="significa-title" className="font-serif text-2xl mb-4">O que significa "inapto"?</h2>
          <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
            A Instrução Normativa RFB 1.863/2019 define como "inapto" o CNPJ que apresenta uma ou mais das seguintes situações por dois ou mais exercícios consecutivos:
          </p>
          <div className="space-y-3">
            {[
              { causa: "Omissão de declarações", desc: "Não entregou o DASN-SIMEI por 2 ou mais anos consecutivos. É a causa mais comum de inaptidão no MEI." },
              { causa: "Não localizado no endereço cadastrado", desc: "A Receita tentou contato ou fiscalização e não encontrou a empresa no endereço informado no cadastro." },
              { causa: "Documentos irregulares", desc: "Irregularidades nos documentos apresentados no momento do cadastro ou em atualizações posteriores." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-red-50 border border-red-200 rounded-xl px-5 py-4">
                <span className="text-red-500 font-bold text-sm shrink-0">✗</span>
                <div>
                  <p className="font-semibold text-sm text-red-700">{item.causa}</p>
                  <p className="text-[var(--muted)] text-sm mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="consequencias-title">
          <h2 id="consequencias-title" className="font-serif text-2xl mb-4">O que o MEI inapto perde</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {[
              "❌ Não pode emitir nota fiscal",
              "❌ Não consegue abrir conta PJ",
              "❌ Certidão negativa bloqueada",
              "❌ Não acessa crédito bancário",
              "❌ Não participa de licitações",
              "❌ Perda de contratos que exigem CNPJ ativo",
            ].map((item, i) => (
              <div key={i} className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 text-[var(--muted)]">{item}</div>
            ))}
          </div>
        </section>

        <section aria-labelledby="regularizar-title">
          <h2 id="regularizar-title" className="font-serif text-2xl mb-4">Como regularizar o MEI inapto</h2>
          <div className="space-y-3">
            <div className="bg-white border border-[var(--border)] rounded-xl p-5">
              <p className="font-semibold text-sm mb-2">Causa: declarações atrasadas (mais comum)</p>
              <p className="text-sm text-[var(--muted)] mb-2">Entregue todas as DASN-SIMEI pendentes pelo portal da Receita Federal. Após a entrega, aguarde até 5 dias úteis para o status atualizar. Veja o guia: <InternalLink href="/mei-irregular-como-regularizar">como regularizar o MEI irregular</InternalLink>.</p>
            </div>
            <div className="bg-white border border-[var(--border)] rounded-xl p-5">
              <p className="font-semibold text-sm mb-2">Causa: endereço desatualizado</p>
              <p className="text-sm text-[var(--muted)]">Atualize o endereço no Portal do Empreendedor (Gov.br) e, se necessário, compareça a uma unidade da Receita Federal com comprovante de endereço atualizado.</p>
            </div>
            <div className="bg-white border border-[var(--border)] rounded-xl p-5">
              <p className="font-semibold text-sm mb-2">Causa: documentos irregulares</p>
              <p className="text-sm text-[var(--muted)]">Entre em contato com a Receita Federal (pelo e-CAC ou presencialmente) para entender qual documento específico está irregular e como corrigi-lo.</p>
            </div>
          </div>
        </section>

        <AlertBox type="info">
          <p className="font-semibold mb-1">💡 Como verificar se seu MEI está inapto</p>
          <p className="text-sm">Acesse a consulta pública de CNPJ da Receita Federal em <strong>receita.fazenda.gov.br</strong> e digite seu CNPJ. Se o status exibido for "Inapto", é necessário regularizar. Veja o passo a passo completo: <InternalLink href="/como-consultar-debitos-mei">como consultar débitos do MEI</InternalLink>.</p>
        </AlertBox>

        <section aria-labelledby="faq-title">
          <h2 id="faq-title" className="font-serif text-2xl mb-4">Dúvidas frequentes</h2>
          <div className="space-y-2">
            <FaqItem q="MEI inapto é o mesmo que cancelado?" a="Não. Inapto significa irregularidade identificada mas ainda reversível. Cancelado é o estágio final, irreversível — o CNPJ não pode mais ser reativado. Regularize antes de chegar ao cancelamento." />
            <FaqItem q="Quanto tempo leva para sair da inaptidão?" a="Após regularizar as pendências (entregar declarações, pagar débitos, atualizar dados), o sistema da Receita atualiza o status em até 5 dias úteis." />
            <FaqItem q="MEI inapto ainda deve pagar o DAS?" a="Sim. A inaptidão não suspende as obrigações mensais. Continue pagando o DAS para evitar acumular mais débitos — e regularize as demais pendências o quanto antes." />
            <FaqItem q="Posso reabrir um MEI cancelado?" a="O mesmo CNPJ não pode ser reativado após cancelamento. Mas você pode abrir um novo MEI com um CNPJ diferente, desde que não tenha vedações (sócio de outra empresa, cargo público incompatível, etc.)." />
          </div>
        </section>

      </div>

      <RelatedPages current="/mei-inapto-o-que-significa" />
    </main>
  );
}
