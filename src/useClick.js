import React, { useState, useEffect, useRef } from "react";
import ReactDom from "react-dom";

const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    //dependency가 []임에도 componentDidMount의 역할을 수행함으로
    //return문 전까지의 코드가 1회 실행된다.
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    //useEffect의 return 되는 function은 componentWillUnMount가 실행한다.
    return () => {
      element.current.removeEventListener("click", onClick);
    };
  }, []);
  return element;
};
const App = () => {
  const sayHello = () => console.log("Hello");
  const potato = useClick(sayHello);
  return <h2 ref={potato}>Hi</h2>;
};
export default App;
