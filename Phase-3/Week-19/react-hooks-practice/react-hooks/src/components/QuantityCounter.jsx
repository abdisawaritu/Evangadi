import useCounter from "./hooks/useCounter";

function QuantityCounter() {
  const { count, increase, decrease, reset } = useCounter(1);

  return (
    <div>
      <h2>Product Quantity</h2>

      <p>Quantity: {count}</p>

      <button onClick={decrease} disabled={count <= 1}>
        −
      </button>

      <button onClick={increase}>+</button>

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default QuantityCounter;
