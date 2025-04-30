import { useEffect, useState } from "react";

export default function Products() {
  let [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Component DidMount");
    return () => {
      console.log("Component WillUnMount");
    };
  }, []);
  useEffect(() => {
    if (count === 0) return;
    console.log("Component DidUpdate");
  }, [count]);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>
        -
      </button>
      <h1>Hello Products {count}</h1>
    </>
  );
}
