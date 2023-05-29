import React, { useState } from "react";

function HookCounter() {
  const [Count, setCount] = useState(0); // count:variable; setCount:method to update the variable
  const handleClick = () => {
    setCount(Count + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>counting {Count}</button>
    </div>
  );
}

export default HookCounter;
