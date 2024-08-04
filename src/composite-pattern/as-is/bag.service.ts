import { Injectable } from '@nestjs/common';
import { Item } from './item.service';

@Injectable()
export class Bag {
  private _items: Item[] = [];

  add(item: Item) {
    this._items.push(item);
  }

  getItems(): Item[] {
    return this._items;
  }

  getTotalPrice(): number {
    return this._items.reduce((acc, item) => acc + item.getPrice(), 0);
  }
}
