const burger = document.getElementById("burger-menu");
const links = document.getElementById("links");
const nav = document.getElementById("nav-bar"); 
const playBtn = document.getElementById("play-icon");
const ytnWrap = document.getElementById("youtubeWrap");
const ytClose = document.getElementById("ytClose");
const iframe = document.getElementById("ytIframe");
const dots = document.querySelectorAll(".carBtn");
const comContainer = document.querySelector(".comments-container");
const comments = document.querySelectorAll(".comments");
const cards = document.querySelectorAll(".client-card");
const track = document.querySelector(".clients-container");
const cardServices = document.querySelectorAll(".card-services");
const operatedVehicle = document.querySelectorAll(".operated-vehicle");
const expertiseSubsea = document.getElementById("expertise-subsea");
const pageListener = document.getElementById("page-listener");

const videoURL = "https://www.youtube.com/embed/8eXN4ZEtb9s?autoplay=1";

burger.addEventListener("click", function(){
    links.classList.toggle("open");
    links.style.animation = "menuAnimation 0.6s ease-out";
    
})

  window.addEventListener("click", (e) => {
  if (!burger.contains(e.target)) {
    links.classList.remove("open");
  }
});

//Enlève à tout prix la classe au resize.
window.addEventListener("resize", function(){
  if(window.innerWidth > 900){
  links.classList.remove("open");
}
})

window.addEventListener("scroll", function(){
    if(window.scrollY > 70){ 
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

playBtn.addEventListener("click", () =>{
    ytnWrap.classList.add("open");
    iframe.src = videoURL;
})

ytnWrap.addEventListener("click", () =>{
    classRemover();
    iframe.src = "";
})
ytClose.addEventListener("click", () =>{
    classRemover();
    iframe.src = "";
})

function classRemover(){
    ytnWrap.classList.remove("open");
}

dots.forEach(dot => {
    dot.addEventListener("click",() => {
        const index = dot.dataset.index;
        const commentWidth = comments[0].offsetWidth + 25;
        comContainer.style.transform = `translateX(-${index * commentWidth}px)`;

        dots.forEach(d => d.classList.remove("active"));
        dot.classList.add("active");
    })
});


let index = 0;
const total = cards.length;
const width = cards[0].offsetWidth + 10; 

// DUPLICATION pour l'infini
cards.forEach(card => {
  const clone = card.cloneNode(true);
  track.appendChild(clone);
});

setInterval(() => {
  index++;

  track.style.transition = "transform 0.4s ease";
  track.style.transform = `translateX(-${index * width}px)`;

  // reset invisible
  if (index === total) {
    setTimeout(() => {
      track.style.transition = "none";
      track.style.transform = "translateX(0)";
      index = 0;
    }, 400); // doit match le transition
  }

}, 4000);


//Animation au scroll des sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
    else {
      entry.target.classList.remove("show");
    }
  });
}, {
  threshold: 0.4 // déclenche quand 30% visible
});

cardServices.forEach(el => observer.observe(el));
operatedVehicle.forEach(el => observer.observe(el));
observer.observe(expertiseSubsea);

