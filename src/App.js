import React, { useState } from "react";
import Converter from "./Components/Converter";
import Counter from "./Components/Counter";
import MyBtn from "./Components/MyBtn";

function App() {
  const [minutes, setMinutes] = useState(0);
  const [active, setActive] = useState(false);
  const reset = () => {
    setMinutes(0);
  };
  const onChange = (event) => {
    setMinutes(event.target.value);
  };
  const changeActive = () => {
    setActive(!active);
  };

  return (
    <div>
      <div>Time Converter</div>
      <div>
        Minutes{" "}
        <input
          placeholder="Minutes"
          value={minutes}
          type="number"
          onChange={onChange}
          disabled={active !== false}
          //active
        />
        <div>
          Hours{" "}
          <input
            type="number"
            placeholder="Hours"
            value={Math.floor(minutes / 60)}
            disabled={active === false}
            // active 최초의 거짓, !active
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
