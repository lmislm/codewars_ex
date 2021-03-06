// 打印斐波那契数列，递归法，迭代法，提升递归效率
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// 后一位数是前两位数之和
// (例如fib(2) === 0 + 1) === 1;

//提升递归效率，创建一个数据存储，或者一个小的缓存对象，
// 缓存对象是数组
function memoize(fn) {
  const cache = {};
  return function(...args) {
    // ...args ： 数组集
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }
  return slowFib(n - 1) + slowFib(n - 2);
}

const fib = memoize(slowFib);

// -----------递归法
//递归方法
// function fib(n) {
//   if (n < 2) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2)
// }

//----------迭代法
// function fib(n) {
//   const result = [0, 1];

//   for (i = 2; i <= n; i++) {
//     const a = result[i - 1];
//     const b = result[i - 2];

//     result.push(a + b);
//   }

//   return result[n];
// }

module.exports = fib;
