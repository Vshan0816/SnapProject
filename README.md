##Background

Snap is a miniature iteration of the digital card game Marvel Snap where you as the player will face against the AI. Both you and the AI will have the same prebuilt deck. The goal of the game is to win 2 out of 3 lanes by having more total power than your opponent in the respective lanes. There are 6 turns in total, and each player gains 1 mana per turn. Each player has a Deck of 12, they start with a hand of 4, and draw one card per turn. Both players decide which cards to place each turn, and the cards played are revealed to both players at the end of the turn. This loop repeats until the end of turn 6 whereafter the score is counted, and a winner is decided.

##Live Version  
https://vshan0816.github.io/SnapProject/

##Instructions

Press the start game button to start the game and draw your initial hand  
You can select a card by clicking on the image.  
You can place a card in a lane by clicking in one of the 3 bottom purple grids on the board if you have the required mana.  
The blue icon on the card indicates the mana cost.
The orange icon on the card indicates the power.  
The game ends after turn 6, and whoever is winning 2 or more lanes, will win the game.

##Functionalities  

-   Snap has a board that dynamic renders elements
-   Snap has a pre-built deck for the player and the AI
-   Snap has an AI to play against
-   Snap has a reveal phase, where at the end of the turn, the AI's decisions are shown
  
##Technologies, Libraries, API
Javascript + Browser + HTML

##To-do's // Future features
-   improve the AI, specifically its card selection choices
-   add locations which will add modifiers to the lanes
-   possibly add abilities to specific cards
-   improve styling
-   refactor code for organization

##File Structure
JavascriptProject/
├─ src/
│ ├── index.js
| ├── index.scss
│ ├── images/
│ │ ├── favicon.co
│ ├── scripts/
│ │ ├── board.js
│ │ ├── card.js
│ │ ├── deck.js
│ │ ├── game.js
│ │ ├── location.js
│ │ ├── player.js
│ ├── styles/
│ │ ├── example.scss
├─ package.json
├─ webpack.config.js
└── README.md


