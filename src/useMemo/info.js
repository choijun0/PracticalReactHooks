import React, { useMemo } from "react";

const changeColor = (color) => {
  console.log("color Changed");
  switch (color) {
    case "Blue":
      return "파랑";
      break;
    case "Red":
      return "빨강";
      break;
    default:
      return "없음";
      break;
  }
};
const changeMovie = (color) => {
  console.log("movie Changed");
  switch (color) {
    case "1":
      return "스타워즈";
      break;
    case "2":
      return "조커";
      break;
    default:
      return "없음";
      break;
  }
};

const Info = ({ color, movie }) => {
  /*컴포넌트는 자신의 state가 변경되거나, 
   부모에게서 받는 props가 변경되었을 때마다 리렌더링 된다. 
   따라서 color만 바껴도 changeMovie까지 호출됨
   그럴때 사용하는게 useMemo!!
  */
  const korColor = useMemo(() => changeColor(color), [color]);
  const getMovieName = useMemo(() => changeMovie(movie), [movie]);
  return (
    <div>
      <p>
        제가 좋아하는 색은{korColor}이고, 영화는 {getMovieName}입니다
      </p>
    </div>
  );
};

export default Info;
