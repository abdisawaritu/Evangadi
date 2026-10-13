import { Component } from "react";

class Bob extends Component {
  render() {
    return (
      <div>
        <hr />
        <h2>Hello Bob</h2>
        <h2>{this.props.text}</h2>
      </div>
    );
  }
}

export default Bob;
