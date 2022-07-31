import React from "react";

const MyBtn = ({ text, fontSize }) => {
  return (
    <button
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "tomato",
        color: "white",
        padding: "10px 20px",
        border: 0,
        borderRadius: 10,
        margin: "10px",
        fontSize: `${fontSize}`,
      }}
    >
      {text}
    </button>
  );
};

export default MyBtn;
