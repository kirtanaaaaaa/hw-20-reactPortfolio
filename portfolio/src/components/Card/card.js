import React from "react";
import "./card.css";
import { Card, CardImg, CardText, CardBody,Button} from 'reactstrap';
import { Container} from 'reactstrap';
import calorie from "./calorie.jpg";
import renovation from "./renovation.jpg";
import daily from "./daily.jpg";
import weather from "./weather.png";
import readMe from "./readMe.jpeg";
import quiz from "./quiz.png";

const card = (props) => {
  return (
    <Container>
      <Card className = "card">
        <CardImg top width="40%" src={calorie} alt="Calorie Tracker" />
        <CardBody>
          <CardText>Makes it easy to keep track of your daily calorie intake! </CardText>
          <a href = "https://kirtanaaaaaa.github.io/project-one/"> <Button className = "button1">Calorie Tracker</Button> </a>
        </CardBody>
      </Card>
      <Card className = "card">
        <CardImg top width="50%" src={renovation} alt="Renovation Hunter" />
        <CardBody>
          <CardText>Connects homeowners to contractors for any renovations! </CardText>
          <a href = "https://lit-woodland-41729.herokuapp.com/"> <Button className="button1">Renovation Hunter</Button> </a>
        </CardBody>
      </Card>
      <Card className = "card1">
    <CardImg top width="60%" src={daily} alt="Daily Planner" />
        <CardBody>
          <CardText>Efficient way to make a schedule! </CardText>
          <a href = "https://kirtanaaaaaa.github.io/hw-5-workScheduler/"> <Button className="button1">Daily Planner</Button> </a>
        </CardBody>
      </Card>
      <Card className = "card2">
        <CardImg top width="23%" src={weather} alt="Weather" />
        <CardBody>
          <CardText>Provides the current weather and 5 day forecast!</CardText>
          <a href = "https://kirtanaaaaaa.github.io/hw-6-weatherDashboard/"><Button className="button1">Weather</Button> </a>
        </CardBody>
      </Card>
      <Card className = "card3">
        <CardImg top width="25%" src={readMe} alt="ReadMe" />
        <CardBody>
          <CardText>An easy and quick way to create your own readMe! </CardText>
          <a href = "https://github.com/kirtanaaaaaa/hw-9-readMeGenerator"><Button className="button1">readMe generator</Button></a>
        </CardBody>
      </Card>
      <Card className = "card4">
        <CardImg top width="20%" src={quiz} alt="quiz" />
        <CardBody>
          <CardText>Test your coding knowledge!</CardText>
          <a href = "https://kirtanaaaaaa.github.io/hw-4-codequiz/"><Button className="button1">Coding Quiz</Button> </a>
        </CardBody>
      </Card>
    </Container>
  );
};

export default card;
          
