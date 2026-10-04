import React, { Component } from "react";
import StudentCard from "../StudentCard/StudentCard";

class StudentList extends Component {
  render() {
    return (
      <div>
        <StudentCard name="Abdisa Waritu" age={23} color="green" />
        <StudentCard name="Kenenisa" age={24} color="red" />
        <StudentCard name="Abdurehman " age={25} color="blue" />
      </div>
    );
  }
}

export default StudentList;
