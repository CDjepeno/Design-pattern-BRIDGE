import { IDevice } from "../interface/IDevice";
export class Tv implements IDevice {
  isEnabled(): boolean {
    return true;
  }

  enabled(): boolean {
    return true;
  }

  disabled(): boolean {
    return false;
  }

  getVolume(): number {
    return 10;
  }

  setVolume(volume: number): number {
    return volume;
  }
  getChannel(): number {
    return 3;
  }

  setChannel(channel: number): number {
    return channel;
  }
}
