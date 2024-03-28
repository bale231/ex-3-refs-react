import React, { useState } from "react";

function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const direction = count > initialValue ? "up" : "down";

  return (
    <div>
      <p>Valore attuale: {count}</p>
      <p>Direzione: {direction}</p>
      <button onClick={increment}>Incrementa</button>
      <button onClick={decrement}>Decrementa</button>
    </div>
  );
}

export default Counter;
