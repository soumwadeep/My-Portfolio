import React from "react";
import Header from "../../Components/Header";
import NavBar from "../../Components/NavBar";
import SideNav from "../../Components/SideNav";
import Footer from "../../Components/Footer";
const MusicPlayer = () => {
  return (
    <>
      <Header />
      <NavBar />
      <div className="container mt-5">
        <div className="row">
          <SideNav />
          <div className="col-sm-8">
            <h2>Listen Now</h2>
            <p>Best EDM Musics Ever!</p>
            <center>
              <h3>Enjoy Our Songs!</h3>
              <iframe src="https://soumwadeepguha.dev/Tools/Music/index.html" title="Music Player" className="musicframe" scrolling="no"></iframe>
            </center>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MusicPlayer;
