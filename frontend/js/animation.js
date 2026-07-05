export function initAnimations() {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 760,
      easing: "ease-out-cubic",
      once: true,
      offset: 80
    });
  }

  if (typeof gsap !== "undefined") {
    gsap.from("[data-hero-animate]", {
      y: 24,
      opacity: 0,
      duration: 0.9,
      stagger: 0.12,
      ease: "power3.out"
    });
  }

  document.querySelectorAll("[data-count]").forEach((item) => {
    const target = Number(item.dataset.count);
    if (!target) return;

    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        let value = 0;
        const step = Math.max(1, Math.round(target / 64));
        const tick = () => {
          value = Math.min(target, value + step);
          item.textContent = `${value}${item.dataset.suffix || ""}`;
          if (value < target) requestAnimationFrame(tick);
        };
        tick();
        instance.disconnect();
      });
    }, { threshold: 0.5 });

    observer.observe(item);
  });
}
