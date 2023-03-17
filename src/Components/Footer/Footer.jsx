import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "teal" }}>
      <div
        className="d-flex justify-content-evenly"
        style={{ border: "2px solid black" }}
      >
        <div>
          <Link to="https://t.me/Jazikofn">
            <img
              style={{ margin: "5px" }}
              src="https://cdn-icons-png.flaticon.com/512/5968/5968804.png"
              alt="error"
              width={25}
            />
          </Link>

          <Link to="https://instagram.com/deve_1op?igshid=YmMyMTA2M2Y=">
            <img
              style={{ margin: "5px" }}
              src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
              alt="error"
              width={25}
            />
          </Link>

          <Link to="https://github.com/UJazmira">
            <img
              style={{ margin: "5px" }}
              src="https://cdn-icons-png.flaticon.com/512/919/919847.png"
              alt="error"
              width={25}
            />
          </Link>
          <Link to="https://tiktok.com/@sonyshko18">
            <img
              style={{ margin: "5px" }}
              src="https://cdn-icons-png.flaticon.com/512/3116/3116491.png"
              alt="error"
              width={25}
            />
          </Link>
          <Link to="https://vk.com/kimmira04">
            <img
              style={{ margin: "5px" }}
              src="https://cdn-icons-png.flaticon.com/512/4494/4494490.png"
              alt="error"
              width={25}
            />
          </Link>
        </div>
      </div>
      <div style={{ border: "2px solid black", display: "flex" }}>
        <div>
          <img
            style={{
              marginLeft: "20px",
              marginBottom: "20px",
              marginTop: "20px",
            }}
            src="https://cdn-icons-png.flaticon.com/512/2085/2085263.png"
            alt="ww"
            width={150}
          />
        </div>
        <div style={{ margin: "10px", fontFamily: "cursive" }}>
          <h5>Мои интересы:</h5>
          <ul>
            <li>Чтение</li>
            <li>Танцы</li>
            <li>
              Изучение <br />
              языков
            </li>
          </ul>
        </div>
        <div style={{ margin: "10px", fontFamily: "cursive" }}>
          <h5>Hard Skills:</h5>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>RECT</li>
          </ul>
        </div>
        <div style={{ margin: "10px", fontFamily: "cursive" }}>
          <h5>Soft Skills:</h5>
          <ul>
            <li>Oratory</li>
            <li>Sociability</li>
            <li>Problem solving</li>
            <li>Teamwork</li>
            <li>Responsibility</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
