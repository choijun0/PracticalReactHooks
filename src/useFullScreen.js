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
      //sparate on browsers
      if (element.current.requestFullscreen)
        element.current.requestFullscreen();
      else if (element.current.mozRequestFullScreen)
        element.current.mozRequestFullScreen();
      else if (element.current.webkitRequestFullscreen)
        element.current.webkitRequestFullscreen();
      else if (element.current.msRequestFullscreen)
        element.current.msRequestFullscreen();
    }
    runCb(true);
  };
  const exitFullScreen = () => {
    //I don`t know why, when exit full screen use document
    //chrome firefox opera microsoft
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    else if (document.msExitFullscreen) document.msExitFullscreen();
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
