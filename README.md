# FaceIN

> 如果要修改或增加代码, 请建立一个新的分支再修改或增加代码

## 实现思路 (简单版)

1. 登录页面下输入用户名并拍照
2. 拍下照片后上传, 调 [Face++ API](https://console.faceplusplus.com.cn/documents/4887579) 确认你是你, 登录成功
3. 如果不行, 则使用密码登录
4. 将页面打包成 APP

以上思路可以用 Web App 的方式很简单地实现 (包括简单的拍照上传). 如果想要调用一些设备底层的东西 (比如调亮度, 推送通知之类的), 你就得使用原生或者是像 React Native 这样的的方式来开发 (全靠王大佬了).

## [预览页面](https://wsx-666.github.io/face-in/index.html)

预览页面的摄像头调用只支持 PC 和安卓设备, 因为使用了 WebRTC, 而现在的 iOS 设备原生是不支持 WebRTC 的.

如果要在 iOS 下拍摄照片并上传, 可以考虑原生的 `<inpu>` 表单 [(参考 W3C 文档)](https://w3c.github.io/html-media-capture/):  `<input type="file" name="image" accept="image/*" capture="user">`
