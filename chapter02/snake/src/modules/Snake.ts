
// 蛇 类
class Snake {
  // 蛇容器
  element: HTMLElement
  // 蛇头
  head: HTMLElement
  // 整个蛇（包括蛇头）
  snake: HTMLCollectionOf<HTMLElement>

  constructor() {
    this.element = document.getElementById('snake')!
    this.head = document.querySelector('#snake > div')!
    this.snake = this.element.getElementsByTagName('div')
  }

  // 获取蛇的坐标（蛇头）
  get X() {
    return this.head.offsetLeft
  }

  get Y() {
    return this.head.offsetTop
  }

  // 设置蛇头的坐标
  set X(value) {
    if(value === this.X){
      return
    }
    if(value < 0 || value > 290){
      throw new Error("蛇撞墙了");
    }

    this.moveBody()

    this.head.style.left = value + 'px'
    
    this.checkCrashBody()
  }
  set Y(value) {
    if(value === this.Y){
      return
    }
    if(value < 0 || value > 290){
      throw new Error("蛇撞墙了");
    }

    this.moveBody()

    this.head.style.top = value + 'px'
    
    this.checkCrashBody()
  }

  // 蛇增加身体的方法
  addBody() {
    this.element.insertAdjacentHTML("beforeend", "<div></div>")
  }

  // 蛇身体移动的方法
  moveBody() {
    for(let i = this.snake.length - 1;i>0;i--){
      // 获取前边一节身体的坐标
      let X = this.snake[i-1].offsetLeft
      let Y = this.snake[i-1].offsetTop

      // 将前边这节身体的位置赋值给后边这一节
      this.snake[i].style.left = X + 'px'
      this.snake[i].style.top = Y + 'px'
    }
  }

  // 检查是否碰撞到身体
  checkCrashBody(){
    for(let i = 1;i < this.snake.length- 1;i++){
      if(this.snake[i].offsetTop === this.Y && this.snake[i].offsetLeft === this.X){
        throw new Error("碰到自己了！！GAME OVER ！！");
        
      }

    }
  }
}

export default Snake