import { Animal, Cage } from "./core";

class Chicken extends Animal {
  constructor(name: string) {
    super(name, "chicken");
  }
}

class Duck extends Animal {
  constructor(name: string) {
    super(name, "duck");
  }
}

// 搞两个笼子
const cage1 = new Cage("笼子1");
const cage2 = new Cage("笼子2");

// 搞几只鸡鸭
const chicken1 = new Chicken("小鸡1");
const chicken2 = new Chicken("小鸡2");
const duck1 = new Duck("小鸭子1");
const duck2 = new Duck("小鸭子2");

// 把鸡鸭放到笼子里
cage1.add(chicken1).add(duck1).add(chicken2);
cage2.add(chicken2).add(duck2);

console.log(cage1.getByType("chicken"));
console.log(cage2.getByType("duck"));

// 动物也能调用getByType方法
console.log(chicken1.getByType("chicken"));
