function toggleGameContent (id) {
    var banner = document.getElementById(id + "-banner");
    var content = document.getElementById(id + "-content");
    if(content.style.display === "none" || content.style.display === "") {
        banner.style.display = "none";
        content.style.display = "block";
    } else {
        banner.style.display = "block";
        content.style.display = "none";
    }
}

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
