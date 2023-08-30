import Player from "./player.js"
class Game {
    constructor() {
      console.log("constructor invoked")
      this.round = 0
      this.aIRoll = 0
      this.startButton = document.querySelector('#startGame');
      this.endTurnButton = document.querySelector('#endTurn');
      this.playerlane1 = document.querySelector('#playerLane1');
      this.playerlane2 = document.querySelector('#playerLane2');
      this.playerlane3 = document.querySelector('#playerLane3');
      
  
      this.endTurnButton.addEventListener('click', this.handleEndTurn.bind(this));
      this.startButton.addEventListener('click', this.handleStart.bind(this));
      this.playerlane1.addEventListener('click', this.handlePlaceCard1.bind(this));
      this.playerlane2.addEventListener('click', this.handlePlaceCard2.bind(this));
      this.playerlane3.addEventListener('click', this.handlePlaceCard3.bind(this));

      this.player = new Player("one");
      this.aI = new Player("AI");
      this.playerPower1Div = document.querySelector("#playerPowerLane1")
      this.playerPower1Div.innerHTML = this.player.lane1Power
      this.playerPower2Div = document.querySelector("#playerPowerLane2")
      this.playerPower2Div.innerHTML = this.player.lane2Power
      this.playerPower3Div = document.querySelector("#playerPowerLane3")
      this.playerPower3Div.innerHTML = this.player.lane3Power

      this.manaDiv = document.querySelector("#mana")
      this.manaDiv.innerHTML = `Mana: ${this.player.mana}`
      this.roundDiv = document.querySelector("#round")
      this.roundDiv.innerHTML = `Round: ${this.round}`

      this.enemyLane1 = document.querySelector("#enemyLane1")
      this.enemyLane2 = document.querySelector("#enemyLane2")
      this.enemyLane3 = document.querySelector("#enemyLane3")

      this.aIPower1Div = document.querySelector("#enemyPowerLane1")
      this.aIPower1Div.innerHTML = this.aI.lane1Power
      this.aIPower2Div = document.querySelector("#enemyPowerLane2")
      this.aIPower2Div.innerHTML = this.aI.lane2Power
      this.aIPower3Div = document.querySelector("#enemyPowerLane3")
      this.aIPower3Div.innerHTML = this.aI.lane3Power
    }

    
  
    handleEndTurn() {
      if (this.round <7){
        this.player.draw();
        this.aI.aIDraw();
        this.round += 1
        this.roundDiv.innerHTML = `Round: ${this.round}`
        this.player.mana = this.round
        this.handleAI()
        this.aI.mana = this.round
        this.manaDiv.innerHTML = `Mana: ${this.player.mana}`
        if (this.round === 7) {
          this.endGame()
        }
      }
    }
  
    handleStart() {
      if (this.round === 0){
        this.player.initialDraw();
        this.aI.aIInitialDraw();
        this.player.mana += 1
        this.manaDiv.innerHTML = `Mana: ${this.player.mana}`
        this.aI.mana += 1
        this.round += 1
        this.roundDiv.innerHTML = `Round: ${this.round}`
      }
    }

    
    handlePlaceCard1(){
        let hand = this.player.hand
        let filter = hand.filter((card) => card.name === this.player.selectedCard)
        if (this.player.selectedCard != null && 
          this.player.mana >= filter[0].mana
          ){
          if (this.playerlane1.childElementCount < 4){
            
            let newCardDiv = document.createElement('div')
            let newImage = document.createElement('img')
            newImage.src = filter[0].imageUrl
            newImage.height = 50
            newCardDiv.appendChild(newImage)
            this.playerlane1.appendChild(newCardDiv)

            // update lane power
            this.player.lane1Power += filter[0].power
            this.playerPower1Div.innerHTML = this.player.lane1Power
            // reduce mana by card amount update mana on the DOM
            this.player.mana -= filter[0].mana
            this.manaDiv.innerHTML = `Mana: ${this.player.mana}`

            // remove div from DOM, remove card from hand array, set selected card to null
            let index = hand.findIndex(card => card.name === this.player.selectedCard)
            hand.splice(index, 1)
            let remove = document.querySelector(`#${this.player.selectedCard}`)
            remove.remove()
            this.player.selectedCard = null
            
          }
        }

      }
      handlePlaceCard2(){
        let hand = this.player.hand
        let filter = hand.filter((card) => card.name === this.player.selectedCard)
        if (this.player.selectedCard != null && 
          this.player.mana >= filter[0].mana){
          if (this.playerlane2.childElementCount < 4){
            
            let newCardDiv = document.createElement('div')
            let newImage = document.createElement('img')
            newImage.src = filter[0].imageUrl
            newImage.height = 50
            newCardDiv.appendChild(newImage)
            this.playerlane2.appendChild(newCardDiv)


            this.player.lane2Power += filter[0].power
            this.playerPower2Div.innerHTML = this.player.lane2Power

            this.player.mana -= filter[0].mana
            this.manaDiv.innerHTML = `Mana: ${this.player.mana}`

            let index = hand.findIndex(card => card.name === this.player.selectedCard)
            hand.splice(index, 1)
            let remove = document.querySelector(`#${this.player.selectedCard}`)
            remove.remove()
            this.player.selectedCard = null
          }
        }
      }
      handlePlaceCard3(){
        let hand = this.player.hand
        let filter = hand.filter((card) => card.name === this.player.selectedCard)
        if (this.player.selectedCard != null && 
          this.player.mana >= filter[0].mana){
          if (this.playerlane3.childElementCount < 4){
            let newCardDiv = document.createElement('div')
            let newImage = document.createElement('img')
            newImage.src = filter[0].imageUrl
            newImage.height = 50
            newCardDiv.appendChild(newImage)
            this.playerlane3.appendChild(newCardDiv)


            this.player.lane3Power += filter[0].power
            this.playerPower3Div.innerHTML = this.player.lane3Power

            this.player.mana -= filter[0].mana
            this.manaDiv.innerHTML = `Mana: ${this.player.mana}`

            let index = hand.findIndex(card => card.name === this.player.selectedCard)
            hand.splice(index, 1)
            let remove = document.querySelector(`#${this.player.selectedCard}`)
            remove.remove()
            this.player.selectedCard = null
          }
        }
      }

      handleAI(){
        // while current mana is <= the least mana of the card 
        let hand = this.aI.hand
        let map = hand.map(num => num = num.mana)
        let min = Math.min(...map)
        let filter = hand.filter((card) => card.mana === min)
        let randomNumber = 0
        while (this.aI.mana >= min){
            hand = this.aI.hand
            map = hand.map(num => num = num.mana)
            min = Math.min(...map)
            filter = hand.filter((card) => card.mana === min)
            randomNumber = Math.ceil(Math.random() * 3);
          // let randomNumber = 1
          if (randomNumber === 1) {
              hand = this.aI.hand
              map = hand.map(num => num = num.mana)
              min = Math.min(...map)
              filter = hand.filter((card) => card.mana === min)
            if (this.enemyLane1.childElementCount < 4 && this.aI.mana >= filter[0].mana){
              let newCardDiv = document.createElement('div')
              let newImage = document.createElement('img')
              newImage.src = filter[0].imageUrl
              newImage.height = 50
              newCardDiv.appendChild(newImage)
              this.enemyLane1.appendChild(newCardDiv)


              this.aI.lane1Power += filter[0].power
              this.aIPower1Div.innerHTML = this.aI.lane1Power

              this.aI.mana -= filter[0].mana

              let index = hand.findIndex(card => card === filter[0])
              hand.splice(index, 1)
            } 
          } else if (randomNumber === 2) {
              hand = this.aI.hand
              map = hand.map(num => num = num.mana)
              min = Math.min(...map)
              filter = hand.filter((card) => card.mana === min)
            if (this.enemyLane2.childElementCount < 4 && this.aI.mana >= filter[0].mana){
              console.log("randomNumber2")
              let newCardDiv = document.createElement('div')
              let newImage = document.createElement('img')
              newImage.src = filter[0].imageUrl
              newImage.height = 50
              newCardDiv.appendChild(newImage)
              this.enemyLane2.appendChild(newCardDiv)


              this.aI.lane2Power += filter[0].power
              this.aIPower2Div.innerHTML = this.aI.lane2Power

              this.aI.mana -= filter[0].mana

              let index = hand.findIndex(card => card === filter[0])
              hand.splice(index, 1)
            } 
          } else {
            hand = this.aI.hand
            map = hand.map(num => num = num.mana)
            min = Math.min(...map)
            filter = hand.filter((card) => card.mana === min)
            if (this.enemyLane3.childElementCount < 4 && this.aI.mana >= filter[0].mana){
              console.log("randomNumber3")
              let newCardDiv = document.createElement('div')
              let newImage = document.createElement('img')
              newImage.src = filter[0].imageUrl
              newImage.height = 50
              newCardDiv.appendChild(newImage)
              this.enemyLane3.appendChild(newCardDiv)


              this.aI.lane3Power += filter[0].power
              this.aIPower3Div.innerHTML = this.aI.lane3Power

              this.aI.mana -= filter[0].mana

              let index = hand.findIndex(card => card === filter[0])
              hand.splice(index, 1)
            } 
          }
        } 
        // roll 
      }

      endGame(){
        this.roundDiv.innerHTML = "Game Complete"
        if (this.player.lane1Power > this.aI.lane1Power){
          this.player.points += 1
        }
        if (this.player.lane2Power > this.aI.lane2Power){
          this.player.points += 1
        }
        if (this.player.lane3Power > this.aI.lane3Power){
          this.player.points += 1
        }
        if (this.player.lane1Power < this.aI.lane1Power){
          this.aI.points += 1
        }
        if (this.player.lane2Power < this.aI.lane2Power){
          this.aI.points += 1
        }
        if (this.player.lane3Power < this.aI.lane3Power){
          this.aI.points += 1
        }
        
        if (this.player.points > this.aI.points)
          {
            console.log("You Win")
          } else if (this.player.points < this.aI.points) {
            console.log("You Lose")
          } else {
            console.log("Tie")
          }
      }
  }

  window.Game = Game
  export default Game;