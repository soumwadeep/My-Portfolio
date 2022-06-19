import React from "react";
import Header from "../../Components/Header";
import NavBar from "../../Components/NavBar";
import SideNav from "../../Components/SideNav";
import Footer from "../../Components/Footer";
const Calculator = () => {
  return (
    <>
      <Header />
      <NavBar />
      <div className="container mt-5">
        <div className="row">
          <SideNav />
          <div className="col-sm-8">
            <h2>Scientific Calculator</h2>
            <p>
              Solve All Your Scientific Calculations Using Our Simple Scientific
              Calculator:
            </p>
            <center>
              <iframe
                src="https://soumwadeepguha.dev/Tools/ScientificCalculator/calc.html"
                scrolling="no"
                title="Scientific Calculator"
                className="calcframe"
              ></iframe>
            </center>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Calculator;
