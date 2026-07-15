import requests

N8N_WEBHOOK = "http://localhost:5678/webhook-test/new-lead"


def send_new_lead(lead):

    payload = {
        "id": lead.id,
        "name": lead.name,
        "email": lead.email,
        "phone": lead.phone,
        "company": lead.company,
        "service": lead.service,
        "budget": lead.budget,
        "problem": lead.problem,
        "status": lead.status,
    }

    try:

        response = requests.post(
            N8N_WEBHOOK,
            json=payload,
            timeout=5
        )

        response.raise_for_status()

        print("✅ Lead sent to n8n successfully.")

    except requests.RequestException as e:

        print(f"❌ Failed to send lead to n8n: {e}")