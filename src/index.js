import React from "react";
import ReactDOM from "react-dom/client";

/* import RouterApp from "./reactRouter/routerApp"; */
/* import "./reactRouter/index.css"; */

/* import ContextApp from "./context/ContextApp"; */

/* import StateApp from "./useStateAnduseReducer/StateApp"; */

/* import EffectApp from "./useEffect/EffectApp"; */

/* import ModalApp from "./modal/one/ModalApp"; */
/* import ModalApp2 from "./modal/two/ModalApp2"; */

/* import ReduxApp from "./redux/one/ReduxApp"; */
/* import { store } from "./redux/one/app/store"; */
/* import "./redux/one/index.css"; */

import ReduxApp2 from "./redux/two/ReduxApp2";
import "./redux/two/index.css";
import { store } from "./redux/two/app/store";

import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReduxApp2 />
    </Provider>
  </React.StrictMode>
);

/* <React.StrictMode> */
/*   <ContextApp /> */
/*   <StateApp /> */
/*   <RouterApp /> */
/* </React.StrictMode> */
