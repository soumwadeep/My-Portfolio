import React from 'react'
import logo from '../Images/logo.png'
import {NavLink} from 'react-router-dom';

const SideNav = () => {
  return (
    <>
      <div className="col-sm-4">
        <h2>Welcome To My Website</h2>
        <img src={logo} className="imgreslogo" alt="logo"/>
        <p>" It's Harder To Read Code Than To Write It! "</p>
        <h3 className="mt-4">Latest Updates</h3>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
          <a href="https://blogs.soumwadeepguha.dev/"target="_black" rel="noreferrer" className="nav-link active">My Blogs</a>
          </li>
        </ul>
        <p>Tools:</p>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <NavLink className="nav-link active" to="/todo">Todo</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/calculator">Calculator</NavLink>
          </li>
        </ul>
        <p>Games:</p>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <NavLink className="nav-link active" to="/tictactoe">Tic-Tac-Toe</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/quiz">Play Quiz</NavLink>
          </li>
        </ul>
        <hr className="d-sm-none"/>
      </div>
    </>
  )
}

export default SideNav
