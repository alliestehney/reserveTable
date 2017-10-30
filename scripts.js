$(document).ready(function() {
 // all of the jQuery / JS goes in here 
 console.log("Hi");

// function to generate HTML content saying what table is clicked on
$(".available").on("click", function(e) {
	$("form").css("display", "block");
	var tableNum = $(this).text();
	$("p#tableNum").text("Table Number: " + tableNum);
	// $("input[type=submit]").on("click", function(e) {

	// });
});

$("i").on("click", function(e) {
	$("form").css("display", "none");
});

$("input[type=submit]").on("click", function(e) {
	$(this).removeClass("available");
	$(this).addClass("reserved");
});

});