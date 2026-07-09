const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("active");
});

const themeButton = document.getElementById("themeButton");
const themeIcon = themeButton.querySelector("i");

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    } else {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }
});

const serviceCards = document.querySelectorAll(".service-card");

function showCards() {

    const windowHeight = window.innerHeight;

    serviceCards.forEach((card) => {

        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < windowHeight - 100) {
            card.classList.add("show");
        }

    });

}

window.addEventListener("scroll", showCards);

window.addEventListener("load", showCards);

const navLinks = document.querySelectorAll(".menu a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});

const button = document.querySelector(".main-button");

button.addEventListener("mouseenter", () => {

    button.style.transform = "translateY(-5px) scale(1.08)";

});

button.addEventListener("mouseleave", () => {

    button.style.transform = "translateY(0) scale(1)";

});

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 40) {

        navbar.style.padding = "14px 8%";
        navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,.15)";

    } else {

        navbar.style.padding = "18px 8%";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

    }

});