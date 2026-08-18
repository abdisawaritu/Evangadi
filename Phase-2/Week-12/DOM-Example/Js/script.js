// How to add Js into the HTML
// including Js code inline (related to event Js code);
// internal using script tags   script script
// external  Using the dedicated file (recommended)
// the location of linking is important during we use external Js connection
// defer and async are attributes of the <script> tag. They control when an external JavaScript file is downloaded and when it is executed while the browser is loading an HTML page. vs async

// link problem
console.log(document.body)
document.body.style.backgroundColor = "red";
// dom manipulation 

// document object model  
// not only js other language also uses  this standard  
// dom is  like api    connencts js and html
// dom is the programming interface 
// DOM   represents the Html page using a series of objects.
//// dom allows us to select and update elements  when user interacts with a website 
// by navigating thorugh the three select the html element then update the elememtn 
// document  the root node 

console.dir(document)  // insted of console.log

console.log(document.body.children[0].textContent)
let test = document.body.children[0];
test.textContent = "Evangadi May batch "
// we have another method to update without getting the element or text by nestingn like the object by using the different Js object method method on the document to select and manipulate like document.getElementById (). without using the hiearirach one by one using the document 

// without doing the manipulation   we have to do two things 
// 1. selection the DOM elements  ( it simply mean locating  the element  we want to work with )
// 2 updating the DOM elements ( it means interacting  with the element ,  the text of the element ,  attributes of the element,  with its child elements )


