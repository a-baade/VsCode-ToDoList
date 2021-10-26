import { Container, Typography } from '@mui/material';
import React from 'react';
 
const Header = () => {
   return (
       <Container maxWiddth="md">
           <Typography varinat ="h3" align="center" gutterBottom>
       <header>
           <h1>To Do List</h1>
       </header>
       </Typography>
       </Container>
       
   );
};
 
export default Header;