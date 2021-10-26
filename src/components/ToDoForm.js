import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';


const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <Container maxWiddth="md">
        <Typography varinat ="h3" align="center" gutterBottom>
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <button>Submit</button>
        </form>
        </Typography>
        </Container>
    );
};

export default ToDoForm;
