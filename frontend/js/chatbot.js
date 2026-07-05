const responses = [
  "I can help map your use case to Agentic AI, RAG, automation, or a custom AI roadmap.",
  "For enterprise AI, we usually begin with discovery, data readiness, architecture, and a secure pilot.",
  "Madhulata Solutions can prototype LangChain and LangGraph workflows before production hardening.",
  "A future FastAPI endpoint can replace this dummy response while keeping the same UI contract."
];

export function initChatbot() {
  const widget = document.querySelector("[data-chat-widget]");
  if (!widget) return;

  const toggle = widget.querySelector("[data-chat-toggle]");
  const panel = widget.querySelector("[data-chat-panel]");
  const close = widget.querySelector("[data-chat-close]");
  const form = widget.querySelector("[data-chat-form]");
  const input = widget.querySelector("[data-chat-input]");
  const messages = widget.querySelector("[data-chat-messages]");

  const appendMessage = (text, type = "bot") => {
    const item = document.createElement("div");
    item.className = `chat-message ${type === "user" ? "chat-message--user" : ""}`;
    item.textContent = text;
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
  };

  const setOpen = (open) => {
    panel.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("chat-open", open && window.innerWidth < 560);
    if (open) input.focus();
  };

  toggle.addEventListener("click", () => setOpen(!panel.classList.contains("is-open")));
  close.addEventListener("click", () => setOpen(false));

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    appendMessage(text, "user");
    input.value = "";
    window.setTimeout(() => {
      appendMessage(responses[Math.floor(Math.random() * responses.length)]);
    }, 420);
  });
}
