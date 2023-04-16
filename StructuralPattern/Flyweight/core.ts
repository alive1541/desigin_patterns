// 抽象享元角色
interface Flyweight {
  display(): void;
}

// 具体享元角色
class Chicken implements Flyweight {
  private instrinsicState: string;
  constructor(instrinsicState: string) {
    this.instrinsicState = instrinsicState;
  }
  display(): void {
    console.log(`鸡的内部状态: ${this.instrinsicState}`);
  }
}

// 享元工厂
export class FlyweightFactory {
  static pool: Map<string, Flyweight> = new Map();

  public static getFlyweight(key: string): Flyweight {
    if (!FlyweightFactory.pool.has(key)) {
      const ins = new Chicken(key);
      FlyweightFactory.pool.set(key, ins);
      return ins;
    }

    return FlyweightFactory.pool.get(key) as Flyweight;
  }
}
