class Game 
{
    constructor(){

    }
    readState(){
        var gameStatevalue = database.ref('gameState')
        gameStatevalue.on("value",function(data){
            gameState = data.val();
        })
    }
    updateState(){
        database.ref('/').update({
            'gameState': 1
        })
    }
    startGame(){
      if (gameState == 0)
      {
        player =new Player();
        form = new Form();
        form.display();
      }
      player1 = createSprite(400,200,50,50)
      player2 = createSprite(500,200,50,50)
      player3 = createSprite(600,200,50,50)
      player4 = createSprite(700,200,50,50)

      players.push(player1);
      players.push(player2);
      players.push(player3);
      players.push(player4);
    }
    playGame(){
        form.hideForm();
        Player.getallPlayer();
        var x = 0;
        var y = 0;
        var i = 0;
        for(var p in allPlayers)
        {
         console.log("hi")
         x += 200;
         y = displayHeight - allplayers[p].distance;
         players[i].x = x 
         players[i].y = y
         i = i + 1;
        }

        player.readCount();
        player.index = playerCount;

        if (keyCode == UP_ARROW && player.index !== null)
        {
         player.distance += 50;
         player.updateName();
        }
        drawSprites();
    }
}