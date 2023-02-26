import React from "react";
import ReactDOM from "react-dom/client";
/* import RouterApp from "./reactRouter/routerApp"; */
/* import "./reactRouter/index.css"; */
/* import ContextApp from "./context/ContextApp"; */
/* import StateApp from "./useStateAnduseReducer/StateApp"; */
/* <React.StrictMode> */
/*   <ContextApp /> */
/*   <StateApp /> */
/*   <RouterApp /> */
/* </React.StrictMode> */
import EffectApp from "./useEffect/EffectApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<EffectApp />);
