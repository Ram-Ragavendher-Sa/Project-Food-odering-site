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
import { Link } from '@mui/icons-material';
import { Stack } from '@mui/material';

export default function MenuAppBar() {
  return (
    <Stack style={{display:"flex", justifyContent:"space-between", backgroundColor:'black'}}>
      <Stack>
        <p>Food Lovers</p>
      </Stack>
      <Stack direction="row-reverse">
        <Link to="/lop"><button>LogIn</button></Link>
        <Link to="/Signin"><button>SignIn</button></Link>
      </Stack>
    </Stack>
    

    
  );
}