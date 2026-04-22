"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="max-w-md text-center space-y-6">
        <div className="text-5xl">😕</div>
        <h1 className="font-serif text-3xl text-[var(--ink)]">
          Algo deu errado
        </h1>
        <p className="text-[var(--muted)] text-sm leading-relaxed">
          Ocorreu um erro ao carregar esta página. Tente novamente — se o
          problema persistir, pode ser algo temporário.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <button
            onClick={reset}
            className="bg-[var(--green)] text-white font-semibold px-6 py-2.5 rounded-lg text-sm hover:opacity-90 transition-opacity"
          >
            Tentar novamente
          </button>
          <Link
            href="/"
            className="bg-white border border-[var(--border)] text-[var(--ink)] font-medium px-6 py-2.5 rounded-lg text-sm hover:border-[var(--green)] transition-colors"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </main>
  );
}
