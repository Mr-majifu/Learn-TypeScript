"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Food_1 = __importDefault(require("./Food"));
const ScorePanel_1 = __importDefault(require("./ScorePanel"));
const Snake_1 = __importDefault(require("./Snake"));
// 游戏控制器 类
class GameControl {
    constructor() {
        // 表示蛇头的方向
        this.direction = '';
        // 游戏是否结束
        this.gameLive = true;
        this.food = new Food_1.default;
        this.snake = new Snake_1.default;
        this.scorePanel = new ScorePanel_1.default;
        this.init();
    }
    // 游戏的初始化方法
    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        this.move();
    }
    // 创建一个键盘按下的响应函数
    keydownHandler(event) {
        if (this.direction === ('ArrowUp' || 'Up') && event.key === ('ArrowDown' || 'Down')) {
            return;
        }
        else if (this.direction === ('ArrowDown' || 'Down') && event.key === ('ArrowUp' || 'Up')) {
            return;
        }
        else if (this.direction === ('ArrowLeft' || 'Left') && event.key === ('ArrowRight' || 'Right')) {
            return;
        }
        else if (this.direction === ('ArrowRight' || 'Right') && event.key === ('ArrowLeft' || 'Left')) {
            return;
        }
        else {
            this.direction = event.key;
        }
    }
    // 蛇移动的方法
    move() {
        // 获取蛇的坐标
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch (this.direction) {
            case 'ArrowUp':
            case 'Up':
                Y -= 10;
                break;
            case 'ArrowDown':
            case 'Down':
                Y += 10;
                break;
            case 'ArrowLeft':
            case 'Left':
                X -= 10;
                break;
            case 'ArrowRight':
            case 'Right':
                X += 10;
                break;
        }
        this.checkEat(X, Y);
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        }
        catch (e) {
            alert(e.message + "! GAME OVER ! !");
            this.gameLive = false;
        }
        this.gameLive && setTimeout(this.move.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }
    // 检查蛇是否迟到了食物
    checkEat(X, Y) {
        if (this.food.X === X && this.food.Y === Y) {
            this.food.change();
            this.snake.addBody();
            this.scorePanel.addScore();
        }
    }
}
exports.default = GameControl;
