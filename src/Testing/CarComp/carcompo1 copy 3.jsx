import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
export default function ActionAreaCard1() {
  return (
    
    <div >
      <Link to={'/found'}>
    <motion.div style={{backgroundColor:'inherit'}}>
    <motion.button whileHover={{scale:'1.1'}} style={{backgroundColor:'inherit',borderColor:'transparent'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://theurbanbiriyani.in/wp-content/uploads/2022/10/ChickenBiriyani.jpeg"
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Biriyani
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Biryani is a mixed rice dish originating among the Muslims of South Asia. It is made with rice, some type of meat and spices. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </motion.button>
    </motion.div>
          </Link>
  </div>
      
      
    
  );
}