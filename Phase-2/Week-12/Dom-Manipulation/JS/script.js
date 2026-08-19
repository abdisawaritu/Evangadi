// array and object
// DOM   the connection between html and jss
// if we want to implement the js to the html text  we need some connection between them  that connection is called the DOM
// example
// let somePerson = {
//   name: "abdisa",
//   age: 30,
//   eduction: {
//     school: "evangadi",
//     field: " Full stack appliction development",
//     grade: 3.9,
//   },
//   getName: function (){
//     return this.name;
//   }
// };
// // we can access the above object using the  dot notation or bracket notation
// console.log(somePerson);
// somePerson.eduction.grade = 4.0;
// console.log(somePerson);

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

// let abebe = {
//   // if I have abebe object
//   prt1: 2,
//   prt2: 4,
// };
// abebe.prt1 = 55; // updating the properties of the abebe object
// DOM HTML DOCUMENT  // like the above the html document also  changed to the following dom object
// let document  = {
//     html: {
//         head:{
//           title:{
//             value: " The title "
//           }
//         }
//     }
// }
// document.html.head.value = "abebe";// updating the properties    // browser build from start after updating that is called re rendering  the whole page not only the updated element  when the webiste is render is gonna apply the change by rebuilding the whole page of webpage that is called re rendering
// document is the root node for the whole html documents

// accessing the elements of the  html   using the dom manipulation throught Js object accessing
// DOM tree

// 1. document node
// 2  element node
// 3 attribute node
// 4 text node
// DOM stands for:

// Document Object Model

// When the browser loads an HTML page, it does not treat the HTML source code simply as text. The browser parses the HTML and creates an object representation of the document.
// Document
// │
// └── html
//     │
//     ├── head
//     │   │
//     │   └── title
//     │       │
//     │       └── "My Page"
//     │
//     └── body
//         │
//         ├── h1
//         │   │
//         │   └── "Hello"
//         │
//         └── p
//             │
//             └── "Welcome to my page."  this is called  DOM tree
// tree like data structure
// a node
//      a parent
//             childern
//                     sibilings  // the same parent childern

// HTML
//   ↓
// parsed by browser
//   ↓
// DOM
//   ↓
// organized as
//   ↓
// DOM Tree
// // Grandparent
//     │
//     ├── Parent 1
//     │    ├── Child 1
//     │    └── Child 2
//     │
//     └── Parent 2
//          └── Child 3

//              HTML
//                ↓
//         Browser parses it
//                ↓
//               DOM
//                ↓
//         ┌──── DOM Tree ────┐
//         │                  │
//       html                ...
//         │
//       body
//      /    \
//    h1      p
//    │       │
//  "Hello" "Welcome"
//         │
//         ↓
//  JavaScript manipulates it
//         │
//         ↓
//  Updated webpage

// document = root node
// html = root element
// element node =  html tags
// text node =  text writtein
// attribute node =   attribute
// comment node =  for comments
// console.dir(document);
// console.log(document.body.children);
// console.log(document.body.childNodes);

// DOM manipulation
// manipulation takes two steps
//  1. finding or selecting  the element we want to work with
//  2. altering the text  or attributes of that element   throught js and document
//  document object  in js  to acees the roo noe of dom tree
// document.html.body.head.div.text

// manipulation  dom involves
//  1  finding / selection the element  we want to work with  (Js Needs to find)
//  2  altering the text  or attributes of that elemetn
//  3 Event listening  (user action  to update the element )(trigger ) user action js  responds
// document.getElementById();
// document.getElementsByClassName();
// document.getElementsByTagName();
// document.querySelector();
// document.querySelectorAll();

// update method
// element.textContent;
// // element.innerHTML;
// // element.innerText;

// // element.style;
// // element.classList;

// // element.setAttribute();
// // element.getAttribute();
// // element.removeAttribute();
// // document.createElement();
// // element.append();
// // element.appendChild();
// // element.remove();
// // element.removeChild();
// //                    DOM MANIPULATION
// //                        │
// //         ┌──────────────┼──────────────┐
// //         ↓              ↓              ↓
// //     SELECT          MODIFY        CREATE/REMOVE
// //         │              │              │
// //         │              │              │
// //  querySelector     textContent     createElement
// //  querySelectorAll  innerHTML       append
// //  getElementById    style           prepend
// //  getElements...    classList       remove
// //                    attributes

// // selecting elements  like we have done for css // css selector
// // selection the individual element  using id
// // selection  of the multiple element
// //  traverstin  between muliple element
// // selection the individual element
// // selection of the specific elements
// // using the
// // document.getElementById()
// // document.querySelector(); // uses the css selector syntax
// // finding the muliple html elemetns that match a partiduclar condition
// // important method
// // document.querySelectorAll()
// //documement.getElementsByClassName();
// // document.getElementsByTagName()
// // Comparing Multiple Selection Methods
// // Method	Selection	Result
// // getElementById()	ID	One element
// // querySelector()	CSS selector	First matching element
// // querySelectorAll()	CSS selector	All matching elements
// // getElementsByClassName()	Class	HTMLCollection
// // getElementsByTagName()	Tag	HTMLCollection
// // parent child selector

// // element.parentElement;

// // element.children;

// // element.firstElementChild;

// // element.lastElementChild;

// // element.nextElementSibling;

// // element.previousElementSibling;

// // container.querySelector("p");

// // container.querySelectorAll(".item");

// // document.querySelector(".container > p");

// // selecting individual elements

// // document object method

// let mango =  document.getElementById("two");
// console.log(mango);
// console.log(mango.className);
// mango.className = "red"

// // querySelector () return the html elements using the css selector  similar to the css selector  only return  the first element eventhough we have muliple elements that satisfeis the selecction criteria
// const le = document.querySelector(".yellow")
// console.log(le);
// const allSelector = document.querySelectorAll(".yellow");
// console.log(allSelector);
// le.className = "pink";
// // muiliple element selector

// //getElementbyClassName();
// // getElementByTagsName();

// const cllNa= document.getElementsByClassName("green")
// console.log(cllNa)

// const gebyT = document.getElementsByTagName("li")
// console.log(gebyT);

// // returns NodeList ro HTML collection return as array like structure which are found on our browser
// after return from NodeList or HtMl collection
// like we applied for array we use the index of the element
// from the collection we use array index to indefies  the one element  or using the item method

// const test1 = document.getElementsByClassName   ("yellow");
// // // reference is affected
// // test1[0].className = "pink"; 
// console.log(test1);
// test1[0].className = "pink";  // we changed  after the console changed by reference rather than values as we have seen before 
// // we change the value after the console
// let temp = [];
// for (let i = 0; i < test1.length; i++) {
//   // let selectedItem = test1[i];
//   // selectedItem.className = "pink";  // updated lively at each iteration  because live dom element it changed immediately its array like structure  not actual array 
//   temp.push(test1[i])
// }
// console.log(temp);

// for(let i = 0 ; i<temp.length ; i++){
//   let selectedItem = temp[i];
//   selectedItem.className = "pink";
// }

// let test2 = document.getElementsByTagName("li"); // loop is possible because its not lived 
// console.log(test2)

// for (let i = 0; i < test2.length; i++) {
//   let selectedItem = test2[i];
//   selectedItem.className = "pink";
  
//  }  
//   live vs non live in dom manipulation 
// // accessing by values and reference 

// live dom Object which is change which affected the orginal object 
// querySelectorAll()  static not live 
// by changing into actal array to loop through that temp array  changing into the static array 



