
// 计分牌 类
class ScorePanel {
  // 分数 和 等级
  score: number = 0
  level: number = 1

  // 分数和等级所在的元素
  scoreElement: HTMLElement
  levelElement: HTMLElement

  // 最高等级
  maxLevel: number
  // 吃多少个食物升一级等级
  upLevel: number

  constructor(maxLevel:number = 10,upLevel: number = 3){
    this.scoreElement = document.getElementById('score')!
    this.levelElement = document.getElementById('level')!
    this.maxLevel = maxLevel
    this.upLevel = upLevel
  }

  // 分数增加的方法
  addScore(){
    this.scoreElement.innerHTML = ++this.score + ''
    if(this.score % this.upLevel === 0) {
      this.addLevel()
    }
  }

  // 等级增加的方法
  addLevel(){
    if(this.level < this.maxLevel){
      this.levelElement.innerHTML = ++this.level + ''
    }
  }
}

// 测试代码
// const scorePanel = new ScorePanel
// scorePanel.addScore

export default ScorePanel