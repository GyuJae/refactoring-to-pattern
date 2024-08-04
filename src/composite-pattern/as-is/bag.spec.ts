import { Bag } from './bag.service';
import { Item } from './item.service';

describe('Bag', () => {
  test('총 가격을 계산할 수 있다', () => {
    // given
    const bag = new Bag();
    bag.add(new Item('검', 1000));
    bag.add(new Item('물약', 200));
    bag.add(new Item('몬스터볼', 3000));

    // when
    const totalPrice = bag.getTotalPrice();

    // then
    expect(totalPrice).toBe(4200);
  });
});
