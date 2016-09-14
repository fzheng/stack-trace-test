// start here
'use strict';
const st = require('stack-trace');
const sizeof = require('object-sizeof');
const logger = require('bunyan').createLogger({
  name: "stack-trace-test",
  level: "trace"
});
let n = 200000;
while (--n >= 0) {
  console.time("Loop " + n);
  logger.trace(st.get()[1]);
  console.timeEnd("Loop " + n);
  console.log(sizeof(Error.stackTraceLimit));
}