import React from "react";
import image from "../image/me.jpg";
import img from "../image/jjj.jpg";
import myphoto from "../image/my photo.jpg";
import Card from "react-bootstrap/Card";

const AboutMe = () => {
  return (
    <div>
      <h4
        style={{ fontFamily: "cursive" }}
        className="container d-flex justify-content-center"
      >
        Web Developer
      </h4>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{
            borderRadius: "5rem",
            margin: "1rem",
            border: "2px solid black",
          }}
          width={300}
          src={image}
          alt=""
        />
        <img
          style={{
            borderRadius: "10rem",
            margin: "1rem",
            border: "2px solid black",
          }}
          width={200}
          src={img}
          alt=""
        />
        <img
          style={{
            borderRadius: "10rem",
            margin: "1rem",
            border: "2px solid black",
          }}
          width={200}
          src={myphoto}
          alt=""
        />

        <Card
          style={{
            width: "18rem",
            margin: "1rem",
            borderRadius: "30px",
            backgroundColor: "teal",
          }}
        >
          <Card.Body>
            <Card.Title
              style={{ color: "CaptionText", fontFamily: "monospace" }}
            >
              Jazmira Kim
            </Card.Title>
            <Card.Subtitle style={{ fontFamily: "initial" }}>
              Jazmira 19y.o. I am currently studying at Makers, hard skills
              pumped and of course soft skills too. I'm finishing school and I'm
              going to go to Korea.
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AboutMe;
