import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./useMemo/main";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
