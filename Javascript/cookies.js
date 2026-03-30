const cookieBanner = document.getElementById("cookie-banner");
const acceptBtn = document.getElementById("accept-cookies");
const declineBtn = document.getElementById("decline-cookies");

// ✅ Vérifie si l'utilisateur a déjà fait un choix
function checkCookies() {
    const cookieChoice = localStorage.getItem("cookieChoice");
    if (!cookieChoice) {
        cookieBanner.classList.add("show"); // affiche la bannière
    }
}

// ✅ Accepter les cookies
acceptBtn.addEventListener("click", function () {
    localStorage.setItem("cookieChoice", "accepted");
    cookieBanner.classList.remove("show");
    console.log("Cookies acceptés ✅");
});

// ✅ Refuser les cookies
declineBtn.addEventListener("click", function () {
    localStorage.setItem("cookieChoice", "declined");
    cookieBanner.classList.remove("show");
    console.log("Cookies refusés ❌");
});

// Lance la vérification au chargement
checkCookies();