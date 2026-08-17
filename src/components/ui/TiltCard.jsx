import React, { useRef, useCallback } from 'react';

/**
 * TiltCard — wraps any content with a smooth CSS 3D tilt effect on hover.
 * Works like premium tech agency card interactions.
 *
 * Props:
 *   className    — additional classes on the wrapper
 *   intensity    — how strong the tilt is (default 12 degrees)
 *   glare        — show a specular glare highlight (default true)
 *   children     — the card content
 */
const TiltCard = ({
  children,
  className = '',
  intensity = 12,
  glare = true,
  scale = 1.02,
}) => {
  const cardRef  = useRef(null);
  const glareRef = useRef(null);
  const rafRef   = useRef(null);
  const state    = useRef({ rotX: 0, rotY: 0, glareX: 50, glareY: 50, active: false });

  const update = useCallback(() => {
    const { rotX, rotY, glareX, glareY, active } = state.current;
    if (!cardRef.current) return;

    if (active) {
      cardRef.current.style.transform =
        `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(${scale},${scale},${scale})`;
    } else {
      cardRef.current.style.transform =
        `perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`;
    }

    if (glare && glareRef.current) {
      glareRef.current.style.background =
        `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.12) 0%, transparent 65%)`;
      glareRef.current.style.opacity = active ? '1' : '0';
    }
  }, [glare, scale]);

  const onMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width  / 2;
    const cy = rect.height / 2;
    const rotY =  ((x - cx) / cx) * intensity;
    const rotX = -((y - cy) / cy) * intensity;

    state.current = {
      rotX,
      rotY,
      glareX: (x / rect.width)  * 100,
      glareY: (y / rect.height) * 100,
      active: true,
    };

    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(update);
  }, [intensity, update]);

  const onMouseLeave = useCallback(() => {
    state.current.active = false;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(update);
  }, [update]);

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`relative ${className}`}
      style={{ transition: 'transform 0.55s cubic-bezier(0.22,1,0.36,1)', willChange: 'transform', transformStyle: 'preserve-3d' }}
    >
      {children}
      {/* Glare overlay */}
      {glare && (
        <div
          ref={glareRef}
          className="absolute inset-0 rounded-[inherit] pointer-events-none z-10"
          style={{ opacity: 0, transition: 'opacity 0.3s', mixBlendMode: 'overlay' }}
        />
      )}
    </div>
  );
};

export default TiltCard;
