import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre o MEI/guia — quem somos e nosso objetivo",
  description: "Conheça o MEI/guia: um site criado para ajudar microempreendedores brasileiros a entender suas obrigações de forma simples e gratuita.",
};

export default function Page() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="font-serif text-4xl mb-6">Sobre o MEI/guia</h1>

      <div className="space-y-6 text-[var(--muted)] leading-relaxed text-sm">
        <p>
          O <strong className="text-[var(--ink)]">MEI/guia</strong> nasceu de uma necessidade real: tornar as obrigações do Microempreendedor Individual mais compreensíveis para os milhões de brasileiros que empreendem por conta própria.
        </p>

        <p>
          Nossa missão é simples: explicar de forma clara, direta e gratuita tudo o que um MEI precisa saber — desde pagar o DAS mensal até entender quando é hora de crescer para além do MEI.
        </p>

        <h2 className="font-serif text-2xl text-[var(--ink)] mt-8 mb-3">O que fazemos</h2>
        <ul className="space-y-2">
          {[
            "Guias práticos e atualizados sobre obrigações do MEI",
            "Informações baseadas em fontes oficiais (Receita Federal, Gov.br, Simples Nacional)",
            "Conteúdo em linguagem acessível, sem juridiquês",
            "Atualização dos valores e regras a cada mudança de legislação",
          ].map((item, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-[var(--green)] mt-0.5">✓</span>
              {item}
            </li>
          ))}
        </ul>

        <h2 className="font-serif text-2xl text-[var(--ink)] mt-8 mb-3">Importante</h2>
        <p>
          O MEI/guia é um site informativo. Nossas publicações têm caráter educativo e não substituem a orientação de um contador ou advogado. Para situações específicas ou complexas, recomendamos consultar um profissional habilitado.
        </p>
        <p>
          Todas as informações são baseadas nas regras vigentes em 2026. Leis e valores tributários podem mudar — sempre consulte o{" "}
          <a href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] underline">Portal Gov.br</a>{" "}
          para dados oficiais e atualizados.
        </p>
      </div>
    </main>
  );
}
