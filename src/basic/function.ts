console.log("function start");

// 函数定义
function fn1(x: number, y: number) {
  return x + y
}

/**
 * 后面这三种只是函数类型的定义，而并没有具体的实现
 * 真正调用的时候要书写具体的函数体
 */
let fn2: (x: number, y: number) => number

type fn3 = (x: number, y: number) => number

// 接口也可以定义函数类型
interface fn4 {
  (x: number, y: number): number
}

// fn1(1, 2)

// 可选参数必须位于必选参数之后
function fn5(x: number, y?: number) {
  return y ? x + y : x
}
// fn5(1)

function fn6(x: number, y = 0, z: number, q = 1) {
  return x + y + z + q;
}

function fn7(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur);
}
console.log(fn7(1, 2, 3, 4, 5, 5))

/**
 * 函数重载
 * 如果参数都是数字，就返回参数的和，如果都是字符串，返回所有字符串的拼接
 * 前面是函数定义，最后一个是函数实现（更宽泛的类型定义any来实现）
 */
function fn8(...rest: number[]): number;
function fn8(...rest: string[]): string;
function fn8(...rest: any[]): any {
  let first = rest[0];
  if (typeof first === 'string') {
    return rest.join('');
  }
  if (typeof first === 'number') {
    return rest.reduce((pre, cur) => pre + cur);
  }
}
console.log(fn8(1, 2, 3))
console.log(fn8('a', 'b', 'c'))

console.log("function end");