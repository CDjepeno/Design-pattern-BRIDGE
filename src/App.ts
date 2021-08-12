import { Tv } from "./classes/Tv";
import { RemoteControl } from "./abstract/RemoteControl";
export class App {
  static main1() {
    const tv = new Tv();
    const remote = new RemoteControl(tv);

    return remote.channelUp();
  }

  static main2() {
    const tv = new Tv();
    const remote = new RemoteControl(tv);

    return remote.volumeUp();
  }
}
