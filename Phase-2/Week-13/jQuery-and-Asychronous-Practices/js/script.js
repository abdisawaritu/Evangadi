// Question 1:
// The following three questions are based on the two paragraphs under the section which says,
// "For Question 1"

// 1.1  select the element with an id of "sample1" using jQuery
const samplePara = $("#sample1");
const samplePar = $("body").find("#sample1");
console.log(samplePar);
console.log(samplePara[0]);
//1.3. Print the content of the element on the console upon page refresh. Use jQuery to select
// the content of the element

console.log(samplePara.text());

console.log(samplePara.html()); // If  we need the element tags and content we use this l

// Question 2:
// The following questions are based on the HTML code found under the section labeled "For
// question 2".

const techCompany = $("#techCompanies");
console.log(techCompany);
