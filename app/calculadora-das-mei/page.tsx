"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { Badge, AlertBox, RelatedPages, InternalLink } from "../components/ui";
import Link from "next/link";

const TAXA_MULTA_DIA = 0.0033;
const MULTA_MAX = 0.20;
const SELIC_MENSAL = 0.0107;

function calcularDAS(valorBase: number, mesesAtraso: number) {
  if (mesesAtraso === 0) return { total: valorBase, multa: 0, juros: 0 };
  const diasAtraso = mesesAtraso * 30;
  const multa = Math.min(valorBase * TAXA_MULTA_DIA * diasAtraso, valorBase * MULTA_MAX);
  const juros = valorBase * SELIC_MENSAL * mesesAtraso;
  const total = valorBase + multa + juros;
  return { total, multa, juros };
}

const valores: Record<string, number> = {
  comercio: 82.05,
  servicos: 86.05,
  ambos: 87.05,
};

export default function Page() {
  const [atividade, setAtividade] = useState("servicos");
  const [meses, setMeses] = useState(0);

  const base = valores[atividade];
  const { total, multa, juros } = calcularDAS(base, meses);

  return (
    <main>
      <section className="relative overflow-hidden bg-[var(--green)] text-white">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/[0.04]" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/[0.04]" />
        <div className="relative max-w-3xl mx-auto px-6 py-14">
          <Badge variant="white">Calculadora · DAS 2026</Badge>
          <h1 className="font-serif text-4xl md:text-5xl mt-4 mb-4 leading-tight">Calculadora do DAS MEI</h1>
          <p className="text-white/85 text-lg leading-relaxed max-w-xl">
            Calcule o valor exato do DAS com multa e juros por atraso — atualizado para 2026.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-10">
        <section className="bg-white border border-[var(--border)] rounded-2xl p-6 shadow-sm">
          <h2 className="font-serif text-xl mb-6">Configure o cálculo</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Tipo de atividade</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { key: "comercio", label: "Comércio / Indústria", valor: "R$ 82,05" },
                  { key: "servicos", label: "Serviços", valor: "R$ 86,05" },
                  { key: "ambos", label: "Comércio + Serviços", valor: "R$ 87,05" },
                ].map((op) => (
                  <button
                    key={op.key}
                    onClick={() => setAtividade(op.key)}
                    className={`rounded-xl border-2 p-3 text-left transition-all ${atividade === op.key ? "border-[var(--green)] bg-[var(--green-light)]" : "border-[var(--border)] hover:border-[var(--green)]"}`}
                  >
                    <p className="text-xs text-[var(--muted)] leading-tight">{op.label}</p>
                    <p className={`font-bold text-sm mt-1 ${atividade === op.key ? "text-[var(--green)]" : "text-[var(--ink)]"}`}>{op.valor}</p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Meses em atraso: <span className="text-[var(--green)]">{meses} {meses === 1 ? "mês" : "meses"}</span>
              </label>
              <input
                type="range"
                min={0}
                max={24}
                value={meses}
                onChange={(e) => setMeses(Number(e.target.value))}
                className="w-full accent-[var(--green)]"
              />
              <div className="flex justify-between text-xs text-[var(--muted)] mt-1">
                <span>Em dia</span>
                <span>6 meses</span>
                <span>12 meses</span>
                <span>24 meses</span>
              </div>
            </div>
          </div>

          <div className={`mt-6 rounded-2xl p-5 ${meses > 0 ? "bg-red-50 border-2 border-red-200" : "bg-[var(--green-light)] border-2 border-[#b2ddc4]"}`}>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-3">
              {meses === 0 ? "Valor para pagamento em dia" : `Valor com ${meses} ${meses === 1 ? "mês" : "meses"} de atraso`}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[var(--muted)]">Valor base (DAS)</span>
                <span className="font-semibold">R$ {base.toFixed(2)}</span>
              </div>
              {meses > 0 && (
                <>
                  <div className="flex justify-between text-red-600">
                    <span>Multa ({Math.min(TAXA_MULTA_DIA * meses * 30 * 100, 20).toFixed(1)}%)</span>
                    <span className="font-semibold">+ R$ {multa.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-red-600">
                    <span>Juros (Selic ~{(SELIC_MENSAL * 100).toFixed(2)}%/mês)</span>
                    <span className="font-semibold">+ R$ {juros.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-red-200 pt-2" />
                </>
              )}
              <div className="flex justify-between items-center">
                <span className="font-bold text-base">Total estimado</span>
                <span className={`font-serif text-3xl ${meses > 0 ? "text-red-600" : "text-[var(--green)]"}`}>
                  R$ {total.toFixed(2)}
                </span>
              </div>
            </div>
            {meses > 0 && (
              <p className="text-xs text-[var(--muted)] mt-3">
                * Valor estimado. O valor oficial com multa e juros atualizados é calculado pelo portal PGMEI no momento da emissão do boleto. Veja como: <InternalLink href="/das-atrasado">como pagar o DAS atrasado</InternalLink>.
              </p>
            )}
          </div>
        </section>

        <AlertBox type="warning">
          <p className="font-semibold mb-1">⚠️ Esta calculadora é uma estimativa</p>
          <p className="text-sm">
            Para o valor oficial e exato com multa e juros atualizados, sempre gere o DAS pelo portal PGMEI da Receita Federal. O sistema oficial usa a taxa Selic diária atualizada. Veja como: <InternalLink href="/das-atrasado">como pagar o DAS atrasado</InternalLink>.
          </p>
        </AlertBox>

        <section aria-labelledby="tabela-title">
          <h2 id="tabela-title" className="font-serif text-2xl mb-4">Tabela de referência — DAS de serviços com atraso</h2>
          <div className="bg-white border border-[var(--border)] rounded-2xl overflow-hidden text-sm">
            <div className="grid grid-cols-4 bg-[var(--paper)] px-5 py-3 text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
              <span>Atraso</span><span>Multa</span><span>Juros</span><span className="text-right">Total</span>
            </div>
            {[1, 3, 6, 12, 18, 24].map((m) => {
              const r = calcularDAS(86.05, m);
              return (
                <div key={m} className="grid grid-cols-4 px-5 py-3 border-t border-[var(--border)]">
                  <span>{m} {m === 1 ? "mês" : "meses"}</span>
                  <span className="text-red-500">+R$ {r.multa.toFixed(2)}</span>
                  <span className="text-red-500">+R$ {r.juros.toFixed(2)}</span>
                  <span className="text-right font-bold">R$ {r.total.toFixed(2)}</span>
                </div>
              );
            })}
          </div>
        </section>

        <RelatedPages current="/calculadora-das-mei" />
      </div>
    </main>
  );
}
