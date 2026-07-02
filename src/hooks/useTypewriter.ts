'use client';

import { useEffect, useRef, useState } from 'react';

interface UseTypewriterOptions {
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  loop?: boolean;
}

export function useTypewriter(
  words: string[],
  options: UseTypewriterOptions = {}
) {
  const {
    typingSpeed = 80,
    deletingSpeed = 40,
    pauseDuration = 1800,
    loop = true
  } = options;

  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (words.length === 0) return;
    if (isDone) return;

    const currentWord = words[wordIndex];

    function tick() {
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
      } else {
        setText((prev) => currentWord.slice(0, prev.length + 1));
      }
    }

    if (!isDeleting && text === currentWord) {
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
      return;
    }

    if (isDeleting && text === '') {
      setIsDeleting(false);
      const nextIndex = (wordIndex + 1) % words.length;
      if (nextIndex === 0 && !loop) {
        setIsDone(true);
        return;
      }
      setWordIndex(nextIndex);
      return;
    }

    timeoutRef.current = setTimeout(
      tick,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    loop,
    isDone
  ]);

  return { text, isDeleting, wordIndex };
}