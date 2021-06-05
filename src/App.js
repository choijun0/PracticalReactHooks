import "./styles.css";
import React, { useState } from "react";
import ReactDom from "react-dom";

const useIput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const maxlen = (inputString) => inputString.length <= 10;
  const name = useIput("Mr.", maxlen);
  return (
    <div>
      <h1>Hello</h1>
      <input placeholder="Name" value={name.value} onChange={name.onChange} />
    </div>
  );
};

export default App;
