import React from "react";
import "../styles/Home.css";
import "../styles/main.css";
import Card from "react-bootstrap/Card";
import Header from "./Header.js"

export default function Home() {
  return (
    <div>
      <Header/>
      <section>
        <div className="section1-container">
          <img className="home-img2" src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80" alt="" />
          <Card className="home-info-card">
            <Card.Title className="info-card-title">What is it?</Card.Title>
            <br />
            <Card.Subtitle className="info-card-info">Track it is a web application that allows you to input the specific muscles you want to workout, while we handle finding you the exercises that can do that.</Card.Subtitle>
          </Card>
        </div>
      </section>
      <section>
        <div className="section2-container">
        <Card className="home-info-card">
            <Card.Title className="info-card-title">Who's it for?</Card.Title>
            <br />
            <Card.Subtitle className="info-card-info"> Everyone! We have an exercise pool that ranges from beginner level up towards advanced and is constantly expanding, meaning there is something for everyone no matter your experience level!</Card.Subtitle>
          </Card>
          <img className="home-img2" src="workout3.jpg" alt="" />
        </div>
      </section>
      <section>
        <br />
      <Card className="home-info-card-two">
            <Card.Title className="info-card-title">About Us</Card.Title>
            <br />
            <Card.Subtitle className="info-card-about">We're just 3 guys that love to workout. Everyone should workout and we knew that the surplus of info out there deters people from even thinking about starting! We realized that saving the time for people to figure out what to do can go a long way and thats just what we've done here. Laziness is the enermy of success, and we just want to help you win. </Card.Subtitle>
          </Card>
      </section>
      <br />
      <section>
        <div className="footer-img-one">
          <img className="motiv-img" src="do-great.png" alt="" />
        </div>
      </section>
      <section>
        <div className="section3-container">
          <p
            className="info-textbox"
            style={{ fontSize: "1.25rem", textAlign: "center" }}
          >
            Track it is a new program and is currently without any memberships,
            but they will be implemented in the near future! Help us help you
            improve your lifestyle and if you enjoy Track it then don’t forget
            to leave us a review!
          </p>
        </div>
      </section>
    </div>
  );
}
