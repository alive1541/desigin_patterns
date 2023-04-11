export interface StepApi {
  step(num: number): void;
}

interface Move {
  setStepTime(num: number): void;
  move(): void;
}

export class AnimalMove implements Move {
  ins: StepApi;
  stepTime: number = 0;
  constructor(ins: StepApi) {
    this.ins = ins;
  }
  setStepTime(num: number): void {
    this.stepTime = num;
  }
  move(): void {
    this.ins.step(this.stepTime);
  }
}
