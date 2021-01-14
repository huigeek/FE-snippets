# CSS Property Ordering

[参考文章](https://antonball.medium.com/css-property-ordering-95262f788d9f)

## 属性排序

> Personally, I prefer property ordering, where you group CSS properties based on their relationship to similar properties, grouping positioning, display, box model and rounding out with ‘decorative’ styles. 

根据属性间相似关系进行分组，位置、显隐、盒模型、‘装饰’类样式。

```css
.property-order {
   position: relative;
   top: 10px;
   display: flex;
   flex-wrap: wrap;
   flex-grow: 1;
   align-items: stretch;
   width: 100%;
   height: 60vh;
   background-color: orange;
   font-size: 0.875rem;
   overflow-wrap: break-word;
   padding: 1rem;
   word-break: break-word;
   word-wrap: break-word;
}
```

## 优点

便于调试和理解元素如何渲染。

对于边框属性来说，属性排序也非常有用。我们一般会根据CSS的简写顺序来写样式，top、right、bottom、left。

## 缺点

这些属性的排序比较难记。

一旦掌握窍门，会非常受益。

可以通过规范插件来调整约束CSS属性。
