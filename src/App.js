import React, { useState } from "react";
import Converter from "./Components/Converter";
import Counter from "./Components/Counter";
import MyBtn from "./Components/MyBtn";

function App() {
  const [todos, setTodos] = useState([]); //할 일 목록
  const [todo, setTodo] = useState(""); //할 일 하나

  //변경이 일어나면
  const onChange = (e) => {
    setTodo(e.target.value);
  };

  //제출할 때 실행
  const onSubmit = (e) => {
    e.preventDefault(); //새로고침 X
    // alert("등록됨");
    if (todo === "") {
      alert("1글자 이상 입력해주세요");
      return;
    }
    //등록
    setTodos((currentArray) => [todo, ...currentArray]);
    //          이전상태([])   "밥먹기",  빈 배열
    //           밥먹기        "기상",  "밥먹기"
    //        기상, 밥먹기     "산책",  "기상" "밥먹기"(뿌려주기)

    setTodo(""); //초기화
  };

  return (
    <div>
      <h1>할 일</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          value={todo}
          placeholder="할 일을 적어주세요"
        />
        <button>등록</button>
      </form>
      <button
        onClick={() => {
          console.log(todos);
        }}
      >
        check
      </button>
    </div>
  );
}

export default App;
