/* CURRENTLY IN: javascript/main.js */

// Heres the rundown for tic tac toe
 
var gameboard = [];
//var position = [];

generateGameBoard();
console.log (gameboard)
// // this function will fll the gameboard array with 9 0s
function generateGameBoard() {
	for (var i = 0; i<9; i++){
		gameboard.push (0);
	}

}

var currentletter = [];
var currentNumber = [];


//userinteraction

$("#x").on ("click", function () {
        currentNumber.splice(0,currentNumber.length);
        currentNumber.push (1);
        console.log (currentNumber);
});

$("#o").on ("click", function () {
        currentNumber.splice(0,currentNumber.length);//clears it when you click
        currentNumber.push (3);
        console.log (currentNumber);
});


//backend


  


// console.log(currentNumber);
$(".box").bind ("click", function () {
	 var chosen = $( this )
     var position = $(".box").index(this);
 	 gameboard.splice(position, 1, currentNumber[0]);
	 $(chosen).append(currentNumber);


	 function checkForWinner() {
	 	if (gameboard[0] = gameboard[3] = gameboard[6]) {
		alert ("win")
		}
		// else if (gameboard[3] = gameboard[4] = gameboard[5]) {
		// alert ("win")
		// }
		// else if (gameboard[6] = gameboard[7] = gameboard[8]) {
		// alert ("win")
		// }
		// else if (gameboard[0] = gameboard[3] = gameboard[6]) {
		// alert ("win")
		// }
		// else if (gameboard[1] = gameboard[4] = gameboard[7]) {
		// alert ("win")
		// }
		// else if (gameboard[5] = gameboard[8] = gameboard[6]) {
		// alert ("win")
		// }
	}
console.log (gameboard);
checkForWinner();

chosen.unbind('click'); 
});





// // this function will update ONE item in the gameboard
// // position: the array position to update
// // x_or_o: 'x' or 'o', remember if 'x', then it should be 1, if 'o' it should be 2

//     // the last thing this function should do is run the checkForWinner
//     checkForWinner();


// // this function will check to see if someone one
// // go through the game board (you don't need a for loop)
// // if gameboard[0] === gameboard[1] ==== gameboard[2]
// // or 3 == 4 == 5 or 6 == 7 == 8 there is a winner. (this example checks if there are any 'x's or 'o's in a row.
// // do the same for columns and diagnols
// function checkForWinner() {}


// // how to play the game:
// generateGameBoard();
// choose( 0, 'x' );
// choose( 1, 'x' );
// choose( 2, 'x' ); // at this point, it will find a winner, player x
