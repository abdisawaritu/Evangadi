// alert("js is connected");
// Javascript Maps
// is the built in js object  that stores key-value pairs .

let obj = {};

obj[1] = "One";
console.log(obj);

let objs = {};

objs[true] = "Yes";
console.log(objs);

let student = {
  name: "abdisa",
  age: 22,
};

student.toString(student.age);
console.log(student);
console.log(student.age);
console.log(typeof student.age);

// creating the maps

let mapName = new Map();
let studentMap = new Map();

// how to add new data to map
// to add  we use the set () method
// mapName.set (key, value);

studentMap.set("name", "abdisa");
studentMap.set("age", 22);
studentMap.set("department", "ECE");
console.log(studentMap);
console.log(studentMap.size);

// to update the just simply overide it
studentMap.set("name", "abdi");
console.log(studentMap);

// retrieveing value

// we use mapName.get(key);
console.log(studentMap.get("name"));
console.log(studentMap.get("age"));
console.log(studentMap.get("salary"));
// checking weather key is exist  using has()
// we use when you dont know whether a key exists or not
console.log(studentMap.has("age"));
console.log(studentMap.has("salary"));
// studentMap.has("name");

// removing one entry   deleter ()
console.log(studentMap.delete("age"));
console.log(studentMap);
// removing everthing using clear () studentmap.clear();
// to count the entities we use the  size instead of the length as array  map.size

// to retieiving only the keys

console.log(studentMap.has("salary"));
console.log(studentMap.keys());
console.log(studentMap.values());
console.log(studentMap.entries());

const person = {
  // this is one of the biggest advantages of the map making the keys of the map is gonna be the object
  id: 1,
  name: "abdi",
};
const attendance = new Map();
attendance.set(person, "present");
console.log(attendance);

const scores = new Map();
scores.set(101, "abdi");
scores.set(102, "abdisa");
scores.set(103, "abdis");

const result = new Map();

result.set(true, "Passed");
result.set(false, "Failed");

const coordinates = [10, 20];

const map = new Map();

map.set(coordinates, "Home");

function login() {}

const permissions = new Map();

permissions.set(login, "Admin");

const id = Symbol("id");

const users = new Map();

users.set(id, "Student");

const example = new Map();

example.set(null, "Nothing");

// const example = new Map();

example.set(undefined, "Unknown");

const ids = new Map();

ids.set(100n, "Computer Engineering");

const numbers = new Map();

numbers.set(NaN, "Not a Number");

const examples = new Map();
examples.set("name", "abidsa");
examples.set(101, "student Id");
examples.set(true, "passed");
examples.set(null, " no value");
examples.set(undefined, "unknown");

const person1 = {
  name: "abdi",
};
const person2 = {
  name: "abdi",
};
console.log(person1 === person2);

// Maps compares the primitive key ( suchs string , numbers booleans , null , undefined , NaN , and )   by their values but it compares objects , arrays and function by ther referece ( memory address );

// to define the sets in js
let setName = new Set();
let stud = new Set();

// let setNames =  new  Set([
//     valu1, value2, values3
// ]);
// setName.add(values)
setName.add("abdi");
setName.add("muba ");
setName.add("dura");
setName.has("abdi");
setName.delete("abdi");
// setName.clear();
console.log(setName.size);
console.log(setName);
setName.values();
setName.keys();
// setName.enties();
// the most common iteration method
for (const value of setName) {
  console.log(value);
}

setName.forEach(function (value) {
  console.log(value);
});

//  the sytanx for the for loop which used to iterate over the values of differetn objects such as array , string , objects , maps and sets
// for (const variable of iterable) {
//   // code
// }   for the array never uses the  index

// example
let name = "abdisa";
for (const letter of name) {
  console.log(letter);
}

let colors = new Set(["Red", "Green", "Blue"]);

for (const color of colors) {
  console.log(color);
}
let studentsss = new Map([
  ["name", "abdisa"],
  ["age ", 22],
]); // it returns the key values pair 
// for ...in 


// for (const key in object) {
//   // code
// }  give mea each property name 

let studentsssss = {
  name: "Abdisa",
  age: 22,
  department: "ECE",
};
for (const key in studentsssss) {
  console.log(key);
}
let numberssss = [10, 20, 30];

for (const index in numberssss) {
  console.log(index);
}



// Use for...of

// When you need the values.

// Examples:

// Array values
// String characters
// Set values
// Map entries
// Use for...in

// When you need the property names of an object.

// Examples:

// Student object
// Car object
// User object
// Product object

// | Method      | Main Purpose                                        |
// | ----------- | --------------------------------------------------- |
// | `forEach()` | Visit every element                                 |
// | `map()`     | Transform every element into a new array            |
// | `filter()`  | Keep only elements that satisfy a condition         |
// | `find()`    | Find the first matching element                     |
// | `some()`    | Check if at least one element satisfies a condition |
// | `every()`   | Check if all elements satisfy a condition           |
// | `reduce()`  | Combine all elements into one value                 |






