import { Component } from "react";

class NormalVariable extends Component {
  render() {
    let x = 100;

    const increment = () => {
      x = x + 1;
      console.log(x);  // the values is updateind but it won't  show o the web because  our components is not re'rending  (only state we use in react for rendering )
      return x;
    };

    return (
      <div>
        <h1>Using Normal Varible wont work in react as states </h1>
        <h2>{x}</h2>
        <button onClick={increment}>Add 1</button>
      </div>
    );
  }
}

export default NormalVariable;
