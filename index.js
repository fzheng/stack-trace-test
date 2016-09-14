// start here
'use strict';
const st = require('stack-trace');
const logger = require('bunyan').createLogger({
  name: "stack-trace-test",
  level: "trace"
});
let n = 200000;
while (--n >= 0) {
  console.time("Loop " + n);
  let caller = st.get()[1];
  logger.trace({caller: caller.getFileName(), line: caller.getLineNumber()});
  console.timeEnd("Loop " + n);
}