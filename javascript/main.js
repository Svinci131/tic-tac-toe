var gameboard = [];
var currentletter = ["Z"];
var currentNumber = [0];
var count = 0;

var close = $('.close'); 

$(close).on ("click", function () {
	$('#modal').addClass ("invisible");
	$('#overlay').addClass ("invisible");

	$(".box").contents().remove();

	generateGameBoard();


});

generateGameBoard();

//SET UP 
//this function will fll the gameboard array with 9 0s
function generateGameBoard() {
	for (var i = 0; i<9; i++){
		gameboard.push (0);
	}
}//GenerateGameBoard

function checkIfNEqual() {

	// arguments reps all N args passed in to checkIfNEmail
	var args = [].slice.call( arguments );
		console.log(args);
	var isEqual = true;
	if ( args[ 0 ] !== args[ args.length-1 ] ) {
		return false;
	}


	for( var i = 1; i < args.length; ++i ) {
		if ( args[ i - 1 ] !== args[ i ] ) {
			isEqual = false;
			break;
		}
		else if ( args[ i ] === 0 ) { 
			isEqual = false;
			break;
		}
	}

	return isEqual;
}//check if Equal

function checkForWinner() {

	var isRow1 = checkIfNEqual( gameboard[ 0 ], gameboard[ 1 ], gameboard[ 2 ] );
	var isRow2 = checkIfNEqual( gameboard[ 3 ], gameboard[ 4 ], gameboard[ 5 ] );
	var isRow3 = checkIfNEqual( gameboard[ 6 ], gameboard[ 7 ], gameboard[ 8 ] );
	//double check 

	var isCol1 = checkIfNEqual( gameboard[ 0 ], gameboard[ 3 ], gameboard[ 6 ] );
	var isCol2 = checkIfNEqual( gameboard[ 1 ], gameboard[ 4 ], gameboard[ 7 ] );
	var isCol3 = checkIfNEqual( gameboard[ 2 ], gameboard[ 5 ], gameboard[ 8 ] );

	var isD1 = checkIfNEqual( gameboard[ 0 ], gameboard[ 4 ], gameboard[ 8 ] );
	var isD2 = checkIfNEqual( gameboard[ 2 ], gameboard[ 4 ], gameboard[ 6 ] );



		function isTrue() {

			var args = [].slice.call( arguments );
			console.log(args);
			if ( args[ args.length-1 ] === true ) {
				$('#modal').removeClass ("invisible");
				$('#overlay').removeClass ("invisible");
				

				return;;
			}
			for( var i = 1; i < args.length; ++i ) {
				if ( args[ i - 1 ] === true) {
					//alert ("win");
					$('#modal').removeClass ("invisible");
					$('#overlay').removeClass ("invisible");
					$('<p>'+currentletter+' Wins! </p>').appendTo('#content');
					break;
				}//if statement
				

			}//for loop

		}//istrue 
			
		

	isTrue(isRow3,isRow2,isRow1,isCol1, isCol2, isCol3,isD1,isD2);
}//check for winner

function x_o () {
	if (count % 2 == 0) {
		currentletter[0] = ["O"];
		currentNumber[0] = 3;
	}//if O
	else {
		currentletter[0] = ["X"];
		currentNumber[0] = 1;
	}//if O
}


//userinteraction
$(".box").bind ("click", function () {
	var chosen = $( this );
	var position = $(".box").index( this );

	count++;
	x_o ();
	// console.log("count" + count);
	// console.log("currentNUmber" + currentNumber);
   
    gameboard [position] = currentNumber[0];
	$(chosen).append("<div class='letters'>" +currentletter[0]+"</div>");
	
	// console.log ("gameboard Array" + gameboard);
	checkForWinner();
	chosen.unbind('click'); 

});





   
