function adjustNavBar() {
    if($(window).width() < 575) $(".nav-wrapper").removeClass("centerise");
    else $(".nav-wrapper").addClass("centerise");
}

$(window).resize(function() {
    adjustNavBar();
});

$(document).ready(function() {
    adjustNavBar();
    $("#main-nav").click(function() {
        if(this.className === "collapsible") this.className += " responsive";
        else this.className = "collapsible";
    });
});
