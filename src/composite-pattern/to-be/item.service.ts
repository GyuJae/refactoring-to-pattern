import { Injectable } from '@nestjs/common';
import { Component } from './component.interface';

@Injectable()
export class Item implements Component {
  constructor(
    private readonly name: string,
    private readonly price: number,
  ) {}

  getPrice(): number {
    return this.price;
  }

  getName(): string {
    return this.name;
  }
}
