// 指定类型参数

function combine<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2)
}

combine<number | string>([1, 2, 3], ['asddd'])