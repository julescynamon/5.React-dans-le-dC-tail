import { useState, useEffect, useRef } from "react";
import { nanoid } from "nanoid";

export default function DynamicRefSelection() {
  const [fruits, setFruits] = useState([
    { id: nanoid(8), value: "🍓" },
    { id: nanoid(8), value: "🍉" },
    { id: nanoid(8), value: "🍒" },
  ]);

  function deleteFruit(id) {
    setFruits(fruits.filter((fruit) => fruit.id !== id));
  }

  const fruitsRef = useRef([]);

  function handleRefFruits(element) {
    if (element) {
      fruitsRef.current.push(element);
    } else {
      fruitsRef.current.shift();
    }
  }

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li
            onClick={() => deleteFruit(fruit.id)}
            key={fruit.id}
            ref={handleRefFruits}
          >
            {fruit.value}
          </li>
        ))}
      </ul>
      <button
        onClick={() => setFruits([...fruits, { id: nanoid(8), value: "🍌" }])}
      >
        Add Fruits
      </button>
    </div>
  );
}
