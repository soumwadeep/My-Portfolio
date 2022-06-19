import React from "react";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import AboutSideNav from "./Components/AboutSideNav";
import Footer from "./Components/Footer";
import Author from "./Images/sit.jpg";
import SkillSet from "./Components/SkillSet";
import Experiences from "./Components/Experiences";
import Projects from "./Components/Projects";
const About = () => {
  return (
    <>
      <Header />
      <NavBar />
      <div className="container mt-5">
        <div className="row">
          <AboutSideNav />
          <div className="col-sm-8">
            <section></section>
            <h2 id="gotop">About Me:</h2>
            <center>
              <img src={Author} alt="author" className="imgresauthur" />
            </center>
            <p>
              I Am Soumwadeep Guha , Currently A 3rd Year Student Who Is
              Persuing BTech In Computer Science And Engineering.I Am Currently
              Working On This Website As A Student.I Am Good In Web Development
              And Had Received Various Prizes In My Career In The Field Of Web
              Development.To Be Precise I Am A Man Who Have A High Potential To
              Gain Knowledge Of Various Tech Fields.
            </p>
            <h2 className="mt-5">My Skills:</h2>
            <section id="skills"><SkillSet/></section>
            <h2 className="mt-5">My Experiences:</h2>
            <section id="experiences"><Experiences/></section>
            <h2 className="mt-5">My Projects:</h2>
            <section id="projects"><Projects/></section>
            <div className="gotop"><a className="btn btn-outline-warning btn2" href="#gotop" title="Go To Top"><i class="fa fa-chevron-circle-up" aria-hidden="true"></i>.</a></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
