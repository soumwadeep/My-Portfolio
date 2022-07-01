import React from 'react'
import todoimg from '../Images/todo.png'
import tictactoeimg from '../Images/tictactoe.png'
import calcimg from '../Images/calc.png'
import quizimg from '../Images/quiz.png'
import sdgimg from '../Images/sdgcloudserver.png'
import rockimg from '../Images/rockpaper.png'
import musicimg from '../Images/musicplayer.png'
const Projects = () => {
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={todoimg} className="img-fluid rounded-start" alt="todo"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <a href="https://www.soumwadeepguha.dev/todo"target="_blank" rel="noreferrer"><h5 className="card-title">1. Todo Web App</h5></a>
              <p className="card-text">It's A Simple Todo App Which Can Be Used To Store Your Routine And Work Accordingly.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={tictactoeimg} className="img-fluid rounded-start" alt="tictactoe"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
            <a href="https://www.soumwadeepguha.dev/tictactoe"target="_blank" rel="noreferrer"><h5 className="card-title">2. Tic-Tac-Toe Web Game</h5></a>
              <p className="card-text">When We Get Bored Of Our Daily Work Loads.We Can Play This Simple Renowned Game With Our Friends To Chill Out And Get Refreshed.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={calcimg} className="img-fluid rounded-start" alt="calc"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
            <a href="https://www.soumwadeepguha.dev/calculator"target="_blank" rel="noreferrer"><h5 className="card-title">3. Scientific Calculator</h5></a>
              <p className="card-text">When We Get Caught up With Some Difficult Sums We Can Use This Scientific Calculator To Solve The Problem Instantly.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={quizimg} className="img-fluid rounded-start" alt="quiz"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
            <a href="https://www.soumwadeepguha.dev/quiz"target="_blank" rel="noreferrer"><h5 className="card-title">4. Quiz Web App</h5></a>
              <p className="card-text">We All Know That We Love To Play Quizzes Especially Of The Topic Of General Knowledge.So, Here We Can Play Quiz On GK With Infinite Questions Which Get's Fetched From API.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={rockimg} className="img-fluid rounded-start" alt="rock paper"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
            <a href="https://www.soumwadeepguha.dev/rockpaperscissors"target="_blank" rel="noreferrer"><h5 className="card-title">5. Rock Paper & Scissors Web Game</h5></a>
              <p className="card-text">When We Get Bored Of Our Daily Work Loads.We Can Play This Simple Renowned Game With Our Friends To Chill Out And Get Refreshed.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={musicimg} className="img-fluid rounded-start" alt="music player"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
            <a href="https://www.soumwadeepguha.dev/music"target="_blank" rel="noreferrer"><h5 className="card-title">6. Music Player</h5></a>
              <p className="card-text">We Are All Fond Of Wonderful Songs Right? So, My Music Player Consists Of Best EDM Musics Of Famous Artists. By Listening To The Songs We Can Get Motivated To Work Prperly And Also We Can Relax By Listening To The Relaxing Songs.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={sdgimg} className="img-fluid rounded-start" alt="sdg cloud server"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
            <a href="https://sdgcloudserver.com/"target="_blank" rel="noreferrer"><h5 className="card-title">7. Sdg Cloud Server</h5></a>
              <p className="card-text">Sdg Cloud Server Is Created To Provide All The Users With The Facility Of Getting Access To All The Latest Documents,Videos,Music,Softwares,Games And More.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects