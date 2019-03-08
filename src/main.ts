import Vue, { VueConstructor } from "vue";

// The client user agent string.
// Lowercase, so we can use the more efficient indexOf(), instead of Regex
const userAgent = window.navigator.userAgent.toLowerCase();
const devicePixelRatio = window.devicePixelRatio || 1;
class DeviceDetector {
  windows = this.find("windows");
  ipod = this.find("ipod");
  ipad = this.find("ipad");
  iphone = !this.windows && this.find("iphone");

  iphoneX =
    this.iphone &&
    devicePixelRatio === 3 &&
    window.screen.width === 375 &&
    window.screen.height === 812;
  iPhoneXR =
    this.iphone &&
    devicePixelRatio === 2 &&
    window.screen.width === 414 &&
    window.screen.height === 896;
  iPhoneXSMax =
    this.iphone &&
    devicePixelRatio === 3 &&
    window.screen.width === 414 &&
    window.screen.height === 896;

  ios = this.iphone || this.ipod || this.ipad;
  android = !this.windows && this.find("android");
  androidPhone = this.android && this.find("mobile");
  mobile = this.androidPhone || this.iphone || this.ipod;

  private find(needle: string) {
    return userAgent.indexOf(needle) !== -1;
  }
}

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

const instantce: deviceDetectorPlugin = {
  install(vue) {
    let alias = "$device";
    const deviceDetector = new DeviceDetector() as IDeviceDetector;
    vue.prototype[alias] = deviceDetector;
    Object.defineProperty(Vue, `${alias}`, {
      get() {
        return deviceDetector;
      }
    });
  }
};
export type deviceDetectorPlugin = {
  install(vue: VueConstructor<Vue>, options?: object): void;
};
export default instantce;
