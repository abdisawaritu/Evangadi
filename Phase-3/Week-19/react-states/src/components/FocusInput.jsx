import { useEffect, useRef, useState } from "react";
import "./FocusInput.css"

function FocusInput() {
  const inputRef = useRef(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Product Search</h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <button onClick={focusInput}>Focus Search</button>

      <p>Search term: {search}</p>
    </div>
  );
}

export default FocusInput;
