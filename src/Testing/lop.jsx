import React from "react";
import { Container } from "@mui/system";
import { Avatar, Button, Grid, Paper, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import bgim from "./img/thai-food.jpg";
import ButtonAppBar from "./Appbar";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { userContext, usercontext } from "./Context";
import { useContext } from "react";
const Lope = () => {
  const [user,setuser]= useContext(userContext)
  const [email, emailupdate] = useState("");
  const [password, passwordupdate] = useState("");
  const [apiData, setApiData] = useState([]);
  const usenavigate = useNavigate();
  const apiURL1 = "http://localhost:3031/users";
  useEffect(() => {
    const apiURL = "http://localhost:3031/users";
    axios
      .get(apiURL)
      .then((response) => {
        setApiData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const proceedlogin = (e) => {
    e.preventDefault();
    // console.log(validate());
    if (validate()) {
      console.log(email);
      console.log(password);
      const valid = apiData.some(
        (item) => item.email === email && item.password === password
      );
      console.log(valid);
      if (valid) {
        console.log("success");
        toast.success("Logged In");
        setuser(email);
        usenavigate("/");
      } else {
        console.log("Enter correct credentials");
        toast.error("Enter correct credentials");
      }

      // console.log(apiData);
      // console.log('proceed');
      // axios.get("http://localhost:3030/users?email="+email).then((res)=>{

      // }).then((resp)=>
      // {
      //   //console.log(resp);
      //   if(Object.keys(resp).length===0)
      //   {
      //     toast.error("Please enter valid Username");
      //   }
      //   else
      //   {
      //     if(axios.get([password]) === password)
      //     {
      //       toast.success("Successfully Logged In");
      //       usenavigate('/')
      //     }
      //     else{
      //       toast.error("Please enter valid Credentials");
      //     }
      //   }
      // }).catch((err)=>
      // {
      //   toast.error("Login Failed due to :"+err.message);
      // });
    }
  };
  const validate = () => {
    let result = true;
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      toast.warning("Enter valid email ID");
      result = false;
    }
    if (email === "" || email === null) {
      result = false;
      toast.warning("Please enter Email");
    }

    if (password === "" || password === null) {
      result = false;
      toast.warning("Please enter password");
    }
    return result;
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgim})`,
          height: "100vh",
          width: "100vw",
        }}
      >
        <ButtonAppBar />
        <form onSubmit={proceedlogin}>
          <Container sx={{ bgcolor: "grey" }}>
            <Paper
              elevation={20}
              sx={{
                position: "absolute",
                left: "35%",
                top: "25%",
                textAlign: "center",
                padding: "50px",
                opacity: "75%",
              }}
            >
              <Grid align="center">
                <Avatar sx={{ bgcolor: "deepPurple[500]" }}>Oo</Avatar>
              </Grid>
              <br />
              <div style={{ backgroundColor: "white", opacity: "100%" }}>
                <Typography>
                  <TextField
                    value={email}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    size="large"
                    onChange={(e) => emailupdate(e.target.value)}
                    sx={{ width: "400px", backgroundColor: "white" }}
                  />
                </Typography>
              </div>
              <br />
              <br />
              <Typography>
                <TextField
                  value={password}
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  size="large"
                  onChange={(e) => passwordupdate(e.target.value)}
                  sx={{ width: "400px", backgroundColor: "white" }}
                />
              </Typography>
              <br />
              <br />
              <Button variant="contained" type="submit">
                Login
              </Button>
              <br></br>
              <br></br>
              Not a member ? <Link to="/Signin">Sign Up</Link>
            </Paper>
          </Container>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Lope;
