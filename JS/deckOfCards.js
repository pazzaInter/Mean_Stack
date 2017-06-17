function Deck() {
  if (!(this instanceof Deck)) {
    return new Deck;
  }
  var self = this;
  this.cards=[];
  createCards();

  function createCards() {
    var faceValue = "234567891JQKA";
    var suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs']
    for (var j = 0; j < suits.length; j++) {
      for (var i = 0; i < faceValue.length; i++) {
        if (faceValue[i] == '1') {
          self.cards.push( {'faceValue': '10', 'suit': suits[j]} )
        }else {
          self.cards.push( {'faceValue': faceValue[i], 'suit': suits[j]} )
        }
      }
    }
    return self;
  }


  this.shuffle = function shuffle() {
    var m = self.cards.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = self.cards[m];
      self.cards[m] = self.cards[i];
      self.cards[i] = t;
    }

      return self;
    }
  this.deal = function(cards) {
    var randomCard = Math.floor(Math.random()*52).toString();
    var cardDealt = self.cards.splice(randomCard,1)
    return cardDealt[0]
  }
  this.reset = function () {
    createCards().shuffle()
    return self
  }
}

function Player(name) {
  if (!(this instanceof Player)) {
    return new Player;
  }
  var self = this;
  this.name = name;
  this.hand = [];
  this.take = function (callback) {
    var card = callback();
    self.hand.push(card);
    return self
  }
  this.discard = function (card) {
    var discarded = self.hand.splice(card,1)
    return self
  }
}


const deck1 = new Deck;
// deck1.shuffle()
// console.log(deck1);
const Phil = new Player('Phil Ivey')
console.log(Phil);
Phil.take(deck1.deal);
console.log(Phil.hand);
// console.log(deck1.cards.length);
