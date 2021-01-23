## 封装axios

```js
axios.request(config)
axios.get(url[,config])
axios.post(url[,data[,config]])
axios.delete(url[,config])
axios.put(url[,data[,config]])
axios.options(url[,config])
axios.patch(url[,data[,config]])
```

axios虽然已经提供了上述方法，但在业务中，还是有很多共性的东西可以提取出来

封装的意义在于用的时候尽可能方便，二次封装，使配置更加简单

封装的本质是在待封装的内容外面再加一层，把待封装的放在里面，给外界提供一个更简洁的用法

封装axios要做的事情，就是把请求需要用到的配置，先在axios上配置好，提供必要的参数和接口，然后把它作为新的axios返回。

业务一般按模块划分，一个页面为一个模块，或几个页面为一个模块，如设置页面、详情页面、列表页面等

正常一个axios请求需要处理很多事情：
- 超时怎么办
- 取消请求怎么办
- 不同文件需要配置不同的请求头
  - application/json
  - application/x-www-form-urlencoded
  - 图片、视频、音频、文件上传使用multipart/form-data
- 有些请求在服务器a上，有些接口在服务器b上
- 异常捕获处理

这些处理，如果在项目比较大时，业务又有些重复时，如果不加处理，每个接口都处理一次，太浪费时间和人力了，而且代码也不适合维护

希望在调用接口时，只传少量必传参数，这样就可以只专注于业务层面的开发。

给不同环境配置不同请求地址  process.env.NODE_ENV, 配置不同的 baseURL

```js
const staticApi = {
  common: {
    getUserInfo: {
      type: 'get',
      url: 'xxx'
    },
    getRole: {
      type: 'get',
      url: 'xxx'
    }
  },
  list: {
    getList: {
      type: 'get',
      url: 'xxx'
    },
    getDetail: {
      type: 'get',
      url: 'xxx'
    },
    setDetail: {
      type: 'post',
      url: 'xxx'
    }
  } 
}

// 静态配置变成每个方法名返回axios实例
function importFile(files){
  Object.keys(files).forEach(methodName => {
    // methodName, getUserInfo
    mapApi[methodName] = instance(...config)
  })
}

const mapApi = {
  common: {
    getUserInfo: function(){},
    getRole: function(){}
  },
  list: {
    getList: function(){},
    getDetail: function(){},
    setDetail: function(){}
  }
}

```

---

未完