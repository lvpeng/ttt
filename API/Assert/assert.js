const assert = require('assert');

// Test case
function add(a, b) {
  return a + b;
}
var actual = add(1,2);

/* API 
assert, 
assert.ok,
assert.equal
*/

assert(actual == 2, '1+2 should equal to 3');
//assert.ok(actual == 3, '1+2 should equal to 3')
//assert.equal(!!actual, 3, '1+2 should equal to 3')