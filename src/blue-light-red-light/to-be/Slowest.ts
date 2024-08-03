import { Speed } from './speed.interface';

export class Slowest implements Speed {
  blueLight(): string {
    return '무 궁 화     꽃   이';
  }

  redLight(): string {
    return '피 었 습 니 다';
  }
}
