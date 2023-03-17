import React from "react";
import Card from "react-bootstrap/Card";
const ResumeList = () => {
  return (
    <div>
      <div>
        <Card style={{ margin: "30px" }}>
          <Card.Body>
            <img width={350} src="https://makers.kg/static/logo.svg" />
          </Card.Body>
        </Card>
        <Card style={{ margin: "30px", backgroundColor: "darkgray" }}>
          <Card.Body>
            <Card.Title>Почему я выбрала Makers:</Card.Title>
            <Card.Text style={{ fontFamily: "initial" }}>
              Почему Makers, потому что 8часов обучения где можем как
              самостоятельно так и с помощью младших ментаров решать таски и
              задания. Смотрела другие курсы где обучают 3-4часа в день и 3 раза
              в неделю это не выгодно и не эхективно.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ margin: "30px", backgroundColor: "darkgray" }}>
          <Card.Body>
            <Card.Title>Что я получила в Makers:</Card.Title>
            <Card.Text style={{ fontFamily: "initial" }}>
              Самое главное наверно это уверенность и мативация учится дальше,
              много новых знакомств,поддержки со стороны одногрупников, классные
              ментора которые в любде время готовы помочь с решением,
              общительный колектив с которым можно найти общий язык сразу;)
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ResumeList;
