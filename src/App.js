import "./App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Todo from "./Tools/ToDo/Todo";
import Calculator from "./Tools/Calculator/Calculator";
import TicTacToe from "./Games/Tic-Tac-Toe/TicTacToe";
import Quiz from "./Games/Quiz/Quiz";
import { Routes, Route, Navigate } from "react-router-dom";
import RockPaperScissors from "./Games/Rock-Paper-Scissor/RockPaperScissors";
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/todo" element={<Todo/>} />
        <Route exact path="/calculator" element={<Calculator/>} />
        <Route exact path="/tictactoe" element={<TicTacToe/>} />
        <Route exact path="/quiz" element={<Quiz/>} />
        <Route exact path="/rockpaperscissors" element={<RockPaperScissors/>}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
export default App;
