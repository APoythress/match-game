var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
  var orderNumbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
  orderNumbers.sort(function(a, b){return 0.5 - Math.random()});
  return orderNumbers;
  var unplacedCardValues = [];
  for (var i = 1; i < 8; i++) {
    unplacedCardValues.push(i);
    unplacedCardValues.push(i);
  };

  var randomCardValues = unplacedCardValues.slice();

  while (randomCardValues < unplacedCardValues.length()) {
    Math.floor(Math.randon() * 8);
    document.getElementById()
  }
};


/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
