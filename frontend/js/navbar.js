export function initNavbar() {
  const navbar = document.querySelector("[data-navbar]");
  const toggle = document.querySelector("[data-nav-toggle]");
  const menu = document.querySelector("[data-nav-menu]");
  const links = document.querySelectorAll(".nav-menu__link");

  if (!navbar || !toggle || !menu) return;

  const syncScrollState = () => {
    navbar.classList.toggle("is-scrolled", window.scrollY > 18);
  };

  const closeMenu = () => {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  };

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  links.forEach((link) => {
    if (link.href === window.location.href) link.classList.add("is-active");
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("scroll", syncScrollState, { passive: true });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1040) closeMenu();
  });

  syncScrollState();
}
