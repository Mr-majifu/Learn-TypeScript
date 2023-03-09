"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 计分牌 类
class ScorePanel {
    constructor(maxLevel = 10, upLevel = 3) {
        // 分数 和 等级
        this.score = 0;
        this.level = 1;
        this.scoreElement = document.getElementById('score');
        this.levelElement = document.getElementById('level');
        this.maxLevel = maxLevel;
        this.upLevel = upLevel;
    }
    // 分数增加的方法
    addScore() {
        this.scoreElement.innerHTML = ++this.score + '';
        if (this.score % this.upLevel === 0) {
            this.addLevel();
        }
    }
    // 等级增加的方法
    addLevel() {
        if (this.level < this.maxLevel) {
            this.levelElement.innerHTML = ++this.level + '';
        }
    }
}
// 测试代码
// const scorePanel = new ScorePanel
// scorePanel.addScore
exports.default = ScorePanel;
