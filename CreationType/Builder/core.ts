// 建造者
export class ChickenDirector {
  constructChicken(builder: ChickenBuilder): Chicken {
    builder.buildHead();
    builder.buildBody();
    builder.buildFoot();
    return builder.buildChicken();
  }
}
// 具体的建造工具
export class ChickenBuilder implements ChickenInterface {
  chicken: Chicken;
  constructor() {
    this.chicken = new Chicken();
  }
  buildHead(): void {
    this.chicken.setHead("小鸡的头");
  }
  buildBody(): void {
    this.chicken.setBody("小鸡的身体");
  }
  buildFoot(): void {
    this.chicken.setFoot("小鸡的脚");
  }
  buildChicken(): Chicken {
    return this.chicken;
  }
}
// 产品 小鸡
class Chicken {
  private head: string = "";
  private body: string = "";
  private foot: string = "";
  getHead() {
    return this.head;
  }
  setHead(head: string): void {
    this.head = head;
  }
  getBody() {
    return this.body;
  }
  setBody(body: string): void {
    this.body = body;
  }
  getFoot() {
    return this.foot;
  }
  setFoot(foot: string): void {
    this.foot = foot;
  }
}

// 抽象接口
interface ChickenInterface {
  buildHead(): void;
  buildBody(): void;
  buildFoot(): void;
  buildChicken(): Chicken;
}
