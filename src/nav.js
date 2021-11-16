$(document).ready(function(){
	$("#main-nav").click(function(){
		if(this.className === "collapsible") this.className += " responsive";
		else this.className = "collapsible";
	});
});

$(window).resize(function(){
 	if($(window).width() < 575) $(".nav-wrapper").removeClass("centerise");
 	else $(".nav-wrapper").addClass("centerise");
});
