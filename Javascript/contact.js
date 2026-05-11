document.querySelector(".card").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const token = document.querySelector(
    '[name="cf-turnstile-response"]'
  ).value; //recup token captcha

  const data = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    subject: form.subject.value,
    message: form.message.value
  };




  try {
    const res = await fetch("https://darrennode-1.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ data, "cf-turnstile-response": token })
    });

    const result = await res.json();

    if (result.success) {
      alert("✅ Message envoyé !");
      form.reset();
    } else {
      alert("❌ Erreur lors de l'envoi");
    }

  } catch (error) {
    console.error(error);
    alert("❌ Serveur inaccessible");
  }
});



