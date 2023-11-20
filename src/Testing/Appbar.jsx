import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import { Opacity } from '@mui/icons-material';
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 10}}>
      <AppBar position="static" sx={{backgroundColor:"black",flexGrow:"inherit",opacity:'75%'}}>
        <Toolbar>
          <br />
          <Button>
          <HomeIcon></HomeIcon>
          </Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Foodies
          </Typography>
          
          <Button color="inherit">SignIN</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}