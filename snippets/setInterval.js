// implement setInterval using setTimeout
class Interval {
  constructor () {}
  interval(fn, ms) {
    let a = {
      clear: () => clearTimeout(a.timer)
    };
    (function run() {
      fn();
      a.timer = setTimeout(run, ms);
    })();
  
    return a;
  }
}

export default Interval

// const itl = new Interval()
// const myInterval_1 = itl.interval(() => console.log(1), 1000); // create an "interval" 
// const myInterval_2 = itl.interval(() => console.log(2), 1000); // create another "interval" 

// // clear the first interval
// setTimeout(() => myInterval_1.clear(), 4000)