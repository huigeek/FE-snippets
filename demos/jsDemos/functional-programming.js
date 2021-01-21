// 一个产品列表，需求：计算购物车所有蔬菜的总金额。
let shoppingCart = [
  {productTitle: 'Functional Programming', type: 'books', amount: 10},
  {productTitle: 'Tomato', type: 'vegetables', amount: 5},
  {productTitle: 'Shoes', type: 'fashion', amount: 20},
  {productTitle: 'Cucumber', type: 'vegetables', amount: 8}
]

// easy
let vegetablesAmount = shoppingCart.reduce((prev, curr) => curr.type === 'vegetables' ? prev + curr.amount : prev, 0)
console.log(vegetablesAmount)

// 上面代码，根据需求，直接计算，没有考虑扩展性
// 如果想计算其他类目的总金额呢？需要把类目判断那里改了。
// 如果不是总金额，还需要根据类目在价格基础上做其他计算。
// 还需要再改。

// 上面的例子，如果使用函数式编程呢？
const getType = order => order.type === 'vegetables'
const getAmount = order => order.amount
const sumAmount = (acc, amount) => acc + amount

const compose = (...fns) => (...args) => fns.reduceRight((val, fn) => fn.apply(null, [].concat(val)), args)

// compose, 组合，把函数组合起来。上一个函数操作的结果，是下一个函数的入参。compose 调用的顺序是自右向左（自下而上）。

// 下面 map 等方法和原生不太一样，来自 ramda 库
const getTotalAmount = compose(
    reduce(sumAmount, 0),
    map(getAmount),
    filter(getType)
)

getTotalAmount(shoppingCart)

