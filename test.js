'use strict';
let n = 0;
while (true) {
  foo(n++);
}

function foo(n) {
  let obj = process.memoryUsage();
  console.log("Loop: " + n + "; heapTotal: " + Math.floor(obj.heapTotal/1024/1024) + " MB; heapUsed: " + Math.floor(obj.heapUsed/1024/1024) + " MB");
}