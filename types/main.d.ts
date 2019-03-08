import Vue, { VueConstructor } from "./vue";
export interface IDeviceDetector {
  ios: Boolean;
  iphone: Boolean;
  iphoneX: Boolean;
  iPhoneXR: Boolean;
  iPhoneXSMax: Boolean;
  ipod: Boolean;
  ipad: Boolean;
  android: Boolean;
  androidPhone: Boolean;
  windows: Boolean;
  mobile: Boolean;
}
declare const instantce: deviceDetectorPlugin;
export declare type deviceDetectorPlugin = {
  install(vue: VueConstructor<Vue>, options?: object): void;
};
export default instantce;
