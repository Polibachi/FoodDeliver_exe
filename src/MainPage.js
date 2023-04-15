import * as React from "react";
import axios from "./axios.js";
import "./main.css";

export const MainPage = () => {
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
          <a href="/posts" title="Смисл">
            Каталог
          </a>
          <a href="/korzina" title="Каталог">
            Кошик
          </a>
          <a href="/login" title="Login">
            Логін
          </a>
          <a href="/register" title="Реєстрація">
            Реєстратура
          </a>
          <a href="#" onclick="testt()">
            Профіль?
          </a>
        </div>
      </header>
      <div id="top">
        <h1>Food delivery.exe</h1>
        <h3>Доставляєм задоволення</h3>
      </div>
      <div id="main">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n  @import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');\n"
          }}
        />
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
        </div>
      </div>
    </div>
  );
};
