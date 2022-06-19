import React from "react";
import Header from "../../Components/Header";
import NavBar from "../../Components/NavBar";
import SideNav from "../../Components/SideNav";
import Footer from "../../Components/Footer";
const Quiz = () => {
  return (
    <>
      <Header />
      <NavBar />
      <div className="container mt-5">
        <div className="row">
          <SideNav />
          <div className="col-sm-8">
            <h2>Play Quiz</h2>
            <p>
              Our Quiz Consists Of 10 Questions. Each Question Has 4 Options.The Quiz Questions Are Based On General Knowledge.The Questions Can Be Easy, Medium Or Difficult.If You Get A Question Correct Then You Will Get 10 Points.If You Get A Question Wrong Then You Will Get 0 Points.
            </p>
            <center><h3>Best Of Luck!</h3></center>
            <iframe
              src="https://soumwadeepguha.dev/Games/QuizGame/game.html"
              title="Quiz Playground"
              className="quizframe"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Quiz;
