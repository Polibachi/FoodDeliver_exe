import React, { useContext, useState } from "react";
import { json } from "react-router-dom";
const logOut = () => {
  localStorage.removeItem("token");
};
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

  const uss = JSON.parse(localStorage.getItem("user"));
  console.log("user: " + uss);

  if (localStorage.getItem("token")) {
    return (
      <div>
        <div>{uss.fullname}</div>
        <img style={{ width: "150", height: "100" }} src={uss.avatarUrl} />
        <br />
        <button onClick={logOut}>LogOut</button>
      </div>
    );
  } else {
    return <a href="/login">Залогінся, ее бля...</a>;
  }
}
export default GetMe;
