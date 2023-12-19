import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/home';
import Quiz from './pages/Quiz/quiz';
import Result from './pages/Result/result';
import { useState } from 'react';
import axios from "axios";


function App() {
  const [name,setName] =useState("");
  const [question,setQuestion] =useState();
  const[score,setScore] = useState(0);

  const fetchQuestion = async(category="", difficulty="")=>{
const {data} = await axios.get(`https://opentdb.com/api.php?amount=10&${category && `category=${category}`}&${difficulty && `difficulty=${difficulty}`}&type=multiple`)
setQuestion(data.results);
}
  return (
    <BrowserRouter>
    <div className="app" style = {{backgroundImage:"url(./background.jpg)"}}>
        <Header></Header>
        
        < Routes>
          <Route path='/' element={<Home name={name} setName={setName} fetchQuestion={fetchQuestion}></Home>} >
          </Route>
          <Route path='/quiz' element={<Quiz name={name} question={question} score={score} setScore={setScore} setQuestion={setQuestion}></Quiz>} >
          </Route>
          <Route path='/result' element={<Result name={name} score={score}></Result>} >
          </Route>
          
          </Routes> 
    </div>
    
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
