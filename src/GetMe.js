import React, { useContext, useState } from "react";
import { json } from "react-router-dom";
import Popout from "react-popout";
import axios from "axios";

function GetMe() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/octet-stream",
      Authorization: localStorage.getItem("token")
    }
  };

  fetch("http://localhost:4444/me", options)
    .then(response => response.json())
    .then(response =>
      localStorage.setItem("user", JSON.stringify(response.user))
    )
    .catch(err => console.error(err));

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    window.location.reload(false);
  };

  axios
    .request(options)
    .then(function(response) {
      console.log(response.data);
    })
    .catch(function(error) {
      console.error(error);
    });

  fetch("http://localhost:4444/me", options)
    .then(response => response.json())
    .then(response =>
      localStorage.setItem("user", JSON.stringify(response.user))
    )
    .catch(err => console.error(err));

  const uss = JSON.parse(localStorage.getItem("user"));
  console.log("user: " + uss);

  if (localStorage.getItem("token")) {
    if (uss.__v == 0) {
      return (
        <div>
          <div>{uss.fullname}</div>
          <div>{uss.email}</div>
          <div>Номер телефону: +{uss.phone}</div>
          <img
            style={{ width: "100", height: "100" }}
            src={
              uss.avatarUrl ||
              "https://st.depositphotos.com/1537427/3571/v/600/depositphotos_35716051-stock-illustration-user-icon-vector.jpg"
            }
          />
          <br />
          <a href="/chme">Редагувати профіль</a>
          <br />
          <button onClick={logOut}>LogOut</button>
          <a href="/">Повернутися</a>
        </div>
      );
    } else {
      <div>
        <div>{uss.fullname}</div>
        <div>{uss.email}</div>
        <div>Номер телефону: +{uss.phone}</div>
        <img
          style={{ width: "100", height: "100" }}
          src={
            uss.avatarUrl ||
            "https://st.depositphotos.com/1537427/3571/v/600/depositphotos_35716051-stock-illustration-user-icon-vector.jpg"
          }
        />
        <br />
        <a href="/chme">Редагувати профіль</a>
        <br />
        <button onClick={logOut}>LogOut</button>
        <div>
          <a href="/posts/create">Додати продукт</a>
        </div>
        <br />
        <a href="/">Повернутися</a>
      </div>;
    }
  } else {
    return <a href="/login">Залогінся, ее бля...</a>;
  }
}
export default GetMe;
