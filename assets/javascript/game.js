//Creates an array, 'letters', composed of the letters of the English alphabet
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Generates a random letter, 'computerGuess', using the 'letters' array
var computerGuess = letters[Math.floor(Math.random() * letters.length)];

//Initializes variables needed for game
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];

//Creates a function that occurs whenever a key is pressed by the user
document.onkeypress = function(event){

	//Stores key pressed by the user into variable 'playerGuess'
	var playerGuess = event.key;
	console.log(playerGuess);

	//Converts key pressed by user into correlating ASCII code
	var guessCode = event.keyCode;
	console.log(guessCode);

	//Checks if the key entered by the user is a-z
	if(guessCode >= 97 && guessCode <= 122){

		//If key pressed by the user matches the computers guess
		if(playerGuess === computerGuess){
  			wins++; //increment wins by 1
  			guessesLeft = 10; //guesses left reset to 10
  			computerGuess = letters[Math.floor(Math.random() * letters.length)]; //computer generates new guess
  			guessesSoFar = []; //guessesSoFar is cleared
		}

		//If the key pressed by the user does not match 'computerGuess'
		else{
 			guessesLeft--; //decrement guessLeft
  			guessesSoFar.push(event.key); //letter guessed will be added to guessesSoFar
  			document.getElementById("p4").innerHTML = ("Your guesses so far: " + guessesSoFar); //display guessesSoFar
		}

		//If the number of guesses left reaches 0, # of losses will be incremented by 1, guesses left will be reset to 10, and guesses so far will be cleared
		if(guessesLeft === 0){
  			losses++;
  			guessesLeft = 10;
  			guessesSoFar = [];
		}

		document.getElementById('p1').innerHTML = ("Wins: " + wins);
		document.getElementById('p2').innerHTML = ("Losses: " + losses);
		document.getElementById('p3').innerHTML = ("Guesses Left: " + guessesLeft);
		document.getElementById('p4').innerHTML = ("Your guesses so far: " + guessesSoFar);
	}
	//If the key pressed by the user is not a-z, user will be alerted to enter a key a-z
	else{
		document.getElementById('p1').innerHTML = ("Wins: " + wins);
		document.getElementById('p2').innerHTML = ("Losses: " + losses);
		document.getElementById('p3').innerHTML = ("Guesses Left: " + guessesLeft);
		document.getElementById('p4').innerHTML = ("Your guesses so far: " + guessesSoFar);
		window.alert("Key entered must be 'a' through 'z'.")
	}
}