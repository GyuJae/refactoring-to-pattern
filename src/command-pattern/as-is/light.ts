export class Light {
  constructor(private _isOn: boolean) {}

  on() {
    this._isOn = true;
  }

  off() {
    this._isOn = false;
  }

  getIsOn(): boolean {
    return this._isOn;
  }
}
