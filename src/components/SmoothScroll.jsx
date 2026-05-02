import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

const SmoothScroll = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Engaged highest-end mathematical scroll configurations
    const lenis = new Lenis({
      duration: 1.8,             // Extreme deceleration 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Liquid easing curve
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1.2,      // Boosted wheel responsiveness
      smoothTouch: false,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
