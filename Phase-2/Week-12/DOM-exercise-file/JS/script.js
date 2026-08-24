//  Question 1: The following three questions are based on the two paragraphs under the
// section which says "For Question 1" in the index.html file.

// const { createElement } = require("react");

const paragraphs = document.getElementById("sample1");
console.log(paragraphs);

const text = paragraphs.textContent;
console.log(text);
// console.log(paragraphs.innerText);
// console.log(paragraphs.innerHTML);

// paragraphs.innerHTML = "<h1>Hello</h1>";

// Question 2: The following questions are based on the HTML code found under the
//  section labeled "For question 2"

const techCompany = document.getElementById("techCompanies");
console.log(techCompany); // Just for debugging purpose only

const techCompanyTwo = document.querySelector("#techCompanies");
console.log(techCompany);

const tech = document.querySelectorAll("#techCompanies > li");
console.log(`  The of tech company is:${tech.length}`);

const redCompany = document.querySelectorAll(".red");
console.log(redCompany);

const redElement = document.getElementsByClassName("red");
console.log(redElement);

// create New Element
const newCompany = document.createElement("li");

console.log(newCompany);
newCompany.textContent = "Facebook";
console.log(newCompany);

newCompany.className = "blue";

techCompany.append(newCompany);

const blueClass = document.querySelectorAll("#techCompanies .blue");
console.log(blueClass.length);

const result = document.getElementById("blueCompanies");
console.log(result);
result.textContent = `Number of blue companies: ${blueClass.length}`;

// const blueCompanines = document.getElementById("blueCompanies");
// console.log(blueCompanines.textContent`Number of blue companies : ${blueCompanines.length}`)
// Question 3:
// Change the background color of the page to light-blue (#99ecff) when clicked on the text
// that says "Yes". If there is a background color set already, change it to none when clicked
// on "No"
// Hint: First, write two functions to alter the backgroundColor of the page. One to add a
// background color, another to remove. Then, select the "yesBackground" or
// "noBackground" element and bind the selected element with the click event. Finally,
// attach the function you wrote to alter the background color when the respective element
// is clicked on

const addBackgroundButton = document.getElementById("yes");
// console.log(addBackgroundButton);

const removeBackgroundButton = document.getElementById("No");
// console.log(removeBackgroundButton);

function addBackground() {
  document.body.style.backgroundColor = "lightblue";
}
function removeBackground() {
  document.body.style.backgroundColor = "";
}

addBackgroundButton.addEventListener("click", addBackground);
removeBackgroundButton.addEventListener("click", removeBackground);

// addBackgroundButton.addEventListener("click" ,  () => {
//     document.body.style.backgroundColor = "green"
// })

// removeBackgroundButton.addEventListener("click", () => {
//   document.body.style.backgroundColor = "";
// });

// Question 4:
// A form with two text fields is provided under the section which says "For question 4".
// Write a JavaScript code which takes the values of the two fields, checks if they are
// number values and calculate the sum of the two numbers.
// 1. Display the result on the console
// 2. Display the result underneath the form
// 3. If any of the numbers provided is not a number, display a message that says
// "Please enter numerical values only" underneath the form
const form = document.getElementById("adder");

const firstInputField = document.getElementsByName("first-value");

const secondInputField = document.getElementsByName("second-value");

const resultArea = document.getElementById("sum");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstInput = firstInputField[0].value.trim();
  const secondInput = secondInputField[0].value.trim();

  if (firstInput === "" || secondInput === "") {
    resultArea.textContent = "Please enter numerical values only";

    return;
  }

  const firstValue = Number(firstInput);
  const secondValue = Number(secondInput);

  if (Number.isFinite(firstValue) && Number.isFinite(secondValue)) {
    const sum = firstValue + secondValue;

    console.log(sum);

    resultArea.textContent = `The sum is: ${sum}`;
  } else {
    resultArea.textContent = "Please enter numerical values only";
  }
});


// const form = document.getElementById("adder");

// const firstInput = document.querySelector('[name="first-value"]');

// //  attribute selector
// //  find an element  whose name attribute is equal to "first-value"
// //[ attribute = "value" ]
// //n CSS selectors, square brackets are used to select elements based on their attributes.
// // it return first matching element 

// const secondInput = document.querySelector('[name="second-value"]');

// const resultDisplay = document.getElementById("sum");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const firstValue = Number(firstInput.value);
//   const secondValue = Number(secondInput.value);

//   if (Number.isFinite(firstValue) && Number.isFinite(secondValue)) {
//     const sum = firstValue + secondValue;

//     console.log(sum);

//     resultDisplay.textContent = `The sum is: ${sum}`;
//   } else {
//     resultDisplay.textContent = "Please enter numerical values only";
//   }
// });
