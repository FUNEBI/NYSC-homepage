const hamburger = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link")

hamburger.addEventListener("click", mobileMenu);

navLink.forEach(el => {
    el.addEventListener("click", closeMenu())
})

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

function mobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}