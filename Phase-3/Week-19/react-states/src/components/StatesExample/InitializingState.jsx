import { Component } from "react";
import AnotherComponent from "./AnotherComponent";

class InitializingState extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      name: "abdisa",
      bootCamp: "Evangadi",
      group: 2,
      // state is keyword
    };
  }

  render() {
    return (
      <div>
        <h1>This is where you call the state </h1>
        <h2>To call the State: {this.state.count}</h2>
        {/* we use the state like that of the we the props inside the class  componets  */}
        <h1>Initiazling State In react  using class based componets </h1>
        <h1>We can Use</h1>
        <h2>{this.state.name} </h2>
        <h2>{this.state.bootCamp} </h2>
        <h2>{this.state.group} </h2>
        <AnotherComponent someProperty={this.state.count} />
      </div>
    );
  }
}

export default InitializingState;
