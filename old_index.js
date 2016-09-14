'use strict';
let n = 1000000;
while (--n >= 0) {
  foo("Hello World [" + Date.now() + "]\n");
}

function foo(str) {
  console.log(str);
}
