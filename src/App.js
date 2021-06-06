import React, { useState } from "react";
import ReactDom from "react-dom";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of Section 2"
  }
];

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  //currentItem은 closere로 changeItem에 의해 index가 바뀌면 그 값도 바뀐다.
  //map function's index is element handed automatically from callback function.
  //arr.map(callback(currentValue[, index[, array]])[, thisArg])
  return (
    <div>
      {content.map((section, index, array) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default App;
