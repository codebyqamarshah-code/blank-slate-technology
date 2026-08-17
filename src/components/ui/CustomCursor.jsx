import React, { useEffect, useRef, useState } from 'react';

/**
 * CustomCursor — premium magnetic cursor for entire site.
 * Renders a small glowing dot + a larger lagging ring.
 * Hidden on mobile (touch devices).
 */
const CustomCursor = () => {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const pos     = useRef({ x: -200, y: -200 });
  const ring    = useRef({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const rafId = useRef(null);

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };
    const onDown  = () => setClicking(true);
    const onUp    = () => setClicking(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    // Detect hoverable elements for the "hover" state (scale-up ring)
    const addHoverListeners = () => {
      const targets = document.querySelectorAll(
        'a, button, [data-cursor-hover], .group, input, textarea, select'
      );
      targets.forEach(el => {
        el.addEventListener('mouseenter', () => setHovering(true));
        el.addEventListener('mouseleave', () => setHovering(false));
      });
    };
    addHoverListeners();
    // Re-add after navigation changes
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);

    // rAF loop — dot snaps instantly, ring lags behind
    const tick = () => {
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
      }
      if (ringRef.current) {
        ring.current.x += (pos.current.x - ring.current.x) * 0.35;
        ring.current.y += (pos.current.y - ring.current.y) * 0.35;
        ringRef.current.style.transform =
          `translate(${ring.current.x - 20}px, ${ring.current.y - 20}px)`;
      }
      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
      cancelAnimationFrame(rafId.current);
      observer.disconnect();
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <>
      {/* Tiny glowing dot — follows cursor exactly */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: '#ffffff',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s, width 0.2s, height 0.2s',
          willChange: 'transform',
        }}
      />

      {/* Lagging ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          width: clicking ? 32 : hovering ? 52 : 40,
          height: clicking ? 32 : hovering ? 52 : 40,
          borderRadius: '50%',
          border: '1.5px solid rgba(255,255,255,0.45)',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s, width 0.25s cubic-bezier(0.22,1,0.36,1), height 0.25s cubic-bezier(0.22,1,0.36,1), border-color 0.3s',
          willChange: 'transform',
          backdropFilter: hovering ? 'blur(2px)' : 'none',
          backgroundColor: hovering ? 'rgba(255,255,255,0.04)' : 'transparent',
        }}
      />
    </>
  );
};

export default CustomCursor;
