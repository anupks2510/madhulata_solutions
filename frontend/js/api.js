// const API_URL = "http://127.0.0.1:8000";

const API_URL="https://madhulata-api.onrender.com"

export async function createLead(data) {
    const response = await fetch(`${API_URL}/api/v1/leads/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error("Unable to create lead");
    }

    return await response.json();
}