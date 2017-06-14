document.addEventListener('DOMContentLoaded', function () {

  var game = {
    players: [],
    addPlayer: function(name){
      game.players.push(playerConstructor(name))
    }
  };
  function playerConstructor(name){
    player = {};
    player.name = name;
    player.hand = [];
    player.addCard = function(card){
      player.hand.push(card);
    };
    return player;
  };

  document.getElementById('add_player').addEventListener('click', function () {
    game.addPlayer(document.getElementById('name').value);
  })

  document.getElementById('get_card').addEventListener('click', function () {
    for (var i = 0; i < game.players.length; i++) {
      var randPoke;
      var card;
      $.get('http://pokeapi.co/api/v1/pokemon/' + 1, function (res) {console.log(res)});
      console.log(card);
      game.players[i].addCard(card)
      console.log(game.players[i].name, game.players[i].hand);
      }
  })
})
