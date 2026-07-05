'use client';

import { useTypewriter } from '@/hooks/useTypewriter';
import { terminalLines, typedStatuses } from '@/data/site';

export function TerminalCard() {
  const { text: typed } = useTypewriter(typedStatuses);


  return (
    <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-[#161821] shadow-[0_30px_60px_-20px_rgba(21,23,27,0.35)]">
      <div className="flex items-center gap-2 bg-[#1C1E29] px-4 py-[13px]">
        <i className="block h-[11px] w-[11px] rounded-full bg-[#E2554F]" />
        <i className="block h-[11px] w-[11px] rounded-full bg-[#E8A33D]" />
        <i className="block h-[11px] w-[11px] rounded-full bg-[#3FAE63]" />
        <span className="ml-2 font-mono text-[11.5px] text-[#7C8094]">zsh — stack.sh</span>
      </div>
      <div className="min-h-[230px] px-5 py-[22px] font-mono text-[13.5px] leading-[1.85]">
        <p className="text-[#9BA0B5]">
          <span className="text-[#5FD4E8]">$</span> <span className="text-[#E4E6F0]">whoami</span>
        </p>
        <p className="text-[#9BA0B5]">&gt; {terminalLines.whoami}</p>
        <p>&nbsp;</p>
        <p className="text-[#9BA0B5]">
          <span className="text-[#5FD4E8]">$</span> <span className="text-[#E4E6F0]">stack --list</span>
        </p>
        <p className="text-[#9BA0B5]">
          &gt; <span className="text-[#9D8CF0]">frontend</span> :{' '}
          <span className="text-[#7FE0B5]">{terminalLines.frontend}</span>
        </p>
        <p className="text-[#9BA0B5]">
          &gt; <span className="text-[#9D8CF0]">backend</span>&nbsp; :{' '}
          <span className="text-[#7FE0B5]">{terminalLines.backend}</span>
        </p>
        <p className="text-[#9BA0B5]">
          &gt; <span className="text-[#9D8CF0]">database</span> :{' '}
          <span className="text-[#7FE0B5]">{terminalLines.database}</span>
        </p>
        <p className="text-[#9BA0B5]">
          &gt; <span className="text-[#9D8CF0]">status</span>&nbsp;&nbsp; :{' '}
          <span className="text-[#7FE0B5]">
            {typed}
            <span className="animate-blink text-[#5FD4E8]">▍</span>
          </span>
        </p>
      </div>
    </div>
  );
}