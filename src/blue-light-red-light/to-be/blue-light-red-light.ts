import { Speed } from './speed.interface';

export class BlueLightRedLight {
  blueLight(speed: Speed): string {
    return speed.blueLight();
  }

  redLight(speed: Speed): string {
    return speed.redLight();
  }
}
