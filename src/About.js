import React from "react";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import AboutSideNav from "./Components/AboutSideNav";
import Footer from "./Components/Footer";
import Author from "./Images/sit.jpg";
import SkillSet from "./Components/SkillSet";
import Experiences from "./Components/Experiences";
import Projects from "./Components/Projects";
import Certificates from "./Components/Certificates";
const About = () => {
  return (
    <>
      <Header />
      <NavBar />
      <div className="container mt-5">
        <div className="row">
          <AboutSideNav />
          <div className="col-sm-8">
            <section id="gotop">
              <h2>About Me:</h2>
              <center>
                <img src={Author} alt="author" className="imgresauthur" />
              </center>
              <p>
                I Am Soumwadeep Guha , Currently A 3rd Year Student Who Is
                Persuing BTech In Computer Science And Engineering.I Am
                Currently Working On This Website As A Student.I Am Good In Web
                Development And Had Received Various Prizes In My Career In The
                Field Of Web Development.To Be Precise I Am A Man Who Have A
                High Potential To Gain Knowledge Of Various Tech Fields.
              </p>
            </section>
            <section id="skills">
              <h2 className="mt-5">My Skills:</h2>
              <SkillSet />
            </section>
            <section id="experiences">
              <h2 className="mt-5">My Experiences:</h2>
              <Experiences />
            </section>
            <section id="certificates">
              <h2 className="mt-5">My Certificates:</h2>
              <Certificates />
            </section>
            <section id="projects">
              <h2 className="mt-5">My Projects:</h2>
              <Projects />
            </section>
            <div className="gotopbut">
              <a
                className="btn btn-outline-warning btn2"
                href="#gotop"
                title="Go To Top"
              >
                <i className="fa fa-chevron-circle-up" aria-hidden="true"></i>.
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
