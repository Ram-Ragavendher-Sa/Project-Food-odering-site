import React from 'react'
import { Container } from '@mui/system'
import { Avatar, Button, Grid, Link, Paper, Typography } from '@mui/material'
import { TextField } from "@mui/material";
import { Height, Margin, Padding } from '@mui/icons-material';
import bgim from './img/thai-food.jpg';
const Sin = () => {
  return (
    <div style={{backgroundImage:`url(${bgim})`,height:'100vh',width:'100vw'}} >
    <Container sx={{bgcolor:'grey'}}>
    <Paper elevation={20} sx={{position:'absolute' , left:'35%',top:'25%',textAlign:'center',padding:'50px',opacity:'75%'}}>
      <div style={{backgroundColor:'white',opacity:'100%'}}>
    <Typography>
        <TextField id="outlined-basic" label="Username" variant="outlined" size="large" sx={{width:'400px', backgroundColor: "white"}}/>
    </Typography>
    <br/>

    <Typography>
        <TextField id="outlined-basic" label="Email-Id" variant="outlined" size="large" sx={{width:'400px', backgroundColor: "white"}}/>
    </Typography>
    <br></br>
        </div>
    <Typography>
    
        <TextField id="outlined-basic" type="password" label="Password" variant="outlined" size="large" sx={{width:'400px'}}/>
        </Typography>
        <br />
    <Typography>
    
        <TextField id="outlined-basic" type="password" label="Re-enter Password" variant="outlined" size="large" sx={{width:'400px'}}/>
        </Typography>
        <br />
        <br />
        <Button variant="contained">Sign-Up</Button>
        <br></br>
        <br></br> 
        <div>Already a member ? <Link href="/lop">LogIn</Link></div>

    </Paper>
     </Container>
    </div>
  )
}

export default Sin