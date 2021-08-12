import { IDevice } from "../interface/IDevice";
export class RemoteControl {
  device: IDevice;

  constructor(d: IDevice) {
    this.device = d;
  }

  togglePower() {
    if (this.device.isEnabled()) {
      return this.device.disabled();
    }
    return this.device.enabled();
  }

  volumeDown() {
    return this.device.setVolume(this.device.getVolume() - 10);
  }

  volumeUp() {
    return this.device.setVolume(this.device.getVolume() + 10);
  }

  channelDown() {
    return this.device.setChannel(this.device.getChannel() - 1);
  }

  channelUp() {
    return this.device.setChannel(this.device.getChannel() + 1);
  }
}
