import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData, isLoggedIn } from "./Authorise.js";

export const MainPage = () => {
  //const isAuth = useSelector(isLoggedIn);
  const isTok = Boolean(localStorage.getItem("token"));
  const dispatch = useDispatch();
  const log = async values => {
    const data = await dispatch(fetchUserData(values));
    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };
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
  function logUI() {
    if (isTok) {
      return (
        <div>
          <a href="/posts">Каталог</a>
          <a href="/korzina">Корзина</a>
          <a href="/me">Профіль</a>
        </div>
      );
    } else {
      return (
        <div>
          <a href="/login" onclick="slowScroll('#contacts')" title="Login">
            Лохін
          </a>
          <a href="/register" onclick="slowScroll('#faq')" title="�������">
            Register
          </a>
        </div>
      );
    }
  }
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>FoodDelivery.exe</title>
      <link rel="stylesheet" href="main.css" />
      <header style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        <div id="logo" onClick="Scroll('#top')">
          <span>Food delivery.exe</span>
        </div>
        <div style={{ textAlign: "right" }} id="about">
          {logUI()}
        </div>
      </header>
      <div id="top">
        <h1>Food delivery.exe</h1>
        <h3>Доставляєм задоволення</h3>
      </div>
      <div id="main">
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button
            style={{
              backgroundColor: "#ddd",
              color: "black",
              fontFamily: "'Oswald', sans-serif",
              padding: "20px 60px",
              border: "none",
              borderRadius: "4px",
              fontSize: "30px",
              cursor: "pointer"
            }}
          >
            <a href="/posts">Зробити замовлення</a>
          </button>
        </div>
        <div
          style={{
            fontFamily: '"Oswald", sans-serif',
            color: "white",
            fontSize: "30px",
            marginTop: "15px"
          }}
        >
          <a>
            Що б зробити замовлення натисніть на кнопку та виберіть, що саме
            бажаєте замовити
          </a>
          <br />
        </div>
      </div>
      <div id="guide">
        <h2>Food delivery.exe</h2>
        <h4>Про нас</h4>
        <div className="img">
          <a href="https://www.youtube.com/watch?v=Lzbr7uTPqNA">
            <img
              src="https://phonoteka.org/uploads/posts/2021-11/thumbs/1635892931_20-phonoteka-org-p-dostavka-yedi-fon-krasivie-20.jpg"
              alt=""
            />
          </a>
          <a href="https://www.youtube.com/watch?v=Lzbr7uTPqNA">
            Тут розташована інформація про нас
          </a>
        </div>
        <div className="img">
          <a href="https://www.youtube.com/watch?v=vxWiX8hXPKc">
            <img
              src="https://phonoteka.org/uploads/posts/2021-11/1635892915_21-phonoteka-org-p-dostavka-yedi-fon-krasivie-21.jpg"
              alt=""
            />
          </a>
          <a href="https://www.youtube.com/watch?v=vxWiX8hXPKc">
            Тут розташована інформація про нас
          </a>
        </div>
      </div>
      <div id="contacts">
        <center>
          <h5>Розробники:</h5>
        </center>
        <form id="ints">
          <label htmlFor="name">Імена розробників:</label>
          <br />
          <span type="text" placeholder="Імена" name="name" id="name">
            Савчук Володимир<br />
            Фанта Василь<br />
            Іванюк Максим
          </span>
          <br />
          <label htmlFor="email">Посилання: </label>
          <br />
          <a href="https://discord.gg/acP7Z7gc">
            <img src="Ds.png" alt="" />
          </a>
          <a href="https://www.youtube.com/watch?v=Lzbr7uTPqNA">
            <img src="Bhop.png" alt="" />
          </a>
          <a href="https://steamcommunity.com/groups/ukraine">
            <img src="Steam.png" alt="" />
          </a>
        </form>
      </div>
      <div id="faq">
        <div>
          <span className="title">Lorem чи шо там воно</span>
          <br />
          <span className="heading">
            Lorem чи шо там воно,Lorem чи шо там воно,
          </span>
          <p>
            Lorem чи шо там воно,Lorem чи шо там воно,Lorem чи шо там воно,Lorem
            чи шо там воно,Lorem чи шо там воно,Lorem чи шо там воно,
          </p>
          <span className="heading">______________</span>
          <p>
            Lorem чи шо там воно,Lorem чи шо там воно,Lorem чи шо там воно,Lorem
            чи шо там воно,Lorem чи шо там воно,Lorem чи шо там воно,Lorem чи шо
            там воно,Lorem чи шо там воно,
          </p>
          <span className="heading">______________</span>
          <p>
            Lorem чи шо там воно,Lorem чи шо там воно,Lorem чи шо там воно,Lorem
            чи шо там воно,Lorem чи шо там воно,Lorem чи шо там воно,
          </p>
        </div>
        <div>
          <span className="title">Lorem чи шо там воно,</span>
          <br />
          <span className="heading">
            Lorem чи шо там воно,Lorem чи шо там воно,
          </span>
          <p>
            Lorem чи шо там воно,Lorem чи шо там воно,Lorem чи шо там воно,Lorem
            чи шо там воно,Lorem чи шо там воно,.
          </p>
          <span className="heading">______________</span>
          <p>
            Lorem чи шо там воно,Lorem чи шо там воно,Lorem чи шо там воно,Lorem
            чи шо там воно,Lorem чи шо там воно,Lorem чи шо там воно,Lorem чи шо
            там воно,Lorem чи шо там воно,
          </p>
          <span className="heading">______________</span>
          <p>
            Lorem чи шо там воно,Lorem чи шо там воно,Lorem чи шо там воно,Lorem
            чи шо там воно,Lorem чи шо там воно,Lorem чи шо там воно,Lorem чи шо
            там воно,
          </p>
        </div>
        <div>
          <span className="title">Здоров`я погібшим </span>
          <br />
          <span className="heading">Lorem чи шо там воно,,</span>
          <p>
            Lorem чи шо там воно,Lorem чи шо там воно,Lorem чи шо там воно,Lorem
            чи шо там воно,Lorem чи шо там воно,Lorem чи шо там воно,Lorem чи шо
            там воно,Lorem чи шо там воно,
          </p>
          <span className="heading">Lorem чи шо там воно,</span>
          <p>
            Lorem чи шо там воно,Lorem чи шо там воно,Lorem чи шо там воно,Lorem
            чи шо там воно,Lorem чи шо там воно,Lorem чи шо там воно,Lorem чи шо
            там воно,
          </p>
          <span className="heading">Bunnyhop</span>
          <p>
            Lorem чи шо там воно,<br />
            sv_cheats 1<br />
            Lorem чи шо там воно,<br />
            Lorem чи шо там воно,<br />
            Lorem чи шо там воно,
          </p>
          <button
            style={{
              backgroundColor: "#ddd",
              color: "black",
              fontFamily: "'Oswald', sans-serif",
              padding: "20px 60px",
              border: "none",
              borderRadius: "4px",
              fontSize: "30px",
              cursor: "pointer"
            }}
          >
            <a href="#contacts">Top</a>
          </button>
        </div>
      </div>
    </div>
  );
};
