## 抓包

开发移动端h5应用的时候，因为调试没有像chrome那样方便，所以有时需要用到一些抓包工具

windows一般用fidder

mac os一般用charles

## 抓包注意事项

- 手机和电脑连同一个局域网。（电脑连的那个wifi，手机也要连那个wifi）
- 将手机代理到电脑上
  - 电脑上看下电脑ip，iphone打开设置，找到连接的那个wifi，下面的http代理，选择‘手动’，配置下服务器ip，端口（ip是电脑的ip，端口在charles里的proxy下的proxy setting里看到，默认是8888，可设置）。配置好后，charles此时会给出连接的弹出框，点允许即可。
- 手机浏览网页，即可抓包
  - 手机打开应用或网页，可在电脑上的charles上查看请求的详细信息


开发h5时，把我们电脑上开发的网址，在“草料二维码”上生成二维码，用手机扫二维码。charles上查看分析具体的请求。

什么是网址代理？
想把网址a的请求，代理到网址b上去。charles里tools下，'Map Remote Settings'里选上‘Enable Map Remote’, 'from'和'to'里填上相应的信息即可。

https如何抓包？
charles里proxy下，‘SSL Proxying Settins’里选上‘Enable SSL Proxying’, 配置下‘*:443’. Help下‘SSL Proxying’里有一些引导帮助信息。