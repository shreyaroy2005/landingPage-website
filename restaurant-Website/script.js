// dark mode light mode 
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

// navlinks active hole akta style add hoche jei link a click hoche sei page a route hoche.
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
// hamburgar menu 
const menuBtn = document.getElementById("openMenu");
const navlinkBar = document.getElementById("navlink");

menuBtn.addEventListener("click",() => {
 navlinkBar.classList.toggle("toggle");
    if (navlinkBar.classList.contains("toggle")) {
        document.body.style.overflow = "hidden";
    }else{
        document.body.style.overflow = "auto";
    }
});