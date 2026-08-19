// Js Event types

// 1.UI/window events
// event related  to interface (windows) browser user inteface

// load   when the browser finishes loading a page
// unload  - when a page is unloading
// error - when browser encounters a js error
//  resize  - when  size of browser of changing the size of broswer
// scroll -  when user scorr upp and down

// 2 . key board events
// keydown
// keyup
// equivalent number of everk keys

// 3  mouse events
// click
// dbclick
// mouseouver
// mouseout

// 4  form events
// focus / focusin
// blur /focusout
// change
// submit
//  cut
// paste
// copy
// select

// click for the 70% of event come form

// Ui/window event (browser event)  vs document event
//  load event
//  unload event
//  error event
//  resize event
//  scroll event

// key board events
// keydown event
// keyup event
// keypress press event
// mouse event
//click event  (very important event in webiste on )
// dbclick
// mouseover event
// mouseout event

//   formeventz  (very important event in website develoment )
// change event
// submit event/\
// cut event
// paste  event
// copy event
// select event

// focus and blur  events
// focus event (onfocus)
// blur event (onblur )

// event handling
// selection
// bind the event  (event types )
// attach a script (function )  executed function after event happnes

// Event Handling   (different terminoology )
// is a mechanism  that controls these events  and decides what should happen when  an event happens.
//  Event handlers or listeners
//  is a script / function that listens   to the event  and responds accordingly to the event  updating the dom based on event (action )
// Event binding
// it allows you to add  event handler for a specified event toso that you chosed js function will be execured when that event is triggered
// connecteing the event to element

// general steps  for event handling
//  select an element the dom element
// bind an event  on the selected element
// attach a script  that will be executed when  the event is triggered  event listeners  or handlers

//  eventHandlers

// three ways to bind  event
// Js  event Examples

// function abebe() {
//   alert("Hello abebe");
// }

function changeBackground() {
  document.body.style.backgroundColor = "#f56a79";
}

// event traditional dom event handlers
// traditional dom event handlers
// selection method of the dom

//
const button = document.getElementById("change-bg");
button.onclick = changeBackground;

function removeBackground() {
  document.body.style.backgroundColor = "";
}

const removeBack = document.getElementById("removebg");
removeBack.onmouseover = removeBackground;
//  modern method of event listener 

// addEventListener ();

// const but = document.getElementById("change-bg-listener");
// but.addEventListener("click", changeBackground);
