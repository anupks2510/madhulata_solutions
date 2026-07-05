export function initParticles() {
  const canvas = document.querySelector("[data-particles]");
  if (!canvas) return;

  const context = canvas.getContext("2d");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let width = 0;
  let height = 0;
  let particles = [];

  const resize = () => {
    width = canvas.width = window.innerWidth * window.devicePixelRatio;
    height = canvas.height = window.innerHeight * window.devicePixelRatio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    const count = Math.min(92, Math.floor(window.innerWidth / 18));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.22 * window.devicePixelRatio,
      vy: (Math.random() - 0.5) * 0.22 * window.devicePixelRatio,
      radius: (Math.random() * 1.6 + 0.6) * window.devicePixelRatio
    }));
  };

  const draw = () => {
    context.clearRect(0, 0, width, height);
    context.fillStyle = "rgba(91, 231, 255, 0.7)";
    context.strokeStyle = "rgba(120, 213, 255, 0.12)";

    particles.forEach((particle, index) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > height) particle.vy *= -1;

      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fill();

      for (let i = index + 1; i < particles.length; i += 1) {
        const other = particles[i];
        const distance = Math.hypot(particle.x - other.x, particle.y - other.y);
        if (distance < 135 * window.devicePixelRatio) {
          context.globalAlpha = 1 - distance / (135 * window.devicePixelRatio);
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(other.x, other.y);
          context.stroke();
          context.globalAlpha = 1;
        }
      }
    });

    if (!prefersReducedMotion) requestAnimationFrame(draw);
  };

  window.addEventListener("resize", resize);
  resize();
  draw();
}
