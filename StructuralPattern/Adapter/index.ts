import { Adapter, Adaptee } from "./core";

class Chicken {
  run() {
    console.log("小鸡在行走");
  }
}
const adaptee: Adaptee = new Chicken();
const adapter = new Adapter(adaptee);

adapter.move(); // 小鸡在行走
