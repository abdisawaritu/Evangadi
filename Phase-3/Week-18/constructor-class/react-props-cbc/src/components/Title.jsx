import React, { Component } from "react";
import evangadi from "../assets/evangadi-logo-black.png"

class Title extends Component {
  render() {
    return (
      <div className="logo">
        <img src={evangadi} alt="" />

        <h1>Evangadi Student </h1>
      </div>
    );
  }
}

export default Title;
