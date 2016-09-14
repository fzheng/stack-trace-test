'use strict';
let n = 2000000;
while (--n >= 0) {
  foo(n);
}

function foo(n) {
  let obj = process.memoryUsage();
  console.log("n: " + n + "; heapTotal: " + obj.heapTotal + "; heapUsed: " + obj.heapUsed);
}
