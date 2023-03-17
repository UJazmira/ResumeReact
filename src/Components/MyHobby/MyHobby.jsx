import React from "react";
import { Card } from "react-bootstrap";

const MyHobby = () => {
  return (
    <div className="d-flex justify-content-around container mt-4">
      <div>
        <Card
          style={{
            marginRight: "20px",
            marginBottom: "20px",
          }}
        >
          <Card.Body>
            <img
              style={{
                margin: "10px",
                borderRadius: "20px",
                border: "2px solid purple",
              }}
              width={200}
              src="https://i.pinimg.com/564x/65/63/e2/6563e20e1300a82ec3f4fcd6cd8573a4.jpg"
            />
            <img
              style={{ borderRadius: "20px", border: "2px solid purple" }}
              width={150}
              src="https://i.pinimg.com/564x/6b/77/af/6b77af08debf3f5ed41ba0d5ee8ca160.jpg"
              alt=""
            />
            <Card.Title>Dorama:</Card.Title>
            <Card.Subtitle style={{ fontFamily: "initial" }}>
              Смотреть дорамы ._.
            </Card.Subtitle>
            <Card.Text style={{ fontFamily: "serif" }}></Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card
          style={{
            marginRight: "20px",
            marginBottom: "20px",
          }}
        >
          <Card.Body>
            <img
              style={{ borderRadius: "20px", border: "2px solid red" }}
              width={200}
              src="https://i.pinimg.com/1200x/1c/24/b5/1c24b58e05759a32841d60527676cb54.jpg"
              alt="error"
            />
            <Card.Title>Music:</Card.Title>
            <Card.Subtitle style={{ fontFamily: "initial" }}>
              Слушать музыку ;)
            </Card.Subtitle>
            <Card.Text>
              Miyagi, The Weeknd,Xcho, BTS, StrayKids,BlackPinck,Twice,и т.д.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card
          style={{
            marginBottom: "20px",
            marginRight: "20px",
          }}
        >
          <Card.Body>
            <img
              width={200}
              style={{ borderRadius: "20px", border: "2px solid orange" }}
              src="https://i.pinimg.com/564x/67/c2/99/67c299ac5c74524e0709e66470a2a9db.jpg"
            />
            <Card.Title>Dance:</Card.Title>
            <Card.Subtitle style={{ fontFamily: "initial" }}>
              Танцевать в свободное время ;)
            </Card.Subtitle>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card style={{ marginBottom: "20px" }}>
          <Card.Body>
            <img
              style={{ borderRadius: "20px", border: "2px solid green" }}
              width={150}
              src="https://i.pinimg.com/564x/4b/63/f4/4b63f4a85a1f389183ca50e3d0f7321b.jpg"
            />
            <Card.Title>Photograph:</Card.Title>
            <Card.Subtitle style={{ fontFamily: "initial" }}>
              Фотографировать самое интересное ;)
            </Card.Subtitle>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default MyHobby;
