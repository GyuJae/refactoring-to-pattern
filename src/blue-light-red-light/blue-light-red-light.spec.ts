import { BlueLightRedLight } from './to-be/blue-light-red-light';
import { Fastest } from './to-be/fastest';
import { Normal } from './to-be/Normal';
import { Slowest } from './to-be/Slowest';

describe('BlueLightRedLight', () => {
  test('속도가 느린 경우 천천히 출력합니다', () => {
    const light = new BlueLightRedLight();
    const speed = new Slowest();

    expect(light.blueLight(speed)).toBe('무 궁 화     꽃   이');
    expect(light.redLight(speed)).toBe('피 었 습 니 다');
  });

  test('속도가 보통 속도로 설정할 시 정상 속도로 출력합니다', () => {
    const light = new BlueLightRedLight();
    const speed = new Normal();

    expect(light.blueLight(speed)).toBe('무궁화꽃이 ');
    expect(light.redLight(speed)).toBe('피었습니다');
  });

  test('빠른 속도로 설정할 시 철자만 이야기합니다.', () => {
    const light = new BlueLightRedLight();
    const speed = new Fastest();

    expect(light.blueLight(speed)).toBe('ㅁㄱㅎㄲㅇ');
    expect(light.redLight(speed)).toBe('ㅍㅇㅅㄴㄷ');
  });
});
