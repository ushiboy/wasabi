import React from "react";
import ReactDOM from "react-dom/client";
import { Global } from "@emotion/react";

import { App } from "./presentations/App";
import { globalStyle } from "./globalStyle";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Global styles={globalStyle} />
    <App />
  </React.StrictMode>
);
