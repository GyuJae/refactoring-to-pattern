import { Injectable } from '@nestjs/common';
import { Command } from './command.interface';

@Injectable()
export class Button {
  constructor(private readonly command: Command) {}

  press(): void {
    this.command.execute();
  }
}
