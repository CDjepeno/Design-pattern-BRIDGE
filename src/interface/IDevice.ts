export interface IDevice {
  isEnabled(): boolean;
  enabled(): boolean;
  disabled(): boolean;
  getVolume(): number;
  setVolume(volume: number): number;
  getChannel(): number;
  setChannel(channel: number): number;
}
