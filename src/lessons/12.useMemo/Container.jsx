import { useState } from "react";
import "./Container.css";
import Calculation from "./Calculation";

export default function Container() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Calculation />
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
      <p>{count}</p>
    </div>
  );
}
