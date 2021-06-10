import React, { useState, useEffect, useRef } from "react";
import ReactDom from "react-dom";

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      //opacity is transparancy
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const fadeInH1 = useFadeIn(3, 2);
  const fadeInH2 = useFadeIn(4, 0);

  return (
    <div>
      <h1 {...fadeInH1}>Hi</h1>
      <h2 {...fadeInH2}>Hello</h2>
    </div>
  );
};
export default App;
