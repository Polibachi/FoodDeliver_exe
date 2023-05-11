import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField/TextField.js";
import { AuthContext } from "./Context.js";
import { addItem } from "./KorzSlice.ts";

function Korzina() {
  const { items, totalPrice } = useSelector(state => state.cartReduser);

  const onSubmit = values => {
    console.log("zamovlennya priynyato");
  };

  return (
    <>
      <div>{title}</div>
      <div>{text}</div>
      <div>
        {price} грн, {vaha} грам
      </div>
      <img style={{ width: "150", height: "100" }} src={imageUrl} />
      <div>
        {tags[0]} {tags[1]} {tags[2]} {tags[3]} {tags[4]}{" "}
      </div>
      <button value="kupiti" onClick={addToKorz}>
        Додати в корзину
      </button>
      Корзина
      <span>Очистити корзину</span>
      <a>Оформити замовлення</a>
      <span>
        {" "}
        Всього елементів: <b>{items.length} шт.</b>{" "}
      </span>
      <span>
        {" "}
        Сума замовлення: <b>{totalPrice} грн</b>{" "}
      </span>
      <span>Повернутися</span>
      <div class="button pay-btn">
        <span>Оплатити зараз</span>
      </div>
    </>
  );
}

export default Korzina;
