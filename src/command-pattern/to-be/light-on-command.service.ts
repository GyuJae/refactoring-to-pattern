import { Injectable } from '@nestjs/common';
import { Command } from './command.interface';
import { Light } from '../as-is/light';
import { LightOffCommand } from './light-off-command.service';

@Injectable()
export class LightOnCommand implements Command {
  constructor(private readonly light: Light) {}

  execute(): void {
    this.light.on();
  }

  undo(): void {
    new LightOffCommand(this.light).execute();
  }
}
