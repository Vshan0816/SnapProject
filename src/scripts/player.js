import Deck from "./deck.js"

class Player {
    constructor(name){
        this.name = name
        this.mana = 1
        this.hand = []
        this.deck = new Deck()
        this.selectedCard = null
    }

    initialDraw(){
        for (let i = 0; i < 3; i++) {
            this.draw()
        }
    }

    draw(){
        console.log("drawing")
        let poppedCard = this.deck[this.deck.length-1]
        let drawnCard = this.hand[this.hand.length-1]
        this.hand.push(this.deck.pop())
        drawnCard = this.hand[this.hand.length-1]
        poppedCard = this.deck[this.deck.length-1]

        let parentElement = document.querySelector('.hand')
        let newCardDiv = document.createElement('div')
        newCardDiv.dataset.char = drawnCard.name
        newCardDiv.classList.add('selectable')
        let newImage = document.createElement('img')
        newImage.src = drawnCard.imageUrl
        newImage.height = 150

        newCardDiv.appendChild(newImage)
        parentElement.appendChild(newCardDiv)

        
        // Add click event listeners to each image
        
        newCardDiv.addEventListener('click', (event) => {
            console.log(event.target)
            console.log(event.currentTarget.dataset.char)
        // Remove the "selected" class from all images
            const images = document.querySelectorAll('.selectable')
            images.forEach(img => {
            img.classList.remove('selected');
            });
        // Add the "selected" class to the clicked image
            newCardDiv.classList.add('selected');

        // set value to player attribute of selected card
            this.selectedCard = event.currentTarget.dataset.char
            });
           
    }

    
}

export default Player