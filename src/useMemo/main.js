import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactDom from "react-dom";
import Info from "./info";

const App = () => {
  let [color, setColor] = useState("");
  let [movie, setMovie] = useState(0);
  //useCallback 을 사용해 의미없는 재선언을 막음
  const onChangeHandler = useCallback((e) => {
    if (e.target.id === "color") setColor(e.target.value);
    else setMovie(e.target.value);
  }, []);
  return (
    <div>
      <input id="color" placeholder="color" onChange={onChangeHandler} />
      <input id="movie" placeholder="movie number" onChange={onChangeHandler} />
      <Info color={color} movie={movie} />
    </div>
  );
};
export default App;

/*
1. 함수형 컴포넌트는 그냥 함수다. 
시 한 번 강조하자면 함수형 컴포넌트는 단지 jsx를 반환하는 함수이다.
2. 컴포넌트가 렌더링 된다는 것은 
누군가가 그 함수(컴포넌트)를 호출하여서 실행되는 것을 말한다. 함수가 실행될 때마다 내부에 선언되어 있던 표현식(변수, 또다른 함수 등)도 매번 다시 선언되어 사용된다.
3. 컴포넌트는 자신의 state가 변경되거나, 
부모에게서 받는 props가 변경되었을 때마다 리렌더링 된다. (심지어 하위 컴포넌트에 최적화 설정을 해주지 않으면 부모에게서 받는 props가 변경되지 않았더라도 리렌더링 되는게 기본이다.) 
  */
