// const API_URL = "http://127.0.0.1:8000/api/v1/ai/chat";

const API_URL="https://madhulata-api.onrender.com/api/v1/ai/chat"
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

    item.className =
        `chat-message ${type === "user" ? "chat-message--user" : ""}`;

    if(type === "bot"){

        item.innerHTML = marked.parse(text);

    }

    else{

        item.textContent = text;

    }

    messages.appendChild(item);

    messages.scrollTop = messages.scrollHeight;

};


function showTyping(){

    const typing = document.createElement("div");

    typing.className = "chat-message typing-message";

    typing.id = "typingIndicator";

    typing.innerHTML = `
        <div class="typing">

            <span></span>
            <span></span>
            <span></span>

        </div>

        <small>Madhulata AI is typing...</small>
    `;

    messages.appendChild(typing);

    messages.scrollTop = messages.scrollHeight;

}


function removeTyping(){

    const typing = document.getElementById("typingIndicator");

    if(typing){

        typing.remove();

    }

}

  function setOpen(open) {
    panel.classList.toggle("is-open", open);

    toggle.setAttribute("aria-expanded", String(open));

    document.body.classList.toggle(
      "chat-open",
      open && window.innerWidth < 560
    );

    if (open) input.focus();
  }

  toggle.addEventListener("click", () => {
    setOpen(!panel.classList.contains("is-open"));
  });

  close.addEventListener("click", () => {
    setOpen(false);
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const userMessage = input.value.trim();

    if (!userMessage) return;

    appendMessage(userMessage, "user");

    input.value = "";

    showTyping();

    try {

      const response = await fetch(API_URL, {

        method: "POST",

        headers: {

          "Content-Type": "application/json"

        },

        body: JSON.stringify({

          message: userMessage

        })

      });

      const data = await response.json();

      removeTyping();

      let html = data.answer;

if (data.sources.length > 0) {

    html += "\n\n---\n\n### 📚 Sources\n";

    data.sources.forEach(source => {

        html += `- ${source.file} (Page ${source.page})\n`;

    });

}

appendMessage(html);

    } catch (error) {

      console.error(error);

      removeTyping();

      appendMessage(
        "Sorry, I couldn't connect to the AI server."
      );

    }

  });

}