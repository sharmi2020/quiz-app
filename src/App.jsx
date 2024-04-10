import "./App.css";
import{useState} from "react";
import questions from "./Constants/Questions.json";
import  Question from './Components/questions.jsx';
import Result from "./Components/results.jsx";

const App = () => {
  const[currentQ,setCurrentQ]=useState(0);
  const[currentA,setCurrentA]=useState([]);

  const handle =(isCorrect)=>{
    setCurrentQ(currentQ+1);
    setCurrentA([...currentA,isCorrect]);
  }
  
  const resetQuiz=()=>{
    setCurrentQ(0);
    setCurrentA([])
  }
  return (
    <div className="App">
      <h1>Quiz App</h1>
      {
      currentQ<questions.length &&(
      <Question  question ={questions[currentQ]}
      onAnswerClick={handle}
      />
      )}
{
  currentQ===questions.length &&(
      <Result
          userAnswers={currentA}
          questions={questions}
          resetQuiz={resetQuiz}
      />
      )}
      </div>
  )
}

export default App