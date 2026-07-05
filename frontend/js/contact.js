export function initContactForm() {
  const forms = document.querySelectorAll("[data-contact-form]");

  forms.forEach((form) => {
    const message = form.querySelector("[data-form-message]");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const required = ["name", "email", "service", "description"];
      const missing = required.some((field) => !String(data.get(field) || "").trim());

      if (missing) {
        message.textContent = "Please complete the required fields before sending.";
        message.style.color = "#ffce73";
        return;
      }

      message.textContent = "Thanks. Your inquiry is ready for FastAPI integration.";
      message.style.color = "var(--color-accent)";
      form.reset();
    });
  });
}
