import { ChickenBuilder, ChickenDirector } from "./core";

const director = new ChickenDirector();
const chicken = director.constructChicken(new ChickenBuilder());

console.log(chicken.getHead());
console.log(chicken.getBody());
console.log(chicken.getFoot());
