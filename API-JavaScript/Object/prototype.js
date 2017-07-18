var obj = {
    name : "evan"
}

obj.toString() // Inheriting `toString()` properties  from obj.prototype


obj.__proto__ // [[Prototype]] 

//Object.setPrototypeOf(obj, prototype);
Object.setPrototypeOf(obj, null)
