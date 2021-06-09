import React, { useState, useEffect, useRef } from "react";
import ReactDom from "react-dom";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else onCancel();
  };
  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log("Delete...world");
  const aborted = () => console.log("Cancel");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, aborted);
  return <button onClick={confirmDelete}>Delete world</button>;
};
export default App;
