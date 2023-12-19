import { useState } from "react";
import ErrorMessage from "../ErrorMassage/ErrorMassage";
import './Question.css';
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
const Question =(
{
    currQuestion,
            setCurrQuestion,
            question,
            option,
            correct,
            score,
            setScore,
            setQuestion
}
)=>{
    const [select,setSelect] =  useState();
    const [error,setError] =  useState(false);
    const navigate = useNavigate();

    const handleSelect = (i) => {
        if (select === i && select === correct) return "select";
        else if (select === i && select !== correct) return "wrong";
        else if (i === correct) return "select";
      };
    
      const handleCheck = (i) => {
        setSelect(i);
        if (i === correct) setScore(score + 1);
        setError(false);
      };
      const handleNext = () => {
        if (currQuestion > 8) {
          navigate("/result");
        } else if (select) {
            setCurrQuestion(currQuestion + 1);
          setSelect();
        } else setError("Please select an option first");
      };
    
      const handleQuit = () => {
        setCurrQuestion(0);
        setQuestion();
      };

    return(
        <div> 
    <h1>Question{currQuestion+1}</h1>
    <div className="singleQuestion">
        <h2>{question[currQuestion].question}</h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {option &&
            option.map((i) => (
              <button
                className={`singleOption  ${select && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={select}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            {currQuestion > 20 ? "Submit" : "Next Question"}
          </Button>
        </div>
        </div>   
            </div>
    )
}
export default Question;