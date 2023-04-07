// 抽象产品
abstract class Animal {
  public abstract run(): void;
}

// 具体产品 小鸡
class Chicken extends Animal {
  public run() {
    console.log("小鸡在行走");
  }
}
// 具体产品 小鸭子
class Duck extends Animal {
  public run() {
    console.log("小鸭子在行走");
  }
}

export class AnimalFactory {
  public static getAnimal(type: string): Animal {
    if (type === "chicken") {
      return new Chicken();
    } else {
      return new Duck();
    }
  }
}
