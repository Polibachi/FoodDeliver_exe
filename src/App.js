import "./App.css";

import MainPage from "./MainPage.js";
import Register from "./Register.js";
import Login from "./Login.js";
import Container from "./node_modules/@mui/material/Container";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
