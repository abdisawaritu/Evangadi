
import { Component } from "react";

class StudentCard extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>

        <p>{this.props.department}</p>
      </div>
    );
  }
}
