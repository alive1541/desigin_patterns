// 抽象构件： 皮肤
interface Skin {
  display(): void;
}

// 具体构件： 鸡
export class Chicken implements Skin {
  hair: string;
  constructor(hair: string) {
    this.hair = hair;
  }
  setHair(hair: string): void {
    this.hair = hair;
  }
  display(): void {
    console.log(`这是一只${this.hair}头发的小鸡`);
  }
}

// 抽象装饰： 变身
abstract class Changer implements Skin {
  component: Chicken;
  constructor(com: Chicken) {
    this.component = com;
  }
  display(): void {
    this.component.display();
  }
}
// 具体装饰角色： 五颜六色的鸡
export class ColorfulChicken extends Changer {
  constructor(com: Chicken) {
    super(com);
  }
  public display(): void {
    this.setChanger();
    super.display();
  }
  public setChanger() {
    this.component.setHair("五颜六色");
  }
}
