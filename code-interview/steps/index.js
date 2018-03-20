//给出一个数字n,打印出n行左对齐，右边呈从上到下递增一个符号的梯形
// ----例如
// steps(2)
//      '* '
//      '**'
// steps(3)
//      '*  '
//      '** '
//      '***'
// steps(4)
//      '*   '
//      '**  '
//      '*** '
//      '****'
//column 行；row 列；

function steps(n) {
  if (n === 0) {
  }
}

module.exports = steps;

// 99乘法表
// function steps(n) {
//   for (let row = 1; row <= n; row++) {
//     let stair = '';
//     for (let column = 1; column <= n; column++) {
//       if (column <= row) {
//         stair += `${column}*${row}=${row * column}\t`;
//       } else {
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//   }
// }

// 方法一
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '*';
//       } else {
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//   }
// }

// module.exports = steps;