import { StudyCafePassType } from './study-cafe-pass-type';

export class StudyCafePass {
  private constructor(
    private readonly _passType: StudyCafePassType,
    private readonly _duration: number,
    private readonly _price: number,
    private readonly _discountRate: number,
  ) {}

  static of(
    passType: StudyCafePassType,
    duration: number,
    price: number,
    discountRate: number,
  ): StudyCafePass {
    return new StudyCafePass(passType, duration, price, discountRate);
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

  getDiscountRate(): number {
    return this._discountRate;
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
