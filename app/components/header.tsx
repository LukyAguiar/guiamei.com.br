import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-[var(--border)] bg-white sticky top-0 z-50">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl text-[var(--green)] font-bold">
          MEI<span className="text-[var(--muted)] font-sans font-normal text-base">/guia</span>
        </Link>
        <nav className="flex gap-5 text-sm text-[var(--muted)]">
          <Link href="/" className="hover:text-[var(--green)] transition-colors">Início</Link>
          <Link href="/sobre" className="hover:text-[var(--green)] transition-colors">Sobre</Link>
          <Link href="/contato" className="hover:text-[var(--green)] transition-colors">Contato</Link>
        </nav>
      </div>
    </header>
  );
}
