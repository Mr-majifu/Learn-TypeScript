"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./style/index.less");
// import Food from './modules/Food'
// import ScorePanel from './modules/ScorePanel'
// const food = new Food
// console.log(food.X,food.Y);
// food.change()
// console.log(food.X,food.Y);
// const scorePanel = new ScorePanel(20,20)
// for (let i = 0; i < 30000; i++) {
//   scorePanel.addScore()
// }
const GameControl_1 = __importDefault(require("./modules/GameControl"));
const gameControl = new GameControl_1.default;
setInterval(() => {
    console.log(gameControl.direction);
}, 1000);
