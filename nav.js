$(document).ready(function () {
	$('#main-nav').click(function () {
		if (this.className === "collapsible") { this.className += " responsive"; }
		else { this.className = "collapsible"; }
	});
});
