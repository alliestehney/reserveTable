$(document).ready(function() {
 // all of the jQuery / JS goes in here 
 console.log("Hi");

$(".circle").on("click", function(e) {
	$("form").css("display", "block");
});

$("i").on("click", function(e) {
	$("form").css("display", "none");
});

});