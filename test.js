'use strict';
let n = 1000000;
while (--n >= 0) {
  foo();
}

function foo() {
  let obj = process.memoryUsage();
  console.log("heapTotal: " + obj.heapTotal + "; heapUsed: " + obj.heapUsed);
}
