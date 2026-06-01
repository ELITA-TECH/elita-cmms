
document.getElementById("loginForm").addEventListener("submit", async (e) => {

  e.preventDefault();

  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  localStorage.setItem("user_email", email);
  localStorage.setItem("user_phone", phone);

  document.getElementById("status").innerText =
    "Logowanie zakończone sukcesem";

  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 1000);

});
