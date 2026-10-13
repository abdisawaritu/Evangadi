import { Component } from "react";

class InitializingState extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>This is where you call the state </h1>
        <h2>To call the State: {this.state.count}</h2>
      </div>
    );
  }
}

export default InitializingState;
