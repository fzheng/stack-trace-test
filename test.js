'use strict';
let n = 0;
while (true) {
  let obj = process.memoryUsage();
  console.log("Loop: " + (n++) + "; heapTotal: " + (obj.heapTotal >> 20) + " MB; heapUsed: " + (obj.heapUsed >> 20) + " MB");
}