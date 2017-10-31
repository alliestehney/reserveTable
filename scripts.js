$(document).ready(function() {
 // all of the jQuery / JS goes in here 
 console.log("Hi");

// function to generate HTML content saying what table is clicked on
$(".available").on("click", function(e) {
	$("form").css("display", "block");
	var tableNum = $(this).text();
	$("p#tableNum").text("Table Number: " + tableNum);
	// console.log("***NO DOLLA***");
	// console.log(this);
	// console.log($(this));

	$("input[type=submit]").on("click", function(e) {
		$("form").css("display", "none");
		// $( "div:contains("+ tableNum +")").removeClass("available").addClass("reserved");
		// e.target.parent;
		e.preventDefault();
		return $("div .circle:contains("+ tableNum.toString() + ")").removeClass("available").addClass("reserved");
	});

});

$("i").on("click", function(e) {
	$("form").css("display", "none");
});

// $("input[type=submit]").on("click", function(e) {
// 	$(this).removeClass("available");
// 	$(this).addClass("reserved");
// });

});