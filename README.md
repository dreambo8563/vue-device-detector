[![Codacy Badge](https://api.codacy.com/project/badge/Grade/38f22883688b438db21d672e1d4d3daf)](https://www.codacy.com/app/dreambo8563/vue-DeviceDetector?utm_source=github.com&utm_medium=referral&utm_content=dreambo8563/vue-DeviceDetector&utm_campaign=Badge_Grade)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![Build Status](https://travis-ci.com/dreambo8563/vue-DeviceDetector.svg?branch=master)](https://travis-ci.com/dreambo8563/vue-DeviceDetector)
[![Greenkeeper badge](https://badges.greenkeeper.io/dreambo8563/vue-DeviceDetector.svg)](https://greenkeeper.io/)
[![Known Vulnerabilities](https://snyk.io/test/github/dreambo8563/vue-DeviceDetector/badge.svg?targetFile=package.json)](https://snyk.io/test/github/dreambo8563/vue-DeviceDetector?targetFile=package.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![npm type definitions](https://img.shields.io/npm/types/vue-device-detector.svg?style=flat)
![npm](https://img.shields.io/npm/dt/vue-device-detector.svg?style=flat)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdreambo8563%2Fvue-DeviceDetector.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdreambo8563%2Fvue-DeviceDetector?ref=badge_shield)

# vue-device-detector

![](https://raw.githubusercontent.com/dreambo8563/static-assets/master/watcher2.png)

**vue-device-detector** is a simple vue plugin to inspect the device type.

- focus on mobile
- vue friendly
- strong typed

TODO:

- [x] add dingding api
- [x] add weixin api

### Install

```cmd
npm install vue-device-detector --save
```

### Quick Start

```js
import device from "vue-device-detector"
Vue.use(device)
```

### Methods

- this.\$device in Component context.
- Vue.\$device in global.

### API list

you can get the following properties under this.\$device

```ts
interface IDeviceDetector {
  ios: Boolean
  iphone: Boolean
  iphoneX: Boolean
  iPhoneXR: Boolean
  iPhoneXSMax: Boolean
  ipod: Boolean
  ipad: Boolean
  android: Boolean
  androidPhone: Boolean
  windows: Boolean
  mobile: Boolean
  dingding: Boolean //钉钉
  wechat: Boolean // 微信
}
```

eg.
on iphoneX

```js
console.log(this.$device.iphoneX) // true
console.log(this.$device.ios) // true
console.log(this.$device.android) // false
```

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdreambo8563%2Fvue-DeviceDetector.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdreambo8563%2Fvue-DeviceDetector?ref=badge_large)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/all-contributors/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/6948318?v=4" width="100px;" alt="Vincent Guo"/><br /><sub><b>Vincent Guo</b></sub>](https://dreambo8563.github.io/)<br />[💻](https://github.com/dreambo8563/vue-DeviceDetector/commits?author=dreambo8563 "Code") [📖](https://github.com/dreambo8563/vue-DeviceDetector/commits?author=dreambo8563 "Documentation") [🚇](#infra-dreambo8563 "Infrastructure (Hosting, Build-Tools, etc)") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
