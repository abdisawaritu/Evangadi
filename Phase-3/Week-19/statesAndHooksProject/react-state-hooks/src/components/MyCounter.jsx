import { Component } from "react";
import CounterDisplayer from "./CounterDisplayer";
import EvenCounterDisplayer from "./EvenCounterDisplayer";

class MyCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clickCount: 0,
      evenClickCount: 0,
    };
  }

  // This function returns the latest even count.
  evenClicksCounter = (newCount, previousEvenCount) => {
    if (newCount % 2 === 0) {
      return newCount;
    }

    return previousEvenCount;
  };

  // This function runs when the button is clicked.
  allClicksCounter = () => {
    this.setState((prevState) => {
      const newCount = prevState.clickCount + 1;

      return {
        clickCount: newCount,

        evenClickCount: this.evenClicksCounter(
          newCount,
          prevState.evenClickCount,
        ),
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Click Counter</h1>

        <button onClick={this.allClicksCounter}>Click here</button>

        <CounterDisplayer clickCount={this.state.clickCount} />

        <EvenCounterDisplayer clickCount={this.state.evenClickCount} />
      </div>
    );
  }
}

export default MyCounter;
