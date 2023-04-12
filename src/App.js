import "./App.css";
import React, { useState } from "react";
import { MainPage } from "./MainPage.js";
import Register from "./Register.js";
import Login from "./Login.js";
import Test from "./Test.js";
import Container from "../node_modules/@mui/material/Container/Container.js";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "./Context.js";
import { Provider, useSelector, useDispatch } from "react-redux";
import { createStore } from "redux";
import store from "./Store.js";

function App() {
  //const [isAuth, setIsAuth] = useState(false);
  //const [AppValue, setAppValue] = useState("");

  //console.log(isAuth);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
