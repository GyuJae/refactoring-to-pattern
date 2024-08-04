import { Enum, EnumType } from 'ts-jenum';

@Enum('value')
export class StudyCafePassType extends EnumType<StudyCafePassType>() {
  static readonly HOURLY = new StudyCafePassType('hourly', '시간 단위 이용권');
  static readonly WEEKLY = new StudyCafePassType('weekly', '주 단위 이용권');
  static readonly FIXED = new StudyCafePassType('fixed', '1인 고정석');

  private constructor(
    public readonly value: string,
    private readonly _description: string,
  ) {
    super();
  }
}
