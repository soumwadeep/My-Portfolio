import React from "react";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import SideNav from "./Components/SideNav";
import Footer from "./Components/Footer";
import Logo from "./Images/logo.png";
const Home = () => {
  return (
    <>
      <Header />
      <NavBar />
      <div className="container mt-5">
        <div className="row">
          <SideNav />
          <div className="col-sm-8">
            <h2>About My Website:</h2>
            <center>
              <img src={Logo} alt="logo" className="imgreslogol" />
            </center>
            <p>
              My Website Is A Web Application That Can Be Used To Solve Your
              Personal Doubt On Any Topic.I Have Provided Different Tech Tools
              For Better Doubt Solving Such As Calculator To Calculate Almost
              All Equations,Various Converters Such As Binary To Hexadecimal For
              Fast Calculations,Todo For Maintaining Your Daily Routine's Works
              etc..I Have Also Added Various Games Which Can Be Used To Relax
              And Play With Your Friends Such As Tic-Tac-Toe, Quiz etc.
            </p>
            <h2 className="mt-5">My Vision:</h2>
            <p>
              To Create This Website The Ultimate Website Which Can Solve Almost
              Every Problems With The Presence Of Suitable Tools.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
