import Vue, { VueConstructor } from "vue";
import { IDeviceDetector } from "./main";
declare module "vue/types/vue" {
  interface Vue {
    $device: IDeviceDetector;
  }
  interface VueConstructor {
    $device: IDeviceDetector;
  }
}

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    $device?: IDeviceDetector;
  }
}

export { VueConstructor };
export default Vue;
