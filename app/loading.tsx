export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero skeleton */}
      <div className="bg-[var(--green)] py-14 px-6 animate-pulse">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="h-5 w-28 bg-white/20 rounded-full" />
          <div className="h-10 w-2/3 bg-white/20 rounded-xl" />
          <div className="h-5 w-1/2 bg-white/15 rounded-lg" />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="max-w-3xl mx-auto w-full px-6 pt-12 space-y-6 animate-pulse">
        <div className="h-4 bg-[var(--border)] rounded w-full" />
        <div className="h-4 bg-[var(--border)] rounded w-5/6" />
        <div className="h-4 bg-[var(--border)] rounded w-4/6" />

        <div className="h-32 bg-[var(--border)] rounded-2xl" />

        <div className="h-4 bg-[var(--border)] rounded w-full" />
        <div className="h-4 bg-[var(--border)] rounded w-3/4" />
        <div className="h-4 bg-[var(--border)] rounded w-5/6" />

        <div className="h-24 bg-[var(--border)] rounded-2xl" />
        <div className="h-24 bg-[var(--border)] rounded-2xl" />
        <div className="h-24 bg-[var(--border)] rounded-2xl" />
      </div>
    </div>
  );
}
