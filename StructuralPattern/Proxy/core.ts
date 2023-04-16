// 抽象角色
interface Subject {
  dance(): void;
}

// 真实角色 小鸡
class Chicken implements Subject {
  dance(): void {
    console.log("小鸡在跳舞～～");
  }
}

// 代理角色 村长
export class ChickenProxy implements Subject {
  realSubject: Subject | null = null;
  time: number = 0;
  public dance(): void {
    console.log(`村长偷偷记录了小鸡跳舞的次数`);
    this.time++;

    const chicken = new Chicken();
    chicken.dance();
  }
}
