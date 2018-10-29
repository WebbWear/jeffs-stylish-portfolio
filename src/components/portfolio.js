import React from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


  const PortfolioSection = (props) => {
    return (
      <div className="cards">
        <Card>
          <CardImg top width="100%" src="../img/pcl.png" alt="Card image cap" />
          <CardBody>
            <CardTitle>Capstone Project</CardTitle>
            <CardSubtitle>Capstone project from Suncoast Developers Guild</CardSubtitle>
            <CardText>My Capstone project is to solve a communication problem and be able to automated all reminders with my limo company. Using React fronend and Ruby on Rails for the backend. Please alow 30 seconds for servers to fire up.</CardText>
            <Button a href="http://www.palmaceialimo.com/">Link to site</Button>
          </CardBody>
        </Card>
        <Card>
        <CardImg top width="100%" src="./img/lms.png" alt="Card image cap" />
          <CardBody>
            <CardTitle>WordPress</CardTitle>
            <CardSubtitle>Launch My Shirt</CardSubtitle>
            <CardText>Just a simple WordPress site I created to Blog about the shirts I buy.</CardText>
            <Button a href="https://www.launchmyshirt.com/">Link to site</Button>
          </CardBody>
        </Card>
      </div>
    );
  };

export default PortfolioSection;
