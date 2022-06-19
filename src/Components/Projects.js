import React from 'react'
import todoimg from '../Images/todo.png'
import tictactoeimg from '../Images/tictactoe.png'
import calcimg from '../Images/calc.png'
import quizimg from '../Images/quiz.png'
const Projects = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={todoimg} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Todo Web App</h5>
                <p>It's A Simple Todo App Which Can Be Used To Store Your Routine And Work Accordingly.</p>
              </div>
          </div>
          <div className="carousel-item">
            <img src={tictactoeimg} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Tic-Tac-Toe Web Game</h5>
                <p>When We Get Bored Of Our Daily Work Loads.We Can Play This Simple Renowned Game With Our Friends To Chill Out And Get Refreshed.</p>
              </div>
          </div>
          <div className="carousel-item">
            <img src={calcimg} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Scientific Calculator</h5>
                <p>When We Get Caught up With Some Difficult Sums We Can Use THis Scientific Calculator To Solve The Problem Instantly.</p>
              </div>
          </div>
          <div className="carousel-item">
            <img src={quizimg} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Quiz Web App</h5>
                <p>We All Know That We Love To Play Quizes Especially Of The Topic Of General Knowledge.So, Here We Can Play Quiz On GK WIth Infinite Questions Which Get's Fetched From API.</p>
              </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Projects