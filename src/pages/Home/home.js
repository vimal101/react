import './home.css'
import { MenuItem, TextField, Button } from '@mui/material';
import Categories from '../../Data/Categories';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import ErrorMessage from '../../components/ErrorMassage/ErrorMassage';

const Home = ({ name, setName, fetchQuestion }) => {
   
    const navigate = useNavigate();


    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, seterror] = useState(false);
    

    const handlesubmit = () => {
        if (!category || !name || !difficulty) {
            seterror(true);
            return;
        } else {
            seterror(false);
            fetchQuestion(category, difficulty);
            navigate("/quiz");
        }
    }
    return (
        <div className='content'>
            <div className='settings'>
                <span style={{ fontSize: 30 }}>Quiz Setting</span>
                <div className="settings__select">
                {error && <ErrorMessage>Please Fill all Detail</ErrorMessage> }
                    <TextField style={{ marginBottom: 25 }} label="enter the name"
                        onChange={(e) => setName(e.target.value)}

                    >
                    </TextField>
                    <TextField select label="select category" style={{ marginBottom: 25 }}
                        onChange={(e) => setCategory(e.target.value)} value={category}  >

                        {
                            Categories.map((cat) => (
                                <MenuItem key={cat.category} value={cat.value}>
                                    {cat.category}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                    < TextField select label="select difficulty" style={{ marginBottom: 25 }}
                        onChange={(e) => setDifficulty(e.target.value)} value={difficulty} >

                        <MenuItem key='Easy' value='easy'>
                            Easy
                        </MenuItem>
                        <MenuItem key='Medium' value='medium'>
                            Medium
                        </MenuItem>
                        <MenuItem key='Hard' value='hard'>
                            Hard
                        </MenuItem>
                    </TextField>
                    <Button style={{ color: 'black', backgroundColor: 'blue' }}
                        onClick={handlesubmit}>
                        Start Quiz
                    </Button>


                </div></div>
            <img src='./quiz.jpg' className='banner' alt='images' />

        </div>
    )
}
export default Home;