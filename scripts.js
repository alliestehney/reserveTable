$(document).ready(function() {
 // all of the jQuery / JS goes in here 
 console.log("Hi");

$(".available").on("click", function(e) {
	$("form").css("display", "block");
	console.log($(this).text());
	var tableNum = $(this).text();
	$("p").text("Table Number: " + tableNum);
});

$("i").on("click", function(e) {
	$("form").css("display", "none");
});

$("input[type=submit]").on("click", function(e) {
	$(this).removeClass("available");
	$(this).addClass("reserved");
});

});