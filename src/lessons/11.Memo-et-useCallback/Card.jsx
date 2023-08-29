import { memo } from "react";

export default memo(function Card({ txt, customLog }) {
  console.log("Render");
  customLog();
  return (
    <div>
      <p>Card</p>
      <p>{txt}</p>
    </div>
  );
});
