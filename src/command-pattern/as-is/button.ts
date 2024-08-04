import { Light } from './light';

export class Button {
  constructor(private readonly _light: Light) {}

  press() {
    this._light.off();
  }
}
