import React, { useState, useEffect, useRef } from "react";
import ReactDom from "react-dom";

const usePreventLeave = () => {
  const listener = (event) => {
    //parameter event is handed by eventListener
    event.preventDefault();
    event.returnValue = ""; //if this is not written, crome dismisses event.
  };
  //"beforeunload"는 윈도우가 닫기기전에 함수를 실행하는 것을 허용
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div>
      <button onClick={enablePrevent}>Prevent</button>
      <button onClick={disablePrevent}>Unprevent</button>
    </div>
  );
};
export default App;
