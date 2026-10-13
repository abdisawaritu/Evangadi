import { Component } from "react";

class MyWillMountAndDidMount extends Component {
  constructor() {
    super();
    this.state = {
      randomText: "",
    };
  }

  componentDidMount() {
    console.log("Component Did mount ");
    // fetch data or perform side effects here during the components mount
    this.setState((prev) => ({
      randomText: (prev.randomText = "Selam May batch"),
    }));
  }
  render() {
    return (
      <div>
        <h1>Component will Mount and component did mound examples</h1>
        <br />
        <h1>{this.state.randomText} </h1>
      </div>
    );
  }
}

export default MyWillMountAndDidMount;
