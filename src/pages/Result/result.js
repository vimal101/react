import { useNavigate } from "react-router";

const Result =({name,score})=>{
  const nav =  useNavigate();
   function handleCheck(){
    nav("/");
   }
    return(
        <div style={{textAlign:"center"}}>
            <h1>{name } your result {score}</h1> 
            <button onClick={handleCheck} style={{fontSize:50}}> Go TO HOME</button>
            </div>
    )
}
export default Result;