# Base64

## 图片编码成Base64后体积变大

Each Base64 digit represents exactly 6 bits of data. 
So, three 8-bits bytes of the input string/binary file (3×8 bits = 24 bits) can be represented by four 6-bit Base64 digits (4×6 = 24 bits).

二进制文件特点：3个字节（每个字节 = 8-bits bytes）
Base64字符特点：4个字符（每个字符 = 6-bits bytes）

两者代表的比特位不同。Base64每个字符代表6个比特位，相比二进制每个字节代表8个比特位要小。

因此，二进制制文件转Base64格式后，内存占用体积是之前的 133% 倍。

## 项目优化：一些图片转成base64格式

项目里肯定会使用图标、图片等资源，如果不做任何处理，每个小图标都会发送一个网络请求。网络请求的数量影响着页面的加载。
为了减少网络请求，将一些很小的图标转成base64格式。
优点：减少了网络请求的数量，加快页面加载的速度
缺点：图片转化为base64格式后，内存占用体积会增加

如何权衡：webpack里file-loader或url-loader可以配置，针对业务场景综合考虑。侧重加载速度时可以将转成base64的图片大小设置的大一点；如果不用考虑网络速度，侧重内存占用率，可以将这个值设置的小一点。

## base64原理

[Base64 编码实践](https://juejin.cn/post/6850418109808508942)

概念：
ASCII 码，定义了128个字符，一个字节一个字符。缺点：只能表示英文等少数语言。
GBK，中国在ASCII基础上，扩展的字符集，两个字节一个汉字。
Unicode，万国码，统一码。utf-8, utf-16, utf-32是它的变种。utf-8表示3个字节一个汉字

## demo

平常项目里，一些小的图片在webpack里用file-loader或url-loader转成base64
如果我们拋开webpack，如何实现从图片地址到生成base64呢？

异步拿到图片后，将图片绘制在canvas画布上，使用画布的toDataURL方法导出base64。

写demo时，注意受限于 CORS 策略，会存在跨域问题。开个本地服务器，打开没问题。
直接打开这个html，会报错“Uncaught DOMException: Failed to execute 'toDataURL' on 'HTMLCanvasElement': Tainted canvases may not be exported.”
是因为使用canvas时，跨域会报安全错误，无法导出画布的内容（无法使用画布的toBlob(),toDataURL(),或getImageData()）
这其实是为了保护用户的隐私数据在没有允许下不能导出到远程站点
https://stackoverflow.com/questions/20424279/canvas-todataurl-securityerror

