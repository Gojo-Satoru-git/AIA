import React, { useRef, useEffect } from 'react';

export default function NetworkBackground({
  speed = 1,
  density = 50,
  color = '#00ffff',
  glow = 0.5,
  particleSize = 2,
  maxParticles = 100,
  lowPower = false,
}) {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null, radius: 150 });

  const hexToRgb = (hex) => ({
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16),
  });
  const rgbToHex = ({ r, g, b }) =>
    `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b
      .toString(16)
      .padStart(2, '0')}`;

  const currentColorRef = useRef(hexToRgb(color));
  const targetColorRef = useRef(hexToRgb(color));

  useEffect(() => {
    targetColorRef.current = hexToRgb(color);
  }, [color]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const spawnCount = 2;
    let animationFrame;
    let lastTime = 0;
    const fpsInterval = 1000 / (lowPower ? 30 : 60); // throttle FPS

    const getResponsiveDensity = () => {
      const w = window.innerWidth;
      if (w < 500) return Math.floor(density / 3);
      if (w < 900) return Math.floor(density / 1.5);
      return density;
    };

    const initParticles = () => {
      particlesRef.current = [];
      const count = getResponsiveDensity();
      for (let i = 0; i < count; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
        });
      }
    };

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseClick = (e) => {
      for (let i = 0; i < spawnCount; i++) {
        if (particlesRef.current.length >= maxParticles)
          particlesRef.current.shift();
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleMouseClick);

    const lerp = (start, end, t) => start + (end - start) * t;
    const transitionSpeed = 0.05;

    const animate = (time) => {
      if (time - lastTime < fpsInterval) {
        animationFrame = requestAnimationFrame(animate);
        return;
      }
      lastTime = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth color transition
      currentColorRef.current.r = lerp(
        currentColorRef.current.r,
        targetColorRef.current.r,
        transitionSpeed,
      );
      currentColorRef.current.g = lerp(
        currentColorRef.current.g,
        targetColorRef.current.g,
        transitionSpeed,
      );
      currentColorRef.current.b = lerp(
        currentColorRef.current.b,
        targetColorRef.current.b,
        transitionSpeed,
      );
      const currentColorHex = rgbToHex(currentColorRef.current);

      // Move & draw particles
      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, particleSize, 0, Math.PI * 2);
        ctx.fillStyle = currentColorHex;
        ctx.fill();
      });

      const connectionDistance = Math.max(canvas.width, canvas.height) / 6;

      // Particle-to-particle lines (skip heavy lines in lowPower)
      if (!lowPower) {
        for (let i = 0; i < particlesRef.current.length; i++) {
          for (let j = i + 1; j < particlesRef.current.length; j++) {
            const dx = particlesRef.current[i].x - particlesRef.current[j].x;
            const dy = particlesRef.current[i].y - particlesRef.current[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < connectionDistance) {
              ctx.beginPath();
              ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
              ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
              ctx.strokeStyle = `rgba(${currentColorRef.current.r},${
                currentColorRef.current.g
              },${currentColorRef.current.b},${
                glow * (1 - dist / connectionDistance)
              })`;
              ctx.lineWidth = 1.5;
              ctx.shadowBlur = 4;
              ctx.shadowColor = currentColorHex;
              ctx.stroke();
            }
          }
        }
      }

      // Lines to mouse
      if (mouseRef.current.x && mouseRef.current.y) {
        const mouseRadius = Math.min(canvas.width, canvas.height) / 4;
        particlesRef.current.forEach((p) => {
          const dx = p.x - mouseRef.current.x;
          const dy = p.y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseRadius) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.strokeStyle = `rgba(${currentColorRef.current.r},${
              currentColorRef.current.g
            },${currentColorRef.current.b},${glow * (1 - dist / mouseRadius)})`;
            ctx.lineWidth = 2;
            ctx.shadowBlur = lowPower ? 0 : 6;
            ctx.shadowColor = currentColorHex;
            ctx.stroke();
          }
        });
      }

      animationFrame = requestAnimationFrame(animate);
    };

    // Pause animation if page is hidden
    const handleVisibility = () => {
      if (document.hidden) cancelAnimationFrame(animationFrame);
      else animationFrame = requestAnimationFrame(animate);
    };
    document.addEventListener('visibilitychange', handleVisibility);

    animate(0);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleMouseClick);
      document.removeEventListener('visibilitychange', handleVisibility);
      cancelAnimationFrame(animationFrame);
    };
  }, [speed, density, glow, particleSize, maxParticles, lowPower]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        background: '#000000',
      }}
    />
  );
}
