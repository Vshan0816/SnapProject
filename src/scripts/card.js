class Card {
    constructor(imageUrl){
        this.imageUrl = imageUrl;
        this.isRevealed = false;
    }

    reveal(){
        this.isRevealed = true
    }
}