import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Button } from '@mui/base';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar position="static" color='transparent'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Foodoo
          </Typography>
          <div backgroundColor='black'>
      <Stack direction="row-reverse">
        <Link to="/lop"><Button style={{position:"relative",padding:7, color:'black',right :30}}>LogIn</Button></Link>
        <Link to="/Signin"><Button style={{position:"relative", padding:7, right: 30,color:'Black'}}>SignIn</Button></Link>
      </Stack>
      </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}