import React, { useState, useEffect, useRef } from "react";
import ReactDom from "react-dom";

const useScroll = () => {
  const [state, setState] = useState({ x: 0, y: 0 });
  const handler = () => {
    setState({ x: window.scrollX, y: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);
  return state;
};
const App = () => {
  const { y } = useScroll();
  return (
    <div style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "blue" : "red" }}>Hi</h1>
    </div>
  );
};
export default App;
