import { BlueLightRedLight } from './blue-light-red-light';

describe('BlueLightRedLight', () => {
  test('속도가 1인 경우 천천히 출력합니다', () => {
    const light = new BlueLightRedLight(1);

    expect(light.blueLight()).toBe('무 궁 화     꽃   이');
    expect(light.redLight()).toBe('피 었 습 니 다');
  });

  test('속도가 2인 경우 보통 속도로 출력합니다', () => {
    const light = new BlueLightRedLight(2);

    expect(light.blueLight()).toBe('무궁화꽃이 ');
    expect(light.redLight()).toBe('피었습니다');
  });

  test('나머지 속도는 철자만 이야기합니다.', () => {
    const light = new BlueLightRedLight(3);

    expect(light.blueLight()).toBe('ㅁㄱㅎㄲㅇ');
    expect(light.redLight()).toBe('ㅍㅇㅅㄴㄷ');
  });
});
