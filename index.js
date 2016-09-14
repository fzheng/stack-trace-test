// start here
'use strict';
const st = require('stack-trace');
const caller = st.get()[1];
let n = 200000;
while (--n >= 0) {
  console.time("Loop " + n);
  console.log({caller: caller.getFileName(), line: caller.getLineNumber()});
  console.timeEnd("Loop " + n);
}
