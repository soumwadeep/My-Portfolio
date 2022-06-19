import React from "react";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import SideNav from "./Components/SideNav";
import Footer from "./Components/Footer";
const Contact = () => {
  const formSubmit = () => 
  {
    alert("Thanks For Sending Us Your Message ! Our Team Will Soon Contact You ! Redirecting You To Our Home Page...");
  }
  return (
    <>
      <Header />
      <NavBar />
      <div className="container mt-5">
        <div className="row">
          <SideNav />
          <div className="col-sm-8">
          <h2>Get In Touch</h2>
          <h5>Want To Get In Touch? We'd Love To Hear From You.Just Fill This Form With Your Queries!</h5>
          <form action="https://formsubmit.co/e827bd8fd2a95d7e7576547bb1aad862" onSubmit={formSubmit} method="POST">
            <div>
              <input type="hidden" name="_subject" value="New Contact Form Submission On Your Ai Helper!"/>
              <input type="hidden" name="_template" value="table"/>
              <input type="hidden" name="_captcha" value="false"/>
              <input type="hidden" name="_next" value="https://www.soumwadeepguha.dev/"/>
            </div>
            <div className="mb-3">
              <label for="name" className="form-label">Your Name:</label>
              <input type="text" className="form-control" name="name" required/>
            </div>
            <div className="mb-3">
              <label for="name" className="form-label">Your Email:</label>
              <input type="email" className="form-control" name="email" required/>
            </div>
            <div className="mb-3">
              <label for="mobile" className="form-label" >Your Mobile No:</label>
              <input type="tel" className="form-control" name="mobile" required/>
            </div>
            <div className="mb-3">
              <label for="message">Your Message:</label>
              <textarea className="form-control" name="message" required></textarea>
            </div>
            <button type="submit" className="btn btn-outline-success">Send Now</button>
          </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
