'use client';

import { useEffect, useRef, useState } from 'react';

interface UseTypewriterOptions {
  /** Milliseconds between each character while typing forward. */
  typingSpeed?: number;
  /** Milliseconds between each character while deleting. */
  deletingSpeed?: number;
  /** Milliseconds to pause once a word is fully typed, before deleting. */
  pauseDuration?: number;
}

export function useTypewriter(words: string[], options: UseTypewriterOptions = {}) {
  const { typingSpeed = 48, deletingSpeed = 28, pauseDuration = 1400 } = options;
  const [text, setText] = useState('');
  const wordIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    if (words.length === 0) return;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const currentWord = words[wordIndexRef.current];

      if (deletingRef.current) {
        charIndexRef.current -= 1;
      } else {
        charIndexRef.current += 1;
      }

      setText(currentWord.slice(0, charIndexRef.current));

      if (!deletingRef.current && charIndexRef.current >= currentWord.length) {
        deletingRef.current = true;
        timeoutId = setTimeout(tick, pauseDuration);
        return;
      }

      if (deletingRef.current && charIndexRef.current <= 0) {
        deletingRef.current = false;
        wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
      }

      timeoutId = setTimeout(tick, deletingRef.current ? deletingSpeed : typingSpeed);
    };

    timeoutId = setTimeout(tick, 400);
    return () => clearTimeout(timeoutId);
  }, [words, typingSpeed, deletingSpeed, pauseDuration]);

  return text;
}