import React from "react";
import "../styles/Home.css";
import "../styles/main.css";

export default function Home() {
  return (
    <div>
      <section>
        <div className="section1-container">
          <img className="home-img2" src="workout2.jpg" alt="" />
          <p
            className="info-textbox"
            style={{ fontSize: "1.75rem", textAlign: "center" }}
          >
            Track it is a web application that allows you to input the muscles
            you want to workout, while we handle finding you the exercises that
            can do that. Taking the stress off the user so that they can focus
            on working out and Track it takes care of the rest.
          </p>
        </div>
      </section>
      <section>
        <div className="section2-container">
          <p
            className="info-textbox"
            style={{ fontSize: "1.75rem", textAlign: "center" }}
          >
            Built to help target major muscle groups including chest, arms,
            legs, back, etc. We have an exercise pool that ranges from beginner
            level up towards advanced and is constantly expanding, meaning there
            is something for everyone no matter your experience level!
          </p>
          <img className="home-img2" src="workout3.jpg" alt="" />
        </div>
      </section>
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
