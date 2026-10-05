import { useEffect, useState, useCallback } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useIntersectionObserver(options: UseIntersectionObserverOptions = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [node, setNode] = useState<HTMLElement | null>(null);

  const ref = useCallback((el: HTMLElement | null) => {
    setNode(el);
  }, []);

  useEffect(() => {
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [node, options.threshold, options.rootMargin]);

  return { ref, isIntersecting };
}
