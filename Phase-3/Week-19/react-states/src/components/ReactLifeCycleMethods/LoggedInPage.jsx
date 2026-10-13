import  { Component } from "react";

class LoggedInPage extends Component {
  constructor() {
    super();
    this.state = {
      name: "Abdisa",
      bootCamp: "Evangadi",
      group: "2",
    };
  }

  componentWillUnmount() {
    alert("You have succesfully Logged out ");
  }
  render() {
    return (
      <div>
        <h1>User Logged In </h1>
        <h3>Name :{this.state.name} </h3>
        <h3>Group :{this.state.group} </h3>
        <h3>School Name :{this.state.bootCamp} </h3>
      </div>
    );
  }
}

export default LoggedInPage;
