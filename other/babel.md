# Babel

## babel是什么

js编译器，语法转换

## 可以做什么

- 语法转换
- 提供polyfill
- 支持ts、flow等
- 生成source map
- ...

## 如何来用

- 在cli里用
- 在代码里用
- 配合打包工具用

## plugins

babel从7开始，提供的npm包都放在@babel这个命名scope下

babel plugins分两类：语法类（syntax）、转换类(transform)

syntax plugins 用来识别新语法的，不进行转换。

### plugins的启动顺序

问：如果两个或多个plugin都要对同一节点进行处理，按什么顺序执行呢？
答：plugins先于presets，plugins内部从左到右，presets内部从右到左

### transform-runtime

babel提供transform-runtime这个plugin，引用同一个地方代码，去除重复的代码。

## presets

plugins特别多，如果一个个配置，太麻烦。presets用于简化这一步骤。

官方presets：
- @babel/preset-env
- @babel/preset-flow
- @babel/preset-react
- @babel/preset-typescript

@babel/preset-env可以根据我们对browserslist的配置，在转码时，根据我们对目标运行环境的要求，自动采取“smart”的转码。

如果我们设置的最低版本环境，已经原生实现了要转码的ES特性，就会直接使用ES标准写法；
如果我们设置的最低版本环境，还不支持要转码的特性，则会自动注入对应的polyfill。

@babel/preset-env没有收入所有state-x的plugins，所以它并不是万能的。有时还需要我们设置。

target：告诉env要兼容的目标环境
modules: 设置babel转换时对于模块的导出方式。（amd,umd,systemjs,commonjs,cjs,auto,false）
useBuildIns：告诉env如何去处理polyfill。（usage,entry,false(默认)）。因为要对一些高级语法、类方法、实例方法进行polyfill，所以需要引入core-js。设置useBuildIns:'entry'后，env会根据当前目标的环境从中取出需要的polyfill。会引入很多，即使没有用到。
useBuildIns:'usage'后，env会根据当前代码使用到的polyfill的方法进行处理。用到什么引入什么。

corejs: 设置使用的corejs的版本，默认是2。当设置corejs为3并且useBuildIns:"usage"时，就不需要我们在代码入口处手动 import corejs 了。

## 总结

Babel是一个JS的compiler，开箱即用的babel不会对代码进行任何处理，plugin可以对语法进行转换，如果需要polyfill, 需要使用core-js和regenerator-runtime. 通过设置presets-env的useBuilds可以帮助我们更好的进行polyfill。

