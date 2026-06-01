
document.getElementById("ticketForm").addEventListener("submit", async (e) => {

  e.preventDefault();

  const ticket = {
    user_email: localStorage.getItem("user_email"),
    machine_name: document.getElementById("machine_name").value,
    description: document.getElementById("description").value,
    priority: document.getElementById("priority").value,
    address: document.getElementById("address").value,
    postal_code: document.getElementById("postal_code").value,
    city: document.getElementById("city").value
  };

  console.log(ticket);

  document.getElementById("result").innerText =
    "Zgłoszenie zapisane";

});
