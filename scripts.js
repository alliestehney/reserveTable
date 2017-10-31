$(document).ready(function() {
 // all of the jQuery / JS goes in here 

	// function to generate HTML content saying what table is clicked on
	$(".circle").on("click", function(e) {
		console.log(this.className);
		if (this.className === "circle available") {
			$("form").css("display", "block");
			var tableNum = $(this).text();
			$("p#tableNum").text("Table Number: " + tableNum);

			$("input[type=submit]").on("click", function(e) {
				$("form").css("display", "none");
				// $( "div:contains("+ tableNum +")").removeClass("available").addClass("reserved");
				// e.target.parent;
				e.preventDefault();
				return $("div .circle:contains("+ tableNum.toString() + ")").removeClass("available").addClass("reserved");
				
			});
		} else {
			$("form").css("display", "none");
		}

	});

	$("i").on("click", function(e) {
		$("form").css("display", "none");
	});
	
});