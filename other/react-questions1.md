## React组件如何通讯


## jsx的本质是什么

## context是什么，有什么用途？

## shouldComponentUpdate的用途

SCU

## 描述redux单项数据流

画它的流程图

## setState是同步还是异步？（场景图）


```js
class Root extends React.Component{
  constructor(props){
    super(props)
    this.state = {count: 0}
  }
  componentDidMount(){
    this.setState({count: this.state.count + 1})
    console.log(this.state.count)

    this.setState({count: this.state.count + 1})
    console.log(this.state.count)

    setTimeout(function(){
      this.setState({count: this.state.count + 1})
      console.log(this.state.count)
    }, 0)

    setTimeout(function(){
      this.setState({count: this.state.count + 1})
      console.log(this.state.count)
    }, 0)
    render(){
      return <h1>{this.state.count}</h1>
    }
  }
}
```
