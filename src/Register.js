import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDataReg, isLoggedIn } from "./Authorise.js";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField/TextField.js";
import { AuthContext } from "./Context.js";
import Button from "../node_modules/@mui/material/Button/Button.js";
import "./log.css";

function Register() {
  const isAuth = useSelector(isLoggedIn);
  console.log(isAuth);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid }
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      fullname: ""
    }
  });

  const onSubmit = values => {
    console.log(values);
    dispatch(fetchUserDataReg(values));
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container">
      <form id="form1" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Enter email" })}
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="fullname"
            id="fullname"
            {...register("fullname", { required: "Enter full name" })}
          />
          {errors.fullname && (
            <span className="error">{errors.fullname.message}</span>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password", { required: "Enter password" })}
          />
          {errors.password && (
            <span className="error">{errors.password.message}</span>
          )}
        </div>

        <button
          style={{ marginLeft: "41px" }}
          type="submit"
          disabled={!isValid}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
