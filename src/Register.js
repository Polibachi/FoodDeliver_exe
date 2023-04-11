import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDataReg, isLoggedIn } from "./Authorise.js";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField/TextField.js";
import { AuthContext } from "./Context.js";
import Button from "../node_modules/@mui/material/Button/Button.js";

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
    <>
      <form onSubmit={handleSubmit(onSubmit)} action="/" method="post">
        <TextField
          type="email"
          label="email"
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          {...register("email", { required: "enter email" })}
        />
        <TextField
          label="fullname"
          error={Boolean(errors.fullname?.message)}
          helperText={errors.fullname?.message}
          {...register("fullname", { required: "enter name" })}
        />
        <TextField
          label="password"
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          {...register("password", { required: "enter password" })}
        />

        <br />
        <button type="submit"> click </button>
      </form>
    </>
  );
}

export default Register;
