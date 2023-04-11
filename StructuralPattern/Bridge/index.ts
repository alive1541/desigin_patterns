import { AnimalMove, StepApi } from "./core";

class Chicken implements StepApi {
  step(num: number): void {
    console.log(`小鸡走了${num}步`);
  }
}

class Duck implements StepApi {
  step(num: number): void {
    console.log(`小鸭子走了${num}步`);
  }
}

const move1 = new AnimalMove(new Chicken());
move1.setStepTime(2);
move1.move();

const move2 = new AnimalMove(new Duck());
move2.setStepTime(3);
move2.move();
