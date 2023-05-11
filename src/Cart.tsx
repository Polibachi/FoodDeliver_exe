import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "./KorzItem.js";
import SendOrder from "./SendOrder";
import { selectCart } from "./selectors.ts";
import { addItem, removeItem, minusItem, clearItem } from "./KorzSlice.ts";

import { cartReduser } from "./KorzSlice.ts";

const Cart: React.FC = () => {
  let sent = false;
  let xx = " ";
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector(state => state.cartReduser);
  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );
  React.useEffect(() => {}, [sent]);

  const onClickClear = () => {
    if (window.confirm("Очистити корзину?")) {
      dispatch(clearItem());
    }
  };

  if (!totalPrice) {
    return (
      <div>
        <div>nixuya nema</div>;
        <a href="/posts">Купити шось</a>
      </div>
    );
  }

  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">Корзина</h2>
          <div onClick={onClickClear} className="cart__clear">
            <span>Очистити корзину</span>
          </div>
          <Link to="/order">
            <button>Відправити замовлення</button>
          </Link>
        </div>
        <div className="content__items">
          {items.map((item: any) => <CartItem key={item.id} {...item} />)}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              {" "}
              Всього піц: <b>{items.length} шт.</b>{" "}
            </span>
            <span>
              {" "}
              Сума замовлення: <b>{totalPrice} грн</b>{" "}
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link
              to="/"
              className="button button--outline button--add go-back-btn"
            >
              <span>Повернутись</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
