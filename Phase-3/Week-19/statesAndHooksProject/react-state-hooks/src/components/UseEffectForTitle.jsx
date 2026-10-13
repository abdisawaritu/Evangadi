import { useState, useEffect } from "react";
import "./UseEffectForTitle.css";

function UseEffectForTitle() {
  const [count, setCount] = useState(0);

  // Runs when the component mounts.
  useEffect(() => {
    alert("Component is mounted");
  }, []);

  // Updates the browser tab title when count changes.
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // Increases the count by one.
  const increaseCount = () => {
    setCount((previousCount) => previousCount + 1);
  };

  return (
    <main className="effect-counter-page">
      <section className="effect-counter-card">
        <h1>useEffect Counter</h1>

        <p className="effect-counter-description">
          Click the button to increase the counter.
        </p>

        <button className="effect-counter-button" onClick={increaseCount}>
          Click here
        </button>

        <h2 className="effect-count-display">Count display: {count}</h2>
      </section>
    </main>
  );
}

export default UseEffectForTitle;
