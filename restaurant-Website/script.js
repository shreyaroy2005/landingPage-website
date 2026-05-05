const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const themefoodi = document.getElementById("foodi")
const body = document.body;

themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeIcon.innerText = 'wb_sunny';
        themefoodi.src = "./image/lightFoodi.png";
    } else {
        body.setAttribute('data-theme', 'dark');
        themeIcon.innerText = 'bedtime';
        themefoodi.src = "./image/drakFoodi.png";
    }
});