import React, { Component } from "react";

import Test2 from "../Test2";

class User extends Component {
  render() {
    return (
      <>

        <h1>Hello React class based Components</h1>
        <h1>React components using the class based components </h1>
        <br />
        <br />
        <p>Name : Abebe</p>  
        {/* I want to make this name dynamic  and then I want to reuse this components with differne contents and make reusabile using the props concepts in react   */}

        <br />
        <Test2/>
      </>
    );
  }
}

export default User;
