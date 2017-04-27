const assert = require('assert');

// assert.equal(1,2)


// assert.ok(false, 'it\'s false')

// assert.fail(1,2, false,'###')

// assert.throws(
//   () => {
//     throw new Error('Wrong value');
//   },
//   Error
// );
//
function add(a, b) {
  return a + b;
}
var expected = add(1,2);

assert(expected == 3, 'one plus two is  equal three')
assert.ok(expected == 3, 'one plus two is  equal three')
assert.equal(expected , 3, 'one plus two is  equal three')
// assert.fail(expected, 4, undefined, '!==')
