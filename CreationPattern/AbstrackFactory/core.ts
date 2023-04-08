// 抽象产品 老李家的动物
abstract class AnimalOfLi {
  public abstract run(): void;
}
// 抽象产品 老薛家的动物
abstract class AnimalOfXue {
  public abstract fastRun(): void;
}

// 具体的产品 小鸡
class Chicken1 extends AnimalOfLi {
  public run() {
    console.log("小鸡在行走");
  }
}

// 具体的产品 小鸭子
class Duck1 extends AnimalOfLi {
  public run() {
    console.log("小鸭子在行走");
  }
}

// 具体的产品 小鸡
class Chicken2 extends AnimalOfXue {
  public fastRun() {
    console.log("小鸡在快跑～～");
  }
}

class Duck2 extends AnimalOfXue {
  public fastRun(): void {
    console.log("小鸭子在快跑～～");
  }
}

// 抽象工厂
abstract class Factory {
  public abstract createAnimalOfLi(): AnimalOfLi;
  public abstract createAnimalOfXue(): AnimalOfXue;
}

// 具体工厂 小鸡的工厂
export class ChickenFactory extends Factory {
  public createAnimalOfLi(): AnimalOfLi {
    return new Chicken1();
  }
  public createAnimalOfXue(): AnimalOfXue {
    return new Chicken2();
  }
}

export class DuckFactory extends Factory {
  public createAnimalOfLi(): AnimalOfLi {
    return new Duck1();
  }
  public createAnimalOfXue(): AnimalOfXue {
    return new Duck2();
  }
}

// 具体工厂 小鸭子的工厂
