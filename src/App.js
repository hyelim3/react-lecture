import React, { useState } from "react";
import Converter from "./Components/Converter";
import Counter from "./Components/Counter";
import MyBtn from "./Components/MyBtn";

function App() {
  const [amount, setAmount] = useState(0);
  const [active, setActive] = useState(true);
  const reset = () => {
    setAmount(0);
  };
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const changeActive = () => {
    reset();
    setActive(!active);
  };

  return (
    <div>
      <div>Time Converter</div>
      <div>
        Minutes{" "}
        <input
          placeholder="Minutes"
          value={active ? amount : amount * 60}
          type="number"
          onChange={onChange}
          disabled={!active}
          //활성화 되어있을 때 active true -> 꺼지면 안되니깐 반전값을 넣어야함
        />
        <div>
          Hours{" "}
          <input
            type="number"
            placeholder="Hours"
            value={active ? Math.floor(amount / 60) : amount}
            //active 값이 true일 대 실행 비활성화되면 active true -> 비활성 amount 변환

            disabled={active}
            // active 최초의 거짓, !active
            onChange={onChange}
          />
          <div>
            <button onClick={reset}>reset</button>
            <button onClick={changeActive}>active toggle</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
