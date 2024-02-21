/**
 * 类 类型 接口
 * 一个接口可以约束类成员有哪些属性以及他们的类型
 */
interface Human {
  // new(name: string): void
  name: string;
  eat(): void;
}

// Asian 实现了这个接口
/**
 * 类 实现接口的时候，必须实现接口中的所有属性
 * 接口只能约束类的共有成员
 * 接口也不能约束类的构造函数
 */
class Asian implements Human {
  constructor(name: string) {
    this.name = name;
  }
  name: string
  eat() {}
  
  sleep() {} // 自己定义的
}

/**
 * 接口的继承
 * 接口可以像类一样，相互的继承，并且一个接口可以继承多个接口
 * 可以抽离出可重用的接口
 * 接口除了可以继承接口外，还可以继承类：
 * 这就相当于，接口把类的成员都抽象了出来，也就是，只有类的成员结构，而没有具体的实现
 * 抽离的不只是共有成员，私有成员，受保护成员也都抽离了
 */
interface Man extends Human {
  run(): void
}

interface Child {
  cry(): void
}

interface Boy extends Man, Child {}

let boy: Boy = {
  name: '',
  run() {},
  eat() {},
  cry() {}
}

class Auto {
  state = 1
  // private state1 = 0
}
/**
 * 这样，这个接口中就隐含了state属性，要想实现这个接口，只要一个类的成员有state属性就可以了
 */
interface AutoInterface extends Auto {

}

class C implements AutoInterface {
  state = 1
}
/**
 * Auto 的子类也可以实现AutoInterface接口
 * 这里就不必实现state属性了，因为他是Auto的子类，自然就继承了state属性
 */
class Bus extends Auto implements AutoInterface {

}