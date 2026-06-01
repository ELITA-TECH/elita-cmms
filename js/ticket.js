
import { supabase } from './supabase-config.js'

document.getElementById("ticketForm").addEventListener("submit", async (e) => {

  e.preventDefault()

  const params = new URLSearchParams(window.location.search)

  const category = params.get("type")

  const ticket = {
    user_email: localStorage.getItem("user_email"),
    category: category,
    machine_name: document.getElementById("machine_name").value,
    description: document.getElementById("description").value,
    priority: document.getElementById("priority").value,
    address: document.getElementById("address").value,
    postal_code: document.getElementById("postal_code").value,
    city: document.getElementById("city").value
  }

  const { data, error } = await supabase
    .from('tickets')
    .insert([ticket])

  if(error) {
    document.getElementById("result").innerText =
      error.message

    return
  }

  document.getElementById("result").innerText =
    "Zgłoszenie zapisane"

  document.getElementById("ticketForm").reset()

})
