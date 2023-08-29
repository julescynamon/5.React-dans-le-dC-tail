import Child from "./Child";

export default function Container() {
  return (
    <div>
      <h1>Props children</h1>
      <Child>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>Je suis un enfant</p>
      </Child>
    </div>
  );
}
