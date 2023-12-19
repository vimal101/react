import { CircularProgress } from "@mui/material";

import { useEffect, useState } from "react";
import Question from "../../components/Question/Question";

const Quiz = ({ name, score, question, setQuestion, setScore }) => {
  const [option, setOption] = useState("");
  const [currQuestion, setCurrQuestion] = useState(0);

  useEffect(() => {
    console.log(question);
    setOption(
      question &&
      handleshuffle([
        question[currQuestion]?.correct_answer,
        ...question[currQuestion]?.incorrect_answers
      ]))
  }, [question,currQuestion]);
  console.log(option);

  function handleshuffle(options) {
    return options.sort(() => Math.random() - 0.5);
  }
  return (
    <div>
      <span className="subtitle" style={{textAlign:"center"}}>welcome      {name}</span>
      {question ? <>
        <div className="quizInfo">
            <span>{question[currQuestion].category}</span>
            <span>
              {/* {questions[currQues].difficulty} */}
              Score : {score}
            </span>
          </div>
          <Question
            currQuestion={currQuestion}
            setCurrQuestion={setCurrQuestion}
            question={question}
            option={option}
            correct={question[currQuestion]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestion={setQuestion}
          />
      </> :
        (<CircularProgress style={{ margin: 100, boxSizing: "inherit", textAlign: "center" }} />
        )
      }
    </div>
  )
}
export default Quiz;