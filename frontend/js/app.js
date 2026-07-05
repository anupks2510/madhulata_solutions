import { initNavbar } from "./navbar.js";
import { initHero } from "./hero.js";
import { initCursorGlow } from "./cursor.js";
import { initParticles } from "./particles.js";
import { initAnimations } from "./animation.js";
import { initChatbot } from "./chatbot.js";
import { initContactForm } from "./contact.js";
import { initThreeScene } from "./three-scene.js";

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initHero();
  initCursorGlow();
  initParticles();
  initAnimations();
  initChatbot();
  initContactForm();
  initThreeScene();
});
