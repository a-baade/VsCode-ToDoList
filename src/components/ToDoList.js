import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import ToDo from './ToDo';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <Container maxWiddth="md">
        <Typography varinat ="h3" align="center" gutterBottom>
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            <Button variant="contained" style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</Button>
        </div>
        </Typography>
        </Container>
    );
};

export default ToDoList;