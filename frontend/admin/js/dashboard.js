import {
    getDashboardStats,
    getRecentLeads
} from "./api.js";

document.addEventListener("DOMContentLoaded", async () => {

    try {

        // Dashboard Cards
        const stats = await getDashboardStats();

        document.getElementById("totalLeads").textContent =
            stats.total_leads;

        document.getElementById("newLeads").textContent =
            stats.new_leads;

        document.getElementById("clients").textContent =
            stats.clients;

        document.getElementById("meetings").textContent =
            stats.meetings;

        // Recent Leads Table
        const leads = await getRecentLeads();

        const table = document.getElementById("leadTable");

        table.innerHTML = "";

        leads.forEach(lead => {

            table.innerHTML += `
            <tr>

                <td>${lead.name}</td>

                <td>${lead.company ?? "-"}</td>

                <td>${lead.service ?? "-"}</td>

                <td>${lead.status}</td>

                <td>

                    <button class="view-btn">

                        <i class="fa-solid fa-eye"></i>

                    </button>

                </td>

            </tr>
            `;

        });

    }

    catch (err) {

        console.error(err);

    }

});