## 把js文件改成ts文件，报错

`TS2339: Property 'formData' does not exist on type 'Event'.`

```js
formEle.addEventListener('click', e => {
  // e.formData 这里报错
})
```

将`e.formData` 改成 `e['formData']`就可以了
