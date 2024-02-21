console.log("interface start");
// 从后端获取一组数据，然后把它渲染到页面中，就可以这样定义我们的接口
// 一般id都是只读的
interface List {
  // 只读
  readonly id: number;
  name: string;
  // [x: string]: any; // 可索引任意额外字段
  age?: number;
}
interface Result {
  code: number;
  data: List[];
}

function render(result: Result) {
  result.data.forEach(value => {
    console.log(value.id, value.name)
    if (value.age) {
      console.log(value.age)
    }
    // value.id++
  })
}

let result = {
  code: 200,
  data: [
    // 只要传入的对象，满足接口的必要条件，就是被允许的
    {id: 1, name: 'a', sex: '男'},
    {id: 2, name: 'b', age: 20}
  ]
}
// 这样传，是可以的，多余的变量不会报错，但是如果传入的是对象字面量的话，ts就会对额外的字段进行类型检查
render(result)


// 解决这种问题的方式，有三种：
/**
 * 1、上面讲对象字面量赋值给一个变量，然后传入
 * 2、采用类型断言: 明确的告诉编译器我们知道这个变量的类型就是Result，这样编译器就会绕过类型检查
 * 3、采用字符串索引签名 在List中 这样List就可以支持多个属性了
 */
// render({
//   code: 200,
//   data: [
//     // 只要传入的对象，满足接口的必要条件，就是被允许的
//     {id: 1, name: 'a', sex: '男'},
//     {id: 2, name: 'b'}
//   ]
// })

// // 类型断言
// render({
//   code: 200,
//   data: [
//     // 只要传入的对象，满足接口的必要条件，就是被允许的
//     {id: 1, name: 'a', sex: '男'},
//     {id: 2, name: 'b'}
//   ]
// } as Result)

// // 类型断言 建议使用上一种，这种在react中会产生歧义
// render(<Result>{
//   code: 200,
//   data: [
//     // 只要传入的对象，满足接口的必要条件，就是被允许的
//     {id: 1, name: 'a', sex: '男'},
//     {id: 2, name: 'b'}
//   ]
// })


// 以上接口的属性都是固定的，当你不确定一个接口中有多少个属性的时候，就可以使用可索引类型的接口
// 可索引类型的接口：可以用数字去索引，也可以用字符串索引

// 用数字索引的接口 相当于声明了一个字符串类型的数组
interface StringArray {
  [index: number]: string
}
let chars: StringArray = ['a', 'b']

// 用字符串索引接口
interface Names {
  [x: string]: string; // [x: string]: any
  // y: number; // 这样是不被允许的
  y: string;
  [z: number]: string; // 数字索引签名的返回值一定要是字符串索引签名返回值的子类型 js会进行类型转化，将number转化成string
  // [b: number]: number // 这里将数字索引签名的返回值改成number就会报错
}

// 函数类型接口

// 这两种定义是等价的
// 用变量定义函数
let add1: (x: number, y: number) => number

// interface Add {
//   (x: number, y: number): number
// }

// 更简洁的定义函数的方式 类型别名
type Add = (x: number, y: number) => number

let add2: Add = (a, b) => a + b 

// 混合类型接口
interface Lib {
  (): void;
  version: string;
  doSometing(): void;
}

function getLib() {
  let lib: Lib = (() => {}) as Lib;
  lib.version = '1.0';
  lib.doSometing = () => {}
  return lib;
}

let lib1 = getLib();
lib1();
lib1.doSometing();
let lib2 = getLib();
lib2();
lib2.doSometing();

console.log("interface end");