console.log("datetype start");
// 基本类型
let bool: boolean = true;
let num: number | undefined | null = 123;
let str: string = 'abc';
// str = 123;

// 数组
let arr1: number[] = [1, 2, 3];
// 这里面的Array 是ts为我们内定的泛型接口
let arr2: Array<number> = [1, 2, 3];
let arr3: Array<number | string> = [1, 2, 3, '4'];

// 元组 是特殊的数组 限定了数组的类型和个数
// 允许push元素进去，但是访问是会报错的 所以强烈不建议这么使用
let tuple: [number, string] = [0, '1'];
tuple.push(2)
console.log(`test tuple:${tuple}`)
// tuple[2]

// 函数
// 通常函数的返回值类型是可以省略的，利用了ts的类型推断
// let add = (x: number, y: number) => x + y
let add = (x: number, y: number): number => x + y;
// 这就是一种函数类型，只是没有具体的实现
let compute: (x: number, y: number) => number;
// 下面是具体的实现 参数名可以不同
compute = (a, b) => a + b;

// 对象
// let obj: object = {x: 1, y: 2} // 这样不可以修改obj中的属性值 这样定义就不能如下 obj.x=3 来修改
let obj: {x: number, y: number} = {x: 1, y: 2} // 这样定义就可以修改obj中的属性值了
obj.x = 3 // 这样修改是不允许的，因为只是简单的指定了obj的类型是object，并没有具体的定义它应该包含哪些属性

// symbol
let s1: symbol = Symbol()
let s2 = Symbol()
console.log(s1 === s2);

// undefined null
let un: undefined = undefined
let nu: null = null
num = undefined

// void 可以让任何表达式返回undefined
// 为什么要用void 0 来代替undefined 呢？ 因为undefined在js中不是一个保留字，我们可以定义一个undefined变量去覆盖全局的undefined
let noReture = () => {}

// 在ts中，如果我们不指定一个变量的类型，默认就是any类型
let x
x = 1
x = '1'
x = [1, 2, 3]

// never 永远不会有返回值的类型
let error = () => {
  throw new Error('error')
}
let endless = () => {
  while(true) {}
}

console.log("datetype end");
