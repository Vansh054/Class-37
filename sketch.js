var database;
var gameState = 0, playerCount = 0;
var game, form, player, allPlayers;
var player1, player2, player3, player4;
var players = [];

function setup(){
    createCanvas(displayWidth-10,displayHeight-20);
    database = firebase.database();
    game = new Game();
    game.readState();
    game.startGame(); 
}

function draw(){
  if (playerCount == 4)
  {
      game.updateState();
  }
  if (gameState == 1)
  {
    game.playGame();
  }
}
