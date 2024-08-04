import { StudyCafePassType } from './study-cafe-pass-type';

export class StudyCafeLockerPass {
  private constructor(
    private readonly _passType: StudyCafePassType,
    private readonly _duration: number,
    private readonly _price: number,
  ) {}

  static of(
    passType: StudyCafePassType,
    duration: number,
    price: number,
  ): StudyCafeLockerPass {
    return new StudyCafeLockerPass(passType, duration, price);
  }

  getPassType(): StudyCafePassType {
    return this._passType;
  }

  getDuration(): number {
    return this._duration;
  }

  getPrice(): number {
    return this._price;
  }

  getDisplay(): string {
    if (this._passType === StudyCafePassType.HOURLY) {
      return `${this._duration}시간권 (${this._price}원)`;
    }

    if (this._passType === StudyCafePassType.WEEKLY) {
      return `${this._duration}주권 (${this._price}원)`;
    }

    if (this._passType === StudyCafePassType.FIXED) {
      return `고정석 (${this._price}원)`;
    }

    return '';
  }
}
