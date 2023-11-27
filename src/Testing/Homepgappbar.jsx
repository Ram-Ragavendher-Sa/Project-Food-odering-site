// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import Switch from '@mui/material/Switch';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormGroup from '@mui/material/FormGroup';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import { Button } from '@mui/base';
// import { Stack } from '@mui/material';
// import { Link } from 'react-router-dom';
// export default function MenuAppBar() {
//   const [auth, setAuth] = React.useState(true);
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleChange = (event) => {
//     setAuth(event.target.checked);
//   };

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
      
//       <AppBar position="static" color='transparent'>
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             <h1 style={{color:'white',fontSize:'20px'}}>
//             Foodo
//             </h1>
//           </Typography>
//           <div backgroundColor='black'>
//       <Stack direction="row-reverse" alignContent='space-between'>
//         <Link to="/lop"><Button variant="text" style={{position:"relative",padding:7,color:'black',right :30,backgroundColor:'transparent',padding:'10px',outlineColor:'transparent'}}><h1 style={{fontSize:'20px'}}>Login</h1></Button></Link>
//         <Link to="/Signin"><Button variant="text" style={{position:"relative",padding:7, color:'black',right :50,backgroundColor:'transparent',padding:'10px'}}><h1 style={{fontSize:'20px'}}>Signin</h1></Button></Link>
//       </Stack>
//       </div>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { AddShoppingCart } from '@mui/icons-material';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import router from './Routing';
import SearchBar from './search';
import { userContext } from './Context';
import { useContext } from 'react';
export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [user,setuser]= useContext(userContext)

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
    <div style={{backgroundColorolor:'black', opacity:"75%"}}>

    <Box sx={{ flexGrow: 1 ,backgroundColor:'black'}}>
      <AppBar position="static" style={{backgroundColor:'black'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Foodo
          </Typography>
          <h3 style={{color:"white"}}>{user}</h3>
          {auth && (
            <div>
              
              <Link to='/orderpg'>
                <Button>
                      <IconButton color="black" aria-label="add to shopping cart" style={{backgroundColor:'white',position:'absolute',right:'5%'}}>
                        <AddShoppingCart />
                      </IconButton>
                </Button>
              </Link>

              <IconButton
                size="30px"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="white"
                style={{backgroundColor:'white'}}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                
                <MenuItem> <Link to='/lop'><Button>Login</Button></Link>
                </MenuItem>
                <MenuItem> <Link to='/Signin'><Button>Signin</Button></Link></MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}
