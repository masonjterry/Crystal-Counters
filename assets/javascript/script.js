$(document).ready(function() {

// initial variables

	var target;

	function randomNumber(min,max) {
		target = Math.floor(Math.random() * (max - min) + min);
	}

	randomNumber(19,120);

	var crystalValue1 = Math.floor(Math.random() * 13);

	var crystalValue2 = Math.floor(Math.random() * 13);

	var crystalValue3 = Math.floor(Math.random() * 13);

	var crystalValue4 = Math.floor(Math.random() * 13);

	var runningTotal = 0;

// score function
	function score() {
		$("#target").text(target);
		
		$("#total").text(runningTotal);
	}

	score();

// Click function
	$("button").on("click", function() {
		var buttonClick = $(this).attr("id");

		if (buttonClick === "button1") {
			runningTotal = runningTotal + crystalValue1;
		} else if (buttonClick === "button2") {
			runningTotal = runningTotal + crystalValue2;
		} else if (buttonClick === "button3") {
			runningTotal = runningTotal + crystalValue3;
		} else if (buttonClick === "button4") {
			runningTotal = runningTotal + crystalValue4;
		} else if (buttonClick === "restart") {
			location.reload();
		}

		score();

		if (runningTotal === target) {
			$("#head2").text("You Won!");
			$("#total").hide();
			$("#target").hide();
			return;
		}

		if (runningTotal > target) {
			$("#head2").text("You Lost...");
			$("#target").hide();
			$("#total").hide();
			return;
		}

	});

});