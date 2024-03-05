import { useState } from "react";

export default function Counter() {
  const [count, setcount] = useState(0);
  //   function decrement() {
  //     setcount(count - 1);
  //   }

  return (
    <div>
      <h1>Count Value is {count}</h1>
      <button onClick={() => setcount(count + 1)}>Increment</button>
      <button onClick={() => setcount(count - 1)}>Decrement</button>
    </div>
  );
}
