import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Navigate } from "react-router-dom";

const ChangeMe = ({ fullname, avatarUrl, phone }) => {
  const uss = JSON.parse(localStorage.getItem("user"));
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

  fullname = uss.fullname;
  avatarUrl = uss.avatarUrl || "";
  phone = uss.phone || "";

  const change = () => {
    const options2 = {
      method: "PATCH",
      url: "http://localhost:4444/edit",
      headers: { "Content-Type": "application/json" },
      data: {
        email: uss.email,
        fullname: document.getElementById("name").value || fullname,
        avatarUrl: document.getElementById("avatarUrl").value || avatarUrl,
        phone: document.getElementById("phone").value || phone
      }
    };

    axios
      .request(options2)
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.error(error);
      });
    console.log(options2);
    return <Navigate to="/me" />;
  };

  if (localStorage.getItem("token")) {
    return (
      <div>
        <form onSubmit={change}>
          Повне ім'я:
          <input type="name" id="name" placeholder={fullname} />
          <br />
          Номер телефону: +
          <input type="phone" id="phone" placeholder={phone} />
          <br />
          Посилання на аватарку:
          <input type="avatarUrl" id="avatarUrl" placeholder={avatarUrl} />
          <br />
          <button style={{ marginLeft: "41px" }} type="submit">
            Застосувати зміни
          </button>
          <br />
          <a href="/me">Повернутися</a>
        </form>
      </div>
    );
  } else {
    return <a href="/login">Залогінся, ее бля...</a>;
  }
};
export default ChangeMe;
