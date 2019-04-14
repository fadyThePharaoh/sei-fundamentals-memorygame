// make an array of cards and an empty array
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

// choose two random cards
var cardOne = cards[0];
var cardTwo = cards[1];

// add the cards to the play array
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

// check your work
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

//checking if two cards were chosen, then checking if they match
if(cardsInPlay.length === 2 ){
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	}else{
		alert("Sorry, try again");
	}
}