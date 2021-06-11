import React, { useState, useEffect, useRef } from "react";
import ReactDom from "react-dom";

const useFullScreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const clickFullScreen = () => {
    if (element.current) {
      element.current.requestFullscreen();
    }
    runCb(true);
  };
  const exitFullScreen = () => {
    //I don`t know why, when exit full screen use document
    document.exitFullscreen();
    runCb(false);
  };
  return { element, clickFullScreen, exitFullScreen };
};

const App = () => {
  const sendMessage = (isFull) => {
    console.log(isFull ? "we are full" : "we are small");
  };
  const { element, clickFullScreen, exitFullScreen } = useFullScreen(
    sendMessage
  );
  return (
    <div>
      <div ref={element}>
        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250" />
        <button onClick={clickFullScreen}>Full Screen Button</button>
        <button onClick={exitFullScreen}>Exit Full Screen Button</button>
      </div>
    </div>
  );
};
export default App;
