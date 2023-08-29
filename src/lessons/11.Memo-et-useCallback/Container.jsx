import { useState, useCallback } from "react";
import Card from "./Card";

export default function Container() {
  const [count, setCount] = useState(0);
  const customLog = useCallback(() => {
    console.log("Bonjour");
  }, []);
  return (
    <div>
      <h1>Memo et useCallback</h1>
      <Card txt={"Je suis un enfant"} customLog={customLog} />
      <p>Compteur: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
    </div>
  );
}
