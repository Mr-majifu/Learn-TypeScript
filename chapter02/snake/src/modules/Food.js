"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 定义 food 类
class Food {
    constructor() {
        // 加上感叹号，说明一定能获取到 food 为 id 的元素
        this.element = document.getElementById('food');
    }
    // food 的 X 坐标
    get X() {
        return this.element.offsetLeft;
    }
    // food 的 Y 坐标
    get Y() {
        return this.element.offsetTop;
    }
    // 改变食物位置的方法
    change() {
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;
        this.element.style.top = top + 'px';
        this.element.style.left = left + 'px';
    }
}
// 测试代码
// const food = new Food
// console.log(food.X,food.Y);
// food.change()
// console.log(food.X,food.Y);
exports.default = Food;
