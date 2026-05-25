
/* TOP BUTTON */

const topBtn = document.getElementById("topBtn");

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* COUNTER ANIMATION */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {

            counter.innerText = `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 30);

        }

        else {

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});

/* MACHINE CARD ANIMATION */

const cards = document.querySelectorAll(".machine-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow = "0 15px 40px rgba(255,165,0,0.5)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";

    });

});

/* IMAGE POPUP */

const galleryImages = document.querySelectorAll(".gallery-container img");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        const popup = document.createElement("div");

        popup.classList.add("popup");

        popup.innerHTML = `

            <span class="close-btn">&times;</span>

            <img src="${image.src}">

        `;

        document.body.appendChild(popup);

        popup.querySelector(".close-btn").addEventListener("click", () => {

            popup.remove();

        });

    });

});

/* FAQ ACCORDION */

const faqBoxes = document.querySelectorAll(".faq-box");

faqBoxes.forEach(box => {

    box.addEventListener("click", () => {

        box.classList.toggle("active");

    });

});

/* SCROLL ANIMATION */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;

        if (sectionTop < screenHeight - 100) {

            section.style.opacity = "1";

            section.style.transform = "translateY(0)";

        }

    });

});

/* INITIAL SECTION STYLE */

sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(50px)";

    section.style.transition = "1s";

});

/* AUTO SLIDER EFFECT */

const slider = document.querySelector(".slider");

let scrollAmount = 0;

function autoSlide() {

    scrollAmount += 1;

    if (window.innerWidth > 768) {
        slider.scrollLeft += 1;
    }

    if (scrollAmount > 1000) {

        scrollAmount = 0;

        slider.scrollLeft = 0;

    }

}

setInterval(autoSlide, 20);

/* NAVBAR BACKGROUND CHANGE */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

        navbar.style.background = "rgba(0,0,0,0.95)";

        navbar.style.padding = "15px 60px";

    }

    else {

        navbar.style.background = "rgba(0,0,0,0.7)";

        navbar.style.padding = "20px 60px";

    }

});

/* HERO BUTTON EFFECT */

const heroButton = document.querySelector(".overlay button");

heroButton.addEventListener("mouseenter", () => {

    heroButton.style.boxShadow = "0 0 30px orange";

});

heroButton.addEventListener("mouseleave", () => {

    heroButton.style.boxShadow = "none";

});

/* TYPEWRITER EFFECT */

const heading = document.querySelector(".overlay h1");

const text = "Rakesh Rawat Agriculture Machines";

heading.innerHTML = "";

let i = 0;

function typingEffect() {

    if (i < text.length) {

        heading.innerHTML += text.charAt(i);

        i++;

        setTimeout(typingEffect, 80);

    }

}

typingEffect();

/* GALLERY IMAGE HOVER */

galleryImages.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.08) rotate(1deg)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});

/* SMOOTH NAVIGATION */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

/* FLOATING EFFECT */

const statBoxes = document.querySelectorAll(".stat-box");

statBoxes.forEach(box => {

    box.addEventListener("mouseenter", () => {

        box.style.transform = "translateY(-15px) scale(1.03)";

    });

    box.addEventListener("mouseleave", () => {

        box.style.transform = "translateY(0)";

    });

});

/* LOADER REMOVE */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.display = "none";

    }, 3000);

});

