const assert = require("assert");

/*
 deepEqual 
  @param actual
  @param expected
  @param (message)
*/

// var obj = {
//   name: "evan",
//   age: 1
// }
// assert.deepEqual(obj.name, 'evan', 'error')

// Primitive values are compared with the Abstract Equality Comparison ( == ).


/*
 deepStrictEqual 
  @param actual
  @param expected
  @param (message)
*/

// assert.deepStrictEqual(1, "1", "not equal")

var obj1 = {
    a:1
}
var obj2 = {
    a:1
}

var obj3 = {}
var obj4 = {}


Object.setPrototypeOf(obj4, Date.prototype)
// assert.deepEqual(obj1, obj2);
assert.deepStrictEqual(obj3, obj4)



//每一个Object对象都有一个`prototype`属性　，这个属性是一个对象
// Object.prototype.toString()
