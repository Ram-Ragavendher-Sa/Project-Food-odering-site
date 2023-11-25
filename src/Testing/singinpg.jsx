// import React, { useState } from 'react'
// import { Container } from '@mui/system'
// import { Avatar, Button, Grid, Paper, Typography } from '@mui/material'
// import { TextField } from "@mui/material";
// import { Height, Margin, Padding } from '@mui/icons-material';
// import bgim from './img/thai-food.jpg';
// import { ToastContainer, toast } from 'react-toastify';
// import { Link, useNavigate} from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
// const Sin = () => {
//   const navigate=useNavigate();
//   const [Details,setDetails] = useState(
//     {
//       "Username" : "",
//       "Email" : "",
//       "Password" : ""
//     }
//   )
//   const insert = (event) =>{
//       setDetails({...Details,[event.target.name]:event.target.value})
//   }
//   // const handleSubmit = async(event) => {
//   //   event.preventDefault();
//   //    const apiURL = "http://localhost:3031/users";
//   //        axios.post(apiURL,Details)
//   //            .then(response =>{
//   //               console.log(response.data);
//   //               navigate('/login')
//   //            })
//   //            .catch(error => {
//   //               console.error(error);
//   //            });
//   // };
//   const [username,usernameupdate]=useState('');
//   const [email,emailupdate]=useState('');
//   const [password,passwordupdate]=useState('');
//   const [repassword,repasswordupdate]=useState('');
//   const ProceedSignup = (e)=>{
//     // e.preventDefault();
//     // if(validate())
//     // {
//     //   handleSubmit();
//     // }
//     console.log(Details);
//     // const validate = ()=>
//     // {
//     //   let result=true;
//     //   if(username==='' || username===null)
//     //   {
//     //     result=false;
//     //     toast.warning('Please enter UserName');
//     //     return;
//     //   }
//     //   if(email==='' || email===null)
//     //   {
//     //     result=false;
//     //     toast.warning('Please enter Email');
//     //     return;
//     //   }
//     //   else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
//     //     toast.warning('Enter valid email ID');
//     //     result=false;
//     //     return;
//     //   }
//     //   if(password==='' || password===null)
//     //   {
//     //     result=false;
//     //     toast.warning('Please enter password');
//     //     return;
//     //   }
//     //   if(repassword==='' || repassword===null)
//     //   {
//     //     result=false;
//     //     toast.warning('Please enter re-enter password');
//     //     return;
//     //   }
//     //   if(repassword!==password)
//     //   {
//     //     result=false;
//     //     toast.warning('Please re-check password');
//     //     return;
//     //   }
//     //   const apiURL = "http://localhost:3031/users";
//     //     axios.post(apiURL,Details)
//     //     .then(response =>{
//     //       console.log(response.data);
//     //         navigate('/login')
//     //         })
//     //         .catch(error => {
//     //           console.error(error);
//     //         });
//     //   return;
//     // }
//   }
//   return (
//     //<div style={{backgroundImage:`url(${bgim})`,height:'100vh',width:'100vw'}} >
//     <div style={{backgroundImage:`url("https://plus.unsplash.com/premium_photo-1695931839656-f192be509203?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,height:'100vh',width:'100vw',backgroundRepeat:"no-repeat",backgroundSize:"cover"}} >
      
//     <form onSubmit={ProceedSignup}>   
//     <Container sx={{bgcolor:'grey'}}>
//     <Paper elevation={20} sx={{position:'absolute' , left:'35%',top:'25%',textAlign:'center',padding:'50px',opacity:'75%'}}>
//       <div style={{backgroundColor:'white',opacity:'100%'}}>
//     <Typography>
//         <TextField id="outlined-basic" label="Username" name="Username" variant="outlined" size="large" onChange={insert} sx={{width:'400px', backgroundColor: "white"}}/>
//     </Typography>
//     <br/>

//     <Typography>
//         <TextField  id="outlined-basic" label="Email" name="Email" variant="outlined" size="large" onChange={insert} sx={{width:'400px', backgroundColor: "white"}}/>
//     </Typography>
//     <br></br>
//         </div>
//     <Typography>
//         <TextField  id="outlined-basic" label="Password" name="Password" variant="outlined" size="large" onChange={insert} sx={{width:'400px', backgroundColor: "white"}}/>
//     </Typography>
//         <br />
//     <Typography>
//         <TextField value={repassword} id="outlined-basic" label="Re-enter Password" name="Re-enter Password" variant="outlined" size="large" onChange={e=>repasswordupdate(e.target.value)} sx={{width:'400px', backgroundColor: "white"}}/>
//     </Typography>
//         <br />
//         <br /> 
       
      
//         <Button  variant="contained" type='submit' >Sign-Up</Button>
       
  
//         <br></br>
//         <br></br> 
//         <div>Already a member ? <Link to="/lop">LogIn</Link></div>

//     </Paper>
//      </Container>
//     </form>
//     <ToastContainer />
//     </div>
//   )
// }

// export default Sin