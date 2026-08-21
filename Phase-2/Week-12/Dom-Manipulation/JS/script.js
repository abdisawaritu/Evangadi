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
// DOM tree// changing to the static array to avoid the effect of the live dom manipulation vs static dom manipulation 

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
// // by changing into actal array to loop through that temp array  changing into the static array

// // traversing between  multiple element
// const test = document.getElementsByTagName("li");
// console.log(test)

// const yellowClass = document.querySelector(".yellow");
// console.log(yellowClass);
// let  talekWondim = yellowClass.nextElementSibling;
// console.log(talekWondim)
// // here is different properties that is used during the tranversing selection
// // parentNode
// // previousElementSibiling
// //  nestSibling
// let parentE = yellowClass.parentNode;
// console.log(parentE);

// Update or changing the values of the element
// any thiings can be changed from the html we change using the js anythings

// changing directoly on broswer withoug changing the html documents  from the browser rathen that going goto the file

// let mango = document.getElementById("two");
// console.log(mango); // for debugging purpose
// mango.className = "pink"
// mango.textContent = "Ice Cream"

// working with Html content
// this is when we want to add, remove an entire block of html code from our page
// we can use these built object method to do the above things
// we can use the following properties and method to dot that
// createElement();
// innerHTML:
// textContent
// appendChild();
// removeChild();  other method and properties are they  do this the above importatn things

// let somePara = document.createElement("p");
// console.log(somePara);
// somePara.textContent ="Abebe Beso Bela ";
// // if I want on the webpage rather than console

// document.body.appendChild(somePara); // only changes on browser on the fly not inside the actual html documet  or code
// let mango = document.getElementById("two");
// console.log(mango);
// mango.className = "pink";
// mango.classList.add("abebe");
// console.log(mango.classList);
// console.log(mango.getAttribute("id"));

// changing  the css stle using the style properties  it self
// js equiavalent style of css properties
// css propertoes  ===  Javascript Reference

// in js we use the came case  naming convention

// let element=  document.querySelector("h1");
// element.style.backgroundColor = 'blue'
// element.style.padding = " 10px";
// element.style.color = "white";
// element.style.borderBottom = "2px solid black"
// // witho;ut doing
// Document 	Owner of all nodes in the document
// <html> 	Element Node
// <head> 	Element Node
// <body> 	Element Node
// <a> 	Element Node
// href 	Attribute Node
// <h1> 	Element Node
// My Header 	Text Node

// console.log(document.body.children)  // object nested accessing  method  for different method and attributes of the object document
// console.log(document.body.childNodes);  // contain both element node and non element node

// console.log(document.body.children[0].innerText);  // contain only the element node

// console.log(document.head.childNodes)
// console.log(document.head.children[2].innerText)

// const apple =  document.getElementById("one"); // selection individual elements
// console.log(apple.className)
// console.log(apple)
// apple.className = "green"  // changing or updating the className using the js

// let mango = document.querySelector("#two")
// console.log(mango)
// console.log(mango.className);  // only used for debugging
// console.log(mango.innerHTML);
// // after selection we can change the content using different attributes or property   after selection  manipulation usng the built method and proppery
// mango.textContent = "Banana"
// console.log(mango.innerHTML);

/*
==========================================================
              JAVASCRIPT DOM CHEAT SHEET
==========================================================

DOM = Document Object Model

The browser converts HTML into a DOM tree.

HTML
  ↓
DOM Tree
  ↓
JavaScript selects elements
  ↓
JavaScript manipulates the DOM
  ↓
Browser updates the webpage


==========================================================
1. INDIVIDUAL / SINGLE ELEMENT SELECTION
==========================================================

These methods are mainly used when you want ONE element.
*/

// --------------------------------------------------------
// 1. getElementById()
// --------------------------------------------------------

// HTML:
// <h1 id="title">Hello</h1>

const title = document.getElementById("title");

// INPUT:
// "title" → ID name WITHOUT #

// OUTPUT:
// The element with id="title"
// If not found → null

// Example:
// title.textContent = "Welcome";

// --------------------------------------------------------
// 2. querySelector()
// --------------------------------------------------------

// HTML:
// <h1 id="title">Hello</h1>
// <p class="message">Welcome</p>

// ID:
const heading = document.querySelector("#title");

// Class:
const message = document.querySelector(".message");

// Tag:
const paragraph = document.querySelector("p");

// INPUT:
// Any valid CSS selector

// OUTPUT:
// The FIRST matching element
// If nothing matches → null

// IMPORTANT:
// # → ID
// . → class
// tag name → element/tag
//
// Example:
// document.querySelector("#title")
// document.querySelector(".message")
// document.querySelector("p")

/*
==========================================================
2. MULTIPLE ELEMENT SELECTION
==========================================================
*/

// --------------------------------------------------------
// 3. querySelectorAll()
// --------------------------------------------------------

// HTML:
// <p class="item">One</p>
// <p class="item">Two</p>
// <p class="item">Three</p>

const items = document.querySelectorAll(".item");

// INPUT:
// CSS selector

// OUTPUT:
// NodeList containing ALL matching elements

// Example:
// items.forEach(item => {
//     console.log(item.textContent);
// });

// IMPORTANT:
// querySelector()     → FIRST matching element
// querySelectorAll()  → ALL matching elements

// --------------------------------------------------------
// 4. getElementsByClassName()
// --------------------------------------------------------

// HTML:
// <p class="item">One</p>
// <p class="item">Two</p>

const elements = document.getElementsByClassName("item");

// INPUT:
// Class name WITHOUT .

// OUTPUT:
// HTMLCollection containing elements
// with that class

// Correct:
// getElementsByClassName("item")

// NOT:
// getElementsByClassName(".item")

// --------------------------------------------------------
// 5. getElementsByTagName()
// --------------------------------------------------------

// HTML:
// <p>One</p>
// <p>Two</p>

const paragraphs = document.getElementsByTagName("p");

// INPUT:
// Tag name

// OUTPUT:
// HTMLCollection containing all matching elements

// Example:
// document.getElementsByTagName("p")
// document.getElementsByTagName("div")
// document.getElementsByTagName("button")

/*
==========================================================
3. PARENT / CHILD / SIBLING DOM SELECTION
==========================================================

Example HTML:

<div id="container">

    <h1>Title</h1>

    <p>Hello</p>

    <button>Click</button>

</div>

DOM TREE:

div
│
├── h1
├── p
└── button

div = parent
h1, p, button = children
h1, p, button = siblings
*/

// --------------------------------------------------------
// 6. parentElement
// --------------------------------------------------------

// const paragraph2 = document.querySelector("p");

// // const parent = paragraph2.parentElement;

// // OUTPUT:
// // The parent ELEMENT of paragraph2

// // Example:
// // <div>
// //     <p>Hello</p>
// // </div>
// //
// // paragraph2.parentElement
// //         ↓
// //       <div>

// // --------------------------------------------------------
// // 7. children
// // --------------------------------------------------------

// const container = document.querySelector("#container");

// const children = container.children;

// // OUTPUT:
// // HTMLCollection containing ONLY ELEMENT children

// // Example:
// //
// // <div>
// //     <h1>Title</h1>
// //     <p>Hello</p>
// // </div>
// //
// // container.children
// //       ↓
// // h1, p

// // --------------------------------------------------------
// // 8. firstElementChild
// // --------------------------------------------------------

// const first = container.firstElementChild;

// // OUTPUT:
// // First ELEMENT child

// // Example:
// //
// // div
// // ├── h1  ← firstElementChild
// // ├── p
// // └── button

// // --------------------------------------------------------
// // 9. lastElementChild
// // --------------------------------------------------------

// const last = container.lastElementChild;

// // OUTPUT:
// // Last ELEMENT child

// // Example:
// //
// // div
// // ├── h1
// // ├── p
// // └── button ← lastElementChild

// // --------------------------------------------------------
// // 10. nextElementSibling
// // --------------------------------------------------------

// const heading2 = document.querySelector("h1");

// const next = heading2.nextElementSibling;

// // OUTPUT:
// // Next sibling ELEMENT

// // Example:
// //
// // h1
// // ↓
// // p
// //
// // h1.nextElementSibling → p

// // --------------------------------------------------------
// // 11. previousElementSibling
// // --------------------------------------------------------

// const paragraph3 = document.querySelector("p");

// const previous = paragraph3.previousElementSibling;

// // OUTPUT:
// // Previous sibling ELEMENT

// // Example:
// //
// // h1
// // ↑
// // p
// //
// // p.previousElementSibling → h1

// /*
// ==========================================================
// 4. OTHER USEFUL DOM SELECTION / NAVIGATION PROPERTIES
// ==========================================================
// */

// // --------------------------------------------------------
// // childNodes
// // --------------------------------------------------------

// const nodes = container.childNodes;

// // OUTPUT:
// // ALL child nodes

// // IMPORTANT:
// // Unlike children, childNodes can include:
// //
// // - Element nodes
// // - Text nodes
// // - Comment nodes

// // Therefore:
// //
// // children   → ELEMENT children only
// // childNodes → ALL types of child nodes

// // --------------------------------------------------------
// // firstChild
// // --------------------------------------------------------

// const firstNode = container.firstChild;

// // OUTPUT:
// // First child NODE

// // IMPORTANT:
// // It can be a text node, element, or comment.

// // --------------------------------------------------------
// // lastChild
// // --------------------------------------------------------

// const lastNode = container.lastChild;

// // OUTPUT:
// // Last child NODE

// // --------------------------------------------------------
// // nextSibling
// // --------------------------------------------------------

// const nextNode = heading2.nextSibling;

// // OUTPUT:
// // Next NODE

// // IMPORTANT:
// // Can be an element, text node, or comment.

// // --------------------------------------------------------
// // previousSibling
// // --------------------------------------------------------

// const previousNode = paragraph3.previousSibling;

// // OUTPUT:
// // Previous NODE

// /*
// ==========================================================
// 5. MANIPULATION / UPDATE PROPERTIES
// ==========================================================

// After selecting an element, you can manipulate it.
// */

// // --------------------------------------------------------
// // textContent
// // --------------------------------------------------------

// title.textContent = "New Title";

// // Gets or changes text content.

// // GET:
// console.log(title.textContent);

// // SET:
// title.textContent = "Hello";

// // --------------------------------------------------------
// // innerHTML
// // --------------------------------------------------------

// container.innerHTML = "<p>Hello</p>";

// // Gets or changes HTML inside an element.

// // GET:
// console.log(container.innerHTML);

// // SET:
// container.innerHTML = "<h2>Welcome</h2>";

// // IMPORTANT:
// // innerHTML interprets HTML tags.
// //
// // textContent → treats content as text
// // innerHTML   → interprets HTML

// // --------------------------------------------------------
// // className
// // --------------------------------------------------------

// title.className = "heading";

// // Changes the complete class attribute.

// // --------------------------------------------------------
// // classList
// // --------------------------------------------------------

// // ADD class:
// title.classList.add("active");

// // REMOVE class:
// title.classList.remove("active");

// // TOGGLE class:
// title.classList.toggle("active");

// // CHECK class:
// title.classList.contains("active");

// // REPLACE class:
// title.classList.replace("old", "new");

// // --------------------------------------------------------
// // style
// // --------------------------------------------------------

// // Change inline CSS:

// title.style.color = "red";
// title.style.fontSize = "30px";
// title.style.backgroundColor = "yellow";

// // IMPORTANT:
// // CSS property names with "-" become camelCase.
// //
// // background-color
// //       ↓
// // backgroundColor
// //
// // font-size
// //       ↓
// // fontSize

// /*
// ==========================================================
// 6. ATTRIBUTE MANIPULATION
// ==========================================================
// */

// // --------------------------------------------------------
// // getAttribute()
// // --------------------------------------------------------

// // HTML:
// // <img id="photo" src="image.jpg">

// const image = document.querySelector("#photo");

// const source = image.getAttribute("src");

// // INPUT:
// // Attribute name

// // OUTPUT:
// // Attribute value

// // --------------------------------------------------------
// // setAttribute()
// // --------------------------------------------------------

// image.setAttribute("src", "new-image.jpg");

// // INPUT:
// // 1. Attribute name
// // 2. Attribute value

// // Example:
// image.setAttribute("alt", "Profile photo");

// // --------------------------------------------------------
// // hasAttribute()
// // --------------------------------------------------------

// const exists = image.hasAttribute("src");

// // OUTPUT:
// // true or false

// // --------------------------------------------------------
// // removeAttribute()
// // --------------------------------------------------------

// image.removeAttribute("alt");

// // Removes the specified attribute.

// /*
// ==========================================================
// 7. CREATING AND REMOVING ELEMENTS
// ==========================================================
// */

// // --------------------------------------------------------
// // createElement()
// // --------------------------------------------------------

// const newParagraph = document.createElement("p");

// // INPUT:
// // Element/tag name

// // OUTPUT:
// // New DOM element

// // Example:
// newParagraph.textContent = "New paragraph";

// // --------------------------------------------------------
// // append()
// // --------------------------------------------------------

// container.append(newParagraph);

// // Adds the element at the END of the parent.

// // --------------------------------------------------------
// // prepend()
// // --------------------------------------------------------

// container.prepend(newParagraph);

// // Adds the element at the BEGINNING of the parent.

// // --------------------------------------------------------
// // remove()
// // --------------------------------------------------------

// newParagraph.remove();

// // Removes the element from the DOM.

// /*
// ==========================================================
// 8. INSERTING ELEMENTS
// ==========================================================
// */

// // append()
// container.append(newParagraph);

// // prepend()
// container.prepend(newParagraph);

// // before()
// container.before(newParagraph);

// // Adds element BEFORE container.

// // after()
// container.after(newParagraph);

// // Adds element AFTER container.

// /*
// ==========================================================
// 9. IMPORTANT DOM PROPERTIES
// ==========================================================
// */

// // --------------------------------------------------------
// // children
// // --------------------------------------------------------
// // Returns ELEMENT children only.

// // --------------------------------------------------------
// // childNodes
// // --------------------------------------------------------
// // Returns ALL child nodes.

// // --------------------------------------------------------
// // parentElement
// // --------------------------------------------------------
// // Returns parent ELEMENT.

// // --------------------------------------------------------
// // firstElementChild
// // --------------------------------------------------------
// // Returns first ELEMENT child.

// // --------------------------------------------------------
// // lastElementChild
// // --------------------------------------------------------
// // Returns last ELEMENT child.

// // --------------------------------------------------------
// // nextElementSibling
// // --------------------------------------------------------
// // Returns next ELEMENT sibling.

// // --------------------------------------------------------
// // previousElementSibling
// // --------------------------------------------------------
// // Returns previous ELEMENT sibling.

// // --------------------------------------------------------
// // firstChild
// // --------------------------------------------------------
// // Returns first NODE.

// // --------------------------------------------------------
// // lastChild
// // --------------------------------------------------------
// // Returns last NODE.

// // --------------------------------------------------------
// // nextSibling
// // --------------------------------------------------------
// // Returns next NODE.

// // --------------------------------------------------------
// // previousSibling
// // --------------------------------------------------------
// // Returns previous NODE.

// /*
// ==========================================================
// 10. EVENTS
// ==========================================================

// Events allow DOM manipulation to happen because of
// user actions.
// */

// // --------------------------------------------------------
// // addEventListener()
// // --------------------------------------------------------

// button.addEventListener("click", function () {
//   title.textContent = "Button clicked!";
// });

// // INPUT:
// // 1. Event type
// // 2. Function to execute

// // Common events:
// //
// // "click"
// // "input"
// // "change"
// // "submit"
// // "mouseover"
// // "mouseout"
// // "keydown"
// // "keyup"

// /*
// ==========================================================
// 11. QUICK SELECTION SUMMARY
// ==========================================================

// SINGLE ELEMENT
// ----------------------------------------------------------

// document.getElementById("id")
//         ↓
// One element

// document.querySelector("CSS selector")
//         ↓
// First matching element


// MULTIPLE ELEMENTS
// ----------------------------------------------------------

// document.querySelectorAll("CSS selector")
//         ↓
// All matching elements → NodeList

// document.getElementsByClassName("class")
//         ↓
// Matching elements → HTMLCollection

// document.getElementsByTagName("tag")
//         ↓
// Matching elements → HTMLCollection


// PARENT / CHILD
// ----------------------------------------------------------

// element.parentElement
//         ↓
// Parent element

// element.children
//         ↓
// Element children

// element.firstElementChild
//         ↓
// First element child

// element.lastElementChild
//         ↓
// Last element child


// SIBLINGS
// ----------------------------------------------------------

// element.nextElementSibling
//         ↓
// Next element

// element.previousElementSibling
//         ↓
// Previous element


// ALL NODE RELATIONSHIPS
// ----------------------------------------------------------

// element.childNodes
//         ↓
// All child nodes

// element.firstChild
//         ↓
// First node

// element.lastChild
//         ↓
// Last node

// element.nextSibling
//         ↓
// Next node

// element.previousSibling
//         ↓
// Previous node



// ==========================================================
// 12. MOST IMPORTANT DIFFERENCES
// ==========================================================

// querySelector()
//     → FIRST matching element

// querySelectorAll()
//     → ALL matching elements

// getElementById()
//     → Element with specific ID

// getElementsByClassName()
//     → Elements with specific class

// getElementsByTagName()
//     → Elements with specific tag


// children
//     → ELEMENT children only

// childNodes
//     → ALL types of child nodes


// parentElement
//     → Parent ELEMENT

// parentNode
//     → Parent NODE


// firstElementChild
//     → First ELEMENT child

// firstChild
//     → First NODE


// nextElementSibling
//     → Next ELEMENT

// nextSibling
//     → Next NODE



// ==========================================================
// 13. MOST IMPORTANT METHODS TO MASTER FIRST
// ==========================================================

// If you are learning DOM manipulation, focus on these first:

// 1. document.querySelector()
// 2. document.querySelectorAll()
// 3. document.getElementById()

// 4. element.parentElement
// 5. element.children
// 6. element.firstElementChild
// 7. element.lastElementChild
// 8. element.nextElementSibling
// 9. element.previousElementSibling

// 10. element.textContent
// 11. element.innerHTML
// 12. element.classList
// 13. element.getAttribute()
// 14. element.setAttribute()

// 15. document.createElement()
// 16. element.append()
// 17. element.remove()

// 18. element.addEventListener()


// ==========================================================
// IMPORTANT NOTE
// ==========================================================

// DOM SELECTION:
//     Find an element.

// DOM MANIPULATION:
//     Change/add/remove something.

// DOM NAVIGATION:
//     Move between parent, child, and sibling nodes.

// EVENT HANDLING:
//     Perform an action when something happens.

// Basic workflow:

//     SELECT
//        ↓
//     STORE REFERENCE
//        ↓
//     MANIPULATE
//        ↓
//     ADD EVENT IF NEEDED


// Example:

// const button = document.querySelector("#button");

// button.textContent = "Click Me";

// button.addEventListener("click", () => {
//     button.textContent = "Clicked!";
// });


// ==========================================================
// FINAL MEMORY RULE
// ==========================================================

// SELECT
//     ↓
// querySelector()
// querySelectorAll()
// getElementById()

// NAVIGATE
//     ↓
// parentElement
// children
// firstElementChild
// lastElementChild
// nextElementSibling
// previousElementSibling

// CHANGE
//     ↓
// textContent
// innerHTML
// classList
// style

// ATTRIBUTES
//     ↓
// getAttribute()
// setAttribute()
// removeAttribute()

// CREATE / REMOVE
//     ↓
// createElement()
// // append()
// // prepend()
// // remove()

// // RESPOND TO USER
// //     ↓
// // addEventListener()
// // ==========================================================
// // */

// // // from individual selector  (single element (tags) with attributes  selection )

// // querySelector();
// // this is the method that are mainly used when we want to select  one element only  
// // is the flexible method used to selection based claas tags ,id   
// const  appleId = document.querySelector("#one");
// const  appleClass= document.querySelector(".red");
// const  appleTag  = document.querySelector("li")
// // INPUT:
// // Any valid CSS selector

// // OUTPUT:
// // The FIRST matching element
// // If nothing matches → null

// // IMPORTANT:
// // # → ID
// // . → class
// // tag name → element/tag
// //
// // Example:
// // document.querySelector("#title")
// // document.querySelector(".message")
// // document.querySelector("p")

// console.log(appleId);
// console.log(appleTag);
// console.log(appleClass);
// // input : any valid css selector

// // Multiple  Element  Selection (selection of the multiple element  as Html collection or NodeList  they are array like structure which are found inside the browser  accessed like the array by index )

// // querySelectorAll(); 
// // input : css selector 
// // onput : NodeList contaning all the matching elements  All Matching Element 

// const fruits  = document.querySelectorAll("li")
// console.log(fruits );

// // getElementByClassName();
// // input.  className without .
// // output  : HTML collection  contanining Elements  with the class

// const watermelon = document.getElementsByClassName("yellow");
// console.log(watermelon)

// watermelon[0].innerHTML = "loomii" ;
// console.log(watermelon[0].textContent);

// // getElementByTagName();
// // input : tag name or element 
// // ouput : Html collection contaning all matching elements 
// // INPUT:
// // Tag name

// // OUTPUT:
// // HTMLCollection containing all matching elements

// // Example:
// // document.getElementsByTagName("p")
// // document.getElementsByTagName("div")
// // document.getElementsByTagName("button")

// const listItem = document.getElementsByTagName("li");
// console.log(listItem)

// Parent / child / sibiling dom selection 
// children   → ELEMENT children only
// childNodes → ALL types of child nodes

// firstChild
// --------------------------------------------------------

// const firstNode = container.firstChild;

// OUTPUT:
// First child NODE

// IMPORTANT:
// It can be a text node, element, or comment

/*
// ==========================================================
// 4. OTHER USEFUL DOM SELECTION / NAVIGATION PROPERTIES
// ==========================================================
// */


// // --------------------------------------------------------
// // childNodes
// // --------------------------------------------------------

// const nodes = container.childNodes;

// // OUTPUT:
// // ALL child nodes

// // IMPORTANT:
// // Unlike children, childNodes can include:
// //
// // - Element nodes
// // - Text nodes
// // - Comment nodes

// // Therefore:
// //
// // children   → ELEMENT children only
// // childNodes → ALL types of child nodes


// // --------------------------------------------------------
// // firstChild
// // --------------------------------------------------------

// const firstNode = container.firstChild;

// // OUTPUT:
// // First child NODE

// // IMPORTANT:
// // It can be a text node, element, or comment.


// // --------------------------------------------------------
// // lastChild
// // --------------------------------------------------------

// const lastNode = container.lastChild;

// // OUTPUT:
// // Last child NODE


// // --------------------------------------------------------
// // nextSibling
// // --------------------------------------------------------

// const nextNode = heading2.nextSibling;

// // OUTPUT:
// // Next NODE

// // IMPORTANT:
// // Can be an element, text node, or comment.


// // --------------------------------------------------------
// // previousSibling
// // --------------------------------------------------------

// const previousNode = paragraph3.previousSibling;

// // OUTPUT:
// // Previous NODE



// /*
// ==========================================================
// 5. MANIPULATION / UPDATE PROPERTIES
// ==========================================================

// After selecting an element, you can manipulate it.
// */


// // --------------------------------------------------------
// // textContent
// // --------------------------------------------------------

// title.textContent = "New Title";

// // Gets or changes text content.

// // GET:
// console.log(title.textContent);

// // SET:
// title.textContent = "Hello";


// // --------------------------------------------------------
// // innerHTML
// // --------------------------------------------------------

// container.innerHTML = "<p>Hello</p>";

// // Gets or changes HTML inside an element.

// // GET:
// console.log(container.innerHTML);

// // SET:
// container.innerHTML = "<h2>Welcome</h2>";

// // IMPORTANT:
// // innerHTML interprets HTML tags.
// //
// // textContent → treats content as text
// // innerHTML   → interprets HTML


// // --------------------------------------------------------
// // className
// // --------------------------------------------------------

// title.className = "heading";

// // Changes the complete class attribute.


// // --------------------------------------------------------
// // classList
// // --------------------------------------------------------

// // ADD class:
// title.classList.add("active");

// // REMOVE class:
// title.classList.remove("active");

// // TOGGLE class:
// title.classList.toggle("active");

// // CHECK class:
// title.classList.contains("active");

// // REPLACE class:
// title.classList.replace("old", "new");


// // --------------------------------------------------------
// // style
// // --------------------------------------------------------

// // Change inline CSS:

// title.style.color = "red";
// title.style.fontSize = "30px";
// title.style.backgroundColor = "yellow";

// // IMPORTANT:
// // CSS property names with "-" become camelCase.
// //
// // background-color
// //       ↓
// // backgroundColor
// //
// // font-size
// //       ↓
// // fontSize

// // classList
// // --------------------------------------------------------

// // // ADD class:
// // title.classList.add("active");

// // // REMOVE class:
// // title.classList.remove("active");

// // // TOGGLE class:
// // title.classList.toggle("active");

// // // CHECK class:
// // title.classList.contains("active");

// // // REPLACE class:
// // title.classList.replace("old", "new"); 

// Html collection vs Node List 
// HTMLCollection

// Contains elements only.

// HTMLCollection
//      ↓
// HTML elements
//      ↓
// <div>
// <p>
// <h1>
// <button>
// ...
// NodeList

// Can contain different types of DOM nodes:

// NodeList
//    ↓
// DOM nodes
//    ├── Element
//    ├── Text
//    ├── Comment
//    └── ...

// LIVE   → current DOM
// STATIC → snapshot of DOM

// working with attributes 
// className 
// classList
// id 

// getatttributes 
// seAttribtuees
// removeattributes 

// without touching the actual file  everthing things  is on the fly   the change is not refelected on the actual html documents rather the changes happens only one fly 
function changeText(){
  document.querySelector("h1").textContent = "wel come"
}

// dom event handlers propety 
// querySelector("css selector ") 






