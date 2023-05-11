import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { fetchUserData, isLoggedIn } from "./Authorise.js";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField/TextField.js";
import { AuthContext } from "./Context.js";
import Button from "../node_modules/@mui/material/Button/Button.js";
import "./main.css";
import "./log.css";

function Login() {
  const isAuth = useSelector(isLoggedIn);
  const dispatch = useDispatch();
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/octet-stream",
      Authorization: localStorage.getItem("token")
    }
  };

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid }
  } = useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = async values => {
    const data = await dispatch(fetchUserData(values));
    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
      fetch("http://localhost:4444/me", options)
        .then(response => response.json())
        .then(response =>
          localStorage.setItem("user", JSON.stringify(response.user))
        )
        .catch(err => console.error(err));
    } else {
      alert("ne vdalos avtorizuvatis");
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container">
      <form
        id="form1"
        onSubmit={handleSubmit(onSubmit)}
        action="/"
        method="post"
      >
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "enter email" })}
          />
          {errors.email && (
            <span className="error-message">{errors.email.message}</span>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password", { required: "enter password" })}
          />
          {errors.password && (
            <span className="error-message">{errors.password.message}</span>
          )}
        </div>
        <button style={{ marginLeft: "45px" }} type="submit">
          Submit
        </button>{" "}
        <br />
        <div>
          <a href="/register">Зареєструватись натомість</a>
        </div>
      </form>
    </div>
  );
}
export default Login;
