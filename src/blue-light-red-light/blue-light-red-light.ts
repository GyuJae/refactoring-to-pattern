export class BlueLightRedLight {
  constructor(private _speed: number) {}

  blueLight(): string {
    if (this._speed == 1) {
      return '무 궁 화     꽃   이';
    } else if (this._speed == 2) {
      return '무궁화꽃이 ';
    } else {
      return 'ㅁㄱㅎㄲㅇ';
    }
  }

  redLight(): string {
    if (this._speed == 1) {
      return '피 었 습 니 다';
    } else if (this._speed == 2) {
      return '피었습니다';
    } else {
      return 'ㅍㅇㅅㄴㄷ';
    }
  }
}
