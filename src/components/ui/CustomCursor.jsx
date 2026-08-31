import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiGit,
} from 'react-icons/si';

const CustomCursor = () => {
  const ringRef = useRef(null);

  const pos = useRef({
    x: -200,
    y: -200,
  });

  const ring = useRef({
    x: -200,
    y: -200,
  });

  const rafId = useRef(null);

  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [techIndex, setTechIndex] = useState(0);

  /*
  ==========================================================
  TECHNOLOGIES
  ==========================================================
  */

  const technologies = [
    {
      name: 'React',
      icon: SiReact,
      color: '#61DAFB',
    },
    {
      name: 'Node.js',
      icon: SiNodedotjs,
      color: '#68A063',
    },
    {
      name: 'MongoDB',
      icon: SiMongodb,
      color: '#47A248',
    },
    {
      name: 'HTML5',
      icon: SiHtml5,
      color: '#E34F26',
    },
    {
      name: 'CSS3',
      icon: SiCss,
      color: '#1572B6',
    },
    {
      name: 'JavaScript',
      icon: SiJavascript,
      color: '#F7DF1E',
    },
    {
      name: 'TypeScript',
      icon: SiTypescript,
      color: '#3178C6',
    },
    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
      color: '#06B6D4',
    },
    {
      name: 'Git',
      icon: SiGit,
      color: '#F05032',
    },
  ];

  /*
  ==========================================================
  TOUCH DEVICE
  ==========================================================
  */

  const isTouchDevice =
    typeof window !== 'undefined' &&
    window.matchMedia('(pointer: coarse)').matches;

  /*
  ==========================================================
  CURRENT ICON
  ==========================================================
  */

  const CurrentIcon =
    technologies[techIndex].icon;

  const currentColor =
    technologies[techIndex].color;

  /*
  ==========================================================
  AUTOMATIC ICON LOOP
  ==========================================================
  */

  useEffect(() => {
    if (isTouchDevice) return;

    const interval = setInterval(() => {
      setTechIndex((prev) => {
        return (
          (prev + 1) %
          technologies.length
        );
      });
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  }, [isTouchDevice]);

  /*
  ==========================================================
  MAIN CURSOR
  ==========================================================
  */

  useEffect(() => {
    if (isTouchDevice) return;

    /*
    Hover Detection
    */

    const onMove = (e) => {
      pos.current = {
        x: e.clientX,
        y: e.clientY,
      };
      if (!visible) setVisible(true);
    };

    const onMouseOver = (e) => {
      const target = e.target;
      if (!target || !target.closest) return;
      const hoverTarget = target.closest(`
        a,
        button,
        [data-cursor-hover],
        .group,
        input,
        textarea,
        select
      `);
      setHovering(Boolean(hoverTarget));
    };

    /*
    Mouse Down
    */

    const onDown = () => {
      setClicking(true);
    };

    /*
    Mouse Up
    */

    const onUp = () => {
      setClicking(false);
    };

    /*
    Mouse Leave
    */

    const onLeave = () => {
      setVisible(false);
      setHovering(false);
    };

    /*
    Mouse Enter
    */

    const onEnter = () => {
      setVisible(true);
    };

    /*
    Event Listeners
    */

    window.addEventListener(
      'mousemove',
      onMove,
      { passive: true }
    );

    window.addEventListener(
      'mouseover',
      onMouseOver,
      { passive: true }
    );

    window.addEventListener(
      'mousedown',
      onDown,
      { passive: true }
    );

    window.addEventListener(
      'mouseup',
      onUp,
      { passive: true }
    );

    document.documentElement.addEventListener(
      'mouseleave',
      onLeave,
      { passive: true }
    );

    document.documentElement.addEventListener(
      'mouseenter',
      onEnter,
      { passive: true }
    );

    /*
    ========================================================
    FAST SMOOTH CURSOR
    ========================================================
    */

    const tick = () => {
      if (ringRef.current) {

        /*
        Faster follow speed:
        0.5 = super fast
        */

        ring.current.x +=
          (
            pos.current.x -
            ring.current.x
          ) * 0.7;

        ring.current.y +=
          (
            pos.current.y -
            ring.current.y
          ) * 0.7;

        ringRef.current.style.transform = `
          translate3d(
            ${ring.current.x}px,
            ${ring.current.y}px,
            0
          )
        `;
      }

      rafId.current =
        requestAnimationFrame(
          tick
        );
    };

    rafId.current =
      requestAnimationFrame(
        tick
      );

    /*
    Cleanup
    */

    return () => {
      window.removeEventListener(
        'mousemove',
        onMove
      );

      window.removeEventListener(
        'mouseover',
        onMouseOver
      );

      window.removeEventListener(
        'mousedown',
        onDown
      );

      window.removeEventListener(
        'mouseup',
        onUp
      );

      document.documentElement.removeEventListener(
        'mouseleave',
        onLeave
      );

      document.documentElement.removeEventListener(
        'mouseenter',
        onEnter
      );

      if (rafId.current) {
        cancelAnimationFrame(
          rafId.current
        );
      }
    };
  }, [isTouchDevice]);

  /*
  ==========================================================
  MOBILE
  ==========================================================
  */

  if (isTouchDevice) {
    return null;
  }

  /*
  ==========================================================
  CURSOR SIZE
  ==========================================================
  */

  const ringSize = clicking
    ? 62
    : hovering
      ? 50
      : 60;

  const iconSize = clicking
    ? 30
    : hovering
      ? 40
      : 36;

  /*
  ==========================================================
  RENDER
  ==========================================================
  */

  return (
    <>
      {/* =====================================================
          TECHNOLOGY RING
      ====================================================== */}

      <div
        ref={ringRef}
        className="
          fixed
          top-0
          left-0
          pointer-events-none
          z-[99998]

          flex
          items-center
          justify-center
        "
        style={{
          width: ringSize,
          height: ringSize,

          marginLeft:
            -(ringSize / 2),

          marginTop:
            -(ringSize / 2),

          borderRadius:
            '50%',

          border:
            hovering
              ? '1.5px solid rgba(255,255,255,0.85)'
              : '1.5px solid rgba(255,255,255,0.5)',

          background:
            hovering
              ? 'rgba(255,255,255,0.1)'
              : 'rgba(255,255,255,0.05)',

          opacity:
            visible ? 1 : 0,

          transition: `
            width 0.3s ease,
            height 0.3s ease,
            margin 0.3s ease,
            opacity 0.25s ease,
            background 0.3s ease,
            border-color 0.3s ease
          `,

          boxShadow: `
            0 0 25px rgba(255,255,255,0.08),
            0 0 50px rgba(255,255,255,0.04)
          `,

          willChange:
            'transform',

          overflow:
            'visible',
        }}
      >

        {/* =================================================
            TECHNOLOGY ICON
        ================================================== */}

        <AnimatePresence
          mode="wait"
        >
          <motion.div
            key={
              technologies[
                techIndex
              ].name
            }

            initial={{
              opacity: 0,
              scale: 0.75,
            }}

            animate={{
              opacity: 1,
              scale: 1,
            }}

            exit={{
              opacity: 0,
              scale: 0.75,
            }}

            transition={{
              duration: 0.25,
              ease: 'easeOut',
            }}

            className="
              flex
              items-center
              justify-center
              pointer-events-none
            "

            style={{
              width:
                iconSize + 8,

              height:
                iconSize + 8,

              flexShrink:
                0,
            }}
          >

            {/* =============================================
                ROUND ICON
            ============================================== */}

            <div
              style={{
                width:
                  iconSize + 6,

                height:
                  iconSize + 6,

                minWidth:
                  iconSize + 6,

                minHeight:
                  iconSize + 6,

                borderRadius:
                  '50%',

                display:
                  'flex',

                alignItems:
                  'center',

                justifyContent:
                  'center',

                flexShrink:
                  0,

                background:
                  'rgba(0,0,0,0.45)',

                border:
                  `1px solid ${currentColor}55`,

                boxShadow: `
                  0 0 10px
                  ${currentColor}35
                `,

                overflow:
                  'hidden',
              }}
            >

              <CurrentIcon
                size={iconSize}
                color={currentColor}

                style={{
                  display:
                    'block',

                  width:
                    iconSize,

                  height:
                    iconSize,

                  minWidth:
                    iconSize,

                  minHeight:
                    iconSize,

                  maxWidth:
                    'none',

                  maxHeight:
                    'none',

                  flexShrink:
                    0,

                  filter: `
                    drop-shadow(
                      0 0 6px
                      ${currentColor}99
                    )
                  `,
                }}
              />

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </>
  );
};

export default CustomCursor;