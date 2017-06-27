document.addEventListener('DOMContentLoaded', function () {
  console.log("page loaded");
  var game = {
    players: [],
    addPlayer: function(name){
      game.players.push(playerConstructor(name));
      if (game.players.length > 1) {
        $('#add_player').hide();
        $('#get_card1').show();
        $('#get_card2').show();
        $('#player1').append(game.players[0].name);
        $('#player2').append(game.players[1].name);
        $('#name').hide();
      }
    }
  };

  function playerConstructor(name){
    var player = {};
    player.name = name;
    player.hand = [];
    player.addCard = function(card){
      player.hand.push(card);
    };
    return player;
  };

  function cardConstructor(player) {
    var card = {};
    const randPoke = Math.floor(Math.random()*150) + 1;
    $.ajax({
      url: `http://pokeapi.co/api/v1/pokemon/${randPoke}`,
      method: 'GET',
      success: res => {
        console.log(res);
        card = res;
        // card.name = res.name;
        // card.attack = res.attack;
        // card.defense = res.defense;
        // card.hp = res.hp;
        game.players[player].addCard(card);
      },
    });
    return card;
  }

  // add player names and call on addplayer method
  $('#add_player').on('click', () => {
    game.addPlayer($('#name').val());
    $('#name').val('');
  })
  // action for each player to retrieve their card
  $('#get_card1').on('click', () => {
    game.players[0].addCard(cardConstructor(0));
    $('#player1').append('<p>Testing:', game.players[0].hand[0],'</p>')
    console.log(game.players[0].hand[0]);
  })
  $('#get_card2').on('click', () => {
    game.players[1].addCard(cardConstructor(1));
  })
})
