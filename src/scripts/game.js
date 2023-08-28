import Player from "./player.js"
class Game {
    constructor() {
      console.log("constructor invoked")
      this.startButton = document.querySelector('#startGame');
      this.endTurnButton = document.querySelector('#endTurn');
      this.playerlane1 = document.querySelector('#playerLane1');
      this.playerlane2 = document.querySelector('#playerLane2');
      this.playerlane3 = document.querySelector('#playerLane3');
      this.player = new Player("one");
  
      this.endTurnButton.addEventListener('click', this.handleEndTurn.bind(this));
      this.startButton.addEventListener('click', this.handleStart.bind(this));
      this.playerlane1.addEventListener('click', this.handlePlaceCard.bind(this));
      
    }
  
    handleEndTurn() {
      this.player.draw();
    }
  
    handleStart() {
      this.player.initialDraw();
    }

    handlePlaceCard(){
        if (this.player.selectedCard != null){
            let hand = this.player.hand
            let filter = hand.filter((card) => card.name=== this.player.selectedCard)
            let newCardDiv = document.createElement('div')
            let newImage = document.createElement('img')
            newImage.src = filter.imageUrl
            newImage.height = 50
            newCardDiv.appendChild(newImage)
            this.playerlane1.appendChild(newCardDiv)
        }

    }
  }

  window.Game = Game
  export default Game;