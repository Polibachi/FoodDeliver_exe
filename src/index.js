import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";

import MainPage from "./MainPage.js";
import Register from "./Register.js";
import Login from "./Login.js";
//import { Test } from "./Test.js";
import { Provider } from "react-redux";
import store from "./Store.ts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
