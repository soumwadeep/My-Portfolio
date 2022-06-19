import React from 'react'
import pic from '../Images/soumwadeep.png'
const AboutSideNav = () => {
  return (
    <>
       <div className="col-sm-4">
        <h2>Welcome To My Portfolio!</h2>
        <img src={pic} className="imgrespic" alt="profile pic"/>
        <h3 className="mt-4">Archives:</h3>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <a className="btn btn-success" href="#skills"><i className="fa fa-code" aria-hidden="true"></i>My Skills</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-success" href="#experiences"><i className="fa fa-graduation-cap" aria-hidden="true"></i>My Experiences</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-success" href="#certificates"><i className="fa fa-briefcase" aria-hidden="true"></i>My Certificates</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-success" href="#projects"><i className="fa fa-briefcase" aria-hidden="true"></i>My Projects</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-success" href="https://docs.google.com/document/d/e/2PACX-1vSCLwqNW9kaMUIgSigpW7sLJCyOx0iWIAC6OLKKYAONkejfWCL2xM11JNr2AKS8y0tP3U50mhRE6jGG/pub"target="_blank"><i className="fa fa-file-text" aria-hidden="true"></i>My Resume</a>
          </li>
        </ul>
        <h3 className="mt-4">Links:</h3>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <a className="btn btn-success" href="https://github.com/soumwadeep"target="_blank" rel="noreferrer"><i className="fa fa-github" aria-hidden="true"></i>Github</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-success" href="https://www.linkedin.com/in/soumwadeep-guha-5b60031bb/"target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square" aria-hidden="true"></i>LinkedIn</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-success" href="https://www.youtube.com/c/soumwadeepguha"target="_blank" rel="noreferrer"><i className="fa fa-youtube-square" aria-hidden="true"></i>Youtube</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-success" href="https://www.facebook.com/soumwadeep.guha"target="_blank" rel="noreferrer"><i className="fa fa-facebook-square" aria-hidden="true"></i>Facebook</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-success" href="https://twitter.com/SoumwadeepGuha"target="_blank" rel="noreferrer"><i className="fa fa-twitter-square" aria-hidden="true"></i>Twitter</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-success" href="https://www.instagram.com/soumwadeep/"target="_blank" rel="noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i>Instagram</a>
          </li>
        </ul>
        <hr className="d-sm-none"/>
      </div> 
    </>
  )
}

export default AboutSideNav