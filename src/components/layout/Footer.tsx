import { site } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t border-line py-[34px]">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-3.5 px-8">
        <p className="font-mono text-[12.5px] text-ink-3">
          © {new Date().getFullYear()} {site.name} — built with Next.js, TypeScript &amp; Three.js
        </p>
        <a href="#home" className="font-mono text-[12.5px] text-ink-3 hover:text-ink">
          back to top ↑
        </a>
      </div>
    </footer>
  );
}