import React, { useState, useEffect } from "react";
import axios from "axios";

const Counter = ({ counter, setCounter }) => {
  const [searchWord, setSearchWord] = useState("");
  const [data, setData] = useState([]);
  const addCounter = () => {
    setCounter(counter + 1);
  };
  const onChange = (e) => {
    setSearchWord(e.target.value);
  };

  // console.log(counter);
  //검색시 호출
  //console.log(searchWord);

  useEffect(() => {
    //API 호출코드
    const getData = async () => {
      const data = await axios.get(
        "https://picsum.photos/v2/list?page=2&limit=100"
      );
      console.log(data);
      //setData(data);
    };
    getData();
  }, [data]); // 최초 1회 실행

  useEffect(() => {
    //API 호출코드와 같다.
    console.log("change input");
  }, [searchWord]); // searchWord 값의 변화 감지
  //값이 변경될 때 콘솔이 실행되기를 바란다,
  // 원하는 값의 변경만을 감지해서 내부의 동작을 실행

  useEffect(() => {
    console.log(counter);
  }, [counter]); // counter 값의 변화 감지

  useEffect(() => {
    console.log("뭔가변함");
  }, [counter, searchWord]); // counter 값의 변화 감지

  return (
    <div>
      <input
        type="text"
        onChange={onChange}
        value={searchWord}
        placeholder="검색어"
      />
      <div>{counter}번 클릭했습니다</div>
      <button onClick={addCounter}>click</button>
    </div>
  );
  return;
};

export default Counter;
