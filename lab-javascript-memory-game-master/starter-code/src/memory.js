var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards= [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function (cards) {
  // if (cards === undefined) {
  //   return cards;
  // }
  // // console.log("original", cards);
  // let i = cards.length;
  // let r = 0;
  // let temp;
  // while (--i > 0) {
  //   r = Math.floor(Math.random()*i+1);
  //   temp = cards[r];
  //   cards[r] = cards[i];
  // }
  function shuffle(cards) {
    let counter = cards.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = cards[counter];
        cards[counter] = cards[index];
        cards[index] = temp;
    }

    return cards;
}
  // console.log("shuffled", cards);
  return cards;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  // increment the card when clicked card
  this.pairsClicked++
  // check if pairs are the same
  var checkIfSame = Object.is(firstCard, secondCard)
  if (checkIfSame){
    this.pairsGuessed++
    $("pairs_guessed").html(this.pairsGuessed)
  }
  return checkIfSame
  // console.log("first card", firstCard);
  // console.log("second card", secondCard);
}

MemoryGame.prototype.isFinished = function () {
  // check if pairs guessed array equals the array.length. If so, return true
  var pairs = this.cards.length/2;
  if (pairs === this.pairsGuessed){
    return true;
  } else {
    return false;
  }
};