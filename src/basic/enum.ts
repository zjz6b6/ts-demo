console.log("enum start");
// 数字枚举
enum Role {
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest
}
console.log(Role.Reporter) // 1
console.log(Role)

// 字符串枚举 字符串枚举是不可以作反向映射的
enum Message {
  Success = '恭喜你，成功了',
  Fail = '抱歉，失败了'
}
console.log(Message)

// 异构枚举 数字枚举和字符串枚举混用 容易引起混淆，不建议使用
enum Answer {
  N,
  Y = 'yes'
}

// 枚举成员
// Role.Reporter = 2
enum Char {
  // 常量枚举 会在编译的时候计算出结果，以常量的形式出现在运行时环境
  a,
  b = Char.a,
  c = 1 + 3,
  // computed 不会再编译阶段进行计算 会被保留到程序的执行阶段
  d = Math.random(),
  e = '123'.length
}
console.log(Char)

// 常量枚举 在编译阶段会被移除 编译后没有任何代码
// 那作用是什么呢？当我们不需要一个对象，而需要对象的值的时候，就需要用常量枚举，这样可以减少在编译环境的代码
// 枚举被直接替换成了常量
const enum Month {
  Jan,
  Feb,
  Mar,
}
const month = [Month.Jan, Month.Feb, Month.Mar]

// 枚举类型
enum E { a, b}
enum F { a = 1, b = 2 }
enum G { a = 'apple', b = 'banana'}

// let e: E = 3
// let f: F = 3
// console.log(e === f)

// let e1: E.a = 3
// let e2: E.b = 3
// let e3: E.a = 3
// console.log(e1 === e2)
// console.log(e1 === e3)

// let g1: G = G.a
// let g2: G.a = G.a

enum MyEnum {
  A = 'a',
  B = 'b'
}

// 'A'|'B'
type Foo = keyof typeof MyEnum;

enum Color {
  Red,
  Green,
  Blue
}

// 反向映射
for (const color of Object.keys(Color)) {
  console.log("key", color); // 输出枚举的键名
}

for (const value of Object.values(Color)) {
  console.log("value", value); // 输出枚举的值
}

for (const [key, value] of Object.entries(Color)) {
  console.log("key", `${key}: "value", ${value}`); // 输出键值对
}

console.log("enum end");