import React, { useState, useEffect, useRef } from "react";
import ReactDom from "react-dom";

const useBeforeLeave = (onLeave) => {
  if (typeof onLeave !== "function") {
    return;
  }
  const judgeLeave = (event) => {
    if (event.clientY <= 0) {
      onLeave();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", judgeLeave);
    return () => {
      document.removeEventListener("mouseleave", judgeLeave);
    };
  }, []);
};

const App = () => {
  useBeforeLeave(() => console.log("don`t leave bro!!"));
  return <h2>Hi</h2>;
};
export default App;
