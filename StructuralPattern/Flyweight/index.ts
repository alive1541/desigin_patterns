import { FlyweightFactory } from "./core";

const chicken1 = FlyweightFactory.getFlyweight("头很大");
const chicken2 = FlyweightFactory.getFlyweight("身体很小");

chicken1.display();
chicken2.display();
