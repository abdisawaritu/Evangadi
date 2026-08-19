// How to add Js into the HTML
// including Js code inline (related to event Js code);
// internal using script tags   script script
// external  Using the dedicated file (recommended)
// the location of linking is important during we use external Js connection
// defer and async are attributes of the <script> tag. They control when an external JavaScript file is downloaded and when it is executed while the browser is loading an HTML page. vs async

// link problem
// console.log(document.body)
// document.body.style.backgroundColor = "red";
// dom manipulation 

// document object model  
// not only js other language also uses  this standard  
// dom is  like api    connencts js and html
// dom is the programming interface 
// DOM   represents the Html page using a series of objects.
//// dom allows us to select and update elements  when user interacts with a website 
// by navigating thorugh the three select the html element then update the elememtn 
// document  the root node 

// console.dir(document)  // insted of console.log

// console.log(document.body.children[0].textContent)
// let test = document.body.children[0];
// test.textContent = "Evangadi May batch "
// we have another method to update without getting the element or text by nestingn like the object by using the different Js object method method on the document to select and manipulate like document.getElementById (). without using the hiearirach one by one using the document 

// without doing the manipulation   we have to do two things 
// 1. selection the DOM elements  ( it simply mean locating  the element  we want to work with )
// 2 updating the DOM elements ( it means interacting  with the element ,  the text of the element ,  attributes of the element,  with its child elements )

// selecting the elements 
// tranversing between elements 

// getElementById() // select single element of html using the unique id of tags or element
// selection using the unique id of the element or tag 

const test1 = document.getElementById("one")
console.log(test1)  // only id passed to the method 

// querySelector()  method 
const test2 = document.querySelector("#tech h1")// only return first matching element although we have multiple element
console.log(test2)
const test = document.querySelector(".red");
const tests = document.querySelector("h1");
// querySelector() is flexible more works  tagName, className, idName
// getElementByClassName () method return muliple elemtn usng the html collection  and access like that of the array  or item method inside the document 

const test3 = document.getElementsByClassName("red");
console.log(test3) // return html collection accessed thorugh like the array structure  we dont apply al lthe array so they are array like strctuur so 
console.log(test3[0])
console.log(test3[1])

// getElementsByTagName();
const test4 = document.getElementsByTagName("h1");
console.log(test4);

const test5 = document.querySelectorAll("h1");  // as node list  static  they are not live 
console.log(test5) // static  its not live 

// getElementByName()   we use on the form   we use mostly   for the form   and return  the nodeList   which is different form the querySelect nodeList  unlike that is live for the getElementbyName which is not for the querySelector ()
const test6 = document.getElementsByName("h1"); // as node list  static  they are not live
console.log(test6);  // live like that of the html collection updated at live


getElementsByClassName()// attributes by class Name just we give  the class name  and return the HTML collection  which is accessed by similar method with the array  array like html collection  structure   they are  
getElementsByTagName()   // return the  all the matching element return the html collection as array like structure and to be accessed 

querySelectorAll()  // return  the nodeList  not the html collection which is static  

// each of the document method have their own properties   to access thier text 

// individual element selector vs  multiple element selector 






