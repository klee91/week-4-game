var counter = 0;
var winCounter = 0;
var lossCounter = 0;
var targetNumber = getRandomTarget(12,144)
var red = 0;
var blue = 0;
var white = 0;
var purple = 0;

function getRandomTarget(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getRandomNumber() {
	increment = Math.ceil(Math.random() * 12);
	return increment;
}

function reset() {
	targetNumber = getRandomTarget(12,144);
	$("#targetScore").text("Target Score : " + targetNumber);
	counter = 0;
	$("#totalScore").text(0);
	red = getRandomNumber();
	blue = getRandomNumber();
	white = getRandomNumber();
	purple = getRandomNumber();
}

$(document).ready(function () {

	reset();

	$("#targetScore").text("Target Score : " + targetNumber);

		$("#crystal-1").on("click" , function() {

		counter += red;

		$("#totalScore").text(counter);

		if (counter === targetNumber) {
			$("#score").text("You won!");
			winCounter++;
			$("#wins").text(winCounter);
			reset();
		} else if (counter > targetNumber) {
			$("#score").text("You lost!");
			lossCounter++;
			$("#losses").text(lossCounter);
			reset();
		}
	});

	$("#crystal-2").on("click" , function() {
		counter += blue;
		$("#totalScore").text(counter);
			if (counter === targetNumber) {
			$("#score").text("You won!");
			winCounter++;
			$("#wins").text(winCounter);
			reset();
		} else if (counter > targetNumber) {
			$("#score").text("You lost!");
			lossCounter++;
			$("#losses").text(lossCounter);
			reset();
	}
	});

	$("#crystal-3").on("click" , function() {
		
		counter += white;

		$("#totalScore").text(counter);

		if (counter === targetNumber) {
			$("#score").text("You won!");
			winCounter++;
			$("#wins").text(winCounter);
			reset();
		} else if (counter > targetNumber) {
			$("#score").text("You lost!");
			lossCounter++;
			$("#losses").text(lossCounter);
			reset();
	}
	});

	$("#crystal-4").on("click" , function() {
		
		counter += purple;

		$("#totalScore").text(counter);
		
		if (counter === targetNumber) {
			$("#score").text("You won!");
			winCounter++;
			$("#wins").text(winCounter);
			reset();
		} else if (counter > targetNumber) {
			$("#score").text("You lost!");
			lossCounter++;
			$("#losses").text(lossCounter);
			reset();
		}
	});
});


