import React, { useState } from 'react';
import './App.css';
import './design.css';
import Navbar from './Navbar';
import LeftPanel from './LeftPanel';
import QuizPanel from './QuizPanel';
import Check from './Check';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);
  const quest = [
    {
    question: "Knot is a unit of _________?",
    option1: "Speed",
    option2: "Distance",
    option3: "Depth",
    option4: "Acceleration",
    answer: "Speed"
  },
  {
    question: "Which Article is related to 'Abolition of Untouchability'?",
    option1: "Article 20",
    option2: "Article 19",
    option3: "Article 18",
    option4: "Article 17",
    answer: "Article 17"
  },
  {
    question: "English is the official language of _________.",
    option1: "Chandigarh",
    option2: "Dadra and Nagar Haveli",
    option3: "Daman and Diu",
    option4: "Delhi",
    answer: "Chandigarh"
  }
  ]
  const [questLeft,updatequestLeft] = useState(true);
const incrementQuest = () => {
  if (count < quest.length - 1) {
    setCount(count + 1);
    for (let i = 0; i < 4; i++) {
      document.getElementById(`opt${i}`).style.border = "";
      document.getElementById(`opt${i}`).disabled = false;
    }
    document.getElementById('quiz-box1').style.animation = "";
		document.getElementById('quiz-box2').style.animation = "";
  }
  if(count === quest.length - 1) {
    updatequestLeft(false);
  }
}
const decrementQuest = () => {
  if (count <= quest.length && count > 0)
    setCount(count - 1);
    for (let i = 0; i < 4; i++) {
      document.getElementById(`opt${i}`).style.border = "";
      document.getElementById(`opt${i}`).disabled = false;
    }
    document.getElementById('quiz-box1').style.animation = "";
    document.getElementById('quiz-box2').style.animation = "";
}
const [score, setScore] = useState(0);
let count_length = [count + 1, quest.length];
const updateScore = (correct, wrong) => {
  if (correct)
    setScore(score + 1);
  else
    setScore(score - 1);
}
const checkScore = () => {
  return (<h1>Your Total Score is: {score}</h1>);
}
return (
     <Router basename='/'>
      <Navbar />
      <div className='main_box container-fluid'>
      <LeftPanel />
      <Routes>
      <Route path='/' element={<QuizPanel count = {count} fetchQuestion = {quest} count_length={count_length} questLeft = {questLeft} score={updateScore} inc={incrementQuest} dec={decrementQuest} />} />
      <Route path="Check" element={<Check checkScore={checkScore} />} />
    </Routes>
    </div>
  </Router>
);
}

export default App;
