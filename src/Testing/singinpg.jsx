import React, { useState } from 'react'
import { Container } from '@mui/system'
import { Avatar, Button, Grid, Link, Paper, Typography } from '@mui/material'
import { TextField } from "@mui/material";
import { Height, Margin, Padding } from '@mui/icons-material';
import bgim from './img/thai-food.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Sin = () => {
  const [username,usernameupdate]=useState('');
  const [email,emailupdate]=useState('');
  const [password,passwordupdate]=useState('');
  const [repassword,repasswordupdate]=useState('');
  const ProceedSignup = (e)=>{
    e.preventDefault();
    if(validate())
    {
      console.log('proceed');
    }
  }
  const validate = ()=>
  {
    let result=true;
    if(username==='' || username===null)
    {
      result=false;
      toast.warning('Please enter UserName');
    }
    if(email==='' || email===null)
    {
      result=false;
      toast.warning('Please enter Email');
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      toast.warning('Enter valid email ID');
      result=false;
    }
    if(password==='' || password===null)
    {
      result=false;
      toast.warning('Please enter password');
    }
    if(repassword==='' || repassword===null)
    {
      result=false;
      toast.warning('Please enter re-enter password');
    }
    if(repassword!==password)
    {
      result=false;
      toast.warning('Please re-check password');
    }
    return result;
  }
  return (
    <div style={{backgroundImage:`url(${bgim})`,height:'100vh',width:'100vw'}} >
    <form onSubmit={ProceedSignup}>   
    <Container sx={{bgcolor:'grey'}}>
    <Paper elevation={20} sx={{position:'absolute' , left:'35%',top:'25%',textAlign:'center',padding:'50px',opacity:'75%'}}>
      <div style={{backgroundColor:'white',opacity:'100%'}}>
    <Typography>
        <TextField value={username} id="outlined-basic" label="Username" variant="outlined" size="large" onChange={e=>usernameupdate(e.target.value)} sx={{width:'400px', backgroundColor: "white"}}/>
    </Typography>
    <br/>

    <Typography>
        <TextField value={email} id="outlined-basic" label="Email" variant="outlined" size="large" onChange={e=>emailupdate(e.target.value)} sx={{width:'400px', backgroundColor: "white"}}/>
    </Typography>
    <br></br>
        </div>
    <Typography>
        <TextField value={password} id="outlined-basic" label="Password" variant="outlined" size="large" onChange={e=>passwordupdate(e.target.value)} sx={{width:'400px', backgroundColor: "white"}}/>
    </Typography>
        <br />
    <Typography>
        <TextField value={repassword} id="outlined-basic" label="Re-enter Password" variant="outlined" size="large" onChange={e=>repasswordupdate(e.target.value)} sx={{width:'400px', backgroundColor: "white"}}/>
    </Typography>
        <br />
        <br /> 
        <Button variant="contained" type='submit'>Sign-Up</Button>
        <br></br>
        <br></br> 
        <div>Already a member ? <Link href="/lop">LogIn</Link></div>

    </Paper>
     </Container>
    </form>
    <ToastContainer />
    </div>
  )
}

export default Sin