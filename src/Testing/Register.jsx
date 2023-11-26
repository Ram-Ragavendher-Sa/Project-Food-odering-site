import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import './style.css';
import { Navigate } from 'react-router-dom';
import bgim from './img/thai-food.jpg';
import ButtonAppBar from './Appbar';
import { Paper } from '@mui/material';

const defaultTheme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  const [Details,setDetails] = useState(
    {
      "firstName" : "",
      "lastName" : "",
      "email" : "",
      "password" : ""
    }
  )
  const insert = (event) =>{
      setDetails({...Details,[event.target.name]:event.target.value})
      
  }
  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log(Details);
     const apiURL = "http://localhost:3031/users";
         axios.post(apiURL,Details)
             .then(response =>{
                console.log(response.data);
                navigate('/lop')
             })
             .catch(error => {
                console.error(error);
             });
  };

  return (
    <div className='total'style={{backgroundImage: `url(${bgim})`, height:'100vh'}}>
      <ButtonAppBar/>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs" className='Container' style={{alignItems:'center'}}>
          <CssBaseline />
          <Paper style={{position:'absolute',padding:'50px',marginTop:'40px',width:'40vw',left:'31%'}}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'black' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={insert}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    onChange={insert}
                  />
                </Grid> 
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={insert}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={insert}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="Hereby I allow to send updates via email"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/lop" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>

          </Paper>
        </Container>
      </ThemeProvider>
    </div>
  );
}