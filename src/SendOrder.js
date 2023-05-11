import React from "react";
import { Link } from "react-router-dom";

function SendOrder() {
  const number = JSON.parse(localStorage.getItem("user"));
  const aler = () => {
    alert("Замовлення було відправлено!");
  };

  return (
    <div>
      <div>Введіть адресу:</div>
      <input />
      <div>Ваш номер:</div>
      <input value={number._id} />

      <Link to="/korzina">
        <button onClick={aler}>Відправити замовлення</button>
      </Link>
      <div>""</div>
    </div>
  );
}

export default SendOrder;
