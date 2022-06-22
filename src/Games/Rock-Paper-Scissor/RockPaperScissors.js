import React from "react";
import Header from "../../Components/Header";
import NavBar from "../../Components/NavBar";
import SideNav from "../../Components/SideNav";
import Footer from "../../Components/Footer";
const RockPaperScissors = () => {
  return (
    <>
      <Header />
      <NavBar />
      <div className="container mt-5">
        <div className="row">
          <SideNav />
          <div className="col-sm-8">
            <h2>Play Now</h2>
            <h5>Instructions:</h5>
            <p>This Game Provides You 10 Moves.The One Who Will Get The Highest Wins Will Be Declared As Winner And Then You Can Again Play The Game By Clicking Restart Game.</p>
            <p>Choose Your Choice Each Time From The 3 Buttons To Play.</p>
            <center>
              <h3>Let The Game Begins!!!</h3>
              <iframe src="https://soumwadeepguha.dev/Games/RockPaperScissor/rockplay.html" title="Rock Paper Scissor Playground" className="rockframe" scrolling="no"></iframe>
            </center>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RockPaperScissors;
