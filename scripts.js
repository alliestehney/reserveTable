$(document).ready(function() {
 
 	var reservedTables = [];
	// function to generate HTML content saying what table is clicked on
	$(".circle").on("click", function(e) {
		console.log(this.className);
		if (this.className === "circle available") {
			$("form").css("display", "block");
			var tableNum = $(this).text();
			$("p#tableNum").text("Table Number: " + tableNum);
			lastTableClicked = this;
			console.log(tableNum);

			$("input[type=submit]").on("click", function(e) {
				$("form").css("display", "none");
				e.preventDefault();
				var tableNum2 = tableNum;

				storeInfo();
				console.log(reservedTables); 

				function storeInfo() {
					var nameVal = $("#name").val(); // gets name that is inputed
					console.log(nameVal);

					var seatVal = $("#seats").val(); // gets number of people
					console.log(seatVal);

					createObj(nameVal, seatVal);
					addToArray(reservationInfo);
					clearVals();
				}

				function createObj(nameValue, seatsValue, tableNum) {
					reservationInfo = {};
					reservationInfo.name = nameValue;
					reservationInfo.seats = seatsValue;
					reservationInfo.table = tableNum2;
					return reservationInfo;
				}

				function addToArray(reservationInfo) {
					reservedTables.push(reservationInfo);
					// console.log(reservedTables);
					return reservedTables;
				}
				// store object in an array so you can access it later
				clearVals();
				return $("div .circle:contains("+ tableNum.toString() + ")").removeClass("available").addClass("reserved");
			});
		
			// console.log(reservedTables); // logs the most updated list
			// console.log(reservedTables[0]);
		} else {
			$("form").css("display", "none");
		}
		// console.log(reservedTables);

	});

	$("i").on("click", function(e) {
		$("form").css("display", "none");
	});

	function clearVals() {
		$("#name").val("");
		$("#phone").val("");
		$("#seats").val("");
	}

});
