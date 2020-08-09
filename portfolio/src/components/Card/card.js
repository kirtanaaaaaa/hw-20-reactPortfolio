import React from "react";
import "./card.css";
import {
    Card, CardImg, CardText, CardBody,Button} from 'reactstrap';

const card = (props) => {
  return (
    <div>
      <Card className = "card">
        <CardImg top width="50%" src="/assets/318x180.svg" alt="Calorie Tracker" />
        <CardBody>
          <CardText>Makes it easy to keep track of your daily calorie intake! </CardText>
          <Button className = "button1">Calorie Tracker</Button>
        </CardBody>
      </Card>
      <Card className = "card">
        <CardImg top width="50%" src="/assets/318x180.svg" alt="Renovation Hunter" />
        <CardBody>
          <CardText>Connects homeowners to contractors for any renovations! </CardText>
          <Button className="button1">Renovation Hunter</Button>
        </CardBody>
      </Card>
      <Card className = "card1">
        <CardImg top width="50%" src="/assets/318x180.svg" alt="Daily Planner" />
        <CardBody>
          <CardText>Efficient way to make a schedule! </CardText>
          <Button className="button1">Daily Planner</Button>
        </CardBody>
      </Card>
      <Card className = "card2">
        <CardImg top width="50%" src="/assets/318x180.svg" alt="Weather" />
        <CardBody>
          <CardText>Provides the current weather and 5 day forecast!</CardText>
          <Button className="button1">Weather</Button>
        </CardBody>
      </Card>
      <Card className = "card3">
        <CardImg top width="50%" src="/assets/318x180.svg" alt="ReadMe" />
        <CardBody>
          <CardText>An easy and quick way to create your own readMe! </CardText>
          <Button className="button1">readMe generator</Button>
        </CardBody>
      </Card>
      <Card className = "card4">
        <CardImg top width="50%" src="/assets/318x180.svg" alt="quiz" />
        <CardBody>
          <CardText>Test your coding knowledge!</CardText>
          <Button className="button1">Coding Quiz</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default card;
          
