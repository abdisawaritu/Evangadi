import { Component } from "react"; // named importing fromt the named  exporting
import User from "./components/User/User"; // defualt importing from the default exporting

class App extends Component {
  render() {
    return (
      <>
        <User   />
        <User  />
        <User  />
        <User  />
        <User  />

         {/* when we call the components the data are passed here to make one componenet reusable with differnt data  using the props  */}
      </>
    );
  }
}

export default App;


// Component  - base class parent class
// child class is the  our componennt we want to create that extends the React.Components 

// import {Component } from "react";

// class Header extends Component    {

//      return (

//       <>
//       // it return the Jsx 
//       // now in class component  the render method retukkrn the jsx    using the render (){
//         return (
//           <>
//           <h1>Test the class based components </h1>
//           </>
//         )
//       }
      
//       </>
//      )




// //}


