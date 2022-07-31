import React, { useState } from "react";

const Counter = ({ counter, setCounter, name }) => {
  const addCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <div>안녕하세요 {name}님</div>
      <div>{counter}번 클릭했습니다</div>
      <button onClick={addCounter}>Click me</button>
    </div>
  );
  return;
};

export default Counter;
