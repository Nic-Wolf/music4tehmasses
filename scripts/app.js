//MAKE SOME NOISE
var kick  = new Audio("assets/sounds/kick.wav");
var snare = new Audio("assets/sounds/snare.wav");

window.onload = init;

function init() {
	var divKick  = document.getElementById("divKick");
	var divSnare = document.getElementById("divSnare");

	var lastKey = 0;

	document.addEventListener("keypress", function(e) {
		e = e || event;
		playSound(e);
		lastKey = Number(getChar(e));
		tilt(lastKey);
	});//end event

	document.addEventListener("keyup", function() {
		tilt(lastKey);
	});//end event
}//end init()


//GET THE KEYCODE FROM THE KEY PRESSED
function getChar(event) {
	if (event.which == null) {
		return event.keyCode;
	} else if (event.which !== 0 && event.charCode !== 0) {
		return event.which;
	} else {
		return null;
	}
}//end getChar()


//PLAY US A SONG, YOU'RE THE PIANOMAN
function playSound(event) {
	switch (getChar(event)) {
		case 49:
			kick.currentTime = 0;
			kick.play();
			break;
		case 50:
			snare.currentTime = 0;
			snare.play();
			break;
		default:
			keyError(getChar(event));
	}
}//end playSound()


//SHAKE IT, BABY!
function tilt(lastKey) {
	switch (lastKey) {
		case 49:
			if (divKick.className === "") {
				divKick.className = "tilt-left";
			} else { 
				divKick.className = ""; }
			break;
		case 50:
			if (divSnare.className === "") {
				divSnare.className = "tilt-right";
			} else { 
				divSnare.className = ""; }
			break;
		default:
			keyError(lastKey);	
	}
}//end tilt()


//Switch Errors
function keyError(value) {
	if (value) {
		console.log("Pressed " + String.fromCharCode(value) + ", which isn't assigned!");
	}
}//end keyError()
