function adjustNavBar() {
    let nav = document.getElementById("nav-wrapper");
    if(window.innerWidth > 575) nav.className = "center";
    else nav.className = "";
};

window.addEventListener("resize", (event) => {
    adjustNavBar();
});

document.addEventListener("DOMContentLoaded", (event) => {
    adjustNavBar();
    let nav = document.getElementById("main-nav");
    nav.onclick = function() {
        if(nav.className === "collapsible") nav.className += " responsive";
        else nav.className = "collapsible";
    };
});
