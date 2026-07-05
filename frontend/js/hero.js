export function initHero() {
  const typedTarget = document.querySelector("[data-typed]");
  if (typedTarget && typeof Typed !== "undefined") {
    new Typed(typedTarget, {
      strings: ["Agentic AI", "RAG Systems", "Enterprise Automation", "LangGraph Workflows"],
      typeSpeed: 48,
      backSpeed: 26,
      backDelay: 1600,
      loop: true
    });
  }

  const lottieTarget = document.querySelector("[data-lottie]");
  if (lottieTarget && typeof lottie !== "undefined") {
    lottie.loadAnimation({
      container: lottieTarget,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "assets/lottie/ai-pulse.json"
    });
  }
}
