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
// 3 dom level  event listeners(addEventListener())  method takes evetn and the handersl function on th the selection element 

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
const apples = document.getElementById("one");
const btn = document.getElementById("btn");

function changeColor() {
  apples.style.color = "white";
  apples.style.backgroundColor = "green";
  // // selection is not needed because alread we have binded our element to the  event
  // alert("the button is clicked")
}

function removeColor() {
  apple.style.color = "";
  apple.style.backgroundColor = "";
}

// btn.onclick = changeColor; // withoug calling  only the name of funcin here binding in inside the js  the connection binding method different here
// btn.ondblclick = removeColor; // here binding is different

// btn.addEventListener("click", changeColor);
// muliple event on  the one event handers

// //traditional method

// during bindint the function does not have the parenthtesis

// Element.eventType = function ;
// function is not called just the name of th efunction if we call it does not wait the function event just watit to event 

// btn.onclick = function () {
//   apple.style.backgroundColor = "green";
// };
// btn.onclick = function () {
//   apple.style.color = "white"; // only this executes trad cannot work with multile handers here only the second element event happens   big limiatation only one handlers  we cant apply the multiple    so we use the dom event listener to 
// // };
// //   // DOM LEVEL EVENT HANDLERS WORKS WITH MULTIPLE  HANDLERES  avoid the limititation of traditional dom event listenere 

// // btn.addEventListener("click" , function (){  // anonumou function usnig connection
// //     apple.style.backgroundColor = "green"
// // })
// elements.addEventListener(event. handler)
// here binding and attaching are at the same time 


// // btn.addEventListener("click", function () {
// //   apple.style.color = "white";
// // });
// //  // halting the default behavaris inside event
// // const link = document.getElementById("evangadi-link");
// // link.addEventListener("click" , function (e){
// //     e.preventDefault();

// on one event we can attach multiple handlers for the dom 
// //     console.log(e)
// //     link.innerHTML = "<h1>   Hello world </h1>"
// // })
// "When the click happens, call this function.";
// element.removeEventListener("event", function);

// when we call the function  it exectures the code wheneven if the user takes the event   the function executes so that we cant call the function  just give the function name either name , anu , indepeende function to the  add event list method  

// function (event) eve e  e.preventdefaultO()
  // here event is the object of even 
// // const form = document.getElementById("registration-form");
// // const firstName = document.getElementById("first");
// element.addEventListener("event", function);

// // console.dir(firstName);
// // const lastName = document.getElementById("last");
// // console.log(lastName);
// // console.log(form);

// // const handleSubmit = (e) => {
// //   e.preventDefault();
// //   if (firstName.value.length === 0) {
// //     firstName.style.backgroundColor = "red";
// //   }
// //   if (lastName.value.length === 0) {
// //     lastName.style.backgroundColor = "red";
// //   }
// //   if (firstName.value && lastName.value) {
// //     alert(` thankyou ${firstName.value}`);
// //   }
// // };
// // form.addEventListener("submit", handleSubmit);

// // // event propagation

// // // Bonus  Event Propagation 4
document.getElementById("parent").addEventListener("click", () => {
  alert("Parent Clicked");
});
// bubbling phase to stop the propagation of event from the parent element to child element
document.getElementById("child").addEventListener("click", (e) => {
  e.stopPropagation();
  alert("child clicked");
});

// // Altering  and multiple selection

// const test1 = document.getElementById("one");
// console.log(test1.innerHTML);

// //QUERY SELECOTOR METHOD  only first method matching element

// const test2 = document.querySelector(".red");
// console.log(test2);

// const test3 = document.getElementsByClassName("red");
// console.log(test3.length); // it return array like structure   it can inherit  some method and properties from the array  but actual they are not array

// // quarySelectorAll();
// const paragraph = document.querySelector("p");
// // console.log(paragraph);

// const paragraphs = document.querySelectorAll("p");  // it return the nodeList contain all the matching element  which accessed using index
// console.log(paragraphs); // only for the debugging purpose
// console.log(paragraphs[0]);

// paragraphs.forEach(function (paragraph){
//   console.log(paragraph)
// })
// console.log(paragraphs[1]);
// console.log(paragraphs.length)
// console.log(paragraphs.item(0))
// console.log(paragraphs.item(1));
// console.log(paragraphs[0].childNodes);
// // # + ID
// // .  +  ClassName
// //

// const para = document.querySelector("#paragraph");
// console.log(para)

// const product = document.querySelector(".product")
// // for debugging
// console.log(product)

// const division = document.querySelector(".card.active"); // card and active with no space
// console.log(division);

// // const divisions = document.querySelector(".card .active");  // find .active element  inside a .card

// // const   techs = document.querySelector(".parent  .red")
// // console.log(techs.innerHTML)

// // attributes selector
// const attributeselector = document.querySelector("input[type = 'email']");
// console.log(attributeselector);

// document.querySelector("button[type='submit']");

// Descendant Selector
// complex Selector

// const complexSelector = document.querySelectorAll(".container p "); // totally differ from .con.p
// // // p;             one element
// //                    with BOTH classes
// //                      container and p
// // // inside;
// // // // container;
// console.log(complexSelector)

// // childSelector  > selection direct child
// const directChildselector = document.querySelectorAll(".products > p")
// console.log(directChildselector)

// Select <p> elements that are direct children of .products.

// adjacent sibling
// All matching B siblings after A.
// The immediately following B.

// console.log(document.querySelector("h2 + p "))
// console.log(document.querySelectorAll("h2 ~ p"));

// console.log(document.querySelectorAll("h1, p"))

// console.log(document.querySelector(".products p:first-child"));
// console.log(document.querySelector(".products p:last-child"));
// document.querySelector(".products p:nth-child(2)");
// document.querySelectorAll(".card:has(button)");

// // combining everthings
// document.querySelectorAll(
//     ".products > article.card.active:has(button[type='submit'])"
// );

// const items = document.getElementsByClassName("red");
// console.log(items.length);
// console.log(items);

// console.log(items.length)  // it update lively so the length of items decreased

// const itemss = document.querySelectorAll(".red");
// console.log(itemss.length);
// for (let i = 0; i < itemss.length; i++) {
//   itemss[i].className = "yellow";
// }
// console.log(itemss.length);

// let parentElements = document.getElementById("tech");
// console.log(parentElements);
// console.log(parentElements.firstElementChild);
// console.log(parentElements.lastElementChild);

// console.log(parentElements.childNodes);

// console.log(parentElements.firstChild);
// console.log(parentElements.lastChild); // return the first node the text node  the differen between the childNode and childern as well elementnode v

// // from child to parent starting from the childern to get the parentElement using the different properties  and by using the different method

// const apple = document.getElementById("one");
// console.log(apple);
// console.log(apple.parentElement);

// // selection between the sibling  fo the same parents to get the next element to the selected element

// console.log(apple.nextElementSibling);
// console.log(apple.previousElementSibling);
// console.log(document.querySelector(".red:nth-child(1)"));

// // everthing we apppled for css selector to the queryselector();

// // Altering (any html properties ())
// // any thing we can do on the html can be done using  js on the fly on the browser
// // Most common used method for altering the DOM
// // 1.createElement();
// // 2.appendChild();
// // 3.prepend();
// // 4.innerHTML();
// // 5.textContent();
// // 6.removeChild();
// // 7after()
// // 8 before  ();

// // examples

// // creating new element using js

// const newElement = document.createElement("p");
// console.log(newElement);

// newElement.innerHTML = " this is new element "; // adding contents to the created element (innerText, innerHTML, textContent)
// // we can use also textContent and inner HTML

// // outer html
// // inner html give the html inside the element or selected element

// const box = document.getElementById("box");
// console.log(box.outerHTML);
// console.log(box.outerText);
// console.log(box.innerHTML);

// // innerHTML  → HTML inside
// // outerHTML  → element + HTML inside

// // innerText  → rendered text inside
// // outerText  → rendered text representation of the element

// // append (To append means to add something to the very end of a piece of writing, document, or data set)

// // as last child   of the parent
// // before appending the element first we have select the place we wanna to append the  element

// const parent = document.getElementById("tech");
// console.log(parent);

// parent.append(newElement , "hey");

// // prepen() as the first child of the parend adding

// // parent.prepend(newElement);

// // to get full control of the the place we want to add or append  we use before and after

// //  before ()   and after();

// const referenceElement = document.getElementById("two");
// console.log(referenceElement);
// // referenceElement.before(newElement);
// referenceElement.after(newElement);

// // we get full control where we want

// //   to remove the element
// // removeChild() and  remove()  // these two method are used to remove the newly created element from the given page

// // parent.removeChild(newElement);
// newElement.remove();
// // here we dont need the parent just remove it

// // insertBefore() method   the same as before must it need the selection of the parent element as well the   reference element
// // it requires the selection of the parent as well refer

// parent.insertBefore(newElement, referenceElement);

// // very important points here  selection of the reference element  and parent element  to create and append or insert into our page

// // Altering Attributes ( HTML attributes) are the found on the the opening tags of the html
// // className
// // id
// // classList
// // different attribute of the html
// //
// const amazon = document.getElementById("two");
// // const apple = document.getElementById("one");
// // amazon.append(apple);// question

// // console.log(document.getElementById("tech"))

// // className  and classList properties
// console.log(amazon);
// amazon.className = "yellow";
// // className override the first class name it does not add the new multiple class name

// amazon.classList.add("test");
// amazon.classList.remove("red")

// //  id

// // amazon.id = "new ID "
// // console.log(amazon )

// // getAttributes  to get the values of the selected elemt attributes

// console.log(amazon.getAttribute("id"));

// amazon.setAttribute("name" , "amazaon ")  // link can be also inserted

// // appendHCILd vs append
// // their differencees append and appendChild  append to add new element or noder other than created one append have more advantage  thatn appendchild

// // update or changin the css behavirou using the js using the style object  and different method and properites of the

const apple = document.getElementById("two");
apple.style.backgroundColor = "green";
apple.style.color = "white";
apple.style.border = "black solid";
// apple.style.display = "none";

// html collection vs node list
// html collection they are live
//  node list either they are live or static

const boxes = document.getElementsByClassName("box");
console.log(boxes.length); //3

// modifying the dom  affects the live collection of teh htmls
document.body.innerHTML += '<div class="box">box 4</div>';
console.log(boxes); // leng 4

// the same is true for the getElement by Tag name it return html collection which update  the element lively

// with dom traversal  you have to first parent element or the referece element selection

// element.parentElement;  give the htm element that direct contaitn this elemetn

// createElement() creates the element, but does not insert it into the page.

const paragraph = document.createElement("p");
paragraph.textContent = "Hello , Abdisa!";

paragraph.classList.add("message");
paragraph.id = "welcome";

const body = document.body;
body.append(paragraph);

// let imagcreat = document.createElement("img")
// imagcreat.setAttribute("src"  , "sourse of the image ")
// parent.append(image);
// we can also change the

// element.style.property = "value";
// JavaScript uses camelCase:

const button = document.querySelector("#changeBtn");
const box = document.querySelector("#box");

button.addEventListener("click", function () {
  box.style.backgroundColor = "red";
  box.style.color = "white";
  box.style.width = "300px";
  box.style.height = "200px";
});


const buttons = document.querySelector("#darkBtn");

buttons.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

  //                USER ACTION
  //                    ↓
  //                 EVENT
  //                    ↓
  //             EVENT LISTENER
  //                    ↓
  //            CALLBACK FUNCTION
  //                    ↓
  //       ┌────────────┼────────────┐
  //       ↓            ↓            ↓
  //     HTML       ATTRIBUTE       CSS
  //       ↓            ↓            ↓
  //  textContent   setAttribute   classList
  //  innerHTML     removeAttr     style
  //  createElement dataset        toggle
  //       ↓            ↓            ↓
  // //       └────────────┼────────────┘
  // //                    ↓
  // //               PAGE UPDATES

  // const buttonss = document.querySelector("#button");
  // const message = document.querySelector("#message");

  // buttonss.addEventListener("click", function () {
  //   message.textContent = "The message has changed!";
  // });

  // const themeButton = document.querySelector("#themeButton");

  // themeButton.addEventListener("click", function () {
  //   document.body.classList.toggle("dark");

  //   if (document.body.classList.contains("dark")) {
  //     themeButton.textContent = "Light Mode";
  //   } else {
  //     themeButton.textContent = "Dark Mode";
  //   }
  // });

  const menuButton = document.querySelector("#menuButton");
  const menu = document.querySelector("#menu");

  menuButton.addEventListener("click", function () {
    menu.classList.toggle("open");
  });

  const email = document.querySelector("#email");
  const submit = document.querySelector("#submit");
  const error = document.querySelector("#error");

  submit.addEventListener("click", function () {
    if (email.value === "") {
      error.textContent = "Email is required";
      error.classList.add("error");
    } else {
      error.textContent = "Email is valid";
      error.classList.add("success");
    }
  });

  //                     USER
  //                    │
  //                    ↓
  //             User interaction
  //                    │
  //                    ↓
  //            s      EVENT
  //                    │
  //                    ↓
  //            Event listener
  //                    │
  //                    ↓
  //             Callback function
  //                    │
  //       ┌────────────┼────────────┐
  //       ↓            ↓            ↓
  //      DOM        ATTRIBUTES      CSS
  //       │            │            │
  //       ↓            ↓            ↓
  // textContent    setAttribute   classList
  // innerHTML      dataset        style
  // createElement
  // append
  // remove
  //       │            │            │
  //       └────────────┼────────────┘
  //                    ↓
  //               USER INTERFACE
  //                    │
  //                    ↓
  //              Backend/API
  //                    │
  //                    ↓
  //                Database


  
