import { useState, useEffect, useRef } from "react";

export default function StaticRefSelection() {
  const inputRef = useRef([]);

  function addInputRef(el) {
    if (el && !inputRef.current.includes(el)) {
      inputRef.current.push(el);
    }
    console.log(el);
  }

  return (
    <div>
      <input ref={addInputRef} type="text" />
      <input ref={addInputRef} type="text" />
      <input ref={addInputRef} type="text" />
    </div>
  );
}
