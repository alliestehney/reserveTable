$(document).ready(function() {
 	
 	var tableNowReserved;
 	var reservedTables = [null, null, null, null, null, null, null, null, null];

 	class Table {
 		constructor(name, seats, table) {
 			this.name = name;
 			this.seats = seats;
 			this.table = table;
 		}
 	}

	// function to generate HTML content saying what table is clicked on
	$(".circle").on("click", function(e) {
		console.log(this.className);
		// if (this.className === "circle available") {
		// 	$("form").css("display", "block");
		// 	var tableNum = $(this).text();
		// 	$("p#tableNum").text("Table Number: " + tableNum);
		// 	lastTableClicked = this;
		// 	console.log(tableNum);

		if (this.className === "circle available") {
			$("form").css("display", "block");
			$("#name").val("");
			$("#seats").val("");
			tableNowReserved = $(this);
			var tableNum = $(this).attr("data-tablenum");
			$("#tableNum").text("Table: " + tableNum);
		}
		elementIndex = this.id - 1;
		console.log(elementIndex);
	});

	$("#reservation").on("click", function() {
		if ($(".circle.available")) {
			tableNowReserved.removeClass("available").addClass("reserved");
			var tableNum = $(tableNowReserved).attr("data-tablenum");
			console.log(tableNum);
			var guestName = $("#name").val();
			var seats = $("#seats").val();

			reservedTables[elementIndex] = new Table(guestName, seats, tableNum);

			$("form").fadeOut("slow");
		}
	});

	$(".circle").mouseover(function() {
		if ($(this).hasClass("reserved")) {
			console.log(reservedTables);
			console.log(this);
			var box = $(this).after("<div class='box'>Name: " + reservedTables[elementIndex].name + " Seats: " + reservedTables[elementIndex].seats + "</div>" )
			// var tableNum = $(this).attr("data-tablenum");
			// console.log(tableNum);
			// console.log(reservedTables);
			// console.log(reservedTables[tableNum]);
			// var hoverName = reservedTables[tableNum].name;
			// var partySize = reservedTables[tableNum].seatsNeeded;
			// $(this).mousemove(function (e) {
			// 	$("#hoverName").text("Name: " + hoverName);
			// 	$("#partySize").text("Seats Reserved: " + partySize);
			// 	$("#popUpInfo").show().css('top', e.pageY).css('left', e.pageX);
			// });
		}
	});

$("i").on("click", function() {
	$("form").css("display", "none");
});

});


// $("form").css("display", "none");
		// e.preventDefault();
		// var tableNum2 = tableNum.toString();
		// console.log("***TABLE NUM:")
		// console.log(tableNum);

		// storeInfo();
		// console.log("***LIST:")
		// console.log(reservedTables);

				// reservedTables.forEach( function(tableObj) {
				// 	if (tableObj.table === tableNum2) {
				// 		console.log("TABLE IS IN THE ARRAY!!");
				// 		var tableDiv = $("#tableHolder").find("div:contains('"+ tableObj.table + "')");
				// 		console.log(tableDiv);
				// 		console.log(tableDiv[2]);
				// 		var circleDiv = tableDiv[2];
				// 		circleDiv.after("Name: " + tableObj.name  + " Seats: " + tableObj.table);
				// 		clearVals();
				// 	} else {
				// 		console.log("NOT IN THE ARRAY.");
				// 	}
				// });

			// 	function storeInfo() {
			// 		var nameVal = $("#name").val(); // gets name that is inputed
			// 		console.log(nameVal);

			// 		var seatVal = $("#seats").val(); // gets number of people
			// 		console.log(seatVal);

			// 		createObj(nameVal, seatVal);
			// 		addToArray(reservationInfo);
			// 		clearVals();
			// 	}

			// 	function createObj(nameValue, seatsValue, tableNum) {
			// 		reservationInfo = {};
			// 		reservationInfo.name = nameValue;
			// 		reservationInfo.seats = seatsValue;
			// 		reservationInfo.table = tableNum2;
			// 		return reservationInfo;
			// 	}

			// 	function addToArray(reservationInfo) {
			// 		reservedTables.push(reservationInfo);
			// 		// console.log(reservedTables);
			// 		return reservedTables;
			// 	}
			// 	// store object in an array so you can access it later
			// 	clearVals();
			// 	return $("div .circle:contains("+ tableNum.toString() + ")").removeClass("available").addClass("reserved");
			// });
		
			// console.log(reservedTables); // logs the most updated list
			// console.log(reservedTables[0]);
		// } else {
		// 	$("form").css("display", "none");
		// }
		// console.log(reservedTables);

	// });