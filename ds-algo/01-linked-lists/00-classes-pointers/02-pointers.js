// code that does not use pointers
// what will happen if we NOT use a pointer?
// copy the value only
let num1 = 5;
let num2 = num1;

console.log(num1); // 5
console.log(num2); // 5

num1 = 10;
console.log(num1); // 10
console.log(num2); // 5 // DIFFERENT!

// what will happen if we use a pointer?
// copy the reference
// 'obj1' is a pointer -> to the object { value: 25 }
let obj1 = { value: 25 };
// 'obj2' is a pointer -> to the exactly same object { value: 25 }
let obj2 = obj1;

console.log(obj1); // { value: 25 }
console.log(obj2); // { value: 25 }

obj1.value = 36;
console.log(obj1); // { value: 36 }
console.log(obj2); // { value: 36 } // SAME !

// What's a problem ?
let obj3 = { value: 50 };
obj2 = obj3;
console.log(obj2); // { value: 50 }
obj1 = obj2;
console.log(obj1); // { value: 50 }
// => There is no object that points to and access { value: 36 } anymore.
// you only access to { value: 36 } through a variable.
// So, { value: 36 } is taking a space of memory.

// How to solve?
// Garbage collection
// periodically JavaScript is going to clean up these things through a process called, 'Garbage collection', and it will remove that.
