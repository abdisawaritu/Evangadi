// array and object
// DOM   the connection between html and jss
// if we want to implement the js to the html text  we need some connection between them  that connection is called the DOM
// example
let somePerson = {
  name: "abdisa",
  age: 30,
  eduction: {
    school: "evangadi",
    field: " Full stack appliction development",
    grade: 3.9,
  },
};
// we can access the above object using the  dot notation or bracket notation
console.log(somePerson);
somePerson.eduction.grade = 4.0;
console.log(somePerson);

// Very Important question is what if we have a way to convert the html text   into a structured object like the above somePerson object  ? if we do that  we can apply the Javascript techniquestion we know on the object right?
// DOM is th  answer for that ? a protocol (standard) that the browser understand
// frontend developer
// dom is not html, js, css.  is the rules where browser  use to recreate the html code in a from an object. then they use the structo of that object to render the html code  and display it on the browser
// js interacts with the created Dom object

//  Dom is language independent implemented by browser to all ow for webscripting languaged like js to add , modify,  and update the structure of the html, web page  in an orginized way.
//  is the standard to for how to get, change , add and delete modify, the html elemetns
// is the logical  tree like model  that organizes  a web page's  html document as an object

// HTML is a markup language. JavaScript is a programing language that usually deals with
// objects. How do they work together then?

let abebe = {
    prt1: 2,
    prt2: 4

}
abebe.prt1 = 55;
// DOM HTML DOCUMENT
// let document  = {
//     html: {
//         head:{
//           title:{
//             value: " The title "
//           }  
//         }
//     }
// }
// document.html.head.value = "abebe";  // browser build from start after updating that is called re rendering  the whole page not only the updated element 
