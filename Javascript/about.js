const displayBtn = document.getElementById("displayText");
const para = document.querySelectorAll(".about-hidden");
const cardMethod = document.querySelectorAll(".method");

displayBtn.addEventListener("click", function(){
    para.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add("show");
    }, index * 400);
  });
})

const aboutCard = document.querySelectorAll(".about-glass-card");

aboutCard.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateX = ((y - midY) / midY) * -10;
    const rotateY = ((x - midX) / midX) * 10;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;

    // glow dynamique
    card.style.background = `
      radial-gradient(
        circle at ${x}px ${y}px,
        rgba(255,255,255,0.15),
        rgba(255,255,255,0.05)
      )
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    
    // reset background si besoin
    card.style.background = "rgba(255, 255, 255, 0.05)";
  });
});

const observerAbout = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
        setTimeout(() => {
      entry.target.classList.add("show");
    }, index * 400);
    }
  });
}, {
  threshold: 0.3 // déclenche quand 30% visible
});

cardMethod.forEach(el => observerAbout.observe(el));
