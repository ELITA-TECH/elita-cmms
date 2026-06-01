
import { supabase } from './supabase-config.js'

document.getElementById("loginForm").addEventListener("submit", async (e) => {

  e.preventDefault()

  const email = document.getElementById("email").value
  const phone = document.getElementById("phone").value

  localStorage.setItem("user_email", email)

  const { data, error } = await supabase
    .from('users')
    .upsert([
      {
        email: email,
        phone: phone
      }
    ])

  if(error) {
    document.getElementById("status").innerText =
      error.message

    return
  }

  document.getElementById("status").innerText =
    "Zalogowano poprawnie"

  setTimeout(() => {
    window.location.href = "dashboard.html"
  }, 1000)

})
