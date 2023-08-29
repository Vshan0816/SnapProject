/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n/* harmony import */ var _scripts_deck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/deck.js */ \"./src/scripts/deck.js\");\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  console.log(\"Hello world!\");\n  // let game = new Game()\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUF3QztBQUNIO0FBQ0o7QUFFakNHLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBVztFQUNyREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0VBQzNCO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdHByb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhhbXBsZSBmcm9tIFwiLi9zY3JpcHRzL2V4YW1wbGVcIjtcbmltcG9ydCBEZWNrIGZyb20gXCIuL3NjcmlwdHMvZGVjay5qc1wiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCJcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coXCJIZWxsbyB3b3JsZCFcIilcbiAgICAvLyBsZXQgZ2FtZSA9IG5ldyBHYW1lKClcbn0pO1xuXG5cblxuXG5cbiJdLCJuYW1lcyI6WyJFeGFtcGxlIiwiRGVjayIsIkdhbWUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/card.js":
/*!*****************************!*\
  !*** ./src/scripts/card.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Card {\n  constructor(name, imageUrl, power, mana) {\n    this.name = name;\n    this.imageUrl = imageUrl;\n    this.isRevealed = false;\n    this.power = power;\n    this.mana = mana;\n  }\n  reveal() {\n    this.isRevealed = true;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYXJkLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxJQUFJLENBQUM7RUFDUEMsV0FBV0EsQ0FBQ0MsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFDO0lBQ3BDLElBQUksQ0FBQ0gsSUFBSSxHQUFHQSxJQUFJO0lBQ2hCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0csVUFBVSxHQUFHLEtBQUs7SUFDdkIsSUFBSSxDQUFDRixLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBLElBQUk7RUFDcEI7RUFFQUUsTUFBTUEsQ0FBQSxFQUFFO0lBQ0osSUFBSSxDQUFDRCxVQUFVLEdBQUcsSUFBSTtFQUMxQjtBQUdKO0FBRUEsK0RBQWVOLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0cHJvamVjdC8uL3NyYy9zY3JpcHRzL2NhcmQuanM/NjhmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBpbWFnZVVybCwgcG93ZXIsIG1hbmEpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuaW1hZ2VVcmwgPSBpbWFnZVVybDtcbiAgICAgICAgdGhpcy5pc1JldmVhbGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucG93ZXIgPSBwb3dlclxuICAgICAgICB0aGlzLm1hbmEgPSBtYW5hXG4gICAgfVxuXG4gICAgcmV2ZWFsKCl7XG4gICAgICAgIHRoaXMuaXNSZXZlYWxlZCA9IHRydWVcbiAgICB9XG5cbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZCJdLCJuYW1lcyI6WyJDYXJkIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiaW1hZ2VVcmwiLCJwb3dlciIsIm1hbmEiLCJpc1JldmVhbGVkIiwicmV2ZWFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/card.js\n");

/***/ }),

/***/ "./src/scripts/deck.js":
/*!*****************************!*\
  !*** ./src/scripts/deck.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.js */ \"./src/scripts/card.js\");\n\nclass Deck {\n  constructor() {\n    this.deck = [];\n    this.deck.push(new _card_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"one\", \"https://images.marvelsnap.io/images/cards/3.webp\", 2, 1));\n    this.deck.push(new _card_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"two\", \"https://images.marvelsnap.io/images/cards/9.webp\", 3, 2));\n    this.deck.push(new _card_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"three\", \"https://images.marvelsnap.io/images/cards/26.webp\", 4, 2));\n    this.deck.push(new _card_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"four\", \"https://images.marvelsnap.io/images/cards/209.webp\", 4, 2));\n    this.deck.push(new _card_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"five\", \"https://images.marvelsnap.io/images/cards/27.webp\", 3, 2));\n    this.deck.push(new _card_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"six\", \"https://images.marvelsnap.io/images/cards/34.webp\", 5, 3));\n    this.deck.push(new _card_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"seven\", \"https://images.marvelsnap.io/images/cards/96.webp\", 5, 3));\n    this.deck.push(new _card_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"eight\", \"https://images.marvelsnap.io/images/cards/376.webp\", 6, 4));\n    this.deck.push(new _card_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"nine\", \"https://images.marvelsnap.io/images/cards/140.webp\", 6, 4));\n    this.deck.push(new _card_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"ten\", \"https://images.marvelsnap.io/images/cards/1.webp\", 9, 5));\n    this.deck.push(new _card_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"eleven\", \"https://images.marvelsnap.io/images/cards/2.webp\", 8, 5));\n    this.deck.push(new _card_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"twelve\", \"https://images.marvelsnap.io/images/cards/58.webp\", 12, 6));\n    function shuffleArray(array) {\n      for (let i = array.length - 1; i > 0; i--) {\n        const j = Math.floor(Math.random() * (i + 1));\n        [array[i], array[j]] = [array[j], array[i]];\n      }\n    }\n    shuffleArray(this.deck);\n    return this.deck;\n  }\n  size() {\n    this.deck.length;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Deck);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3BCO0VBRUFVLElBQUlBLENBQUEsRUFBRTtJQUNGLElBQUksQ0FBQ1YsSUFBSSxDQUFDSyxNQUFNO0VBQ3BCO0FBRUo7QUFFQSwrREFBZVAsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRwcm9qZWN0Ly4vc3JjL3NjcmlwdHMvZGVjay5qcz9iMDUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJkIGZyb20gXCIuL2NhcmQuanNcIlxuXG5jbGFzcyBEZWNrIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmRlY2sgPSBbXTtcbiAgICAgICAgdGhpcy5kZWNrLnB1c2gobmV3IENhcmQoXCJvbmVcIiwgXCJodHRwczovL2ltYWdlcy5tYXJ2ZWxzbmFwLmlvL2ltYWdlcy9jYXJkcy8zLndlYnBcIiwgMiwgMSkpO1xuICAgICAgICB0aGlzLmRlY2sucHVzaChuZXcgQ2FyZChcInR3b1wiLCBcImh0dHBzOi8vaW1hZ2VzLm1hcnZlbHNuYXAuaW8vaW1hZ2VzL2NhcmRzLzkud2VicFwiLCAzLCAyKSk7XG4gICAgICAgIHRoaXMuZGVjay5wdXNoKG5ldyBDYXJkKFwidGhyZWVcIiwgXCJodHRwczovL2ltYWdlcy5tYXJ2ZWxzbmFwLmlvL2ltYWdlcy9jYXJkcy8yNi53ZWJwXCIsIDQsIDIpKTtcbiAgICAgICAgdGhpcy5kZWNrLnB1c2gobmV3IENhcmQoXCJmb3VyXCIsIFwiaHR0cHM6Ly9pbWFnZXMubWFydmVsc25hcC5pby9pbWFnZXMvY2FyZHMvMjA5LndlYnBcIiwgNCwgMikpO1xuICAgICAgICB0aGlzLmRlY2sucHVzaChuZXcgQ2FyZChcImZpdmVcIiwgXCJodHRwczovL2ltYWdlcy5tYXJ2ZWxzbmFwLmlvL2ltYWdlcy9jYXJkcy8yNy53ZWJwXCIsIDMsIDIpKTtcbiAgICAgICAgdGhpcy5kZWNrLnB1c2gobmV3IENhcmQoXCJzaXhcIiwgXCJodHRwczovL2ltYWdlcy5tYXJ2ZWxzbmFwLmlvL2ltYWdlcy9jYXJkcy8zNC53ZWJwXCIsIDUsIDMpKTtcbiAgICAgICAgdGhpcy5kZWNrLnB1c2gobmV3IENhcmQoXCJzZXZlblwiLCBcImh0dHBzOi8vaW1hZ2VzLm1hcnZlbHNuYXAuaW8vaW1hZ2VzL2NhcmRzLzk2LndlYnBcIiwgNSwgMykpO1xuICAgICAgICB0aGlzLmRlY2sucHVzaChuZXcgQ2FyZChcImVpZ2h0XCIsIFwiaHR0cHM6Ly9pbWFnZXMubWFydmVsc25hcC5pby9pbWFnZXMvY2FyZHMvMzc2LndlYnBcIiwgNiwgNCkpO1xuICAgICAgICB0aGlzLmRlY2sucHVzaChuZXcgQ2FyZChcIm5pbmVcIiwgXCJodHRwczovL2ltYWdlcy5tYXJ2ZWxzbmFwLmlvL2ltYWdlcy9jYXJkcy8xNDAud2VicFwiLCA2LCA0KSk7XG4gICAgICAgIHRoaXMuZGVjay5wdXNoKG5ldyBDYXJkKFwidGVuXCIsIFwiaHR0cHM6Ly9pbWFnZXMubWFydmVsc25hcC5pby9pbWFnZXMvY2FyZHMvMS53ZWJwXCIsIDksIDUpKTtcbiAgICAgICAgdGhpcy5kZWNrLnB1c2gobmV3IENhcmQoXCJlbGV2ZW5cIiwgXCJodHRwczovL2ltYWdlcy5tYXJ2ZWxzbmFwLmlvL2ltYWdlcy9jYXJkcy8yLndlYnBcIiwgOCwgNSkpO1xuICAgICAgICB0aGlzLmRlY2sucHVzaChuZXcgQ2FyZChcInR3ZWx2ZVwiLCBcImh0dHBzOi8vaW1hZ2VzLm1hcnZlbHNuYXAuaW8vaW1hZ2VzL2NhcmRzLzU4LndlYnBcIiwgMTIsIDYpKTtcblxuICAgICAgICBmdW5jdGlvbiBzaHVmZmxlQXJyYXkoYXJyYXkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgICAgICAgICAgW2FycmF5W2ldLCBhcnJheVtqXV0gPSBbYXJyYXlbal0sIGFycmF5W2ldXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgIHNodWZmbGVBcnJheSh0aGlzLmRlY2spXG4gICAgICAgIHJldHVybiB0aGlzLmRlY2tcbiAgICB9XG5cbiAgICBzaXplKCl7XG4gICAgICAgIHRoaXMuZGVjay5sZW5ndGhcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVjazsiXSwibmFtZXMiOlsiQ2FyZCIsIkRlY2siLCJjb25zdHJ1Y3RvciIsImRlY2siLCJwdXNoIiwic2h1ZmZsZUFycmF5IiwiYXJyYXkiLCJpIiwibGVuZ3RoIiwiaiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/deck.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Example {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.innerHTML = \"<h1>It's ALIVE!!!</h1>\";\n    this.ele.addEventListener(\"click\", this.handleClick.bind(this));\n  }\n  handleClick() {\n    this.ele.children[0].innerText = \"Ouch!\";\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxPQUFPLENBQUM7RUFDVkMsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFFO0lBQ2IsSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLHdCQUF3QjtJQUU3QyxJQUFJLENBQUNELEdBQUcsQ0FBQ0UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0MsV0FBVyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDbkU7RUFFQUQsV0FBV0EsQ0FBQSxFQUFFO0lBQ1QsSUFBSSxDQUFDSCxHQUFHLENBQUNLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFHLE9BQU87RUFDNUM7QUFFSjtBQUVBLCtEQUFlUixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdHByb2plY3QvLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzP2ZjZWUiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRXhhbXBsZSB7XG4gICAgY29uc3RydWN0b3IoZWxlKSB7XG4gICAgICAgIHRoaXMuZWxlID0gZWxlO1xuICAgICAgICB0aGlzLmVsZS5pbm5lckhUTUwgPSBcIjxoMT5JdCdzIEFMSVZFISEhPC9oMT5cIlxuXG4gICAgICAgIHRoaXMuZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrKCl7XG4gICAgICAgIHRoaXMuZWxlLmNoaWxkcmVuWzBdLmlubmVyVGV4dCA9IFwiT3VjaCFcIjtcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGU7Il0sIm5hbWVzIjpbIkV4YW1wbGUiLCJjb25zdHJ1Y3RvciIsImVsZSIsImlubmVySFRNTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDbGljayIsImJpbmQiLCJjaGlsZHJlbiIsImlubmVyVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function() {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/vincent/code/labs/Week9/JavascriptProject/src/scripts/game.js: Unexpected token (36:4)\n\n\u001b[0m \u001b[90m 34 |\u001b[39m       \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39menemyLane1 \u001b[33m=\u001b[39m \u001b[0m\n\u001b[0m \u001b[90m 35 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 36 |\u001b[39m     }\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m     \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 37 |\u001b[39m   \u001b[0m\n\u001b[0m \u001b[90m 38 |\u001b[39m     handleEndTurn() {\u001b[0m\n\u001b[0m \u001b[90m 39 |\u001b[39m       \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mplayer\u001b[33m.\u001b[39mdraw()\u001b[33m;\u001b[39m\u001b[0m\n    at instantiate (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:60:32)\n    at constructor (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:355:12)\n    at Parser.raise (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:3204:19)\n    at Parser.unexpected (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:3234:16)\n    at Parser.parseExprAtom (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:11235:16)\n    at Parser.parseExprSubscripts (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:10841:23)\n    at Parser.parseUpdate (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:10824:21)\n    at Parser.parseMaybeUnary (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:10800:23)\n    at Parser.parseMaybeUnaryOrPrivate (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:10638:61)\n    at Parser.parseExprOps (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:10643:23)\n    at Parser.parseMaybeConditional (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:10620:23)\n    at Parser.parseMaybeAssign (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:10581:21)\n    at Parser.parseMaybeAssign (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:10607:25)\n    at Parser.parseExpressionBase (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:10535:23)\n    at /home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:10531:39\n    at Parser.allowInAnd (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:12226:16)\n    at Parser.parseExpression (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:10531:17)\n    at Parser.parseStatementContent (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:12684:23)\n    at Parser.parseStatementLike (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:12535:17)\n    at Parser.parseStatementListItem (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:12515:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:13136:61)\n    at Parser.parseBlockBody (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:13129:10)\n    at Parser.parseBlock (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:13117:10)\n    at Parser.parseFunctionBody (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:11898:24)\n    at Parser.parseFunctionBodyAndFinish (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:11884:10)\n    at Parser.parseMethod (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:11842:31)\n    at Parser.pushClassMethod (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:13570:30)\n    at Parser.parseClassMemberWithIsStatic (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:13442:12)\n    at Parser.parseClassMember (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:13386:10)\n    at /home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:13336:14\n    at Parser.withSmartMixTopicForbiddingContext (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:12208:14)\n    at Parser.parseClassBody (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:13316:10)\n    at Parser.parseClass (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:13294:22)\n    at Parser.parseStatementContent (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:12564:21)\n    at Parser.parseStatementLike (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:12535:17)\n    at Parser.parseModuleItem (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:12512:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:13136:36)\n    at Parser.parseBlockBody (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:13129:10)\n    at Parser.parseProgram (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:12411:10)\n    at Parser.parseTopLevel (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:12401:25)\n    at Parser.parse (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:14297:10)\n    at parse (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/parser/lib/index.js:14338:38)\n    at parser (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/core/lib/parser/index.js:41:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/core/lib/transformation/normalize-file.js:64:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/core/lib/transformation/index.js:21:50)\n    at run.next (<anonymous>)\n    at transform (/home/vincent/code/labs/Week9/JavascriptProject/node_modules/@babel/core/lib/transform.js:22:41)\n    at transform.next (<anonymous>)");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0cHJvamVjdC8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;