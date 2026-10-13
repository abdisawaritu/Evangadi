import { Component } from "react";

class MyComponentDidUpdate extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState((x) => ({ counter: x.counter + 1 }));
  };
  componentDidUpdate() {
    document.title = `count =  ${this.state.counter}`;
  }

  render() {
    return (
      <div>
        <h1 id="topic">Component Did Update EXample</h1>
        <br />

        <button onClick={this.increment}>Increment: {this.state.counter}</button>
      </div>
    );
  }
}

export default MyComponentDidUpdate;
