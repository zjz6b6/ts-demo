/**
 * 无论在es还是在ts
 * 类成员的属性都是实例属性，而不是原型属性
 * 类的成员方法都是原型方法
 * 
 * ts中：
 * 实例属性必须有初始值，或者在构造函数中被初始化，如果删掉
 * this.name = name
 * 下面的 name: string 会报错
 */
class Dog {
  // 构造函数的返回值会默认是这个Dog，也就是这个类本身
  // 加上 private 说明这个类就不能实例化，也不能被继承
  // 加上 protected 说明这个类不能被实例化，只能被继承，相当于声明了一个基类
  constructor(name: string) {
    // 实例属性
    this.name = name;
  }
  // 成员属性
  public name: string
  run() {}
  private pri() {}
  protected pro() {}
  readonly legs: number = 4 // 只读属性一定要被初始化
  static food: string = 'bones' // 类的静态成员，只能用类名调用，不能用实例调用
}
console.log(Dog.prototype) // {run: ƒ, constructor: ƒ} 不包含 name 属性的
let dog = new Dog('wangwang')
/**
 * Dog {name: "wangwang"}
    name: "wangwang"
    __proto__:
      run: ƒ ()
      constructor: ƒ Dog(name)
      __proto__: Object
 */
console.log(dog) // Dog {name: "wangwang"}
// dog.pri()
// dog.pro()
console.log(Dog.food)

/**
 * 类的继承
 * 类的所有属性默认都是public
 * 私有成员：只能在类的本身被调用，不能被类的实例调用，也不能被类的子类调用
 * 受保护成员：只能在类或者子类中访问，不能在类的实例中访问
 */
class Husky extends Dog {
  // 父类中构造函数有name，子类中也一定要有
  // 除了类的成员可以添加修饰符外，构造函数的参数也可以添加修饰符，作用就是将参数自动变成了实例的属性，这样就可以省略在类中的定义了
  // 这里定义了public 
  constructor(name: string, public color: string) {
    super(name) // super 代表父类的实例
    this.color = color
    // this.pri()
    this.pro()
  }
  // 定义了自己的属性，这样就要在构造函数中初始化
  // color: string
}
console.log(Husky.food) // 类的静态成员也可以被继承

/**
 * 抽象类
 */
abstract class Animal {
  // 抽象类中可以定义一个方法，有具体的实现，这样子类就不用实现了，这样就实现了方法的复用
  eat() {
    console.log('eat')
  }
  // 也可以不具体实现 抽象方法的好处是，你可以明确知道子类有自己的实现，没必要在父类中实现了
  // 抽象方法 可以实现多态，也就是一个方法在子类中有不同的实现
  abstract sleep(): void
}
// let animal = new Animal()


class Dog1 extends Animal {
  constructor(name: string) {
    super()
    this.name = name
  }
  name: string
  run() {}
  sleep() {
    console.log('dog sleep')
  }
}
let dog1 = new Dog1('wangwnag')
dog1.eat()
// dog1.sleep()

class Cat extends Animal {
  sleep() {
    console.log('cat sleep')
  }
}
let cat = new Cat()

let animals: Animal[] = [dog1, cat]
animals.forEach(i => {
  i.sleep()
})

// 特殊的ts类型 this类型 很方便的链式调用
// 类的成员方法返回一个this
class WorkFlow {
  step1() {
    return this
  }
  step2() {
    return this
  }
}
new WorkFlow().step1().step2()

// 继承的时候，this类型也可以表现为多态，this既可以是父类型，也可以是子类型
class MyFlow extends WorkFlow {
  next() {
    return this
  }
}

// 保证了父类和子类方法调用的连贯性
new MyFlow().next().step1().next().step2()
