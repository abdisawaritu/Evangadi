import { useState, useEffect } from "react";

function TitleCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount((c) => c + 1)}>Increase</button>
    </div>
  );
}

export default TitleCounter;
