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

    initialize(){
        let one = new Card("one", "example", 2, 1)
        let two = new Card("two", "example", 3,2)
        let three = new Card("three", "example", 4 ,2)
        let four = new Card("four", "example", 4, 2)
        let five = new Card("five", "example", 4, 2)
        let six = new Card("six", "example", 5, 3)
        let seven = new Card("seven", "example", 6,3)
        let eight = new Card("eight", "example", 7,4)
        let nine = new Card("nine", "example", 7,4)
        let ten = new Card("ten", "example", 9, 5)
        let eleven = new Card("eleven", "example", 9, 5)
        let twelve = new Card("twelve", "example", 12, 6)

    }
}