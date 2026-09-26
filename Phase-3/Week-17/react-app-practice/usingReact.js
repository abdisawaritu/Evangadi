// creating the same elemnet using the react rather than using the vanilla js

// const ulElement = React.createElement("ul", null, null);
// console.log(ulElement);

// const ulElement = React.createElement(
//   "ul",
//   null,
//   React.createElement("li", null, "abebe"),
//   React.createElement("li", null, "kebede"),
//   React.createElement("li", null, "almaz"),
// );
// console.log(ulElement);

// // the last step now is to pass the created elemnet to the ReactDOM  render method so tha it can add it on the  DOM
// // the ReactDOM render method takes  two arguments , the react element containing necessary information   what kind of the html page to be created   and the contaniner  element   where id render the react elements

// ReactDOM.render(ulElement, document.querySelector("#fromjs"));

const root = ReactDOM.createRoot(
  document.getElementsByClassName("my-contanier"),
); // we dont this is we use jsx 

const fruits = ["banana ", "Mango", "pineapple"];

let x = 0;

setInterval(() => {
  fruits[0] =
    x % 2 == 0
      ? React.createElement("li", { class: "orange" }, "orange")
      : React.createElement("li", { class: "yellow" }, "banana");
  const test = React.createElement(
    "ul",
    null,
    fruits[0],
    React.createElement("li", null, fruits[1]),
    React.createElement("li", null, fruits[2]),
  );

  document.getElementById("fruits-list").innerHTML = `

    <ul>
        <li class =${cssClass}>${fruits[0]}     </li>
        <li> ${fruits[1]}           </li>
        <li>${fruits[2]} </li>
    </ul>
  
  
  `;
  x++;
}, 3000);
