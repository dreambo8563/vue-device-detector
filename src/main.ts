import Vue, { VueConstructor } from "vue";

// The client user agent string.
// Lowercase, so we can use the more efficient indexOf(), instead of Regex
const userAgent = window.navigator.userAgent.toLowerCase();
const devicePixelRatio = window.devicePixelRatio || 1;
class DeviceDetector {
  windows: Boolean;
  ipod: Boolean;
  ipad: Boolean;
  iphone: Boolean;

  iphoneX: Boolean;
  iPhoneXR: Boolean;
  iPhoneXSMax: Boolean;

  ios: Boolean;
  android: Boolean;
  androidPhone: Boolean;
  mobile: Boolean;
  dingding: Boolean;
  wechat: Boolean;
  constructor() {
    this.windows = this.find("windows");
    this.ipod = this.find("ipod");
    this.ipad = this.find("ipad");
    this.dingding = this.find("dingtalk");
    this.wechat = this.find("micromessenger");
    this.iphone = !this.windows && this.find("iphone");
    this.iphoneX =
      this.iphone &&
      devicePixelRatio === 3 &&
      window.screen.width === 375 &&
      window.screen.height === 812;

    this.iPhoneXR =
      this.iphone &&
      devicePixelRatio === 2 &&
      window.screen.width === 414 &&
      window.screen.height === 896;

    this.iPhoneXSMax =
      this.iphone &&
      devicePixelRatio === 3 &&
      window.screen.width === 414 &&
      window.screen.height === 896;

    this.ios = this.iphone || this.ipod || this.ipad;
    this.android = !this.windows && this.find("android");
    this.androidPhone = this.android && this.find("mobile");
    this.mobile = this.androidPhone || this.iphone || this.ipod;
  }

  private find(needle: string) {
    return userAgent.indexOf(needle) !== -1;
  }
}

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
export type deviceDetectorPlugin = {
  install(vue: VueConstructor<Vue>, options?: any): void;
};
const instantce: deviceDetectorPlugin = {
  install(vue, options) {
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

export default instantce;
export { IDeviceDetector };
