import { Component } from "react"

 class Test2  extends   Component {
  render (){
    return (
        <>
        <h1>child component</h1>
        <br />
        </>
    )
  }
}

export default Test2




// Child components  in real life  components in components
//  for more structure way we componnets inside the components 


// how to place one componenets inside other components 

//  1.if we want to place one components as child inside other componenet  we have follow two steps to do that 

// 1.  we gonna go inside the parent components  and we  gonna import  the child components inside the parent components 
// import   Child  from "../../components/ Nav /Navbar.js"

// 2 . then  call that components inside the parent components 
//   we can call the components by using the props to make the dynamic  and  change the data and reusability   this is call creating the child componnents with the differnet data


