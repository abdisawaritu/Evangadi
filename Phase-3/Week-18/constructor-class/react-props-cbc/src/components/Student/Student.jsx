import React, { Component } from "react";
import "./Student.css";

class Student extends Component {
  render() {
    console.log(this.props);
    const {name , group}  = this.props;
    return (
      <div className="card">
        <h2>Name:{name} </h2>
        <h2>Goup: {group}</h2>
      </div>
    );
  }
}

export default Student;
