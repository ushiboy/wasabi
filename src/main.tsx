import { Global } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom/client";

import "~/i18n/config";
import { globalStyle } from "~/globalStyle";
import { App } from "~/presentations/App";

const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <Global styles={globalStyle} />
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root not found.");
}
