import { AnimalFactory } from "./core";

const chicken = AnimalFactory.getAnimal("chicken");
const duck = AnimalFactory.getAnimal("duck");

chicken.run();
duck.run();
