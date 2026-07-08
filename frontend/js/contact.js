import { createLead } from "./api.js";

export function initContactForm() {

    const forms = document.querySelectorAll("[data-contact-form]");

    forms.forEach((form) => {

        const message = form.querySelector("[data-form-message]");

        form.addEventListener("submit", async (event) => {

            event.preventDefault();

            const data = new FormData(form);

            const required = [
                "name",
                "email",
                "service",
                "problem"
            ];

            const missing = required.some(
                field => !String(data.get(field) || "").trim()
            );

            if (missing) {

                message.textContent =
                    "Please complete all required fields.";

                message.style.color = "#ffce73";

                return;
            }

            const leadData = {

                name: data.get("name"),

                email: data.get("email"),

                phone: data.get("phone"),

                company: data.get("company"),

                service: data.get("service"),

                budget: data.get("budget"),

                problem: data.get("problem")

            };

            try {

                message.textContent = "Sending inquiry...";

                message.style.color = "#7dd3fc";

                await createLead(leadData);

                message.textContent =
                    "✅ Inquiry sent successfully! We will contact you soon.";

                message.style.color = "#22c55e";

                form.reset();

            }
            catch (error) {

                console.error(error);

                message.textContent =
                    "❌ Unable to submit your inquiry.";

                message.style.color = "#ef4444";

            }

        });

    });

}