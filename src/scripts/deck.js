import Card from "./card.js"

class Deck {
    constructor(){
        this.deck = [];
        this.deck.push(new Card("one", "https://images.marvelsnap.io/images/cards/3.webp", 2, 1));
        this.deck.push(new Card("two", "https://images.marvelsnap.io/images/cards/9.webp", 3, 2));
        this.deck.push(new Card("three", "https://images.marvelsnap.io/images/cards/26.webp", 4, 2));
        this.deck.push(new Card("four", "https://images.marvelsnap.io/images/cards/209.webp", 4, 2));
        this.deck.push(new Card("five", "https://images.marvelsnap.io/images/cards/27.webp", 3, 2));
        this.deck.push(new Card("six", "https://images.marvelsnap.io/images/cards/34.webp", 5, 3));
        this.deck.push(new Card("seven", "https://images.marvelsnap.io/images/cards/96.webp", 5, 3));
        this.deck.push(new Card("eight", "https://images.marvelsnap.io/images/cards/376.webp", 6, 4));
        this.deck.push(new Card("nine", "https://images.marvelsnap.io/images/cards/140.webp", 6, 4));
        this.deck.push(new Card("ten", "https://images.marvelsnap.io/images/cards/1.webp", 9, 5));
        this.deck.push(new Card("eleven", "https://images.marvelsnap.io/images/cards/2.webp", 8, 5));
        this.deck.push(new Card("twelve", "https://images.marvelsnap.io/images/cards/58.webp", 12, 6));

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
            }
          }
          
        shuffleArray(this.deck)
        return this.deck
    }

    size(){
        this.deck.length
    }

}

export default Deck;