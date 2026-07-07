import React from 'react';

export function Footer() {
  return (
    <footer className="relative z-[1] mt-16 border-t border-white/10 bg-bg-primary/60 backdrop-blur supports-[backdrop-filter]:bg-bg-primary/40">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-3 px-4 py-10 text-center">
        <p className="text-sm text-text-primary/80">
          © {new Date().getFullYear()} Robel Yinager. All rights reserved.
        </p>
        <p className="text-xs text-text-primary/60">
          Built with Next.js, TypeScript, and Three.js.
        </p>
      </div>
    </footer>
  );
}

