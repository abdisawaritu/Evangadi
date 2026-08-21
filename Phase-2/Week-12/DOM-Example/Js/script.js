// // How to add Js into the HTML
// // including Js code inline (related to event Js code);
// // internal using script tags   script script
// // external  Using the dedicated file (recommended)
// // the location of linking is important during we use external Js connection
// // defer and async are attributes of the <script> tag. They control when an external JavaScript file is downloaded and when it is executed while the browser is loading an HTML page. vs async

// // link problem
// // console.log(document.body)
// // document.body.style.backgroundColor = "red";
// // dom manipulation

// // document object model
// // not only js other language also uses  this standard
// // dom is  like api    connencts js and html
// // dom is the programming interface
// // DOM   represents the Html page using a series of objects.
// //// dom allows us to select and update elements  when user interacts with a website
// // by navigating thorugh the three select the html element then update the elememtn
// // document  the root node

// // console.dir(document)  // insted of console.log

// // console.log(document.body.children[0].textContent)
// // let test = document.body.children[0];
// // test.textContent = "Evangadi May batch "
// // // we have another method to update without getting the element or text by nestingn like the object by using the different Js object method method on the document to select and manipulate like document.getElementById (). without using the hiearirach one by one using the document

// // // without doing the manipulation   we have to do two things
// // // 1. selection the DOM elements  ( it simply mean locating  the element  we want to work with )
// // // 2 updating the DOM elements ( it means interacting  with the element ,  the text of the element ,  attributes of the element,  with its child elements )

// // // selecting the elements
// // // tranversing between elements

// // // getElementById() // select single element of html using the unique id of tags or element
// // // selection using the unique id of the element or tag

// // const test1 = document.getElementById("one");
// // console.log(test1); // only id passed to the method

// // // querySelector()  method
// // const test2 = document.querySelector("#tech h1"); // only return first matching element although we have multiple element
// // console.log(test2);
// // const test = document.querySelector(".red");
// // const tests = document.querySelector("h1");
// // // querySelector() is flexible more works  tagName, className, idName
// // // getElementByClassName () method return muliple elemtn usng the html collection  and access like that of the array  or item method inside the document

// // const test3 = document.getElementsByClassName("red");
// // console.log(test3); // return html collection accessed thorugh like the array structure  we dont apply al lthe array so they are array like strctuur so
// // console.log(test3[0]);
// // console.log(test3[1]);

// // // getElementsByTagName();
// // const test4 = document.getElementsByTagName("h1");
// // console.log(test4);

// // const test5 = document.querySelectorAll("h1"); // as node list  static  they are not live
// // console.log(test5); // static  its not live

// // // getElementByName()   we use on the form   we use mostly   for the form   and return  the nodeList   which is different form the querySelect nodeList  unlike that is live for the getElementbyName which is not for the querySelector ()
// // const test6 = document.getElementsByName("h1"); // as node list  static  they are not live
// // console.log(test6); // live like that of the html collection updated at live

// // getElementsByClassName(); // attributes by class Name just we give  the class name  and return the HTML collection  which is accessed by similar method with the array  array like html collection  structure   they are
// // getElementsByTagName(); // return the  all the matching element return the html collection as array like structure and to be accessed

// // querySelectorAll(); // return  the nodeList  not the html collection which is static

// // // each of the document method have their own properties   to access thier text

// // // individual element selector vs  multiple element selector

// // // Html collection vs NodeList

// // // html collection ?
// // // it alwatys live mean when there is a change in the document,   they  will automatically update  to reflect the change
// // // selectors that return  HTML collectin
// // getElementsByClassName();
// // getElementsByTagName();
// // // return the dom element (only things that has opening tag and closing tag inside
// // // the returned list is live

// // // NodeList
// // // selectors that return the nodelist
// // querySelectorAll();
// // // return DOM NODE  ( every thing inside selected element )
// // // the returned list is static

// // const items = document.getElementsByClassName("red");
// // console.log("before Update", items.length);
// // console.log("after Update", items);
// // console.log("after Update", items.length);

// // for (let i = 0; i < items.length; i++) {
// //   items[i].className = "yellow";
// // }
// // changing the html collection into actual array to avoid live update throught temp array

// // selection elements (traversing between muliple elements )
// // examples

// // properties
// // firstElementChild;
// const parentElement = document.getElementById("tech");
// console.log(parentElement);
// console.log(parentElement.firstElementChild);
// // console.log(parentElement.childNodes);
// console.log(parentElement.firstChild);

// // lastElementChild\

// console.log(parentElement.lastElementChild);
// // parentElement

// const apple = document.getElementById("one");
// console.log(apple.parentElement);
// //  sibiling selection from parent

// newElement.textContent = "new element ";

// // nextElementSibling
// const newElement = document.createElement("h1");
// const referenceElement = document.getElementById("two");

// referenceElement.before(newElement)
// console.log(referenceElement.nextElementSibling);
// // previsous element
// console.log(referenceElement.previousElementSibling);

// // nth child
// const secondChild = document.querySelector(".red:nth-child(2");
// console.log(secondChild); // similar to css selector works for the css selector method to js elements selector it give more flexible for css selector  less faster than  getById which is more fater interms of performaces

// // Altering the html elements
// //  createElement;

// // content inside  created tags or element
// // innerText, textContent, innerHTML   TO GET THE CONTENT INSIDE THE TAGE WHAT IS IS THE DIFFEREN BETWEEN THTEM
// console.dir(newElement);
// newElement.innerHTML = "new";
// the nested para is like a text or a tag when we use the inner text to create contents inside the created tags
// console.log(newElement);
// only support the text not the inner tag like that of the innerHTML
// newElement.outerHTML = "new"

// append(); at the final child of the parent

// const parent = document.getElementById("tech");
// console.log(parent);
// parent.append(newElement)

// preappend();
// const parent = document.getElementById("tech");
// console.log(parent)
// // parent.prepend(newElement);

// // // before and after
// const createNewelement = document.createElement("h1")
// createNewelement.textContent= "this is paragraph"

// createNewelement.innerText = "this is paragraph"
// const ref = document.getElementById("two");
// console.log(ref)
// ref.before(createNewelement);
// ref.replaceChild(createNewelement);
// createNewelement.remove();
// // for built method and prporties
// how to use them focus on
// their paramter
// what they are returning

// insertBefore()  it asks the parent element and the refernce element
// selection the pareent tlemetn
// selction the refere element
// insertBefore(createNewelement, refereceElemtn); it asks both the referece elemtn and parent element

// the method takes the parent element as well as the reference elemetn after selecting these two things
//

// working with attributes(class name , id , classList)

// update the attributes of the elements
// className classList id
// hasAttributes,
// getAttributes,
// setattrobies.
// removAtttribues
// classList works with multiple classess

// html attributes addition information about the elemtn of tags of the html

// const amazon = document.getElementById("two");
// console.log(amazon);
// amazon.className = "yellow";
// // add class Name

// amazon.classList.add("test") // without overdding  we use the class list to add muliple  class without removing the first on e

//  2 id
// const amazon = document.getElementById("two");
// console.log(amazon.id);
// console.log(amazon.id= "new id");

// // getAttributes
// console.log(amazon.getAttribute("id")); // class , test
// // setAttributes  ( ) to add attributes

// const amazon = document.getElementById("two");
// amazon.setAttribute("name" , "amazon")
// console.log(amazon);

// append vs appendChild
// inline styling

// const apple = document.getElementById("one");
// console.dir(apple)  // all the object hier inside the apple

// apple.style.backgroundColor = "green"
// apple.style.fontSize = "60px"
// apple.style.color = "white"

// html collection and altering
// when the dom updated the collection of the html also upadted
// html collection vs nodeList  video

// Live vs Static DOM

// const boxes = document.getElementsByClassName("box");
// console.log(boxes)
// console.log(boxes.length) // 3
// document.body.innnerHTML += '<div class="box">box4</div>'
// console.log(boxes);

// // getElementByTagName();
// const par = document.getElementsByTagName("p");
// console.log(par);

//  ways to bind an event (html event handlers)
// three ways to assing/bind  event handersl to an event
// 1. html event handlers attribute
// 2.traditional  dom event handlers
// 3 dom level  event listeners

// 1. HTML  event handers attribute
//     - define  a function on you js that does something
//   - go to html file  and attach the functin using the  event attributes
// examples    on js file
// function  showClickedAlert(){
//                   alert("button is click ")}

// on html file
//  < button  onclick  = "showClickedAlert()" <button save</button >
//   const apple = document.getElementById("one");

// traditionnal dom event handers
// const apple = document.getElementById("one");
// const btn = document.getElementById("btn");

// function changeColor() {
//   apple.style.color = "white";
//   apple.style.backgroundColor = "green";
//   // // selection is not needed because alread we have binded our element to the  event
//   // alert("the button is clicked")
// }

// function removeColor() {
//   apple.style.color = "";
//   apple.style.backgroundColor = "";
// }

// btn.onclick = changeColor; // withoug calling  only the name of funcin here binding in inside the js  the connection binding method different here
// btn.ondblclick = removeColor; // here binding is different

// btn.addEventListener("click", changeColor);
// muliple event on  the one event handers

// traditional method
// btn.onclick = function () {
//   apple.style.backgroundColor = "green";
// };
// btn.onclick = function () {
//   apple.style.color = "white"; // only this executes trad cannot work with multile handers
// };
//   // DOM LEVEL EVENT HANDLERS WORKS WITH MULTIPLE  HANDLERES
// btn.addEventListener("click" , function (){  // anonumou function usnig connection
//     apple.style.backgroundColor = "green"
// })

// btn.addEventListener("click", function () {
//   apple.style.color = "white";
// });
//  // halting the default behavaris inside event
// const link = document.getElementById("evangadi-link");
// link.addEventListener("click" , function (e){
//     e.preventDefault();
//     console.log(e)
//     link.innerHTML = "<h1>   Hello world </h1>"
// })

const form = document.getElementById("registration-form");
const firstName = document.getElementById("first");

console.dir(firstName);
const lastName = document.getElementById("last");
console.log(lastName);
console.log(form);

const handleSubmit = (e) => {
  e.preventDefault();
  if (firstName.value.length === 0) {
    firstName.style.backgroundColor = "red";
  }
  if (lastName.value.length === 0) {
    lastName.style.backgroundColor = "red";
  }
  if (firstName.value && lastName.value) {
    alert(` thankyou ${firstName.value}`);
  }
};
form.addEventListener("submit", handleSubmit);

// event propagation

// Bonus  Event Propagation 4
document.getElementById("parent").addEventListener("click", () => {
  alert("Parent Clicked");
});
// bubbling phase to stop the propagation of event from the parent element to child element
document.getElementById("child").addEventListener("click", (e) => {
  e.stopPropagation();
  alert("child clicked");
});
