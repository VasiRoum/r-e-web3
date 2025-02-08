'use client';

import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create intersection observer
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    // Get all elements with scroll animation classes
    const animatedElements = document.querySelectorAll(
      '.scroll-fade-in, .scroll-scale-in, .scroll-slide-left, .scroll-slide-right, .scroll-rotate-in, .stagger-children'
    );

    // Observe each element
    animatedElements.forEach((element) => {
      observerRef.current?.observe(element);
    });

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
} 