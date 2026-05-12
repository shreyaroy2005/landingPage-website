
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