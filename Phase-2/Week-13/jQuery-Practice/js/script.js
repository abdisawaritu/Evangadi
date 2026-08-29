// jquery function that is written by using the js  built on top of the js (developed)

// what can you do with jQuery?
// - dom manipulation
//       - selection elements
//        - updating elements
//  effects and animations

// advantage of jQuery
//  - simplicity
//  -simpler  selection and updading method
//   - jQuery is easy to learn

// selecting elemetns with jQuery (id, class, element selector )
//********************************************** *//

//  const apple = $("#one");
//  console.log(apple);
//  // return jQuery object with method and attributes

//  const redClass = $(".red");
//  console.log(redClass);

//  const  liElements = $("h1");
//  console.log(liElements.toArray());

//  this method selection all the matching element and return as  jQuery  objects

// filtering selection method  using jQuery
// know the argument and what they return  focus on these two important points  not focus on the sytanx just focus on return and argument

// 1.first();
//  $("h1").first().css("background-color" , "blue");  // recommended
// $("h1:first").css("background-color", "blue");
// // last();    and   element:last

// $("h1").last().css("background-color", "blue");

// //   even();
// console.log($("#companies  h1"));
// $("#companies  h1").even().css("background-color", "green");

// // odd();
// $("#companies  h1").even().css("background-color", "purple");
// // // 5  nth-child
// $("#companies  h1:nth-child(1)").even().css("background-color", "green");

// //  has(tagselector );
// $("div").has("button").css("background-color" , "red");

// // :contains(text);
// $("h1:contains(A)").css("background-color" , "yellow")

// //// 8  empty();

// $("div.buttons").empty();

// // visibilty ()
// $("h1[id=one]").hide();
// // visible();
// $("h1:visible").css("background-color"  , "green")
//   // show ();
// $("h1[id=one]").show();

////   altering or updating the values and contents of html using jQuery

// //  1.text();  getter and alter (setter or updating )
// console.log($("#one").text());
// console.log($("#one").text("Hello"));
// // console.log($("#one").text(" <p>Hello</p>"));  it doesnt work for inner html if we need to put html inside the parent

// //  2. html();
// console.log($("#companies ").html());
// console.log($("h1[id=one] ").html("<p>Hello</p>")); // it overrdie the inner html elements
// //  remove ()

// // $("h1[id=one] ").remove();

// // before();
// // $("h1[id=two]").before("<h1 class='red'>NEw </h1>")

// // // after ();
// // $("h1[id=two]").after("<h1 class='red'>New </h1>");

// // prepend();
// $("#companies").prepend("<h1 class='red'> New</h1>");

// $("#companies").append("<h1 class='red'> New</h1>");

// // Updating  or altering values : form value, attribute, loop through the elements with no writing of vanilla loop
// //

// // attributes
// //  // 1 . addClass();

// // $("#companies  h1").addClass("lightblue");
// // // removeClass();
// // $("#companies  h1").remveClass("lightblue");

// $("#companies h1".attr("name", "sept"));

// css()

// let test = $("#companies h1");
// test.css({
//   "background-color": "blue",
//   color: "white",
// });

// $("h1:visible").css("background-color", "green");

// isNumeric()
// console.log($().isNumeric("4"))

// jQuery traversing methods  parent child  children  sibilings
// parents()
// $("#one").parents().css({ border: "5px  solid black" });

// // parent();
// $("#one").parent().css({ border:"5px  solid black"});

// // children()
// $("#companies").children().css({
//   border: " 2px  solid  black",
// });

// // find()
// $("#companies").finc("#four").css({
//   border: " 2px  solid  black",
// });

// // // sibilings();
// // $("p").siblings().css("background-color", "green");

// // next();
// $(".jeffBezos").next().css("background-color" , "blue")

// //  nextAll();
// $(".jeffBezos").nextAll().css("background-color", "blue");

// // prev();
// $(".jeffBezos").prev().css("background-color", "blue");

// // prevAll();
// $(".jeffBezos").prevAll().css("background-color", "blue");

// // no looping is required for jquery
// $("h1").css("background-color" , "green");

// // console.log($("h1").toArray())

// // handling event , simpe effect , animation using the jquery

// // two method   on()  and .click  , .submit

// // handling events
// $("#clickMe1").click(function (){
//     $(this).hide();
// })

// $("#clickMe2").click(function () {
//   $(this).prev().show();
// });

// on() method

$("#clickMe1").on("click", function () {
  $(this).hide();
});

$("#clickMe2").on("click", function () {
  $("#clickMe1").hide();
});

// mutiple events  one action or function
$("#btn-4").on("mouseenter   mouseleave", function () {
  console.log("mouse hovered over or left a div or button ");
});

// multiple events multiple function or handlers

$("#btn-3").on({
  mouseenter: function () {
    $(this).css("background-color", "green");
  },
  mouseleave: function () {
    $(this).css("background-color", "yellow");
  },
  click: function () {
    $(body).css("background-color", "blue");
  },
  dblclick: function () {
    $("body").css("background-color", "purple");
  },
});

// form

$("#formID").on("submit", function (e) {
  e.preventDefault();

  let firstInput = $(".input1").val();
  let secondInput = $(".input2").val();

  console.log(firstInput);
  console.log(secondInput);
  console.log($.isNumeric(firstInput));
});

// effects and animation in jquery   for this we use modern method libary , css animiation trantion  , animation libary  , css transtion
// but in odd webiste we can also use the jQuery animation and effects to make some cool or fancy things in our website to make attentive website visual

// $("#btn-1").click(function (){
//     $("#one").toggle(500);
// })

// // slideToggle ()
// $("#btn-1").click(function () {
//   $("#companies").slideToggle(1000);
// });

// // fadeToggle()

// $("#btn-1").click(function () {
//   $("#companies").fadeToggle(1000);
// });

$("#btn-1").click(function () {
  $("#one").animate({
    fontSize: "50px",
    color:  " white",
    width:  "50%"
  } ,2000);
});
