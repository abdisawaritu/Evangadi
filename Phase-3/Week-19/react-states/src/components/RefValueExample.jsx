import { useRef, useState } from "react";

function RefValueExample() {
  const clickCountRef = useRef(0);
  const [message, setMessage] = useState("Click the diagnostic button.");

  const handleDiagnosticClick = () => {
    clickCountRef.current += 1;
  };

  const showCount = () => {
    setMessage(`Diagnostic clicks: ${clickCountRef.current}`);
  };

  return (
    <div>
      <h1>Ref Value Example</h1>

      <button onClick={handleDiagnosticClick}>Record Diagnostic Click</button>

      <button onClick={showCount}>Show Recorded Count</button>

      <p>{message}</p>
    </div>
  );
}

export default RefValueExample;
