import { Component } from "react";
import Bob from "./Bob";

class PassingPropsToStates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Kebede",
      group: 2,
      batch: this.props.batch,
      sampleText: "Hello World",
    };
  }
  render() {
    return (
      <div>
        <h1>Name:{this.state.name} </h1>
        <h2>Group: {this.state.group} </h2>
        <h3>Batch: {this.state.batch} </h3>
        <Bob text={this.state.sampleText} />
      </div>
    );
  }
}

export default PassingPropsToStates;
