abstract class AbstractNode {
  name: string;
  type: string;
  children: AbstractNode[] = [];
  constructor(name: string, type: string) {
    this.name = name;
    this.type = type;
  }
  public abstract add(node: AbstractNode): AbstractNode;
  public abstract getByType(name: string): string[];
}
// 动物
export abstract class Animal extends AbstractNode {
  constructor(name: string, type: string) {
    super(name, type);
  }
  public add(node: AbstractNode) {
    console.log("动物类型不支持添加");
    return this;
  }
  public getByType(type: string) {
    if (type === this.type) {
      return [this.name];
    }
    return [];
  }
}
// 笼子 笼子可以装动物
export class Cage extends AbstractNode {
  constructor(name: string, type = "cage") {
    super(name, type);
  }
  public add(node: AbstractNode) {
    this.children.push(node);
    return this;
  }
  public getByType(type: string) {
    const list: string[] = [];
    for (let i = 0; i < this.children.length; i++) {
      const nodes = this.children[i].getByType(type);
      if (nodes.length > 0) {
        list.push(...nodes);
      }
    }
    return list;
  }
}
