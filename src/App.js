import React, { useState } from "react";
import Converter from "./Components/Converter";
import Counter from "./Components/Counter";

function App() {
  const [counter, setCounter] = useState(0); //숫자, 문자, 배열 다 들어갈 수 있다.

  return (
    <>
      <Counter counter={counter} setCounter={setCounter} />
      <Converter counter={counter} />
    </>
  );
}

export default App;
