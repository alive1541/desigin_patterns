import { ChickenFactory, DuckFactory } from "./core";

const chickenFactory = new ChickenFactory();
const duckFactory = new DuckFactory();

const chicken = chickenFactory.create();
const duck = duckFactory.create();

chicken.run();
duck.run();
