import { useState, useMemo } from "react";

export default function Calculation() {
  const [temperature, setTemperature] = useState("");

  function celsiusToFahrenheit(degree) {
    return degree ? degree * 1.8 + 32 : "";
  }

  const expensiveCalculation = celsiusToFahrenheit(temperature);

  return (
    <div>
      <h1>useMemo</h1>
      <input
        type="number"
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
      />
      <h2>
        Valeur de {temperature} degrés en Farenheit : {expensiveCalculation}{" "}
      </h2>
    </div>
  );
}
