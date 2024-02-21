// 泛型

// 泛型类
class Log<T> {
  run(value: T) {
    console.log(value)
    return value
  }
}

let log1 = new Log<number>()
log1.run(1)

// 不指定泛型，则可任意使用
let log2 = new Log()
log2.run("any thing")


// 泛型约束
interface Length {
  length: number
}
function log<T extends Length>(value: T) : T {
  console.log(value, value.length)
  return value
}
log([100])  // 数组具有length属性
log("test") // 字符串具有length属性
log({length: 10}) // 只要对象具有length属性即可

// 函数的泛型写法
function id<T>(arg:T):T {
  return arg;
}
// 写法一
let myId1:<T>(arg:T) => T = id;
// 写法二
let myId2:{ <T>(arg:T): T } = id;

// 接口的泛型写法


