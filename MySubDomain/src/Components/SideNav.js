import React from 'react'
import { NavLink } from 'react-router-dom';

const SideNav = () => {
  return (
    <>
      <div className="col-sm-4">
      <h3 className='mb-4'>Daily Quote:</h3>
        <div align="center">
          <iframe align="center" src="//widget.calendarlabs.com/v1/quot.php?cid=101&ver=1.2&uid=4845709568&c=random&l=en&cbg=009900&cb=1&cbc=666600&cf=calibri&cfg=FFFFFF&qfs=i&qta=left&tfg=FFFFFF&tfs=bi&afc=FFFFFF&afs=i" width="188" height="210" title='Quote Of The Day'>
          </iframe>
        </div>
        <h3 className="mt-4 mb-4">Latest Updates:</h3>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <a href="https://blogs.soumwadeepguha.dev/" target="_black" rel="noreferrer" className="nav-link active">My Blogs</a>
          </li>
        </ul>
        <h4 className="mt-3 mb-3">Tools:</h4>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <NavLink className="nav-link active" to="/todo">Todo</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/calculator">Calculator</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/music">Music Player</NavLink>
          </li>
        </ul>
        <h4 className="mt-3 mb-3">Games:</h4>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <NavLink className="nav-link active" to="/tictactoe">Tic-Tac-Toe</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/rockpaperscissors">Rock Paper Scissors</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/quiz">Play Quiz</NavLink>
          </li>
        </ul>
        <hr className="d-sm-none" />
      </div>
    </>
  )
}

export default SideNav
