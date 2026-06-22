import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-paper px-8 text-center">
      <p className="font-mono text-sm text-cyan-deep">404</p>
      <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink-2">
        The page you&apos;re looking for was moved, renamed, or never existed
        in the first place.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-[7px] bg-ink px-6 py-3 font-mono text-sm text-paper transition-all hover:bg-indigo-deep hover:-translate-y-0.5"
      >
        ← Back home
      </Link>
    </div>
  );
}