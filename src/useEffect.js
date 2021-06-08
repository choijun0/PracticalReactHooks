import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const titleUpdate = () => {
    const htmlTitle = document.querySelector("title"); //<title></title> object
    htmlTitle.innerText = title;
  };
  useEffect(titleUpdate, [title]);
  return setTitle;
};
const App = () => {
  const titleUpdator = useTitle("Loading...");
  setTimeout(() => titleUpdator("Home"), 5000);
  return <div>Hi</div>;
};
export default App;
