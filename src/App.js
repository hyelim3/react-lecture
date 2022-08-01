import React, { useState } from "react";
import Converter from "./Components/Converter";
import Counter from "./Components/Counter";
import MyBtn from "./Components/MyBtn";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Counter counter={counter} setCounter={setCounter} />
    </>
  );
}

export default App;
