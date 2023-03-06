import React from "react";
import ReactDOM from "react-dom";
import "./redux/three/src/index.css";
import App from "./redux/three/src/App";
import store from "./redux/three/src/app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./redux/three/src/serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
