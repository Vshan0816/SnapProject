class Card {
    constructor(name, imageUrl, power, mana){
        this.name = name
        this.imageUrl = imageUrl;
        this.isRevealed = false;
        this.power = power
        this.mana = mana
    }

    reveal(){
        this.isRevealed = true
    }

    
}

export default Card