import { Component } from "react";

class MyCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  allClicksCounter(count) {
    this.setState({ count: count + 1 });
  }

  render() {
    return <div></div>;
  }
}

export default MyCounter;
