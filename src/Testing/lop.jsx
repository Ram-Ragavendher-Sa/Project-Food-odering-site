import React from 'react'
import { Container } from '@mui/system'
import { Avatar, Button, Grid, Paper, Typography } from '@mui/material'
import { TextField } from "@mui/material";
import { Link } from 'react-router-dom';
import { Height, Margin, Padding } from '@mui/icons-material';
import bgim from './img/thai-food.jpg';
import ButtonAppBar from './Appbar';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import {useEffect} from 'react';
// import get 
const Lope = () => {
  const [email,emailupdate]=useState('');
  const [password,passwordupdate]=useState('');
  const [apiData,setApiData] = useState([]);
  const usenavigate=useNavigate();
  useEffect(()=>{
    const apiURL = 'http://localhost:3031/users';
    axios.get(apiURL)
            .then(response =>{
                setApiData(response.data);          
                console.log(apiData); 
            })
            .catch(error => {
                console.error(error);
            });
  },[]);
  const proceedlogin = (e)=>{
    e.preventDefault();
    if(validate())
    {
      console.log(email);
      console.log(password);
      const valid = apiData.some(item => item.email === email && item.password === password);   
      console.log(valid);
      if(valid)
      { 
        toast.success("Logged In")
        console.log("success");
        usenavigate('/');
      }   
      else
      {
        console.log("failed");
      }
    
      // console.log(apiData);
      // console.log('proceed');
      fetch()
    }
  }
  const validate = ()=>
  {// // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    // //   toast.warning('Enter valid email ID');
    // //   result=false;
    // }
    let result=true;
    if(email==='' || email===null)
    {
      result=false;
      toast.warning('Please enter Email');
    }
    // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    //   toast.warning('Enter valid email ID');
    //   result=false;
    // }
    if(password==='' || password===null)
    {
      result=false;
      toast.warning('Please enter password');
    }
    return result;
    }
  return (
    <div style={{backgroundImage:`url(${bgim})`,height:'100vh',width:'100vw'}} >
      <ButtonAppBar/>
      <form onSubmit={proceedlogin}>

    <Container sx={{bgcolor:'grey'}}>
    <Paper elevation={20} sx={{position:'absolute' , left:'35%',top:'25%',textAlign:'center',padding:'50px',opacity:'75%'}}>
    <Grid align='center'>
    <Avatar sx={{ bgcolor: 'deepPurple[500]' }}>Oo</Avatar>
    </Grid>
        <br />
        <div style={{backgroundColor:'white',opacity:'100%'}}>
    <Typography>
        <TextField  value={email} id="outlined-basic" label="Email" variant="outlined" size="large" onChange={e=>emailupdate(e.target.value)} sx={{width:'400px', backgroundColor: "white"}}/>
    </Typography>
        </div>

    <br />
    <br />
    <Typography>
    
        <TextField value={password} id="outlined-basic" label="Password" variant="outlined" size="large" onChange={e=>passwordupdate(e.target.value)} sx={{width:'400px', backgroundColor: "white"}}/>
        </Typography>
        <br />
        <br />
        <Button variant="contained" type='submit'>Login</Button>
        <br></br>
        <br></br> 
        Not a member ? <Link to="/Signin">Sign Up</Link>

    </Paper>
    <ToastContainer/>
     </Container>
    </form>
    </div>
  )
}

export default Lope