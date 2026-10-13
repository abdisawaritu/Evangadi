import { Component } from "react";

class UpdatingStates extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      status: "even",
    };
  }

  incrementCounter = () => {
    // incorrect way to update the  data inside the state thourhg event handler function when user interactive with the page
    // this.setState({ counter: this.state.counter + 1 });
    // this.setState((prev) => ({ counter: prev.counter + 1 }));

    if (this.state.counter % 2 === 0) {
      this.setState({ status: "Even" });
    } else {
      this.setState({ status: "Odd" });
    }
    // console.log(this.state.counter)
  };

  incrementCounterWithCallback = () => {
    this.setState((preState) => ({ counter: preState.counter + 1 }));

    this.setState((prevState) => ({
      status: prevState.counter % 2 === 0 ? "Even" : "Odd",
    }));
  };

  decrement = () => {
    this.setState((preState) => ({ counter: preState.counter - 1 }));
  };

  reset = () => {
    this.setState(() => ({ counter: 0 }));
    // this.setState({ counter: 0 });
  };

  render() {
    return (
      <div>
        <h1> Updating State</h1>
        <h2>{this.state.counter} </h2>
        <h3>{this.state.status} </h3>
        <button onClick={this.incrementCounterWithCallback}>ADD 1 </button>
        <button onClick={this.decrement}>Minus 1 </button>
        <button onClick={this.reset}>reset </button>
      </div>
    );
  }
}

export default UpdatingStates;
