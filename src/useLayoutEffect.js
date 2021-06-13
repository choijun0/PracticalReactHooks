import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback
} from "react";
import ReactDom from "react-dom";

const App = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const refreshPage = () => {
    window.location.reload(false);
  };
  useState(() => {
    setA("준영");
  }, []);
  useLayoutEffect(() => {
    setB("창훈");
  }, []);
  return (
    <div>
      <p>
        useEffect 그의 이름은!!!: {a} useLayoutEffect 그의 이름은!!!: {b}{" "}
      </p>
      <button onClick={refreshPage}>Refresh!!</button>
    </div>
  );
};
export default App;
