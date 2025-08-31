let openBtn = document.querySelector(".open");
let closeBtn = document.querySelector(".close");
let navLinks = document.querySelector(".nav__links");


openBtn.addEventListener("click", () => {
    navLinks.style.right = "0rem";
    openBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
});

closeBtn.addEventListener("click", () => {
    navLinks.style.right = "-25rem";
    openBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
});