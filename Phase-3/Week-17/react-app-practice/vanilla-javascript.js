// using the regual js or vanilla js creating or generating html  rather than write the html insde index.html generated using js
// injecting the html using the js rather than writing by our selves

const contanierElement = document.querySelector("#fromjs");

// list of  items to create
const listOfItems = ["abebe ", "kebede ", "almaz"];
//create the ul elements  first

const ulElement = document.createElement("ul");

// create the list element for each of items

listOfItems.forEach((items) => {
  const listElemet = document.createElement("li");
  listElemet.innerText = items;
  ulElement.appendChild(listElemet);
});

// append he created element  on the div contanier of the body

contanierElement.appendChild(ulElement);
