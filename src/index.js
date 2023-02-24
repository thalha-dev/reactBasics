import React from "react";
import ReactDOM from "react-dom/client";
import "./reactRouter/index.css";
import RouterApp from "./reactRouter/routerApp";
/* import App from "./App"; */
/* import ContextApp from "./context/ContextApp"; */
/* import StateApp from "./useStateAnduseReducer/StateApp"; */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ContextApp /> */}
    {/* <StateApp /> */}
    {/* <App /> */}
    <RouterApp />
  </React.StrictMode>
);
