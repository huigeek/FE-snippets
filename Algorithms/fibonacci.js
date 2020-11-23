// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ……

function fib1 (n) {
  if (n < 2) return n
  return fib1(n - 1) + fib1(n - 2)
}

function fib2 (n) {
  let arr = new Array(n + 1)
  arr[0] = 0
  arr[1] = 1
  let i = 2
  while (i <= n) {
    arr[i] = arr[i - 1] + arr[i - 2]
    i++
  }
  return arr[n]
}

function fib3 (n) {
  let a = 0, b = 1, c, i = 2
  while (i <= n) {
    c = a + b;
    [a, b] = [b, c];
    i++
  }
  return c
}

console.log(fib3(10))
