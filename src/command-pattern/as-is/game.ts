export class Game {
  constructor(private _isStarted: boolean) {}

  start() {
    this._isStarted = true;
  }

  stop() {
    this._isStarted = false;
  }

  getIsStarted(): boolean {
    return this._isStarted;
  }
}
