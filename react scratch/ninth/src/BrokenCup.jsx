import React, { useState } from "react";
import "./App.css";

function BrokenCup() {
  const [isBroken, setIsBroken] = useState(false);

  if (isBroken) {
    throw new Error("The cup is broken!");
  }
  return (
    <>
      <div className="cup-card">
        <p>the cup is intact.</p>
        <button onClick={() => setIsBroken((prev) => !prev)}>
          Break the cup
        </button>
      </div>
    </>
  );
}

export default BrokenCup;
