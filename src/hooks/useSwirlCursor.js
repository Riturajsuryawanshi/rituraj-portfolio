import { useEffect } from 'react';

const useSwirlCursor = () => {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");

    const particles = [];
    const maxParticles = 100;
    const particleRadius = 1.5;
    const particleLife = 60; // frames

    let mouseX = 0;
    let mouseY = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.pointerEvents = 'none'; // Ensure clicks pass through
      canvas.style.zIndex = '9998'; // Below the fixed nav
      canvas.style.mixBlendMode = 'overlay'; // A subtle blend mode
    };

    const createParticle = (x, y) => {
      particles.push({
        x: x + (Math.random() - 0.5) * 10,
        y: y + (Math.random() - 0.5) * 10,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        life: particleLife,
        color: `var(--color-accent)` // Use the accent color, now a shade of blue
      });
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Reduce life
        p.life--;
        if (p.life <= 0) {
          particles.splice(i, 1);
          i--;
          continue;
        }

        // Apply force towards mouse, creating a swirl
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 100) { // Only affect particles close to mouse
          const angle = Math.atan2(dy, dx);
          const force = 0.05; // Strength of attraction
          const swirlForce = 0.01; // Strength of swirl

          p.vx += Math.cos(angle) * force;
          p.vy += Math.sin(angle) * force;

          // Swirl effect: perpendicular component
          p.vx += -Math.sin(angle) * swirlForce;
          p.vy += Math.cos(angle) * swirlForce;
        }

        // Dampen velocity
        p.vx *= 0.95;
        p.vy *= 0.95;

        p.x += p.vx;
        p.y += p.vy;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, particleRadius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life / particleLife; // Fade out
        ctx.fill();
      }

      requestAnimationFrame(animateParticles);
    };

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Add a few particles on mouse move
      for(let i = 0; i < 2; i++) {
        createParticle(mouseX, mouseY);
      }
    };

    window.addEventListener('resize', resizeCanvas);
    document.addEventListener('mousemove', onMouseMove);

    resizeCanvas(); // Initial resize
    animateParticles(); // Start animation loop

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', onMouseMove);
      document.body.removeChild(canvas);
    };
  }, []);
};

export default useSwirlCursor;
