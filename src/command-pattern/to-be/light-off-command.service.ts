import { Injectable } from '@nestjs/common';
import { Command } from './command.interface';
import { Light } from '../as-is/light';
import { LightOnCommand } from './light-on-command.service';

@Injectable()
export class LightOffCommand implements Command {
  constructor(private readonly light: Light) {}

  execute(): void {
    this.light.off();
  }

  undo(): void {
    new LightOnCommand(this.light).execute();
  }
}
