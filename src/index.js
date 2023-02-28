import React from "react";
import ReactDOM from "react-dom/client";
import ReduxApp2 from "./redux/two/ReduxApp2";
import "./redux/two/index.css";
import { store } from "./redux/two/app/store";
import { Provider } from "react-redux";
import { fetchUsers } from "./redux/two/features/users/usersSlice";

store.dispatch(fetchUsers());

/* <React.StrictMode> */
/* </React.StrictMode> */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ReduxApp2 />
  </Provider>
);
