import React from 'react'
import { Container } from '@mui/system'
import { Avatar, Button, Grid, Paper, Typography } from '@mui/material'
import { TextField } from "@mui/material";
import { Link } from 'react-router-dom';
import { Height, Margin, Padding } from '@mui/icons-material';
import bgim from './img/thai-food.jpg';
import ButtonAppBar from './Appbar';
const Lope = () => {
  return (
    <div style={{backgroundImage:`url(${bgim})`,height:'100vh',width:'100vw'}} >
      <ButtonAppBar/>
    <Container sx={{bgcolor:'grey'}}>
    <Paper elevation={20} sx={{position:'absolute' , left:'35%',top:'25%',textAlign:'center',padding:'50px',opacity:'75%'}}>
    <Grid align='center'>
    <Avatar sx={{ bgcolor: 'deepPurple[500]' }}>Oo</Avatar>
    </Grid>
        <br />
        <div style={{backgroundColor:'white',opacity:'100%'}}>
    <Typography>
        <TextField id="outlined-basic" label="EmailId" variant="outlined" size="large" sx={{width:'400px', backgroundColor: "white"}}/>
    </Typography>
        </div>

    <br />
    <br />
    <Typography>
    
        <TextField id="outlined-basic" label="Password" type='password' variant="outlined" size="large" sx={{width:'400px'}}/>
        </Typography>
        <br />
        <br />
        <Button variant="contained">Login</Button>
        <br></br>
        <br></br> 
        Not a member ? <Link to="/Signin">Sign Up</Link>

    </Paper>
     </Container>
    </div>
  )
}

export default Lope