// 这是Adaptee
export interface Adaptee {
  run(): void;
}

interface Target {
  move(): void;
}

export class Adapter implements Target {
  adaptee: Adaptee;
  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }
  move(): void {
    this.adaptee.run();
  }
}
