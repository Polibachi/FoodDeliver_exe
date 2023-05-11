import "./App.css";
import { MainPage } from "./MainPage.js";
import Register from "./Register.js";
import CreatePost from "./CreatePost.js";
import Login from "./Login.js";
import Test from "./Test.js";
import SendOrder from "./SendOrder.js";
import GetMe from "./GetMe.js";
import ChangeMe from "./ChangeMe.js";
import Cart from "./Cart.tsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts/create" element={<CreatePost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<Test />} />
        <Route path="/korzina" element={<Cart />} />
        <Route path="/me" element={<GetMe />} />
        <Route path="/chme" element={<ChangeMe />} />
        <Route path="/order" element={<SendOrder />} />
      </Routes>
    </>
  );
}

export default App;
