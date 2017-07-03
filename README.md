# FaceIN

- 如果要修改或增加代码, 请建立一个新的分支再修改或增加代码, 再 Pull Request
- 如果有问题请直接提 [Issue](https://github.com/wsx-666/face-in/issues/new), 有一个记录页面后面写文档报告也方便

## 实现思路 (简单版)

1. 登录页面下输入用户名并拍照
2. 拍下照片后上传, 调 [Face++ API](https://console.faceplusplus.com.cn/documents/4887579) 确认你是你, 登录成功
3. 如果不行, 则使用密码登录
4. 将页面打包成 APP

以上思路可以用 Web App 的方式很简单地实现 (包括简单的拍照上传). 如果想要调用一些设备底层的东西 (比如调亮度, 推送通知之类的), 你就得使用原生或者是像 React Native 这样的的方式来开发 (全靠王大佬了).

## [预览页面](https://wsx-666.github.io/face-in/index.html)

预览页面的摄像头调用只支持 PC 和安卓设备, 因为使用了 WebRTC, 而现在的 iOS 设备原生是不支持 WebRTC 的.

值得注意的是, 如果你想要在本地打开页面调试, 你可能也看不到摄像头的画面, 这是因为 Chrome 浏览器必须使用 HTTPS 服务才能调用本地摄像头和麦克风, 你可以参考 [这个小教程](https://yangbo.tech/2016/08/19/local-https-server-with-custom-domain-in-1-minute/) 来生成证书并快速架起一个本地 HTTPS 服务器.

如果要在 iOS 下拍摄照片并上传, 可以考虑原生的 HTML `<input>` 表单 [(参考 W3C 文档)](https://www.w3.org/TR/html-media-capture/), 使用 `capture="user"` 来调用前置摄像头:
```html
<form action="server.cgi" method="post" enctype="multipart/form-data">
  <input type="file" name="image" accept="image/*" capture="user">
  <input type="submit" value="Upload">
</form>
```
