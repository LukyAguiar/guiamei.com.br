"use client";

import { useState } from "react";
import { Badge, AlertBox, RelatedPages, InternalLink } from "../components/ui";

const LIMITE_ANUAL = 81000;
const MEDIA_MENSAL = LIMITE_ANUAL / 12;

export default function Page() {
  const [mesAbertura, setMesAbertura] = useState(1);
  const [faturadoAteAgora, setFaturadoAteAgora] = useState(0);
  const mesAtual = new Date().getMonth() + 1; // 1-12

  const mesesNoAno = 12 - mesAbertura + 1;
  const limiteProportional = Math.round(MEDIA_MENSAL * mesesNoAno);
  const restante = Math.max(limiteProportional - faturadoAteAgora, 0);
  const percentual = Math.min((faturadoAteAgora / limiteProportional) * 100, 100);
  const mesesRestantes = 12 - mesAtual + 1;
  const mediaMensalRestante = mesesRestantes > 0 ? Math.round(restante / mesesRestantes) : 0;

  const status =
    percentual >= 100 ? "critico" :
    percentual >= 80 ? "alerta" :
    "ok";

  const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  return (
    <main>
      <section className="relative overflow-hidden bg-[var(--green)] text-white">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/[0.04]" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/[0.04]" />
        <div className="relative max-w-3xl mx-auto px-6 py-14">
          <Badge variant="white">Simulador · Faturamento 2026</Badge>
          <h1 className="font-serif text-4xl md:text-5xl mt-4 mb-4 leading-tight">Simulador de Faturamento MEI</h1>
          <p className="text-white/85 text-lg leading-relaxed max-w-xl">
            Veja quanto você ainda pode faturar no ano sem ultrapassar o limite do MEI — com cálculo proporcional automático.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-8">

        <section className="bg-white border border-[var(--border)] rounded-2xl p-6 shadow-sm">
          <h2 className="font-serif text-xl mb-6">Calcule seu limite</h2>

          <div className="space-y-6">
            {/* Mês de abertura */}
            <div>
              <label className="block text-sm font-semibold mb-2">Em qual mês você abriu (ou abrirá) o MEI?</label>
              <select
                value={mesAbertura}
                onChange={(e) => setMesAbertura(Number(e.target.value))}
                className="w-full border border-[var(--border)] rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-[var(--green)]"
              >
                {meses.map((m, i) => (
                  <option key={i} value={i + 1}>{m}</option>
                ))}
              </select>
            </div>

            {/* Faturado até agora */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Quanto você já faturou em 2026? (R$)
              </label>
              <input
                type="number"
                min={0}
                max={150000}
                value={faturadoAteAgora}
                onChange={(e) => setFaturadoAteAgora(Number(e.target.value))}
                placeholder="Ex: 25000"
                className="w-full border border-[var(--border)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--green)]"
              />
            </div>
          </div>

          {/* Barra de progresso */}
          <div className="mt-6">
            <div className="flex justify-between text-xs text-[var(--muted)] mb-1">
              <span>R$ 0</span>
              <span>Limite: R$ {limiteProportional.toLocaleString("pt-BR")}</span>
            </div>
            <div className="w-full bg-[var(--border)] rounded-full h-4 overflow-hidden">
              <div
                className={`h-4 rounded-full transition-all duration-500 ${
                  status === "critico" ? "bg-red-500" :
                  status === "alerta" ? "bg-[var(--gold)]" :
                  "bg-[var(--green)]"
                }`}
                style={{ width: `${percentual}%` }}
              />
            </div>
            <p className="text-xs text-[var(--muted)] mt-1 text-right">{percentual.toFixed(1)}% utilizado</p>
          </div>

          {/* Cards de resultado */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
            <div className={`rounded-xl p-4 border-2 text-center ${
              status === "critico" ? "bg-red-50 border-red-200" :
              status === "alerta" ? "bg-[var(--gold-light)] border-[#f0d8a8]" :
              "bg-[var(--green-light)] border-[#b2ddc4]"
            }`}>
              <p className="text-xs text-[var(--muted)] mb-1">Limite proporcional</p>
              <p className={`font-serif text-2xl ${status === "critico" ? "text-red-600" : status === "alerta" ? "text-[var(--gold)]" : "text-[var(--green)]"}`}>
                R$ {limiteProportional.toLocaleString("pt-BR")}
              </p>
              <p className="text-xs text-[var(--muted)]">{mesesNoAno} meses no ano</p>
            </div>
            <div className={`rounded-xl p-4 border-2 text-center ${restante === 0 ? "bg-red-50 border-red-200" : "bg-white border-[var(--border)]"}`}>
              <p className="text-xs text-[var(--muted)] mb-1">Ainda pode faturar</p>
              <p className={`font-serif text-2xl ${restante === 0 ? "text-red-600" : "text-[var(--ink)]"}`}>
                {restante === 0 ? "Limite atingido" : `R$ ${restante.toLocaleString("pt-BR")}`}
              </p>
              <p className="text-xs text-[var(--muted)]">até 31/12/2026</p>
            </div>
            <div className="rounded-xl p-4 border-2 text-center bg-white border-[var(--border)]">
              <p className="text-xs text-[var(--muted)] mb-1">Média por mês (restante)</p>
              <p className="font-serif text-2xl text-[var(--ink)]">
                {mesesRestantes > 0 && restante > 0 ? `R$ ${mediaMensalRestante.toLocaleString("pt-BR")}` : "—"}
              </p>
              <p className="text-xs text-[var(--muted)]">{mesesRestantes} meses restantes</p>
            </div>
          </div>

          {/* Alerta situacional */}
          {status === "critico" && (
            <div className="mt-4 bg-red-50 border border-red-200 rounded-xl p-4 text-sm">
              <p className="font-semibold text-red-700 mb-1">🔴 Limite atingido ou ultrapassado</p>
              <p className="text-[var(--muted)]">Você precisa verificar se ultrapassou o limite. Veja o que fazer: <InternalLink href="/mei-ultrapassou-limite-o-que-fazer">MEI ultrapassou o limite</InternalLink>.</p>
            </div>
          )}
          {status === "alerta" && (
            <div className="mt-4 bg-[var(--gold-light)] border border-[#f0d8a8] rounded-xl p-4 text-sm">
              <p className="font-semibold text-[var(--gold)] mb-1">🟡 Atenção: você está acima de 80% do limite</p>
              <p className="text-[var(--muted)]">É hora de planejar. Se continuar nesse ritmo, pode ultrapassar o limite antes do fim do ano. Veja as opções: <InternalLink href="/mei-ultrapassou-limite-o-que-fazer">o que fazer se ultrapassar</InternalLink>.</p>
            </div>
          )}
        </section>

        <AlertBox type="info">
          <p className="font-semibold mb-1">📌 O limite é anual e proporcional</p>
          <p className="text-sm">O MEI que abriu no meio do ano tem limite proporcional ao número de meses restantes. Quem abriu em janeiro tem R$ 81.000 disponíveis. Quem abriu em julho tem R$ 40.500. Veja mais: <InternalLink href="/quanto-mei-pode-faturar-por-mes">quanto o MEI pode faturar por mês</InternalLink>.</p>
        </AlertBox>

        <section aria-labelledby="tabela-title">
          <h2 id="tabela-title" className="font-serif text-2xl mb-4">Tabela de limites por mês de abertura (2026)</h2>
          <div className="bg-white border border-[var(--border)] rounded-2xl overflow-hidden text-sm">
            <div className="grid grid-cols-3 bg-[var(--paper)] px-5 py-3 text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
              <span>Mês de abertura</span><span>Meses no ano</span><span className="text-right">Limite proporcional</span>
            </div>
            {meses.map((m, i) => {
              const mesesNoAno = 12 - i;
              const limite = Math.round(MEDIA_MENSAL * mesesNoAno);
              return (
                <div key={i} className="grid grid-cols-3 px-5 py-3 border-t border-[var(--border)]">
                  <span>{m}</span>
                  <span className="text-[var(--muted)]">{mesesNoAno} meses</span>
                  <span className="text-right font-bold text-[var(--green)]">R$ {limite.toLocaleString("pt-BR")}</span>
                </div>
              );
            })}
          </div>
        </section>

      </div>

      <RelatedPages current="/simulador-faturamento-mei" />
    </main>
  );
}
