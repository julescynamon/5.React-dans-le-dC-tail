import { useReducer } from "react";

export default function Container() {
  const [count, dispatch] = useReducer(reducer, 0);

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return state + 1;
    }
    switch (action.type) {
      case "decrement":
        return state - 1;
    }
    switch (action.type) {
      case "multiply":
        return state * 10;
    }
    switch (action.type) {
      case "divide":
        return state / 10;
    }
  }

  return (
    <div>
      <h1>Valeur du compteur : {count} </h1>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Incrémenter
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        Décrémenter
      </button>
      <button onClick={() => dispatch({ type: "multiply" })}>Multiply</button>
      <button onClick={() => dispatch({ type: "divide" })}>Divide</button>
    </div>
  );
}
