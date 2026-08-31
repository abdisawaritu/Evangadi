// Question 1:
// The following three questions are based on the two paragraphs under the section which says,
// "For Question 1"

// 1.1  select the element with an id of "sample1" using jQuery
const samplePara = $("#sample1");
const samplePar = $("body").find("#sample1");
console.log(samplePar);
console.log(samplePara[0]);
console.log(samplePara.get(0));
// since the method return the jQuery object

// const sample1 = $(document.getElementById("sample1"));
// console.log(sample1);

// const sampleOne = $("body").find("#sample1");
// console.log(sampleOne);
//1.3. Print the content of the element on the console upon page refresh. Use jQuery to select
// the content of the element

console.log(samplePara.text());

console.log(samplePara.html()); // If  we need the element tags and content we use this l

// Question 2:
// The following questions are based on the HTML code found under the section labeled "For
// question 2".
// 2.1. Select the element with an ID of "techCompanies" and display it on your console.
// const techCompany = $("#techCompanies");
// console.log(techCompany);

// const techC = $("body").find("#techCompanies");
// console.log(techC);

// console.log($(document.getElementById("techCompanies")));
// 2.2. How many tech companies are listed under the ul element with an id of
// "techCompanies"?

// const listOftechCompanies = $("#techCompanies li");
// console.log(listOftechCompanies.length);
// console.log(listOftechCompanies);

// console.log($("#techCompanies").children("li").length);

// console.log($("#techCompanies").find("li").length);

// 2.3. Select all elements with a class of "red" and display them on the console.

// const redClass = $(".red");
// console.log(redClass);

// console.log($("#techCompanies").find(".red"));

// console.log($("#techCompanies li").filter(".red"));

// // 2.4. Create a new li HTML element with a content of "Facebook" and display it on console

// const newCompany = $("<li>Facebook</li>").addClass("blue");

// $("#techCompanies").append(newCompany);






// // jQuery element create
// const facebook = $("<li>facebook</li>");
// console.log(facebook);
// facebook.addClass("blue");
// $("#techCompanies li").last().after(facebook);

// // $('li:contains("Sony")').after(facebook);

// // $("li")
// //   .filter(function () {
// //     return $(this).text() === "Sony";
// //   })
// //   .after(facebook);

// // 2.7. How many of the tech companies are labeled blue? Find the result using jQuery and
// // display the result inside the "blueCompanies" div.

// const blueCompany = $(".blue");
// console.log(blueCompany.length);

// // const blueCount = $("#techCompanies").find(".blue").length;

// // console.log($("#blueCompanies").text(blueCount));
// // console.log($("#blueCompanies").html());

// const blueCount = $("#techCompanies .blue").length;

// console.log("Blue count:", blueCount);

// $("#blueCompanies").text(blueCount);

// console.log("Content inside div:", $("#blueCompanies").text());

// Question 3:

/*
A form with two text fields is provided under the section which says "For question 3". Write a
jQuery code which takes the values of the two fields, checks if they are number values and
calculate the sum and average of the two numbers.
3.1. Display the result on the console
3.2. Display the result underneath the form
3.3. If any of the numbers provided is not a number, display a message that says "Please
enter numerical values only" underneath the form    */

const form = $("form").first();
// console.log(form);
const averageResult = $("#davg");
const sumResult = $("#dsum");
const errorResult = $(".err");

form.on("submit", function (e) {
  e.preventDefault();

  // Get the values AFTER the user submits
  const inputOne = $("#input1").val().trim();
  const inputTwo = $("#input2").val().trim();
  // check if inputs are empty
  if (inputOne === "" || inputTwo === "") {
    errorResult.text("please provide numerical values only");
    return;
  }
  // converts strings to numbers
  const numberOne = Number(inputOne);
  const numberTwo = Number(inputTwo);

  if (Number.isFinite(numberOne) && Number.isFinite(numberTwo)) {
    const sum = numberOne + numberTwo;
    const average = sum / 2;
    // Display the result in the console
    console.log("Sum:", sum);
    console.log("Average:", average);

    // Display in the browser
    averageResult.text(average);
    sumResult.text(sum);

    // remove the previous error message
    errorResult.text("");
  } else {
    errorResult.text("please provide numerical values only");
  }
});

//  method 2

// const form = $("form").first();

// form.on("submit", function (event) {
//   event.preventDefault();

//   const firstValue = $("#input1").val().trim();
//   const secondValue = $("#input2").val().trim();

//   const firstNumber = Number(firstValue);
//   const secondNumber = Number(secondValue);

//   if (
//     firstValue === "" ||
//     secondValue === "" ||
//     !Number.isFinite(firstNumber) ||
//     !Number.isFinite(secondNumber)
//   ) {
//     $(".err").text("Please provide numerical values only");

//     return;
//   }

//   const sum = firstNumber + secondNumber;
//   const average = sum / 2;

//   console.log("Sum:", sum);
//   console.log("Average:", average);

//   $("#dsum").text(sum);
//   $("#davg").text(average);

//   $(".err").text("");
// });

/*  Question 4:
Create an HTML form which asks users to provide their First name, Last name and Email address.
All the fields should be labeled as required. Once the user submits, write a JavaScript function
that checks if all the fields are provided. If not, it should show an error message above the form.
If the user provides all the values, hide the form input fields, and display all the values provided
by the user on the browser*/

const secondForm = $("form").last();
// console.log(secondForm)
const firstName = $("#forF");
const lastName = $("#forL");
const email = $("#email");

const resultArea = $(".result");
// const buttons = $("#btns");

secondForm.on("submit", function (event) {
  event.preventDefault();
  const firstN = firstName.val().trim();
  const lastN = lastName.val().trim();
  const emailv = email.val().trim();

  if (firstN === "" || lastN === "" || emailv === "") {
    resultArea.text("please enter all required fields ");
    return;
  }  {
    secondForm.hide();
    resultArea.html(`

      <p>Your First Name: ${firstN}</p>
            <p>Your Last Name: ${lastN}</p>
            <p>Your Email: ${emailv}</p>

      `);
  }
});

// const form = $("form").last();
// const result = $(".result");

// form.on("submit", function (event) {
//   event.preventDefault();

//   const firstName = $("#forF").val().trim();
//   const lastName = $("#forL").val().trim();
//   const email = $("#email").val().trim();

//   if (firstName === "" || lastName === "" || email === "") {
//     result.text("Please enter all required fields.");

//     return;
//   }

//   form.hide();

//   result.html(`
//         <p>First Name: ${firstName}</p>
//         <p>Last Name: ${lastName}</p>
//         <p>Email: ${email}</p>
//     `);
// });

// const forms = $("#userForm");

// const firstNameInput = $("#forF");
// const lastNameInput = $("#forL");
// const emailInput = $("#email");

// const firstNameError = $("#firstNameError");
// const lastNameError = $("#lastNameError");
// const emailError = $("#emailError");

// const formError = $("#formError");
// const result = $("#result");

// // ==============================
// // FIRST NAME VALIDATION
// // ==============================

// function validateFirstName() {
//   const value = firstNameInput.val().trim();

//   if (value === "") {
//     firstNameError.text("First name is required.");
//     firstNameInput.addClass("input-error");

//     return false;
//   }

//   firstNameError.text("");
//   firstNameInput.removeClass("input-error");
//   firstNameInput.addClass("input-success");

//   return true;
// }

// // ==============================
// // LAST NAME VALIDATION
// // ==============================

// function validateLastName() {
//   const value = lastNameInput.val().trim();

//   if (value === "") {
//     lastNameError.text("Last name is required.");
//     lastNameInput.addClass("input-error");

//     return false;
//   }

//   lastNameError.text("");
//   lastNameInput.removeClass("input-error");
//   lastNameInput.addClass("input-success");

//   return true;
// }

// // ==============================
// // EMAIL VALIDATION
// // ==============================

// function validateEmail() {
//   const value = emailInput.val().trim();

//   if (value === "") {
//     emailError.text("Email address is required.");
//     emailInput.addClass("input-error");

//     return false;
//   }

//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   if (!emailPattern.test(value)) {
//     emailError.text("Please enter a valid email address.");
//     emailInput.addClass("input-error");

//     return false;
//   }

//   emailError.text("");
//   emailInput.removeClass("input-error");
//   emailInput.addClass("input-success");

//   return true;
// }

// // ==============================
// // FORM SUBMISSION
// // ==============================

// forms.on("submit", function (event) {
//   event.preventDefault();

//   const firstValid = validateFirstName();
//   const lastValid = validateLastName();
//   const emailValid = validateEmail();

//   // If any field is invalid
//   if (!firstValid || !lastValid || !emailValid) {
//     formError.text("Please correct the errors above.").show();

//     return;
//   }

//   // All fields are valid
//   formError.hide();

//   // Get the final values
//   const firstName = firstNameInput.val().trim();
//   const lastName = lastNameInput.val().trim();
//   const email = emailInput.val().trim();

//   // Hide the form
//   forms.hide();

//   // Display user information
//   result.html(`
//         <h3>User Information</h3>

//         <p>
//             <strong>First Name:</strong>
//             ${firstName}
//         </p>

//         <p>
//             <strong>Last Name:</strong>
//             ${lastName}
//         </p>

//         <p>
//             <strong>Email:</strong>
//             ${email}
//         </p>
//     `);
// });
