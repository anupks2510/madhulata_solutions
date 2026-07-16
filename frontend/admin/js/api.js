const API = "http://127.0.0.1:8000/api/v1";

/* ==============================
   LEADS API
============================== */

export async function getLeads() {

    const res = await fetch(`${API}/leads/`);

    if (!res.ok) {
        throw new Error("Failed to fetch leads");
    }

    return await res.json();

}

export async function getLead(id) {

    const res = await fetch(`${API}/leads/${id}`);

    if (!res.ok) {
        throw new Error("Failed to fetch lead");
    }

    return await res.json();

}

export async function createLead(data) {

    const res = await fetch(`${API}/leads/`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(data)

    });

    if (!res.ok) {
        throw new Error("Failed to create lead");
    }

    return await res.json();

}

export async function updateLead(id, data) {

    const res = await fetch(`${API}/leads/${id}`, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(data)

    });

    if (!res.ok) {
        throw new Error("Failed to update lead");
    }

    return await res.json();

}

export async function deleteLead(id) {

    const res = await fetch(`${API}/leads/${id}`, {

        method: "DELETE"

    });

    if (!res.ok) {
        throw new Error("Failed to delete lead");
    }

    return true;

}


/* ==============================
   DASHBOARD API
============================== */

export async function getDashboardStats() {

    const res = await fetch(`${API}/dashboard/stats`);

    if (!res.ok) {
        throw new Error("Failed to fetch dashboard stats");
    }

    return await res.json();

}
export async function getRecentLeads(limit = 5) {

    const res = await fetch(`${API}/leads/`);

    if (!res.ok) {
        throw new Error("Failed to fetch recent leads");
    }

    const data = await res.json();

    return data.slice(0, limit);

}