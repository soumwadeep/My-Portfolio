import React from "react";
import Header from "../../Components/Header";
import NavBar from "../../Components/NavBar";
import SideNav from "../../Components/SideNav";
import Footer from "../../Components/Footer";
const TicTacToe = () => {
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
            <p>
              Game Starts By Just <b>Tapping</b> On Box.
              <b>First Player</b> Starts As <b>Player X</b>. And
              <b>Second Player</b> Starts As <b>Player O</b>.
            </p>
            <center>
              <h3>Let The Game Begins!!!</h3>
              <br />
              <iframe src="https://soumwadeepguha.dev/Games/TicTacToe/TicPlay.html" title="Tic Tac Toe Playground" className="ticframe" scrolling="no"></iframe>
            </center>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TicTacToe;
