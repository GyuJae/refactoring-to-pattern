import { Injectable } from '@nestjs/common';
import { Component } from './component.interface';

@Injectable()
export class Bag {
  private _items: Component[] = [];

  add(item: Component) {
    this._items.push(item);
  }

  getItems(): Component[] {
    return this._items;
  }

  getTotalPrice(): number {
    return this._items.reduce((acc, item) => acc + item.getPrice(), 0);
  }
}
