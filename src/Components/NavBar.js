import React from "react";
import icon from "../Images/icon.png";
import {NavLink} from 'react-router-dom';
const NavBar = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
          <img src={icon} alt="icon" width="25" height="25" className="d-inline-block align-text-center"/> Soumwadeep Guha
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className={(navData) => navData.isActive ? "nav-link-active" : "navbar-nav-link"}  aria-current="page" to="/">
                Home
              </NavLink>
              <li className="nav-item dropdown">
                <NavLink className="navbar-nav-link dropdown-toggle" to="" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  My Games
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><NavLink className={(navData) => navData.isActive ? "nav-link-active" : "dropdown-item"} to="/tictactoe">Tic-Tac-Toe</NavLink></li>
                  <li><NavLink className={(navData) => navData.isActive ? "nav-link-active" : "dropdown-item"} to="/quiz">Quiz</NavLink></li>
                  <li><NavLink className={(navData) => navData.isActive ? "nav-link-active" : "dropdown-item"} to="/rockpaperscissors">Rock Paper Scissors</NavLink></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="navbar-nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 My Tools
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><NavLink className={(navData) => navData.isActive ? "nav-link-active" : "dropdown-item"} to="/todo">Todo</NavLink></li>
                  <li><NavLink className={(navData) => navData.isActive ? "nav-link-active" : "dropdown-item"} to="/calculator">Calculator</NavLink></li>
                  <li><NavLink className={(navData) => navData.isActive ? "nav-link-active" : "dropdown-item"} to=" ">Coming Soon</NavLink></li>
                </ul>
              </li>
              <a href="https://blogs.soumwadeepguha.dev/"target="_black" rel="noreferrer" className="navbar-nav-link">My Blogs</a>
              <NavLink className={(navData) => navData.isActive ? "nav-link-active" : "navbar-nav-link"} to="/about">About Me</NavLink>
              <NavLink className={(navData) => navData.isActive ? "nav-link-active" : "navbar-nav-link"} to="/contact">Contact Me</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
