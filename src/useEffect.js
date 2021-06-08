import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
//useEffect
//first element: function
//second element: [dependencies]
//basically do componentDidMount, componentDidUpdate, componentWillUnmount
//can target variables by add second element
//if do not set second element, all changes call function.
//[] - respond nothing

const App = () => {
  const [number, setNumber] = useState(0);
  const [anumber, setAnumber] = useState(0);
  const say = () => console.log("change emerged");
  useEffect(say, [number, anumber]);
  return (
    <div className="App">
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(anumber + 1)}>{anumber}</button>
    </div>
  );
};
export default App;
