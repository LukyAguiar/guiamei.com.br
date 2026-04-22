import type { Metadata } from "next";
import { PageHero, InternalLink, ExternalLink } from "../components/ui";

// ISR — revalida a página a cada 24h sem rebuild
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Sobre o MEI/guia — Quem somos e como trabalhamos",
  description: "Conheça o MEI/guia: um site informativo independente criado para ajudar microempreendedores a entender suas obrigações sem complicação.",
  alternates: { canonical: "https://guiamei.com.br/sobre" },
};

export default function Page() {
  return (
    <main>
      <PageHero
        badge="Sobre nós"
        title="O que é o MEI/guia?"
        desc="Um guia independente criado para ajudar microempreendedores a navegar pelas obrigações do MEI sem complicação — e sem custo."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 pb-20 space-y-12">

        {/* Missão */}
        <section className="space-y-4 text-[var(--muted)] text-sm leading-relaxed">
          <h2 className="font-serif text-2xl text-[var(--ink)]">Nossa missão</h2>
          <p>
            O Brasil tem mais de <strong className="text-[var(--ink)]">15 milhões de MEIs ativos</strong> — e a maioria enfrenta as
            mesmas dúvidas: como pagar o DAS? O que é o DASN-SIMEI? Meu CNPJ está irregular? O que acontece se atrasar?
          </p>
          <p>
            O <strong className="text-[var(--ink)]">MEI/guia</strong> nasceu para responder a essas perguntas de forma clara, direta e gratuita.
            Sem juridiquês, sem enrolação, sem cobrar nada para você entender as suas obrigações como microempreendedor.
          </p>
          <p>
            Toda a burocracia do MEI foi desenhada para ser feita pelo próprio empreendedor — e nosso papel é garantir
            que você saiba exatamente como fazer isso.
          </p>
        </section>

        {/* Aviso legal destacado */}
        <div className="bg-[var(--gold-light)] border border-[#f0d8a8] rounded-2xl p-6 text-sm leading-relaxed text-[var(--muted)]">
          <p className="font-semibold text-[var(--ink)] mb-2">⚠️ Aviso legal importante</p>
          <p>
            O MEI/guia é um site <strong className="text-[var(--ink)]">informativo e independente</strong>, sem vínculo com a
            Receita Federal do Brasil, o Governo Federal ou qualquer órgão público. Nenhuma informação publicada aqui
            constitui assessoria jurídica, contábil ou fiscal. Sempre consulte o{" "}
            <ExternalLink href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor" className="text-[var(--green)] underline">
              Portal do Empreendedor (gov.br)
            </ExternalLink>{" "}
            para dados oficiais.
          </p>
        </div>

        {/* Como trabalhamos */}
        <section className="space-y-4 text-[var(--muted)] text-sm leading-relaxed">
          <h2 className="font-serif text-2xl text-[var(--ink)]">Como trabalhamos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: "📋",
                titulo: "Conteúdo baseado na legislação",
                desc: "Todas as informações são baseadas nas regras do Simples Nacional e atualizadas conforme mudanças na legislação.",
              },
              {
                icon: "🔗",
                titulo: "Links para fontes oficiais",
                desc: "Cada guia linka diretamente para o portal Gov.br, PGMEI, Receita Federal e demais fontes governamentais.",
              },
              {
                icon: "✅",
                titulo: "Gratuito e sem cadastro",
                desc: "Todo o conteúdo é gratuito. Nenhum guia exige cadastro, login ou pagamento para ser acessado.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[var(--border)] rounded-2xl p-5">
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <p className="font-semibold text-[var(--ink)] text-sm mb-1">{item.titulo}</p>
                <p className="text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sustentabilidade */}
        <section className="space-y-4 text-[var(--muted)] text-sm leading-relaxed">
          <h2 className="font-serif text-2xl text-[var(--ink)]">Como o site se sustenta</h2>
          <p>
            O MEI/guia é mantido por meio de <strong className="text-[var(--ink)]">publicidade contextual</strong> (Google AdSense).
            Os anúncios são exibidos de forma automática pelo Google e não representam indicação ou endosso dos produtos anunciados.
            O conteúdo editorial é 100% independente e não é influenciado por anunciantes.
          </p>
        </section>

        {/* Guias em destaque */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-[var(--ink)]">Guias mais acessados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/como-emitir-das-mei", label: "Como emitir o DAS-MEI" },
              { href: "/das-atrasado", label: "DAS atrasado: o que fazer" },
              { href: "/como-declarar-dasn-simei", label: "Como declarar o DASN-SIMEI" },
              { href: "/nota-fiscal-mei", label: "Como emitir nota fiscal MEI" },
              { href: "/limite-mei-2026", label: "Limite do MEI em 2026" },
              { href: "/mei-precisa-de-contador", label: "MEI precisa de contador?" },
            ].map((p) => (
              <InternalLink key={p.href} href={p.href} className="flex items-center gap-2 bg-white border border-[var(--border)] rounded-xl px-4 py-3 text-sm no-underline font-medium text-[var(--ink)] hover:border-[var(--green)] hover:text-[var(--green)] transition-colors">
                <span className="text-[var(--green)]">→</span>
                {p.label}
              </InternalLink>
            ))}
          </div>
        </section>

        {/* Contato */}
        <section className="bg-[var(--green-light)] border border-[#b2ddc4] rounded-2xl p-6 text-sm text-[var(--muted)] leading-relaxed">
          <h2 className="font-serif text-xl text-[var(--ink)] mb-2">Fale com a gente</h2>
          <p>
            Encontrou alguma informação desatualizada? Tem sugestão de conteúdo? Quer reportar um erro?
            Adoramos receber feedback.{" "}
            <InternalLink href="/contato">Entre em contato pelo formulário</InternalLink>.
          </p>
        </section>

      </div>
    </main>
  );
}
