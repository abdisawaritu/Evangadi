import { Component } from "react";

import "./StudentCard.css";
// import students from "../../assets/data.js";

class StudentCard extends Component {
  // data preparing array of studnet objects
  // array of studnets objects
  // using the map method render them  mapI();
  // the callback function rturn the studentcard
  // this is the way how dynaimic  data at amazon ,
  render() {
    console.log(this.props); // the object that contain that the parent components sends t
    const { name, age, color } = this.props;
    // this is called object destruction

    // destruction the key using object dest
    // for the class based component we can access the way we can access the js
    // the props object contain all the data came from the parennt comp whichi is sended by the parent componnet to make the page dynamic and reusability
    return (
      <>
        <div className={`card-box   card-${color}`}>
          <h3>Name : {name} </h3>
          <h2>age: {age} </h2>
        </div>
      </>
    );
  }
}

export default StudentCard;
