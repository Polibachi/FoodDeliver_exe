import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDataReg, isLoggedIn } from "./Authorise.js";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField/TextField.js";
import { AuthContext } from "./Context.js";
import axios from "axios";

const CreatePost = ({ title, text, price, vaha, imageUrl }) => {
  useForm({
    defaultValues: {
      title: "",
      text: "",
      tags: "",
      price: "",
      vaha: "",
      imageUrl: ""
    }
  });

  const sub = () => {
    const options = {
      method: "POST",
      url: "http://localhost:4444/posts/create",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfSWQiOiI2NDM1Mzg0ZjI3Yzc5YTM3MWI3YTNjYTMiLCJpYXQiOjE2ODEyMjQ3NTMsImV4cCI6MTY4MzgxNjc1M30.w4DMw92_bIaz0Lgi4hBbFd9x5VVukmi-cbrSKzzqJxs"
      },
      data: {
        title: document.getElementById("title").value,
        text: document.getElementById("text").value,
        tags: [document.getElementById("tags").value],
        price: document.getElementById("price").value,
        vaha: document.getElementById("vaha").value,
        imageUrl: document.getElementById("imageUrl").value
      }
    };
    axios
      .request(options)
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.error(error);
        return "error";
      });
  };
  return (
    <div className="container">
      <form id="form1">
        Назва:
        <input type="title" id="title" />
        <br />
        Текст:
        <input type="text" id="text" />
        <br />
        Теги:
        <input type="tags" id="tags" />
        <br />
        Ціна:
        <input type="price" id="price" />
        <br />
        Вага:
        <input type="vaha" id="vaha" />
        <br />
        Ссилка на фотку:
        <input type="imageUrl" id="imageUrl" />
        <br />
        <button style={{ marginLeft: "41px" }} onClick={sub}>
          create
        </button>
        <br />
        <a href="/">Повернутися</a>
      </form>
    </div>
  );
};

export default CreatePost;
