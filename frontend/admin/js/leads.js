import { getLeads } from "./api.js";

const table = document.getElementById("leadTable");

// Returns the appropriate CSS class based on lead status
function badge(status) {

    switch (status) {

        case "CLIENT":
            return "badge green";

        case "CONTACTED":
            return "badge yellow";

        case "REJECTED":
            return "badge red";

        default:
            return "badge blue";
    }
}

async function loadLeads() {

    const leads = await getLeads();

    table.innerHTML = "";

    leads.forEach((lead) => {

        table.innerHTML += `
        <tr>

            <td>${lead.name}</td>

            <td>${lead.email}</td>

            <td>${lead.company ?? "-"}</td>

            <td>${lead.service ?? "-"}</td>

            <td>
                <span class="${badge(lead.status)}">
                    ${lead.status}
                </span>
            </td>

            <td>

                <button class="view">
                    <i class="fa-solid fa-eye"></i>
                </button>

                <button class="edit">
                    <i class="fa-solid fa-pen"></i>
                </button>

                <button class="delete">
                    <i class="fa-solid fa-trash"></i>
                </button>

            </td>

        </tr>
        `;
    });
}

loadLeads();