
const ticketsContainer = document.getElementById("tickets");

const mockTickets = [
  {
    id: "SRV-001",
    status: "NOWE",
    issue: "Brak zasilania maszyny"
  },
  {
    id: "SRV-002",
    status: "W TRAKCIE",
    issue: "Awaria falownika"
  }
];

mockTickets.forEach(ticket => {

  const div = document.createElement("div");

  div.className = "bg-slate-800 p-6 rounded-xl";

  div.innerHTML = `
    <h2 class="text-2xl font-bold">${ticket.id}</h2>
    <p class="mt-2">${ticket.issue}</p>
    <span class="text-orange-400">${ticket.status}</span>
  `;

  ticketsContainer.appendChild(div);

});
