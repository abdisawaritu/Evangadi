import { Component } from "react";

class AnotherComponent extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.someProperty}</h1>
      </div>
    );
  }
}

export default AnotherComponent;
