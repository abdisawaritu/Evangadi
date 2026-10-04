import React, { Component } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import StudentList from "./components/StudentList/StudentList";

class App extends Component {
  render() {
    return (
      <>
        <Header />

        <StudentList />

        <Footer />
      </>
    );
  }
}

export default App;
