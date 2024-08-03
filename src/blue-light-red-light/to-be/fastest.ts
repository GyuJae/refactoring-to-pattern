import { Speed } from './speed.interface';

export class Fastest implements Speed {
  blueLight(): string {
    return 'ㅁㄱㅎㄲㅇ';
  }

  redLight(): string {
    return 'ㅍㅇㅅㄴㄷ';
  }
}
