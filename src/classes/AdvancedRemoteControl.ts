import { RemoteControl } from '../abstract/RemoteControl';
export class AdvancedRemoteControl extends RemoteControl  {
  mute() {
    return this.device.setVolume(0)
  }

}