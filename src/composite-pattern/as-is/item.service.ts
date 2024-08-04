import { Injectable } from '@nestjs/common';

@Injectable()
export class Item {
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
