// jQuery()  =  $("css selector "); return the jquery object  of the selected elements
$(); // it takes the css selector  all the css selector individual as well the  multiple selector ; this is called the jquery  function or method we use o it always takes the css selector like that of the querySelectorAll and querySelector

// const jqueyObject = $("#four");
// console.log(jqueyObject);

// selection of the html document element using jquery
// jquery Filter  based on some condition
// first filter
// last filter
// even
// odd/
//

// Jquery Filter  from the jquery objects

// let items = $("li:nth-child(5)");
// console.log(items);
// console.log(items[3]);

// updating or altering or manipulation after selection of the element
// crud operations
// changing the values  (altering)
// jquery objects  (methods  and propreties for altering )
// updating the contnents to add and change the contenx as well element ofht jequer objects
// const apples = $("#one");
// console.log(apples);

// apples.text("ice cream ")

// console.log(apples.text());
// apples.remove();

// const listOfFruits = $("#list-of-fruits");
// listOfFruits.hide();

// // listOfFruits.html("<p> abebe </p>")
// // console.log(listOfFruits.html())
// // creating new elements  using  jquery rather that vanilla js

// // append
// // prepend
// // before
// // after
// listOfFruits.append("<li class ='green'>Added using the prepend</li>");

// the same is true for append , before , after

// attributes
// addClass();  // to the existing element
//  removeClass();
// jqueyObject.addClass("kebede");
// jqueyObject.removeClass("kebede");

// jqueyObject.css("background-color", "pink");

// $("#one").css({
//   "background-color": "black",
// });

// form value
// val(); // for getters and setters of value
// isNumeric();

// const  input = $("input:first");
// console.log(input);
// input.val("first Name");
// if(input.val().inNumeric()){
//     // do somethings
// }

// looping through the elements  of jquery objects

// const list = $("li").css("background-color", "pink"); // multiple change at the same time;

// // events binding
// // ultimate goal or task when some user takes an action on browswer its called events  on some elements  we make response  script th most task of frontend developer  selection binding write the event handler  or  scripig function binding with elements

// // makes binding and handling events  easier
// // on() method do all tha  above things

// function changeBackground() {
//   $("body").css("background-color", "blue");
// }

// $("#change-bgl").on("click", changeBackground);
// $("#change-bgl").on("mouseover", removeBackground);
// select attach  bind

// effects and animation in jquery

// to add cool feature on our system

// basic
// hide()
// show();
// toggle();
// sliding up   slidingdone    slideToggle
///
const fruits = $("#list-of-fruits");
$(".fruits-menu").on("click", function () {
  fruits.animate(
    {
      width: "500px",
      opacity: 0.9,
      fontSize: "3em",
      borderWidth: "10px",
    },
    500,
  );

  // fruits.slideToggle();   // hide  show  fadeToggle
});

// to show and hide  and back and forth

// to make it fancy  or smoooth on feature

// animation using animate() method of jquery

// jquery  moto 
//  "Write  Less , Do  More "
// jquery js built on top to JS 
// provides all the functioonalites of Js 
// enhanced version of JS 
// dom manipuation 

// selection (finding the html elements with jqquery)
