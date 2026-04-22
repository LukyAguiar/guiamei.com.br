import type { Metadata } from "next";
import { PageHero, StepItem, AlertBox, RelatedPages, InternalLink, ExternalLink, FaqItem, AdSlot } from "../components/ui";

export const metadata: Metadata = {
  title: "DAS MEI atrasado em 2026: multa, juros e como parcelar em até 60x",
  description: "Saiba o que acontece quando o DAS do MEI fica em atraso, como calcular multa e juros, como parcelar e como regularizar seu CNPJ.",
  alternates: { canonical: "https://guiamei.com.br/das-atrasado" },
};

export default function Page() {
  return (
    <main>
      <PageHero
        badge="DAS atrasado · 2026"
        title="DAS MEI atrasado: como regularizar"
        desc="Atrasou o pagamento do MEI? Calma — ainda dá para resolver. Veja como calcular a multa, pagar em atraso e parcelar se precisar."
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">

        {/* AD TOPO */}
        <AdSlot position="topo" />

        <section>
          <p className="text-[var(--muted)] leading-relaxed">
            Atrasar o DAS do MEI é mais comum do que parece — e tem solução. O importante é regularizar o quanto antes,
            porque a multa cresce a cada dia e, após <strong>12 meses sem pagamento</strong>, o CNPJ pode ser cancelado automaticamente.
            Se quiser entender as consequências completas, veja{" "}
            <InternalLink href="/o-que-acontece-se-nao-pagar">o que acontece quando o MEI não paga o DAS</InternalLink>.
          </p>
        </section>

        {/* Quanto fica a multa */}
        <section aria-labelledby="multa-title">
          <h2 id="multa-title" className="font-serif text-2xl mb-4">Quanto fica a multa por atraso?</h2>
          <div className="bg-white border border-[var(--border)] rounded-2xl overflow-hidden">
            {[
              { prazo: "Até 30 dias de atraso", multa: "2% sobre o valor + 0,33%/dia", obs: "Mínimo R$ 1,00" },
              { prazo: "31 a 60 dias", multa: "2% fixo + juros Selic acumulada", obs: "Selic atual: ~10,5% ao ano" },
              { prazo: "Acima de 60 dias", multa: "20% máximo + juros Selic", obs: "Multa trava em 20%, juros continuam" },
              { prazo: "Acima de 12 meses", multa: "Risco de cancelamento do CNPJ", obs: "Além da multa e juros" },
            ].map((row, i) => (
              <div key={i} className={`flex flex-col sm:flex-row gap-2 px-5 py-4 ${i < 3 ? "border-b border-[var(--border)]" : ""}`}>
                <div className="flex-1">
                  <p className="text-sm font-medium">{row.prazo}</p>
                  <p className="text-xs text-[var(--muted)] mt-0.5">{row.obs}</p>
                </div>
                <p className="text-sm font-semibold text-red-600 sm:text-right">{row.multa}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[var(--muted)] mt-2 px-1">
            * O próprio sistema PGMEI calcula o valor exato automaticamente ao gerar o DAS atrasado. Use também a{" "}
            <InternalLink href="/calculadora-das-mei">calculadora de DAS MEI</InternalLink> para simular o valor total.
          </p>
        </section>

        {/* Como pagar atrasado */}
        <section aria-labelledby="pagar-title">
          <h2 id="pagar-title" className="font-serif text-2xl mb-6">Como pagar o DAS atrasado</h2>
          <StepItem num="01" title="Acesse o PGMEI"
            desc={<>Entre em{" "}<ExternalLink href="https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgmei.app/Identificacao" className="text-[var(--green)] font-semibold underline">pgmei.gov.br</ExternalLink>{" "}e informe seu CNPJ. Você também pode emitir direto pelo{" "}<InternalLink href="/emitir-das-pelo-celular">app do celular</InternalLink>.</>}
          />
          <StepItem num="02" title="Selecione o mês em atraso"
            desc="Escolha o mês de competência atrasado. O sistema exibirá o valor original + multa + juros já calculados automaticamente."
          />
          <StepItem num="03" title="Gere o DAS com acréscimos"
            desc="Clique em 'Apurar/Gerar DAS'. O boleto já vem com o valor corrigido. Não tente pagar o valor original — será recusado."
          />
          <StepItem num="04" title="Pague e guarde o comprovante"
            desc="Pague via Pix, app do banco ou lotérica. Guarde o comprovante — ele será necessário na declaração anual DASN-SIMEI."
            isLast
          />
        </section>

        <AlertBox type="warning">
          <p className="font-semibold mb-1">⚠️ Atenção: mês em atraso ≠ mês sem cobertura do INSS</p>
          <p>Se você não pagou o DAS de um mês, aquele período <strong>não conta para a aposentadoria</strong>. Pagar em atraso regulariza o CNPJ, mas o INSS daquele mês ainda pode precisar de análise. Consulte a Previdência Social se estiver próximo de se aposentar.</p>
        </AlertBox>

        {/* AD MEIO */}
        <AdSlot position="meio" />

        {/* Parcelamento */}
        <section aria-labelledby="parcela-title">
          <h2 id="parcela-title" className="font-serif text-2xl mb-4">Como parcelar o DAS atrasado</h2>
          <p className="text-[var(--muted)] text-sm leading-relaxed mb-5">
            Se tiver vários meses em atraso, o parcelamento é a melhor saída. Você pode parcelar em até <strong>60 meses</strong> com juros Selic.
          </p>
          <StepItem num="01" title="Acesse o Simples Nacional"
            desc={<>Entre em{" "}<ExternalLink href="https://www8.receita.fazenda.gov.br/SimplesNacional" className="text-[var(--green)] font-semibold underline">www8.receita.fazenda.gov.br/SimplesNacional</ExternalLink>{" "}e faça login com sua conta Gov.br.</>}
          />
          <StepItem num="02" title="Vá em Parcelamento → SIMEI"
            desc="No menu, clique em 'Parcelamento' e depois em 'SIMEI — Microempreendedor Individual'. O sistema vai listar todos os débitos em aberto."
          />
          <StepItem num="03" title="Simule e confirme o parcelamento"
            desc="Informe o número de parcelas desejado (mínimo R$ 50/parcela). O sistema mostra o valor de cada prestação com os juros. Confirme para gerar o primeiro DAS parcelado."
          />
          <StepItem num="04" title="Pague as parcelas mensalmente"
            desc="Cada parcela tem um DAS diferente, gerado mensalmente. Configure um lembrete para não atrasar novamente."
            isLast
          />
        </section>

        {/* Interlinking expandido */}
        <AlertBox type="info">
          <p className="font-semibold mb-2">🔗 Veja também nesses casos</p>
          <ul className="space-y-1 text-sm">
            <li>→ <InternalLink href="/calculadora-das-mei">Calculadora de DAS MEI</InternalLink> — simule multa e valor total</li>
            <li>→ <InternalLink href="/como-consultar-debitos-mei">Como consultar débitos do MEI</InternalLink> — veja tudo que está em aberto</li>
            <li>→ <InternalLink href="/como-emitir-das-mei">Como emitir o DAS mensal</InternalLink> — guia completo passo a passo</li>
            <li>→ <InternalLink href="/golpe-das-mei-boleto-falso">Golpe do DAS e boleto falso</InternalLink> — saiba identificar fraudes</li>
            <li>→ <InternalLink href="/mei-irregular-como-regularizar">MEI irregular: como regularizar</InternalLink> — situação do CNPJ</li>
          </ul>
        </AlertBox>

        <AlertBox type="success">
          <p className="font-semibold mb-1">✅ Regularizou? Não deixe atrasar de novo.</p>
          <p>Veja como <InternalLink href="/como-pagar-das-automatico">configurar o pagamento automático do DAS</InternalLink> e nunca mais esquecer o vencimento. O prazo é sempre o dia 20 de cada mês.</p>
        </AlertBox>

        <section aria-labelledby="faq-title">
          <h2 id="faq-title" className="font-serif text-2xl mb-4">Dúvidas frequentes</h2>
          <div className="space-y-2">
            <FaqItem q="Posso pagar o DAS atrasado pelo app do banco?" a="Sim, desde que use o boleto com o valor já corrigido gerado pelo PGMEI. Nunca pague o valor original do mês — será recusado." />
            <FaqItem q="O CNPJ fica irregular enquanto estiver em atraso?" a="Sim. Com débitos em atraso, seu CNPJ pode ficar com situação 'irregular', o que impede emissão de certidões e pode travar contratos." />
            <FaqItem q="Parcelamento aparece no nome (Serasa/SPC)?" a="Débitos tributários federais não aparecem no Serasa/SPC diretamente, mas a inscrição na Dívida Ativa pode gerar restrições em certidões." />
            <FaqItem q="Posso parcelar apenas alguns meses e pagar outros à vista?" a="Sim. Você pode gerar o DAS atrasado de meses específicos e pagar à vista, e usar o parcelamento apenas para os demais. O sistema trata cada competência separadamente." />
            <FaqItem q="Qual o valor mínimo de cada parcela?" a="O valor mínimo de cada parcela no parcelamento do Simples Nacional é R$ 50,00. Se o total de débitos dividido pelo número de parcelas ficar abaixo disso, você precisará reduzir o número de parcelas." />
            <FaqItem q="Depois de pagar o atrasado, preciso fazer alguma coisa extra?" a={<>Sim: verifique se o DAS atrasado consta corretamente na sua <InternalLink href="/como-declarar-dasn-simei">declaração anual DASN-SIMEI</InternalLink>. Guarde todos os comprovantes.</>} />
          </div>
        </section>

        {/* AD FINAL */}
        <AdSlot position="final" />

      </div>

      <RelatedPages current="/das-atrasado" />
    </main>
  );
}
