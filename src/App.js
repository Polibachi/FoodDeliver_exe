import "./App.css";
import React, { useState } from "react";
import { MainPage } from "./MainPage.js";
import Register from "./Register.js";
import Login from "./Login.js";
import Test from "./Test.js";
import { PostSkeleton } from "./Skeleton.jsx";
import { Post } from "./Post.js";

import Container from "../node_modules/@mui/material/Container/Container.js";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "./Context.js";
import { Provider, useSelector, useDispatch } from "react-redux";
import { createStore } from "redux";
import store from "./Store.ts";
//import Korzina from "./Korzina.js";
import GetMe from "./GetMe.js";
import Cart from "./Cart.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<Test />} />
        <Route path="/korzina" element={<Cart />} />
        <Route path="/me" element={<GetMe />} />
      </Routes>
    </>
  );
}

export default App;
