import React from "react";
import "../styles/Home.css";
import "../styles/main.css";
import Footer from "./Footer";
import Header from "./Header";

export default function Home() {
  return (
    <div>
      <Header />
      <section>
        <div className="section1-container">
          <img className="home-img2" src="workout2.jpg" alt="" />
          <p style={{ fontSize: "2rem" }}>
            Track it is a web application that allows you to input your desired
            muscles to workout and we give you the workouts. Feeling like there
            is something taking care of your exercises takes the burden off of
            you and lets us take care of the rest.
          </p>
        </div>
      </section>
      <section>
        <div className="section2-container">
          <p style={{ fontSize: "2rem" }}>
            Track it is a new program and we don't have any memberships yet, but
            that will come in the future! Help us help you get better workouts
            and don;t forget to review us online.
          </p>
          <img className="home-img2" src="workout3.jpg" alt="" />
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
