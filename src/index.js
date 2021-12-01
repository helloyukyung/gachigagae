import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { RenderAfterNavermapsLoaded } from "react-naver-maps";

ReactDOM.render(
  <React.StrictMode>
    <RenderAfterNavermapsLoaded ncpClientId={"cc08dar8r4"}>
      <App />
    </RenderAfterNavermapsLoaded>
  </React.StrictMode>,
  document.getElementById("root")
);
