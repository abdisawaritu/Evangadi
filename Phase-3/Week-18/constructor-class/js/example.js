// // // 9.1 create objects  in Js using  constructor function

// // const student = {
// //   name: "John Doe",
// //   group: 1,
// //   greet: function () {
// //     return `Hello, my name is ${this.name} and I am in group ${this.group}.`;
// //   },
// // };
// // console.log(student.greet());
// // console.log(student.name);
// // console.log(student);

// // // for example If I want to create object for the studnet two kebede
// // const student2 = {
// //   name: " Kebede",
// //   group: 2,
// //   greet: function () {
// //     return `Hello, my name is ${this.name} and I am in group ${this.group}.`;
// //   },
// // };
// // console.log(student2.greet());
// // console.log(student2.name);
// // console.log(student2);
// // // this method of creating objects in not efficient when we have to create multiple objects with the same properies and methods. In such cases , we can use constructor functions to creat objects .  and this method is used to create objects that I have the same properiteis in common or the same attributes in common .

// // // creating object using this method is not efficient when we have to create multiple objects with the same properties and methods. In such cases, we can use constructor functions to create objects.

// // // 9.2 create objects using constructor function
// // function EvangadiStudent(name, group) {
// //   this.name = name;
// //   this.group = group;
// //   this.greet = function () {
// //     return `Hello, my name is ${this.name} and I am in group ${this.group}.`;
// //   };
// // }

// // // Objects created using the constructor function
// // const studentONe = new EvangadiStudent("John Doe", 1);
// // const studentTwo = new EvangadiStudent("Jane Smith", 2);
// // console.log(studentONe.greet()); // Output: Hello, my name is John

// // // 9.3 create objects using class
// // // class EvangadiStudent {
// // //   constructor(name, group) {
// // //     this.name = name;
// // //     this.group = group;
// // //   }

// // //   greet() {
// // //     return `Hello, my name is ${this.name} and I am in group ${this.group}.`;
// // //   }
// // // }
// // EvangadiStudent.prototype.studentInfo = function () {
// //   return `Name: ${this.name}, Group: ${this.group}`;
// // };
// // let studentOne = new EvangadiStudent("John Doe", 1);
// // let studentTwos = new EvangadiStudent("Jane Smith", 2);
// // // console.log(studentOne.greet()); // Output: Hello, my name is John Doe and I am in group 1.
// // console.log(studentTwos); // Output: Name: Jane Smith, Group: 2.

// // // // Objects created using the class
// // // const studentOne = new EvangadiStudent("John Doe", 1);

// // // console.log(studentOne.greet()); // Output: Hello, my name is John Doe and I am in group 1.
// // // console.log(studentTwo.greet()); // Output: Hello, my name is Jane Smith and I am in group 2.

// // // we can change the the object created by the constructor into the class by uising the class keyword and the constructor method. The constructor method is a speicial method that is used to initialize the object created by the class. The constructor method is called when we create a new instance of the class using the new keyword. The constructor method takes parameters that are used to  initialize the properties of the object. The method of the class is defined ouside the constructor method.

// // // Javacript Inheritance is a mechanism that allows one class to inherit the properties and methods of another class. In JavaScript, we can achieve inheritance using the extends keyword. The class that inherits the properties and methods of another class is called the subclass or derived class, while the class that is being inherited from is called the superclass or base class. The subclass can access the properties and methods of the superclass using the super keyword. The super keyword is used to call the constructor method of the superclass and to access its properties and methods.
// // //  is the ability of extending  one objects behavior to another objects.   it is done throught the use of the extends keyword.  The class that inherits the properties and methods of another class is called the subclass or derived class, while the class that is being inherited from is called the superclass or base class. The subclass can access the properties and methods of the superclass using the super keyword. The super keyword is used to call the constructor method of the superclass and to access its properties and methods.

// // // it doen through  prototypes  prototype is a mechanism that allows us to add properties and methods to an object after it has been created. In JavaScript, every object has a prototype, which is an object that contains properties and methods that can be inherited by other objects. When we create a new object using a constructor function or a class, the new object inherits the properties and methods of the prototype of the constructor function or class. We can add properties and methods to the prototype of a constructor function or class using the prototype property. This allows us to share properties and methods among all instances of the constructor function or class, without having to define them in each instance.

// // // Object prototype is a mechanism that allows us to add properties and methods to an object after it has been created. In JavaScript, every object has a prototype, which is an object that contains properties and methods that can be inherited by other objects. When we create a new object using a constructor function or a class, the new object inherits the properties and methods of the prototype of the constructor function or class. We can add properties and methods to the prototype of a constructor function or class using the prototype property. This allows us to share properties and methods among all instances of the constructor function or class, without having to define them in each instance.

// // // what is the prototype

// // // /in Js every object has a prototype, has an internal link to  anohter object called it prototype. The prototype object is used to share properties and methods among all instances of the constructor function or class. When we create a new object using a constructor function or a class, the new object inherits the properties and methods of the prototype of the constructor function or class. We can add properties and methods to the prototype of a constructor function or class using the prototype property. This allows us to share properties and methods among all instances of the constructor function or class, without having to define them in each instance.

// // // prototypical inheritance is a mechanism that allows us to create new objects based on existing objects. In JavaScript, we can achieve prototypical inheritance using the Object.create() method. The Object.create() method creates a new object with the specified prototype object and properties. The new object inherits the properties and methods of the prototype object, and we can add new properties and methods to the new object as well. This allows us to create new objects that share properties and methods with existing objects, without having to define them in each instance.

// // // function StudentBatch(name, group, batch) {
// // //   EvangadiStudent.call(this, name, group);
// // //   this.batch = batch;
// // // }

// // // StudentBatch.prototype = Object.create(EvangadiStudent.prototype);
// // // StudentBatch.prototype.constructor = StudentBatch;

// // // let studentBatch1 = new StudentBatch("John Doe", 1, "Batch A");
// // // console.log(studentBatch1.studentInfo());
// // // console.log(studentBatch1);

// // // classess are syntactical sugar
// // // ES6 introduced classes as a syntactical sugar over the existing prototype-based inheritance in JavaScript. Classes provide a more intuitive and organized way to create objects and handle inheritance. They allow us to define a blueprint for creating objects with shared properties and methods, making it easier to manage and maintain code. Classes also support features like constructors, methods, and inheritance, which enhance the object-oriented programming capabilities of JavaScript.

// // // class constrcturo function is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class. A constructor can use the super keyword to call the constructor of the super class.  it name is called constructor   and it called at automatically when we create  a new objects.

// // ES6 class constructor function

// class EvangadiStudent {
//   constructor(name, group, batch) {
//     this.name = name;
//     this.group = group;
//     this.batch = batch;
//     this.studentInfo = function () {
//       return `Name: ${this.name}, Group: ${this.group}, Batch: ${this.batch}`;
//     };
//   }
//   greet() {
//     return `Hello, my name is ${this.name} and I am in group ${this.group}.`; // this is shared method that is shared among all instances of the class.  it is not created for each instance of the class.  it is created once and shared among all instances of the class.  this is more efficient than creating a new method for each instance of the class. if I define the method inside the constructor function, it will be created for each instance of the class.  this is less efficient than creating a shared method that is shared among all instances of the class.
//   }
// }

// let studentOne = new EvangadiStudent("John Doe", 1, "Batch A");
// console.log(studentOne);
// console.log(studentOne.studentInfo());

// // Modern way of Inheritance using ES6 classes
// //  inheritance using es6 classes is a mechanism that allows one class to inherit the properties and methods of another class. In JavaScript, we can achieve inheritance using the extends keyword. The class that inherits the properties and methods of another class is called the subclass or derived class, while the class that is being inherited from is called the superclass or base class. The subclass can access the properties and methods of the superclass using the super keyword. The super keyword is used to call the constructor method of the superclass and to access its properties and methods.

// class StudentBatch extends EvangadiStudent {
//   constructor(name, group, batch, year) {
//     super(name, group, batch);  // calls the constructor of the superclass (EvangadiStudent) to initialize name, group, and batch properties
//     this.year = year;
//   }
// }

// const studentBatch1 = new StudentBatch("Jane Smith", 2, "Batch B", 2023);
// console.log(studentBatch1);
// console.log(studentBatch1.studentInfo()); // Output: Name: Jane Smith, Group: 2, Batch: Batch B

// class  StudentBatch2 extends  StudentBatch{
//   constructor(name, group, batch, year, course) {
//     super(name, group, batch, year); // calls the constructor of the superclass (StudentBatch) to initialize name, group, batch, and year properties
//     this.course = course;
//   }

// }

// const studentBatch2 = new StudentBatch2("John Smith", 3, "Batch C", 2024, "JavaScript");
// console.log(studentBatch2);
// console.log(studentBatch2.studentInfo()); // Output: Name: John Smith, Group: 3, Batch: Batch C

// // Notes that is Javascript
// // everything in Javascript is an object.  and every object has a prototype.  and the prototype is an object that is used to share properties and methods among all instances of the constructor function or class.  when we create a new object using a constructor function or a class, the new object inherits the properties and methods of the prototype of the constructor function or class.  we can add properties and methods to the prototype of a constructor function or class using the prototype property.  this allows us to share properties and methods among all instances of the constructor function or class, without having to define them in each instance.

// // and all the objects have a prototype chain. and the prototype chain is a mechanism that allows us to access properties and methods of an object through its prototype.  when we try to access a property or method of an object, JavaScript first looks for that property or method in the object itself.  if it doesn't find it there, it looks for it in the object's prototype.  if it doesn't find it there, it looks for it in the prototype's prototype, and so on, until it reaches the end of the prototype chain.  if it doesn't find the property or method in any of the prototypes, it returns undefined.

// // What is the prototype chain in Javascript?
// // it is a mechanism that allows us to access properties and methods of an object through its prototype.  when we try to access a property or method of an object, JavaScript first looks for that property or method in the object itself.  if it doesn't find it there, it looks for it in the object's prototype.  if it doesn't find it there, it looks for it in the prototype's prototype, and so on, until it reaches the end of the prototype chain.  if it doesn't find the pr

// // is thsi prototype chain the final object is   Object  in js  that finally check inside this object if there is no property or method found in the object itself and its prototype chain, it will return undefined.  and the final object in the prototype chain is the Object object.  and the Object object is the root of all objects in JavaScript.  and the Object object has a prototype that is null.  and the null prototype means that there are no more objects to look for properties or methods.  and this is the end of the prototype chain.

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name); // calls the constructor of the superclass (Animal) to initialize name property
//     this.breed = breed;
//   }
// }

// const dog = new Dog("Buddy", "Golden Retriever");
// console.log(dog.name);  // Output: Buddy
// console.log(dog.breed); // Output: Golden Retriever

// class Cat extends Animal {
//   constructor(name, color) {
//     super(name); // calls the constructor of the superclass (Animal) to initialize name property
//     this.color = color;
//   }

// }
// const cat = new Cat("Whiskers", "Gray");
// console.log(cat.name);

// class Bird extends Animal {
//   constructor(name, species) {
//     super(name); // calls the constructor of the superclass (Animal) to initialize name property
//     this.species = species;
//   }
// }
// class Fish extends Animal {
//   constructor(name, habitat) {
//     super(name); // calls the constructor of the superclass (Animal) to initialize name property
//     this.habitat = habitat;
//   }
// }
// class Reptile extends Animal {
//   constructor(name, type) {
//     super(name); // calls the constructor of the superclass (Animal) to initialize name property
//     this.type = type;
//   }
// }

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getCarInfo() {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
  }
}

const car1 = new Car("Toyota", "Camry", 2020);
console.log(car1.getCarInfo()); // Output: Make: Toyota, Model: Camry, Year: 2020

class ElectricCar extends Car {
  constructor(make, model, year, batteryCapacity) {
    super(make, model, year); // calls the constructor of the superclass (Car) to initialize make, model, and year properties
    this.batteryCapacity = batteryCapacity;
  }
}
