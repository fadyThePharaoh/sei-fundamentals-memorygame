// make an array of cards and an empty array
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function() {

	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	}else{
		alert("Sorry, try again");
	}
}


var flipCard = function(cardId) {

	console.log("User flipped " + cards[cardId]);


	cardsInPlay.push(cards[cardId]);

	//checking if two cards were chosen, then checking if they match
	if( cardsInPlay.length === 2 ){
		checkForMatch();
	}
}


flipCard(0);
flipCard(2);