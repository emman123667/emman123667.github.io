// "changeToLight()" - Method to change the theming of the site to DARK mode
function changeToDark() {
    document.body.setAttribute("data-theme", "dark");
    document.getElementById("mainHeader").setAttribute("data-theme", "dark");
    document.querySelectorAll(".straightLine").forEach(function(element) {
        element.setAttribute("data-theme", "dark");
    });
}

// "changeToLight()" - Method to change the theming of the site to LIGHT mode
function changeToLight() {
    document.body.setAttribute("data-theme", "light");
    document.getElementById("mainHeader").setAttribute("data-theme", "light");
    document.querySelectorAll(".straightLine").forEach(function(element) {
        element.setAttribute("data-theme", "light");
    });
}