//Lógica para el hamburguesa
const nav = document.getElementById("nav");
const openBtn = document.getElementById("open-nav");
const closeBtn = document.getElementById("close-nav");

const toggleMenu = () => {
    nav.classList.toggle("visible");
};

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
     if (scrollPosition > 0) nav.classList.remove("visible");
});

openBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);