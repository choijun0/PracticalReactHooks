import React, { useState, useEffect, useRef } from "react";
import ReactDom from "react-dom";
//use Notification API is not a hook but freaky cool
//Notification MDN:https://developer.mozilla.org/ko/docs/Web/API/notification
const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(function (permission) {
        if (permission !== "granted") {
          return;
        } else {
          new Notification(title, options);
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

const App = () => {
  const body = "this is body text";
  const triggerNotif = useNotification("test notification", { body });
  return (
    <div>
      <button onClick={triggerNotif}>Emerge Notification</button>
    </div>
  );
};
export default App;
