$(document).ready(function() {
 	
 	var tableNowReserved;
 	var reservedTables = [];

 	function getNumberFromTable(table) {
 		return parseInt( $(table).text().trim() );
 	}

 	$(".available").on("click", function() {
 		$("form").css("display", "block");
 		tableNowReserved = this;
 		var tableNum = getNumberFromTable(this);
 		$("#tableNum").text("Table Number: " + tableNum);
 	});

 	$(".circle").on("mouseenter", function(e) {
 		var tableNum = getNumberFromTable(this);
 		if ($(this).hasClass("reserved")) {
 			console.log(tableNum);
 			var reservation = reservedTables[tableNum];
 			console.log(reservation);
 			console.log(reservation.name);
 			console.log(reservation.partySize);

 			$("#hoverName").text("Guest Name: " + reservation.name);
 			$("#partySize").text("Seats Needed: " + reservation.partySize);
 		
 			$("#popUpInfo").show().css('top', e.pageY).css('left', e.pageX);

 			$(this).on("mouseout", function() {
 				$("#popUpInfo").hide();
 			});
 			
 		}
 	});

 	$("#reservation").on("click", function() {
 		$(tableNowReserved).addClass("reserved").removeClass("available");
 		var name = $("#name").val();
 		var partySize = $("#seats").val();
 		var reservation = {
 			name: name,
 			partySize: partySize
 		};
 		var tableNum = getNumberFromTable(tableNowReserved);
 		reservedTables[tableNum] = reservation;
 		console.log(reservedTables);

 		$("form").css("display", "none");

 	});

 	$(".circle reserved").on("mouseenter", function() {

 	});

$("i").on("click", function() {
	$("form").css("display", "none");
});

});