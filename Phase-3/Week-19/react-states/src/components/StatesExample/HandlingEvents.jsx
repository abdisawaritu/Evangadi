import { Component } from "react";

class HandlingEvents extends Component {
  constructor() {
    super();
    this.state = {
      counter: 100,
    };
    // manually bind for the regular function is js  instead of the arrow function 

    // this.increment = this.increment.bind(this);

    // updater regular function handler function of the eents  to use regular function that to make bind the event to event handler to use the state values or to accesss the state values inside the event handler function     when we use the regular  function   instead of the arrow function we have bind the  function with the states values
  }
//   increment() {
//     console.log(this);
//     console.log(this.state);
//   }

  // using the arrow function

    increment = () => {
      console.log(this.state);
      console.log(this)
    };

  render() {
    return (
      <div>
        <h1>Handling Event in react</h1>
        <h2>{this.state.counter}</h2>
        <button onClick={this.increment}>Add 1</button>
      </div>
    );
  }
}

export default HandlingEvents;
