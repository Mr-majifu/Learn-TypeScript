{
  // 可以直接使用字面量进行类型声明
  let a: 10
  a = 10
  // a = 11 // 报错

  // 可以使用 | 来连接多个类型（联合类型）
  let b: 'chenzihao' | 'zhouzixin'
  b = 'chenzihao'
  b = 'zhouzixin'
  // b = 'aaa' // 报错

  let c: boolean | number
  c = false
  c = 20

  let d: 'chenzihao' | number
  d = 'chenzihao'
  d = 20

  // any 表示的是任意类型，一个变量设置为 any 类型之后，相当于关闭了类型检测（避免使用）
  let e: any
  e = 10
  e = 'hello'
  e = true

  // 声明变量如果不指定类型也不赋值，就会自动解析为 any ，隐式的any（避免使用）
  let f;

  // any 可以赋值给任意变量，所以不好
  let g: string
  g = e // 这样就连带着把 g 的 string 类型带跑了

  // unknown 表示未知类型的值
  let h: unknown
  h = 123
  h = false
  h = 'chenzihao'
  // unknown 是加上就是一个类型安全的 any
  // unknown 类型的变量，不能直接赋值给其他变量
  // g = h // 报错
  // 可以加个判断
  if (typeof h === 'string') {
    g = h
  }
  // 或者使用类型断言
  g = h as string // 就是告诉编译器，h 就是 string 类型，让他不要报错了
  // 第二种断言写法：
  g = <string>h


  // void 表示方法不返回值
  function fn(): void {
    // return 123; // 报错
  }

  // never 表示永远不会有结果，一般是抛出异常，或者是死循环啊什么的
  function fn2(): never {
    throw new Error('!!!!')
  }
}