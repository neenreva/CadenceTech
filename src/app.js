const navLinks = document.querySelector(".nav__links");
const hamburgerBtn = document.querySelector(".hamburger");
const hamburgerBtnImg = document.querySelector("[data-hambtnimg]");



hamburgerBtn.addEventListener("click", () => {
    if (hamburgerBtnImg.src.includes("Hamburger.svg")) {
        hamburgerBtnImg.src = "../assets/Close.svg";
        navLinks.classList.toggle("nav-active");
    } else {
        hamburgerBtnImg.src = "../assets/Hamburger.svg";
        navLinks.classList.toggle("nav-active");
    }
});

document.onclick = (e) => {
    if (e.target !== hamburgerBtnImg && e.target !== hamburgerBtn) {
        navLinks.classList.remove("nav-active");
        hamburgerBtnImg.src = "../assets/Hamburger.svg";
    }
};