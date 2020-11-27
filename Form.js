class Form {
    constructor(){
      this.inputBox = createInput("Enter the name")
      this.button = createButton("PLAY")
      this.greeting = createElement('h2')
    }
    hideForm(){
      this.inputBox.hide();
      this.button.hide();
      this.greeting.hide();
    }
    display(){
       var heading = createElement('h2') 
       heading.html("Car Racing Game")
       heading.position(displayWidth/2,0)
       this.inputBox.position(displayWidth/2,displayHeight/2 - 100)
       this.button.position(displayWidth/2 + 50,displayHeight/2 )
       player.readCount();
       this.button.mousePressed(()=>{
           this.inputBox.hide();
           this.button.hide();
           player.name = this.inputBox.value();
           playerCount = playerCount + 1;
           player.index = playerCount;
           player.updateplayerCount(playerCount);
           player.updateName()
           this.greeting.html("Hello! " + player.name)
           this.greeting.position(displayWidth/2,20)
       })
    }
}