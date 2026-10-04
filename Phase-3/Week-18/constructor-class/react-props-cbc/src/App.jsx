import React, { Component } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import StudentList from "./components/StudentList/StudentList";
import Title from "./components/Title";
import Student from "./components/Student/Student";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Title />

        <Student name="Abdisa" group={1} />
        <Student name="Biniyam " group={3} />
        <Student name="Abebe" group={2} />

        {/* <Header />

        <StudentList />

        <Footer /> */}
      </>
    );
  }
}

export default App;
