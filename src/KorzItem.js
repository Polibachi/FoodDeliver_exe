import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./KorzSlice.ts";
import { CartItem as CartItemType } from "./types.ts";
import { Post } from "./Post.js";
import { removeItem } from "./KorzSlice.ts";

export const CartItem = ({ _id, title, size, text, vaha, price, imageUrl }) => {
  const { items, totalPrice } = useSelector(state => state.cartReduser);
  const dispatch = useDispatch();
  const isMounted = React.useRef(false);
  const remove = () => {
    dispatch(removeItem(_id));
    console.log("item removed");
    console.log(_id);
  };
  React.useEffect(
    () => {
      if (isMounted.current) {
        const json = JSON.stringify(items);
        localStorage.setItem("cart", json);
      }

      isMounted.current = true;
    },
    [items]
  );
  return (
    <div key={_id}>
      <div>{title}</div>
      <div>{text}</div>
      <div>
        {price} грн, {vaha} грам
      </div>
      <img style={{ width: "150", height: "100" }} src={imageUrl} />
      <button onClick={remove}>Видалити з кошику</button>
      <div>""</div>
    </div>
  );
};
