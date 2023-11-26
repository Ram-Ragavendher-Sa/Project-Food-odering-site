import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {motion} from 'framer-motion';
export default function ActionAreaC1() {
  return (
    <div>
    <motion.div style={{backgroundColor:'inherit'}}>
    <motion.button whileHover={{scale:'1.1'}} style={{backgroundColor:'inherit',borderColor:'transparent'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://wallpaperaccess.com/full/1972917.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          SS HYDERABAD BIRIYANI
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Biryani, Chinese, Mughlai, North Indian, Seafood,South Indian<br></br>
        Open -11am(Everyday) 
        Closes -11pm(Everyday)
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </motion.button>
    </motion.div>
  </div>
  );
}