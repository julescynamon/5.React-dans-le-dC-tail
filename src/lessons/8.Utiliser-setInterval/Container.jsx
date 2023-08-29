import { useEffect } from "react";
import { useState } from "react";

export default function Container() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Valeur du compteur : {count}</h1>
    </div>
  );
}
