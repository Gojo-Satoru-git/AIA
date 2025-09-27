import React, { useRef, useEffect } from 'react';

export default function NetworkBackground({
  speed = 1,
  density = 50,
  color = '#00ffff',
  glow = 0.5,
  particleSize = 2,
  maxParticles = 50,
  lowPower = false,
  // --- NEW PROPS FOR OPTIMIZATION ---
  maxConnections = 5, // Max lines from a single particle
  minDistance = 30, // The "personal space" bubble
}) {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null });
  const animationStateRef = useRef({
    connectionDistance: 0,
    mouseRadius: 0,
  });

  const hexToRgb = (hex) => ({
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16),
  });

  const currentColorRef = useRef(hexToRgb(color));
  const targetColorRef = useRef(hexToRgb(color));

  useEffect(() => {
    targetColorRef.current = hexToRgb(color);
  }, [color]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrame;
    let lastTime = 0;
    const fpsInterval = 1000 / (lowPower ? 30 : 60);

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
      animationStateRef.current.connectionDistance =
        Math.max(canvas.width, canvas.height) / 6;
      animationStateRef.current.mouseRadius =
        Math.min(canvas.width, canvas.height) / 4;
      initParticles();
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // ... mouse listeners and other setup code remain the same ...
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const lerp = (start, end, t) => start + (end - start) * t;

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
        0.05,
      );
      currentColorRef.current.g = lerp(
        currentColorRef.current.g,
        targetColorRef.current.g,
        0.05,
      );
      currentColorRef.current.b = lerp(
        currentColorRef.current.b,
        targetColorRef.current.b,
        0.05,
      );
      const { r, g, b } = currentColorRef.current;
      const fullColor = `rgb(${r},${g},${b})`;

      // Move & draw particles
      ctx.fillStyle = fullColor;
      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, particleSize, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.shadowColor = fullColor;

      // Particle-to-particle lines (with optimizations)
      if (!lowPower) {
        const connectionCounts = new Array(particlesRef.current.length).fill(0);
        ctx.lineWidth = 1.5;
        ctx.shadowBlur = 4;
        const { connectionDistance } = animationStateRef.current;

        for (let i = 0; i < particlesRef.current.length; i++) {
          if (connectionCounts[i] >= maxConnections) continue;
          for (let j = i + 1; j < particlesRef.current.length; j++) {
            if (connectionCounts[j] >= maxConnections) continue;

            const p1 = particlesRef.current[i];
            const p2 = particlesRef.current[j];
            const dist = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);

            if (dist < connectionDistance && dist > minDistance) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(${r},${g},${b},${
                glow * (1 - dist / connectionDistance)
              })`;
              ctx.stroke();
              connectionCounts[i]++;
              connectionCounts[j]++;
              if (connectionCounts[i] >= maxConnections) break;
            }
          }
        }
      }

      // --- RESTORED: Lines to mouse (Hover Effect) ---
      if (mouseRef.current.x && mouseRef.current.y) {
        ctx.lineWidth = 2;
        ctx.shadowBlur = lowPower ? 0 : 6;
        const { mouseRadius } = animationStateRef.current;
        particlesRef.current.forEach((p) => {
          const dx = p.x - mouseRef.current.x;
          const dy = p.y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // ENHANCEMENT: Added a minimum distance for mouse lines too
          if (dist < mouseRadius && dist > minDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.strokeStyle = `rgba(${r},${g},${b},${
              glow * (1 - dist / mouseRadius)
            })`;
            ctx.stroke();
          }
        });
      }

      animationFrame = requestAnimationFrame(animate);
    };

    // ... visibility handler and cleanup remain the same ...
    const handleVisibility = () => {
      if (document.hidden) cancelAnimationFrame(animationFrame);
      else animationFrame = requestAnimationFrame(animate);
    };
    document.addEventListener('visibilitychange', handleVisibility);

    animate(0);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibility);
      cancelAnimationFrame(animationFrame);
    };
  }, [
    speed,
    density,
    glow,
    particleSize,
    maxParticles,
    lowPower,
    maxConnections, // Add new props to dependency array
    minDistance,
  ]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: '#000000',
      }}
    />
  );
}
