import { Speed } from './speed.interface';

export class Normal implements Speed {
  blueLight(): string {
    return '무궁화꽃이 ';
  }

  redLight(): string {
    return '피었습니다';
  }
}
