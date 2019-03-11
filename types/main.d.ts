import Vue, { VueConstructor } from "./vue";
interface IDeviceDetector {
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
  dingding: Boolean;
  wechat: Boolean;
}
export declare type deviceDetectorPlugin = {
  install(vue: VueConstructor<Vue>, options?: any): void;
};
declare const instantce: deviceDetectorPlugin;
export default instantce;
export { IDeviceDetector };
