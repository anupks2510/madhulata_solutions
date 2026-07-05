export function initCursorGlow() {
  const glow = document.querySelector("[data-cursor-glow]");
  if (!glow || window.matchMedia("(pointer: coarse)").matches) return;

  let currentX = window.innerWidth / 2;
  let currentY = window.innerHeight / 2;
  let targetX = currentX;
  let targetY = currentY;

  window.addEventListener("pointermove", (event) => {
    targetX = event.clientX;
    targetY = event.clientY;
  }, { passive: true });

  const render = () => {
    currentX += (targetX - currentX) * 0.18;
    currentY += (targetY - currentY) * 0.18;
    glow.style.transform = `translate(${currentX - 170}px, ${currentY - 170}px)`;
    requestAnimationFrame(render);
  };

  render();
}
