// 抽象工厂
abstract class AnimalFactory {
  public abstract create(): Animal;
}

// 具体工厂 小鸡工厂
export class ChickenFactory extends AnimalFactory {
  public create(): Animal {
    return new Chicken();
  }
}

// 具体工厂 小鸭子工厂
export class DuckFactory extends AnimalFactory {
  public create(): Animal {
    return new Duck();
  }
}

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
