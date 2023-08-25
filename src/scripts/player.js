class Player {
    constructor(name){
        this.name = name
        this.mana = 1
        this.hand = []
        this.deck = new Deck()
    }

    draw(){
        this.hand.push(this.deck.pop())
    }
}