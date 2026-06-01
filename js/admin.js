
import { supabase } from './supabase-config.js'

async function loadTickets() {

  const { data, error } = await supabase
    .from('tickets')
    .select('*')
    .order('created_at', { ascending: false })

  if(error) {
    console.log(error)
    return
  }

  const container = document.getElementById("tickets")

  container.innerHTML = ""

  data.forEach(ticket => {

    const div = document.createElement("div")

    div.className =
      "bg-slate-800 p-6 rounded-2xl"

    div.innerHTML = `
      <div class="flex justify-between">
        <div>
          <h2 class="text-2xl font-bold">
            ${ticket.category || 'zgłoszenie'}
          </h2>

          <p class="mt-2 text-slate-300">
            ${ticket.description}
          </p>

          <p class="mt-2 text-orange-400">
            ${ticket.priority}
          </p>
        </div>

        <div class="text-right">
          <p>${ticket.city || ''}</p>
          <p>${ticket.status}</p>
        </div>
      </div>
    `

    container.appendChild(div)

  })

}

loadTickets()
