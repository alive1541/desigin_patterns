import { ChickenFactory, DuckFactory } from "./core";

const chicken = new ChickenFactory().create();
const duck = new DuckFactory().create();

chicken.run();
duck.run();
