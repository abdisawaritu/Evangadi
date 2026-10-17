const UserJson = `{"name" : "Jhon Doe" , "age" :  20  ,  "isStuent": true ,  "courses" : ["Math", "physics" , "biology" , " critical thinking"]  }`;
console.log(JSON);
console.log(typeof UserJson);

//  JSon Is the text ( String data types so we    wnat to convert it to object to access the properties of the json file  and vice versa to send it to the frontnend )

console.log(UserJson.age);
// changing the json to the js objects  JSON.  json is not object it simple string or text  and parse

const userObject = JSON.parse(UserJson);
console.log(userObject.age); // I can access after converstion of from json to objects

// object to JSON   - JSON.stringfy() make the object string (text)

const jsObject = {
  name: "john doe",
  age: 20,
  isStudent: false,
  courses: ["math", "Programming "],
};
console.log(jsObject);
console.log(typeof jsObject);

const jsonString = JSON.stringify(jsObject);
console.log(jsonString);
console.log(typeof jsonString);

const student = {
  name: "sara",
  age: 22,
  isStudent: true,
  skills: ["HTML", "Css", "Javascript"],
};

console.log(student.age)

const jsonObjectofStudent = JSON.stringify(student)
console.log(jsonObjectofStudent)

     // Summary  of json and js objects 
     
// JSON.parse(string)   string-->object to use or to receive  to receive data 
// JSON.stringify (object) object ----> json  used for sending the data  in the formato of the json to the frontend  to send 