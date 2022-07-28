import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0); //숫자, 문자, 배열 다 들어갈 수 있다.
  const [name, setName] = useState("사용자");
  const onClickFunc = () => {
    setCounter(counter + 1);
  };
  const changeName = () => {
    setName("김범수");
  };
  return (
    <div>
      <div>{counter}번 클릭했습니다</div>
      <button onClick={onClickFunc}>Click me</button>
      <div>환영합니다 {name}님</div>
      <button onClick={changeName}>이름변경</button>
    </div>
  );
}

export default App;
