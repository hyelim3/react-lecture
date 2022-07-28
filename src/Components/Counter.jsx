import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0); //숫자, 문자, 배열 다 들어갈 수 있다.

  const addCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <div>{counter}번 클릭했습니다</div>
      <button onClick={addCounter}>Click me</button>
    </div>
  );
}

export default Counter;
