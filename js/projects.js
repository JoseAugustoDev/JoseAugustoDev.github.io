const hamburger = document.querySelector(".mobile-nav-bar");
const button = document.querySelector(".menu")

button.addEventListener('click', () => {
    hamburger.style.display = "flex";
})