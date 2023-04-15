import { Cli } from "./core";

const cli = new Cli({
  entry: "./main.jsx",
  loader: [],
  plugin: [],
});

console.log("----开始执行build------");
cli.build();
console.log("----build完成---------");

console.log("----开始执行dev------");
cli.dev();
console.log("----执行dev完成--------");
