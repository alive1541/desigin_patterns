import { ChickenFactory, DuckFactory } from "./core";

const chickenFactory = new ChickenFactory();
const duckFactory = new DuckFactory();

const chicken1 = chickenFactory.createAnimalOfLi();
const chicken2 = chickenFactory.createAnimalOfXue();

const duck1 = duckFactory.createAnimalOfLi();
const duck2 = duckFactory.createAnimalOfXue();

chicken1.run();
chicken2.fastRun();
duck1.run();
duck2.fastRun();
