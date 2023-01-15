import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Frontend from "./Frontend";

import DisneyApi from "./DisneyAPI";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const frontendroot = ReactDOM.createRoot(
  document.getElementById("frontendroot")
);

frontendroot.render(
  <React.StrictMode>
    <Frontend />
  </React.StrictMode>
);

const disneyapiroot = ReactDOM.createRoot(
  document.getElementById("disneyapiroot")
);

disneyapiroot.render(
  <React.StrictMode>
    <DisneyApi />
  </React.StrictMode>
);
