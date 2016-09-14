'use strict';
let n = 1000000;
let x = '';
while (--n >= 0) {
  x = foo(x, "Hello World [" + Date.now() + "]\n");
}
console.log(x);

function foo(pre, str) {
  return pre + str;
}
