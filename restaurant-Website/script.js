
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themefoodi = document.getElementById("foodi");

themeToggle.addEventListener("click", () => {
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark");
        themeIcon.innerText = "wb_sunny";
        themefoodi.src = "./image/lightFoodi.png";
    } else {
        document.body.classList.add("dark");
        themeIcon.innerText = "bedtime";
        themefoodi.src = "./image/drakFoodi.png";
    }
});


const navLinks = document.querySelectorAll(".navlink li a");
const currentUrl = window.location.pathname;

navLinks.forEach((link) => {
    // link.getAttribute("href") = tag tar href er value ta ki.
    // check korche currentUrl ar modhe href er nam ta ache kina dekhche.
    if (currentUrl.includes(link.getAttribute("href"))) {
        link.classList.add("active");
    }else{
        link.classList.remove("active");
    }
})