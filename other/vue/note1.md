# 问题

## vue 中 runtime+compiler 和 runtime-only

> 组件渲染到页面的过程：template => ast => render => vDom => 真实Dom => 页面

compiler: 编译器，负责把模板字符串解析成ast抽象语法树，ast语法树编译为render渲染函数。
runtime: 负责创建vue实例、render渲染函数处理为虚拟DOM、虚拟DOM打补丁等。

### 比较

runtime+compiler: 包括编译器和运行时的版本
runtime-only: 仅包括运行时的版本

#### runtime+compiler
- 完整版，由于代码包括编译器，包体积比较大
- 打包时不进行编译，运行时，才去编译template
- template和render都可以进行渲染

#### runtime-only
- 没有编译器，体积较小，减少30%左右
- 不能使用template字符串的渲染方式，只能使用render函数的方式
