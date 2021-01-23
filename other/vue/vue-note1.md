## 使用npm init @vuejs/app初始化项目，选择vue-ts模板，main.ts报错

`Cannot find module './App.vue'.ts or its corresponding type declarations.(2307)`

在`main.ts`同级添加`shims-vue.d.ts`

```js
declare module '*.vue' {
  import { Component } from 'vue'
  const component: Component
  export default component
}
```
